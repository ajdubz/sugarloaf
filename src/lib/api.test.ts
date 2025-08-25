import { describe, it, expect, vi } from 'vitest';
import { API_BASE, fetchAnimals, submitTestimonial, TestimonialPayload } from './api';

describe('fetchAnimals', () => {
  it('returns animals when response is ok', async () => {
    const animals = [{ name: 'Tom', species: 'cat', photoUrl: 'tom.jpg' }];
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(animals),
    } as unknown as Response);

    await expect(fetchAnimals()).resolves.toEqual(animals);
    expect(global.fetch).toHaveBeenCalledWith(`${API_BASE}/animals`);
  });

  it('throws when response is not ok', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
    } as unknown as Response);

    await expect(fetchAnimals()).rejects.toThrow('Failed: 500');
  });
});

describe('submitTestimonial', () => {
  it('posts data and returns id', async () => {
    const payload: TestimonialPayload = { text: 'hello' };
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({ id: '123' }),
    } as unknown as Response);

    await expect(submitTestimonial(payload)).resolves.toEqual({ id: '123' });
    expect(global.fetch).toHaveBeenCalledWith(`${API_BASE}/testimonials`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  });

  it('throws when response is not ok', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 400,
    } as unknown as Response);

    await expect(submitTestimonial({ text: 'a' })).rejects.toThrow('Failed: 400');
  });
});
