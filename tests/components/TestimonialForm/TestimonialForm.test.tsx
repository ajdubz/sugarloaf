import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import * as api from "@/lib/api";
import TestimonialForm from "@/components/TestimonialForm/TestimonialForm";

describe("TestimonialForm", () => {
  it("submits testimonial data", async () => {
    vi.spyOn(api, "fetchAnimals").mockResolvedValue([
      {
        name: "Spot",
        species: "dog",
        photoUrl: "http://example.com/pet.jpg",
      },
    ]);
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
    fireEvent.change(await screen.findByLabelText(/Animal/i), {
      target: { value: "Spot" },
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
