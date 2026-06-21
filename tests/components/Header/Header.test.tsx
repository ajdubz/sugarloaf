import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Header from '@/components/Header';
import { site } from '@/lib/siteContent';

describe('Header', () => {
  it('renders Sugarloaf navigation', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    site.navItems.forEach((item) => {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute(
        'href',
        item.path,
      );
    });
  });
});
