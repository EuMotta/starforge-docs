import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 top-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-purple-500/30 via-purple-500/20 to-transparent opacity-50 blur-[100px]" />
        <div className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-pink-500/30 via-red-500/20 to-transparent opacity-50 blur-[100px]" />
      </div>
      <div className="mx-auto max-w-5xl px-6 py-28 lg:py-24">
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h1 className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-4xl font-semibold text-balance text-transparent md:text-5xl lg:text-6xl">
            Unleash Your Digital Creativity
          </h1>
          <p className="text-muted-foreground mx-auto my-8 max-w-2xl text-xl">
            Explore new frontiers with creative tools and content that awaken
            your artistic and technological potential.
          </p>
          <a
            href="#explore"
            className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex h-11 items-center justify-center rounded-full px-8 text-sm font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
            aria-label="Start creating now"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="mx-auto -mt-16 max-w-7xl [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] p-5">
        <div className="relative lg:h-[44rem]">
          <img
            className="relative z-[2] rounded-md border dark:hidden"
            alt="Creative platform preview"
            width="2880"
            height="2074"
            src="/examples/dashboard-white.webp"
            loading="lazy"
          />
          <img
            className="relative z-[2] hidden rounded-md border dark:block"
            alt="Creative platform preview (dark mode)"
            width="2880"
            height="2074"
            src="/examples/dashboard-black.webp"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <main className="bg-background">
      <HeroSection />
    </main>
  );
};

export default Hero;
