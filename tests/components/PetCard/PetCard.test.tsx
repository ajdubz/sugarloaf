import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PetCard from '@/components/PetCard/PetCard';
import placeholderData from '@/lib/placeholderData';

describe('PetCard', () => {
  it('renders name and image', () => {
    render(<PetCard name="Fluffy" image="/fluffy.png" />);
    const img = screen.getByRole('img', { name: /fluffy/i });
    expect(img).toHaveAttribute('src', '/fluffy.png');
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Fluffy');
  });

  it('falls back to placeholder data', () => {
    render(<PetCard />);
    const img = screen.getByRole('img', {
      name: placeholderData.petCard.name,
    });
    expect(img).toHaveAttribute('src', placeholderData.petCard.image);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      placeholderData.petCard.name,
    );
  });
});
