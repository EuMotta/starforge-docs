import React from 'react';

const Background = () => {
  return (
    <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
      <div className="absolute top-0 left-1/2 ml-[-30rem] h-[25rem] w-[85rem] dark:[mask-image:linear-gradient(white,transparent)]">
        <div className="dd absolute inset-0 bg-gradient-to-r from-[oklch(var(--primary))] to-[oklch(var(--secondary))] [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-40 dark:from-[oklch(var(--primary))]/30 dark:to-[oklch(var(--secondary))]/30 dark:opacity-100">
          <svg
            aria-hidden="true"
            className="dark:fill-primary/10 dark:stroke-primary/10 absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay"
          >
            <defs>
              <pattern
                id=":r26:"
                width="72"
                height="56"
                patternUnits="userSpaceOnUse"
                x="-12"
                y="4"
              >
                <path d="M.5 56V.5H72" fill="none"></path>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#:r26:)"
            ></rect>
            <svg x="-12" y="4" className="overflow-visible">
              <rect
                strokeWidth="0"
                width="73"
                height="57"
                x="288"
                y="168"
              ></rect>
              <rect
                strokeWidth="0"
                width="73"
                height="57"
                x="144"
                y="56"
              ></rect>
              <rect
                strokeWidth="0"
                width="73"
                height="57"
                x="504"
                y="168"
              ></rect>
              <rect
                strokeWidth="0"
                width="73"
                height="57"
                x="720"
                y="336"
              ></rect>
            </svg>
          </svg>
        </div>
        <svg
          viewBox="0 0 1113 440"
          aria-hidden="true"
          className="fill-primary/5 absolute top-0 left-1/2 ml-[-19rem] w-[69.5625rem] blur-[26px] dark:hidden"
        >
          <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Background;
