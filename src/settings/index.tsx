export const siteConfig = {
  site: {
    name: 'StarForge',
    url: process.env.SITE_URL,
    ogImage: '/ogimage.png',
    keywords: [
      'UI Components',
      'Templates',
      'Tailwind CSS',
      'Landing Page',
      'Components',
      'Next.js',
      'React',
      'Component Library',
      'Open Source',
      'Web Development',
      'Frontend',
      'Developer Tools',
      'Design System',
      'Shadcn UI',
      'Accessibility',
      'Reusable Components',
      'Atomic Design',
      'Prototyping',
      'Responsive Layouts',
      'Headless UI',
      'Modern Interfaces'
    ],
    description:
      'Reusable UI component library for React and Next.js with Tailwind CSS. Documentation, examples, and patterns to accelerate interface creation.',
    locale: 'en',
    links: {
      linkedin: '',
      github: 'https://github.com/EuMotta/starforge-docs'
    }
  },
  personalInfo: {
    name: 'José Antonio Motta',
    role: 'Fullstack Developer',
    avatar: '',
    description: 'Fullstack Developer',
    country: 'Brazil',
    socialMedia: {
      linkedin:
        'https://www.linkedin.com/in/jos%C3%A9-antonio-bueno-motta-61006a26b/',
      github: 'https://github.com/EuMotta'
    }
  }
};

export type SiteConfig = typeof siteConfig;
