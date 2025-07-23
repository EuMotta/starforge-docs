import React from 'react';

import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

interface LinkItem {
  label: string;
  href: string;
}

const services: LinkItem[] = [
  { label: 'Consulting', href: '#' },
  { label: 'Development', href: '#' },
  { label: 'Strategy', href: '#' },
  { label: 'Marketing', href: '#' },
  { label: 'Analytics', href: '#' }
];

const company: LinkItem[] = [
  { label: 'About Us', href: '#' },
  { label: 'Team', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Press', href: '#' },
  { label: 'Blog', href: '#' }
];

const footerLinks: LinkItem[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Sitemap', href: '#' }
];

const socialLinks = [
  { Icon: Facebook, href: '#', color: 'text-blue-600' },
  { Icon: Twitter, href: '#', color: 'text-sky-500' },
  { Icon: Linkedin, href: '#', color: 'text-blue-700' },
  { Icon: Instagram, href: '#', color: 'text-pink-600' }
];

const companyInformations = {
  name: 'StarForge',
  address: '123 Main St, Anytown USA',
  phone: '123-456-7890',
  email: 'info@example.com'
};

const Component = () => {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <img
                src="/logo.svg"
                alt="Logo"
                className="relative z-10 size-7"
              />
              <span className="text-xl font-bold">
                {companyInformations.name}
              </span>
            </div>
            <p className="text-muted-foreground/80 mb-6">
              Providing innovative business solutions since 2010. We help
              companies transform and grow in today&apos;s digital landscape.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <a
                  key={`social-${index}`}
                  href={href}
                  className="hover:bg-background/30 transform rounded-full p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <Icon className={`h-5 w-5`} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="border-border mb-4 border-b pb-2 text-lg font-semibold">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((item, index) => (
                <li key={`service-${index}`}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="border-border mb-4 border-b pb-2 text-lg font-semibold">
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={`company-${index}`}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="border-border mb-4 border-b pb-2 text-lg font-semibold">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="text-primary mt-1 mr-2 h-5 w-5" />
                <span className="text-muted-foreground">
                  {companyInformations.address}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary mr-2 h-5 w-5" />
                <a
                  href="tel:+11234567890"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {companyInformations.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary mr-2 h-5 w-5" />
                <a
                  href="mailto:info@businesscorp.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {companyInformations.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border mt-12 border-t pt-8">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div className="text-muted-foreground/80 text-sm">
              © 2023 {companyInformations.name}. All rights reserved.
            </div>
            <div className="flex justify-start space-x-4 md:justify-end">
              {footerLinks.map((item, index) => (
                <a
                  key={`footer-link-${index}`}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Component;
