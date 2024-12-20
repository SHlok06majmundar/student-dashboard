// components/ui/uiCard.tsx
import React from 'react';

export const Card = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="border-b p-4 bg-gray-100">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h2 className="text-lg font-semibold">{children}</h2>
);

// Ensure this export exists
export const CardDescription = ({ children }) => (
  <p className="text-gray-600">{children}</p>
);
