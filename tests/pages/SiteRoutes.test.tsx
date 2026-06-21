import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "@/App";

describe("site routes", () => {
  it.each([
    ["/", /Forever care for animals who need it most/i],
    ["/pictures", /Meet the animals and the ranch/i],
    ["/about", /working farm sanctuary/i],
    ["/contact", /Get in touch/i],
    ["/donors", /kindness keeps the sanctuary moving/i],
    ["/news", /Recognition, features, and ranch milestones/i],
  ])("renders %s", (path, heading) => {
    render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(heading)).toBeInTheDocument();
  });
});
