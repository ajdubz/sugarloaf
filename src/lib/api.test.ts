import { describe, it, expect, vi } from 'vitest';
import { API_BASE, fetchAnimals } from './api';

describe('fetchAnimals', () => {
  it('returns animals when response is ok', async () => {
    const animals = [{ name: 'Tom', species: 'cat' }];
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
