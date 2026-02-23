import { PasswordInputRegister } from '@/components/star-forge/inputs/password-input-register';

const PasswordInputRegisterPreview = () => {
  return (
    <PasswordInputRegister
      requireLowercase
      showRules
      requireNumbers
      requireSpecialChars
      requireUppercase
      showStrength
    />
  );
};

export default PasswordInputRegisterPreview;
