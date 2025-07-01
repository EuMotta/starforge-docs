import React from 'react';

import { Section } from '@/components/star-forge/section';

const SectionPreview = () => {
  return (
    <div>
      <Section.Root>
        <Section.Header>
          <Section.Title>
            Mastering Productivity in a Remote Work Environment
          </Section.Title>
        </Section.Header>
        <Section.Content>
          <Section.SubTitle>Create a Dedicated Workspace</Section.SubTitle>
          <p>
            Setting up a distraction-free workspace is crucial for remote work
            success. Choose a quiet area, invest in ergonomic furniture, and
            keep your tools organized to maintain focus and efficiency
            throughout your workday.
          </p>
        </Section.Content>
        <Section.Content>
          <Section.SubTitle>Prioritize Time Management</Section.SubTitle>
          <p>
            Effective time management separates top performers from the rest.
            Use techniques like the Pomodoro method or time-blocking to
            structure your day, ensuring you balance deep work with necessary
            breaks to avoid burnout.
          </p>
        </Section.Content>
      </Section.Root>
    </div>
  );
};

export default SectionPreview;
