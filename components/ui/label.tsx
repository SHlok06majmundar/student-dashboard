// components/ui/label.tsx
import React from 'react';

export const Label = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="font-medium text-gray-700">
      {children}
    </label>
  );
};
