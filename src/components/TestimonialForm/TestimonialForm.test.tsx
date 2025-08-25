import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import * as api from "../../lib/api";
import TestimonialForm from "./TestimonialForm";

describe("TestimonialForm", () => {
  it("submits testimonial data", async () => {
    const submit = vi
      .spyOn(api, "submitTestimonial")
      .mockResolvedValue({ id: "1" });

    render(<TestimonialForm />);

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "Jane" },
    });
    fireEvent.change(screen.getByLabelText(/Details/i), {
      target: { value: "Great service" },
    });
    fireEvent.change(screen.getByLabelText(/Animal Name/i), {
      target: { value: "Spot" },
    });
    fireEvent.change(screen.getByLabelText(/Animal Photo URL/i), {
      target: { value: "http://example.com/pet.jpg" },
    });
    fireEvent.click(screen.getByText("Submit"));

    await screen.findByText("Submitted");
    expect(submit).toHaveBeenCalledWith({
      name: "Jane",
      anonymous: false,
      text: "Great service",
      animalName: "Spot",
      animalPhoto: "http://example.com/pet.jpg",
    });
  });
});
