import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '@/components/Footer/Footer';
import placeholderData from '@/lib/placeholderData';

describe('Footer', () => {
  it('falls back to placeholder copyright', () => {
    render(<Footer />);
    expect(screen.getByText(placeholderData.footer.copyright)).toBeInTheDocument();
  });
});
