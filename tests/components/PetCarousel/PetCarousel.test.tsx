import { render, act } from "@testing-library/react";
import { vi } from "vitest";
import PetCarousel from "@/components/PetCarousel";

describe("PetCarousel", () => {
  it("renders three pet cards and rotates", () => {
    vi.useFakeTimers();
    const pets = [
      { name: "A", image: "/a.jpg" },
      { name: "B", image: "/b.jpg" },
      { name: "C", image: "/c.jpg" },
      { name: "D", image: "/d.jpg" },
      { name: "E", image: "/e.jpg" },
      { name: "F", image: "/f.jpg" },
    ];
    const view = render(<PetCarousel pets={pets} />);
    const images = view.getAllByRole("img");
    expect(images).toHaveLength(3);
    const firstSrc = images[0].getAttribute("src");
    act(() => {
      vi.advanceTimersByTime(700);
    });
    const newSrc = view.getAllByRole("img")[0].getAttribute("src");
    expect(newSrc).not.toBe(firstSrc);
    vi.useRealTimers();
  });

  it("renders provided pets", () => {
    const pets = [
      { name: "A", image: "/a.jpg" },
      { name: "B", image: "/b.jpg" },
      { name: "C", image: "/c.jpg" },
    ];
    const view = render(<PetCarousel pets={pets} />);
    expect(view.getByAltText("A")).toBeInTheDocument();
    expect(view.getAllByRole("img")).toHaveLength(3);
  });
});
