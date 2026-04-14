export const navLinks = [
  { label: 'Solutions', href: '#solutions', hasDropdown: true, dropdownItems: [
    { label: 'Flight Delays', href: '#flight-delays' },
    { label: 'Flight Disruption', href: '#flight-disruption' },
    { label: 'Crew / Crisis', href: '#crew-crisis' },
  ]},
  { label: 'About', href: '#about' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
  { label: 'Client Login', href: '#login' },
];

export const heroData = {
  headline: 'Transform airline disruption payments',
  description: 'Issue instant flight delay, compensation and operational payments directly to your passenger and staff\'s phones and wallets. Whether the whole flight is delayed or individual passengers have lost their baggage or been denied boarding, our global platform is built with airlines, for airlines.',
  ctaPrimary: 'Book a Demo',
  ctaSecondary: 'How it Works',
};

export const partnerLogos = [
  { name: 'Barclays' },
  { name: 'Plug and Play' },
  { name: 'Plexa' },
];

export const clientLogos = [
  { name: 'Dnata' },
  { name: 'PLAY' },
  { name: 'LATAM' },
  { name: 'Norse Atlantic' },
  { name: 'Volotea' },
  { name: 'Air India' },
  { name: 'Scoot' },
  { name: 'Swissport' },
  { name: 'British Airways' },
  { name: 'Iberia' },
];

export const stats = [
  { number: '35+', label: 'Airports' },
  { number: '24+', label: 'Countries' },
  { number: '45+', label: 'Airlines' },
];

export const solutions = [
  {
    title: 'Flight Delays',
    subtitle: 'Instant meal & refreshment payments',
    features: [
      'Pay whole flight in minutes',
      'Redeemable at all F&B retailers',
      'Control where and when payouts are spent',
    ],
    href: '#flight-delays',
  },
  {
    title: 'Flight Disruption',
    subtitle: 'Denied boarding, lost baggage & more',
    features: [
      'Direct to passengers\' phones and wallets',
      'Instant, real-time loading and payouts',
      'Spend globally in-store, online & ATMs',
    ],
    href: '#flight-disruption',
  },
  {
    title: 'Operational Payouts',
    subtitle: 'Crew payments and Station expenses',
    features: [
      'Give crew spending money instead of cash',
      'ATM enabled with high value loads (if needed)',
      'Track and issue on one central platform',
    ],
    href: '#crew-crisis',
  },
];

export const howItWorks = {
  headline: 'How it works',
  subheadline: 'Cut airline claim processing costs by c.60% in 4 easy steps',
  steps: [
    {
      number: 1,
      title: 'Airline Obligations',
      features: ['Compensate passengers', 'Issue meal and transport payments', 'Give crew spending money'],
      image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&q=80',
    },
    {
      number: 2,
      title: 'One Centralised Platform',
      features: ['Tailored for airlines & IROPS', 'Integrate with existing platforms', 'Rich reporting suite & easy compliance'],
      image: 'https://images.unsplash.com/photo-1651129518942-21b21bd497e9?w=600&q=80',
    },
    {
      number: 3,
      title: 'Instant, Global Payments',
      features: ['Virtual cards in mobile wallets', 'Pre-loadable physical cards', 'Manage via mobile app'],
      image: 'https://images.unsplash.com/photo-1571867424488-4565932edb41?w=600&q=80',
    },
    {
      number: 4,
      title: 'Positive Passenger Experience',
      features: ['Mobile-first', 'Global retail acceptance', 'Avoid queues and reduce stress'],
      image: 'https://images.unsplash.com/photo-1592208117290-11096f48f1c7?w=600&q=80',
    },
  ],
};

export const featuresSections = [
  {
    image: 'https://images.unsplash.com/photo-1735469157670-1212e570eadc?w=700&q=80',
    title: 'Future-proof payments with our specialised airline platform',
    features: [
      {
        title: 'Issue Payments Instantly',
        description: 'Power your payment needs, anytime, anywhere. Whether at the airport, in destination, or at Head Office, your employees can issue physical or virtual cards instantly via our SwiiprX platform',
      },
      {
        title: 'Revolutionise Reporting & Stay Compliant',
        description: 'Say goodbye to invoice processing, messy reconciliations and fraud. Access reconciled and automated data for regulatory bodies with tailored customer insights',
      },
      {
        title: 'Save Time with Built-in IROPs Rules',
        description: 'As the world\'s first disruption payment platform built specifically for airlines, we save you time by having the IROPs rules and regulations already built in. We also upload your airline-specific policies to make issuing simple and reporting accurate',
      },
    ],
    imagePosition: 'left',
  },
  {
    image: 'https://images.pexels.com/photos/4226270/pexels-photo-4226270.jpeg?auto=compress&cs=tinysrgb&w=700',
    title: 'Power positive passenger and crew experiences',
    features: [
      {
        title: 'Mobile-First Payments',
        description: 'Add funds directly to mobile wallets and go contactless with Apple Pay and Google Pay. Say goodbye to paper vouchers and compensate your passengers and staff instantly.',
      },
      {
        title: 'Global Retail Acceptance',
        description: 'Empower your passengers and crew to spend wherever they like, or add your own restrictions. Powered by the Mastercard network, redeemable worldwide at all major retailers.',
      },
      {
        title: 'Point of Problem Compensation',
        description: 'Minimise the pain of disruption and enhance your brand reputation by compensating disrupted passengers instantly, in real-time, at the point of disruption.',
      },
    ],
    imagePosition: 'right',
  },
];

export const integrationData = {
  image: 'https://images.unsplash.com/photo-1757301714935-c8127a21abc6?w=700&q=80',
  title: 'Integrate with all your existing tools',
  description: 'Consolidate all of your payment data in one place with our deep technical integration with your existing IT infrastructure. Or Plug n Play with our Digital APIs to start straight away.',
};

export const whySwiipr = {
  headline: 'Why Swiipr is the right choice for you',
  description: 'Future-proof your IROPs payments, enhance your brand reputation and stay compliant with the world\'s first airline payment disruption platform.',
  features: [
    {
      title: 'Modern Modular Architecture',
      description: 'Built with strength, scalability and security using MACH principles',
      icon: 'layers',
    },
    {
      title: 'API-first approach',
      description: 'System fronted by accessible and well documented APIs for easy integration and execution',
      icon: 'code',
    },
    {
      title: 'Full chain financial transaction lifecycle',
      description: 'Robust backend financial processor/issuer integration and technical collaboration',
      icon: 'link',
    },
    {
      title: 'Security Focused & multi-layered protection',
      description: 'Multi-region cloud environment, key endpoint protection, MES256/AES256 encryption',
      icon: 'shield',
      badge: 'ISO 27001',
    },
  ],
};

export const ctaData = {
  image: 'https://images.unsplash.com/photo-1571867424488-4565932edb41?w=600&q=80',
  headline: 'Transform airline disruption payments',
  description: 'Save time, money and stress with instant, mobile-first payments that your passengers and staff can redeem anywhere.',
};

export const footerData = {
  columns: [
    {
      links: ['About', 'Flight Delays', 'Flight Disruption', 'Crew / Crisis'],
    },
    {
      links: ['News', 'Get in Touch', 'General Terms', 'Privacy Policy'],
    },
    {
      links: ['Compensation FAQs', 'Welfare FAQs', 'Support', 'Account Deletion Request Form'],
    },
  ],
  copyright: '© 2025 Swiipr. All rights reserved.',
};
