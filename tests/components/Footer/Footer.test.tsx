import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders default text", () => {
    render(<Footer />);
    expect(screen.getByText(/2025 Pet Rescue/)).toBeInTheDocument();
  });

  it("renders custom text", () => {
    render(<Footer text="Custom footer" />);
    expect(screen.getByText("Custom footer")).toBeInTheDocument();
  });
});
