import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("renders custom title", () => {
    render(<Header title="Custom Title" />);
    expect(
      screen.getByRole("heading", { name: "Custom Title" })
    ).toBeInTheDocument();
  });
});

