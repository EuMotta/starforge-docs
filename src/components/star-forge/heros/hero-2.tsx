import React from 'react';

import { Menu, ArrowRight, PlayCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <div>
      <div className="bg-primary text-primary-foreground sticky top-0 z-50 py-2 text-center text-sm">
        🚀 Limited Offer: Get 30% off your first year with code STARFORGE2025!{' '}
        <a href="#" className="underline transition-colors hover:text-white">
          Claim Now
        </a>
      </div>

      <div className="bg-background relative flex flex-col overflow-hidden">
        <header className="z-10 flex w-full items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <svg
              className="text-primary h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-foreground ml-2 text-xl font-bold">
              StarForge
            </span>
          </div>

          <nav className="hidden items-center space-x-8 md:flex">
            <a
              href="#"
              className="hover:text-primary font-medium transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#"
              className="hover:text-primary font-medium transition-colors duration-300"
            >
              Solutions
            </a>
            <a
              href="#"
              className="hover:text-primary font-medium transition-colors duration-300"
            >
              Pricing
            </a>
            <a
              href="#"
              className="hover:text-primary font-medium transition-colors duration-300"
            >
              Resources
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="hover:text-primary hidden font-medium transition-colors duration-300 md:block"
            >
              Login
            </a>
            <a
              href="#"
              className="bg-primary hover:bg-primary/90 text-primary-foreground transform rounded-full px-5 py-2 font-medium transition-colors duration-300 hover:scale-105"
            >
              Get Started
            </a>
            <button className="md:hidden">
              <Menu className="text-foreground h-6 w-6" />
            </button>
          </div>
        </header>

        <div className="z-10 mx-auto my-10 flex max-w-7xl flex-1 flex-col items-center px-6 py-12 md:flex-row md:py-0">
          <div className="mb-10 w-full space-y-6 text-center md:mb-0 md:w-1/2 md:text-left">
            <h1 className="text-foreground text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              Transform Your Business with
              <span className="text-primary"> Solutions</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-xl text-lg md:mx-0">
              Unlock your companys full potential with our cutting-edge platform
              designed to streamline operations, boost productivity, and drive
              growth.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start">
              <a
                href="#"
                className="bg-primary hover:bg-primary/90 text-primary-foreground flex w-full transform items-center justify-center rounded-full px-8 py-3 font-medium transition-colors duration-300 hover:scale-105 sm:w-auto"
              >
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:border-primary hover:text-primary border-border text-foreground flex w-full items-center justify-center rounded-full border-2 px-8 py-3 font-medium transition-colors duration-300 sm:w-auto"
              >
                <PlayCircle className="mr-2 h-5 w-5" /> Watch Demo
              </a>
            </div>

            <div className="pt-6">
              <p className="text-muted-foreground mb-3 text-sm">
                Trusted by industry leaders
              </p>
              <div className="flex flex-wrap justify-center gap-8 md:justify-start">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/airbnb-2.svg"
                  alt="Airbnb logo"
                  className="h-8 opacity-60 transition-opacity duration-300 hover:opacity-100"
                />
                <img
                  src="https://cdn.worldvectorlogo.com/logos/slack-1.svg"
                  alt="Slack logo"
                  className="h-8 opacity-60 transition-opacity duration-300 hover:opacity-100"
                />
                <img
                  src="https://cdn.worldvectorlogo.com/logos/spotify-2.svg"
                  alt="Spotify logo"
                  className="h-8 opacity-60 transition-opacity duration-300 hover:opacity-100"
                />
                <img
                  src="https://cdn.worldvectorlogo.com/logos/dropbox-1.svg"
                  alt="Dropbox logo"
                  className="h-8 opacity-60 transition-opacity duration-300 hover:opacity-100"
                />
              </div>
            </div>
          </div>

          <div className="relative w-full md:w-1/2">
            <div className="relative z-10 transform transition-transform duration-500 hover:scale-105">
              <img
                src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg"
                alt="Business team working together"
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="bg-card absolute -right-4 -bottom-4 transform rounded-lg p-4 shadow-lg transition-transform duration-500 hover:scale-110">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-foreground font-medium">
                    98% Customer Satisfaction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary/30 absolute top-0 right-0 size-96 rounded-bl-full opacity-70"></div>
        <div className="bg-primary/30 absolute bottom-0 left-0 size-96 rounded-tr-full opacity-70"></div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <main>
      <HeroSection />
    </main>
  );
};

export default Hero;
