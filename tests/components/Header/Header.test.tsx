import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '@/components/Header/Header';
import placeholderData from '@/lib/placeholderData';

describe('Header', () => {
  it('falls back to placeholder navigation', () => {
    render(<Header />);
    placeholderData.header.navItems.forEach((item) => {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute('href', item.href);
    });
  });
});
