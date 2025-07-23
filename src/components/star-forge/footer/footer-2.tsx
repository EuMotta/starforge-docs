import React from 'react';

interface LinkItem {
  label: string;
  href: string;
}

const footerLinks: LinkItem[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Sitemap', href: '#' }
];

const Component = () => {
  return (
    <footer className="bg-muted text-muted-foreground w-full">
      <div className="border-muted-foreground border-t p-3 text-center">
        <p>&copy; {new Date().getFullYear()} StarForge. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Component;
