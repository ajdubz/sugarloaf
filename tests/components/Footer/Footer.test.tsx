import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '@/components/Footer/Footer';
import { site } from '@/lib/siteContent';

describe('Footer', () => {
  it('renders Sugarloaf contact details', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(site.tagline)).toBeInTheDocument();
    expect(getByText(site.email)).toBeInTheDocument();
  });
});
