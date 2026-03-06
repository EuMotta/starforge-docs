import React from 'react';

import { Container1 } from '@/components/star-forge';

const container = () => {
  return (
    <div className="w-full space-y-5 text-center">
      <Container1
        variant={'border'}
        size={'md'}
        className="bg-muted/10 h-full py-5"
      >
        md
      </Container1>
      <Container1
        variant={'border'}
        size={'sm'}
        className="bg-muted/10 h-full py-5"
      >
        sm
      </Container1>
      <Container1
        variant={'border'}
        size={'lg'}
        className="bg-muted/10 h-full py-5"
      >
        lg
      </Container1>
    </div>
  );
};

export default container;
