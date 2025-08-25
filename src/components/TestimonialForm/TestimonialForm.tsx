import { useState } from "react";
import { submitTestimonial } from "../../lib/api";
import "./TestimonialForm.css";

export default function TestimonialForm() {
  const [name, setName] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [text, setText] = useState("");
  const [animalName, setAnimalName] = useState("");
  const [animalPhoto, setAnimalPhoto] = useState("");
  const [status, setStatus] = useState<string | null>(null);

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
          Animal Name:
          <input
            value={animalName}
            onChange={(e) => setAnimalName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Animal Photo URL:
          <input
            value={animalPhoto}
            onChange={(e) => setAnimalPhoto(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
      {status && <p>{status}</p>}
    </form>
  );
}

