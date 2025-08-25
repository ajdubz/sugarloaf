import { useEffect, useState } from "react";
import PetCard from "../PetCard";

type Pet = { name: string; image: string };

const images = import.meta.glob("../assets/originals/petImage_*.jpg", {
  eager: true,
  import: "default",
});

const pets: Pet[] = Object.values(images)
  .sort()
  .map((image, idx) => ({ name: `Pet ${idx + 1}`, image: image as string }));

export default function PetCarousel() {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStart((prev) => (prev + 3) % pets.length);
    }, 15000);
    return () => clearInterval(id);
  }, []);

  const visible: Pet[] = [];
  for (let i = 0; i < 3; i++) {
    visible.push(pets[(start + i) % pets.length]);
  }

  return (
    <section className="pets">
      {visible.map((pet) => (
        <PetCard key={pet.name} {...pet} />
      ))}
    </section>
  );
}
