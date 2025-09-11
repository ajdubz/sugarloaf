import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PetCard from '@/components/PetCard/PetCard';

describe('PetCard', () => {
  it('renders name and image', () => {
    render(<PetCard name="Fluffy" image="/fluffy.png" />);
    const img = screen.getByRole('img', { name: /fluffy/i });
    expect(img).toHaveAttribute('src', '/fluffy.png');
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Fluffy');
  });
});
