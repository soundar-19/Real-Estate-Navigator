import React from 'react';

const Card = ({ 
  children,
  className = '',
  padding = true,
  shadow = true,
  ...props 
}) => {
  return (
    <div 
      className={`
        bg-white rounded-xl 
        ${padding ? 'p-6' : ''} 
        ${shadow ? 'shadow-lg' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
