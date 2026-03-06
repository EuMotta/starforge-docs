import React from 'react';

import { Section1 } from '@/components/star-forge';

const Section1Preview = () => {
  return (
    <Section1.Root className="max-w-4xl">
      <Section1.Header>
        <Section1.Title>
          Mastering Productivity in a Remote Work Environment
        </Section1.Title>
      </Section1.Header>
      <Section1.Content>
        <Section1.SubTitle>Create a Dedicated Workspace</Section1.SubTitle>
        <p>
          Setting up a distraction-free workspace is crucial for remote work
          success. Choose a quiet area, invest in ergonomic furniture, and keep
          your tools organized to maintain focus and efficiency throughout your
          workday.
        </p>
      </Section1.Content>
      <Section1.Content>
        <Section1.SubTitle>Prioritize Time Management</Section1.SubTitle>
        <p>
          Effective time management separates top performers from the rest. Use
          techniques like the Pomodoro method or time-blocking to structure your
          day, ensuring you balance deep work with necessary breaks to avoid
          burnout.
        </p>
      </Section1.Content>
    </Section1.Root>
  );
};

export default Section1Preview;
