import React from 'react';

import Container from '../star-forge/container';

const container = () => {
  return (
    <div className="w-full space-y-5 text-center">
      <Container
        variant={'border'}
        size={'md'}
        className="bg-muted/10 h-full py-5"
      >
        md
      </Container>
      <Container
        variant={'border'}
        size={'sm'}
        className="bg-muted/10 h-full py-5"
      >
        sm
      </Container>
      <Container
        variant={'border'}
        size={'lg'}
        className="bg-muted/10 h-full py-5"
      >
        lg
      </Container>
    </div>
  );
};

export default container;
