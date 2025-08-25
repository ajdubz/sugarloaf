import { useEffect, useState } from "react";
import { fetchAnimals, submitTestimonial, Animal } from "../../lib/api";
import "./TestimonialForm.css";

export default function TestimonialForm() {
  const [name, setName] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [text, setText] = useState("");
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [animalName, setAnimalName] = useState("");
  const [animalPhoto, setAnimalPhoto] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    fetchAnimals()
      .then(setAnimals)
      .catch((e) => setStatus(e.message));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    try {
      await submitTestimonial({
        name: anonymous ? undefined : name,
        anonymous,
        text,
        animalName: animalName || undefined,
        animalPhoto: animalPhoto || undefined,
      });
      setStatus("Submitted");
      setName("");
      setAnonymous(false);
      setText("");
      setAnimalName("");
      setAnimalPhoto("");
    } catch (err) {
      setStatus((err as Error).message);
    }
  }

  return (
    <form className="testimonial-form" onSubmit={handleSubmit}>
      {!anonymous && (
        <div>
          <label>
            Name:
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
      )}
      <div>
        <label>
          <input
            type="checkbox"
            checked={anonymous}
            onChange={(e) => setAnonymous(e.target.checked)}
          />
          Stay anonymous
        </label>
      </div>
      <div>
        <label>
          Details:
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Animal:
          <select
            value={animalName}
            onChange={(e) => {
              const selected = animals.find((a) => a.name === e.target.value);
              setAnimalName(selected?.name || "");
              setAnimalPhoto(selected?.photoUrl || "");
            }}
          >
            <option value="">Select an animal</option>
            {animals.map((a) => (
              <option key={a.name} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>
        </label>
        {animalPhoto && (
          <img src={animalPhoto} alt={animalName} className="animal-photo" />
        )}
      </div>
      <button type="submit">Submit</button>
      {status && <p>{status}</p>}
    </form>
  );
}

