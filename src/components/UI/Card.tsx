import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
  delay?: number;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  animated = true,
  delay = 0,
  hoverable = true
}) => {
  return (
    <div 
      className={`
        bg-container border border-border rounded-lg shadow-sm p-6 
        ${hoverable ? 'hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]' : ''}
        ${animated ? 'animate-fadeIn' : ''}
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Card;