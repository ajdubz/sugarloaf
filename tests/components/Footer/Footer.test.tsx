import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '@/components/Footer/Footer';
import placeholderData from '@/lib/placeholderData';

describe('Footer', () => {
  it('falls back to placeholder copyright', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(placeholderData.footer.copyright)).toBeInTheDocument();
  });
});
