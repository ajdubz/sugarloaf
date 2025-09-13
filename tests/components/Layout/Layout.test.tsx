import { render, screen } from "@testing-library/react";
import Layout from "@/components/Layout";

describe("Layout", () => {
  it("wraps content with header and footer", () => {
    render(
      <Layout>
        <div>Content</div>
      </Layout>
    );
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText(/Home/)).toBeInTheDocument();
    expect(screen.getByText(/Pet Rescue/)).toBeInTheDocument();
  });
});
