import React from 'react';

import { TextAnimation3 } from '@/components/star-forge/animations/text-animation-3';

const TextAnimation3Preview = () => {
  return (
    <div className="w-3/4">
      <TextAnimation3
        text=" Desenvolvedor fullstack com foco em React, Next.js e Node.js.
          Experiência também com Vue, Java (Spring) e NestJS. Comprometido com
          arquitetura limpa, performance e qualidade de código. Atualmente
          explorando IA aplicada a documentação e dev tools."
        speed={20}
        delay={0}
      />
    </div>
  );
};

export default TextAnimation3Preview;
