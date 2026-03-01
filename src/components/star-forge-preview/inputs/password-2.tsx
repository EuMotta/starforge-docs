import { Password2 } from '@/components/star-forge/inputs/password/password-2';

const PasswordInputRegisterPreview = () => {
  return (
    <Password2
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
