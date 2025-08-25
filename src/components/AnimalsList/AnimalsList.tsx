import { useEffect, useState } from "react";
import { fetchAnimals } from "../../lib/api";

type Animal = { name: string; species: string; description?: string };

export default function AnimalsList() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAnimals()
      .then(setAnimals)
      .catch((e) => setError(e.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!animals.length) return <p>Loading animals…</p>;

  return (
    <ul>
      {animals.map((a) => (
        <li key={`${a.species}-${a.name}`}>
          <strong>{a.name}</strong> — {a.species}
          {a.description ? `: ${a.description}` : null}
        </li>
      ))}
    </ul>
  );
}