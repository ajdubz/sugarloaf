export interface NavItem {
  href: string;
  label: string;
}

export interface SiteData {
  header: {
    navItems: NavItem[];
  };
  footer: {
    copyright: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  petCard: {
    name: string;
    image: string;
  };
}

const placeholderData: SiteData = {
  header: {
    navItems: [
      { href: '#', label: 'Home' },
      { href: '#', label: 'Adopt' },
      { href: '#', label: 'Donate' },
    ],
  },
  footer: {
    copyright: '\u00A9 2026 Sugarloaf Mountain Ranch, inc. All rights reserved.',
  },
  hero: {
    title: 'Sugarloaf Mountain Ranch, inc.',
    subtitle: '501c3 Non-Profit Farm Animal Rescue and Sanctuary',
  },
  petCard: {
    name: 'Sugarloaf resident',
    image: '/images/animals-banner.png',
  },
};

export default placeholderData;
