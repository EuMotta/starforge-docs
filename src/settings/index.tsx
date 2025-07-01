export const siteConfig = {
  site: {
    name: 'StarForge',
    url: process.env.SITE_URL,
    ogImage: '',
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
    description: 'UI components library.',
    locale: 'pt-BR',
    links: {
      linkedin: '',
      github: 'https://github.com/EuMotta/star-forge'
    }
  },
  personalInfo: {
    name: 'José Antonio Motta',
    role: 'Desenvolvedor Fullstack',
    avatar: '',
    description: 'Desenvolvedor Fullstack',
    country: 'Brazil',
    socialMedia: {
      linkedin:
        'https://www.linkedin.com/in/jos%C3%A9-antonio-bueno-motta-61006a26b/',
      github: 'https://github.com/EuMotta'
    }
  }
};

export type SiteConfig = typeof siteConfig;
