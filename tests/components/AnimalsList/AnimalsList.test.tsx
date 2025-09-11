import { afterEach, describe, it, expect, vi } from "vitest";
import { render, screen } from '@testing-library/react';
import AnimalsList from '@/components/AnimalsList/AnimalsList';
import * as api from '@/lib/api';

afterEach(() => vi.restoreAllMocks());

describe('AnimalsList', () => {
  it('renders animals from API', async () => {
    vi.spyOn(api, 'fetchAnimals').mockResolvedValue([
      { name: 'Tom', species: 'cat' },
    ]);
    render(<AnimalsList />);
    expect(await screen.findByText(/Tom/)).toBeInTheDocument();
  });

  it('shows error on failure', async () => {
    vi.spyOn(api, 'fetchAnimals').mockRejectedValue(new Error('boom'));
    render(<AnimalsList />);
    expect(await screen.findByText(/Error: boom/)).toBeInTheDocument();
  });
});
