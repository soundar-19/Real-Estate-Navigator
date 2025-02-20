import React from 'react';

const Alert = ({ children, className }) => {
  return (
    <div className={`p-4 mb-4 text-sm text-blue-700 bg-blue-100 border border-blue-300 rounded-lg ${className}`} role="alert">
      {children}
    </div>
  );
};

export default Alert;
