import { render, screen } from "@testing-library/react";
import Testimonials from "@/components/Testimonials";

describe("Testimonials", () => {
  it("renders heading from props", () => {
    render(<Testimonials title="Tell us" />);
    expect(screen.getByRole("heading", { name: /Tell us/ })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /submit/i })
    ).toBeInTheDocument();
  });
});
