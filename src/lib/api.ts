export const API_BASE = import.meta.env.VITE_API_BASE ?? "http://127.0.0.1:8000/api";

export async function fetchAnimals() {
  const res = await fetch(`${API_BASE}/animals`);
  if (!res.ok) throw new Error(`Failed: ${res.status}`);
  return res.json() as Promise<{ name: string; species: string; description?: string }[]>;
}