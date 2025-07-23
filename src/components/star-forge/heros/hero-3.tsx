import React from 'react';

import { BriefcaseBusiness } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-background flex w-full items-center justify-center p-8 text-white">
      <div className="grid w-full max-w-5xl items-center gap-8 md:grid-cols-2">
        <div>
          <BriefcaseBusiness size={50} className="text-blue-500" />
          <h1 className="mb-6 text-3xl leading-tight font-bold md:text-4xl">
            Transform your business with{' '}
            <span className="text-blue-500">innovative digital solutions</span>
          </h1>
          <ul className="mb-8 space-y-3">
            <li className="flex items-center">
              <span className="mr-2 text-green-400">✔</span> Increase
              efficiency and optimize processes
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-400">✔</span> High-quality
              customized solutions
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-400">✔</span> Technology that
              drives results
            </li>
          </ul>
          <button className="rounded-md bg-blue-500 px-6 py-3 font-bold text-white shadow-md transition hover:bg-blue-600">
            DISCOVER OUR SOLUTIONS
          </button>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute inset-0 rounded-full bg-blue-400 opacity-30 blur-3xl"></div>
          <img
            src="/examples/person-1.png"
            alt="Woman with crossed arms"
            className="relative z-10 rounded-lg [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] drop-shadow-sm drop-shadow-black"
          />
        </div>
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
