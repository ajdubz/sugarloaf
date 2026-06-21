import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";

describe("Header", () => {
  it("renders Sugarloaf navigation", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText("Sugarloaf Mountain Ranch, inc.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Pictures" })).toHaveAttribute(
      "href",
      "/pictures"
    );
    expect(screen.getByRole("link", { name: "Donate" })).toBeInTheDocument();
  });
});

