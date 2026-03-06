import { Password2 } from '@/components/star-forge';

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
