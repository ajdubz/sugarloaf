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
    copyright: '\u00A9 2025 Pet Rescue. All rights reserved.',
  },
  hero: {
    title: 'Sugarloaf Mountain Ranch, inc.',
    subtitle: '501c3 Non-Profit Farm Animal Rescue and Sanctuary',
  },
  petCard: {
    name: 'Mittens',
    image: '/placeholder.png',
  },
};

export default placeholderData;
