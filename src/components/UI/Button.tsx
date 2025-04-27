import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  disabled?: boolean;
  href?: string;
  icon?: React.ReactNode;
  newTab?: boolean;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false,
  href,
  icon,
  newTab,
}) => {
  const baseClass = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-accent hover:bg-accent/90 text-white focus:ring-accent/50',
    secondary: 'bg-secondary hover:bg-secondary/90 text-white focus:ring-secondary/50',
    outline: 'border border-accent text-accent hover:bg-accent/10 focus:ring-accent/30',
    ghost: 'text-accent hover:bg-accent/10 focus:ring-accent/30',
  };
  
  const sizeClasses = {
    small: 'text-sm px-3 py-1.5',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3',
  };
  
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const buttonClass = `${baseClass} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClass} ${className}`;

  if (href && !disabled) {
    return (
      <a
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : undefined}
        className={buttonClass}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;