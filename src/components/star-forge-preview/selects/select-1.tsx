'use client';

import CustomSelect from '@/components/star-forge/select-1';

const WelcomeSection = () => {
  return (
    <section>
      <CustomSelect formName="user" label="Selecionar Usuário" />
    </section>
  );
};

export default WelcomeSection;
