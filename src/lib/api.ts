export const API_BASE = import.meta.env.VITE_API_BASE ?? "http://127.0.0.1:8000/api";

export async function fetchAnimals() {
  const res = await fetch(`${API_BASE}/animals`);
  if (!res.ok) throw new Error(`Failed: ${res.status}`);
  return res.json() as Promise<{ name: string; species: string; description?: string }[]>;
}

export type TestimonialPayload = {
  name?: string;
  anonymous?: boolean;
  text: string;
  animalName?: string;
  animalPhoto?: string;
};

export async function submitTestimonial(data: TestimonialPayload) {
  const res = await fetch(`${API_BASE}/testimonials`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Failed: ${res.status}`);
  return res.json() as Promise<{ id: string }>;
}