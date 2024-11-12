
import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  children,
  className = '',
  disabled = false,
}) => {
  const baseClasses = 'px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 ease-in-out';
  
  const variantClasses = {
    primary: 'bg-[#E95420] text-white hover:bg-[#C6471B] focus:ring-[#E95420]',
    secondary: 'bg-[#AEA79F] text-[#300A24] hover:bg-[#8C8279] focus:ring-[#AEA79F]',
    tertiary: 'bg-transparent text-[#E95420] hover:bg-[#E95420]/10 focus:ring-[#E95420]',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed';

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${disabled ? disabledClasses : ''} ${className}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const PrimaryButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button variant="primary" {...props} />
);

export const SecondaryButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button variant="secondary" {...props} />
);

export const TertiaryButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button variant="tertiary" {...props} />
);

export default Button;
