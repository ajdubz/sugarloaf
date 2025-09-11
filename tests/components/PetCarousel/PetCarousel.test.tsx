import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import PetCarousel from "@/components/PetCarousel/PetCarousel";

describe("PetCarousel", () => {
  it("renders three pet cards and rotates", () => {
    vi.useFakeTimers();
    render(<PetCarousel />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(3);
    const firstSrc = images[0].getAttribute("src");
    vi.advanceTimersByTime(15000);
    const newSrc = screen.getAllByRole("img")[0].getAttribute("src");
    expect(newSrc).not.toBe(firstSrc);
    vi.useRealTimers();
  });
});
