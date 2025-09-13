import { useEffect, useMemo, useState } from "react";
import PetCard from "../PetCard";
import "./PetCarousel.css";

export type Pet = { name: string; image: string };

// IMPORTANT: path must be from this file's folder (components/PetCarousel/*)
// Assets live under src/assets/originals, so go up two levels.
const images = import.meta.glob("../../assets/originals/petImage_*.jpg", {
  eager: true,
  import: "default",
});

const defaultPets: Pet[] = Object.values(images)
  .sort()
  .map((image, idx) => ({ name: `Pet ${idx + 1}`, image: image as string }));

interface PetCarouselProps {
  pets?: Pet[];
}

export default function PetCarousel({ pets = defaultPets }: PetCarouselProps) {
  const [start, setStart] = useState(0);

  const count = pets.length;

  // Avoid modulo-by-zero and undefined access when there are no images
  const visible: Pet[] = useMemo(() => {
    if (count === 0) return [];
    return [0, 1, 2].map((offset) => pets[(start + offset) % count]);
  }, [start, count, pets]);

  useEffect(() => {
    if (count === 0) return; // nothing to rotate
    const id = setInterval(() => {
      setStart((prev) => (prev + 3) % count);
    }, 6000); // 6 seconds
    return () => clearInterval(id);
  }, [count]);

  if (count === 0) {
    return (
      <section className="pets" aria-live="polite" role="status">
        No pets to show yet.
      </section>
    );
  }

  return (
    <section className="pets">
      {visible.map((pet) => (
        <PetCard key={pet.name} {...pet} />
      ))}
    </section>
  );
}
