import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "@/components/Layout";

describe("Layout", () => {
  it("wraps content with header and footer", () => {
    render(
      <MemoryRouter>
        <Layout>
          <div>Content</div>
        </Layout>
      </MemoryRouter>
    );
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getAllByText(/Sugarloaf Mountain Ranch, inc./).length).toBeGreaterThan(0);
  });
});
