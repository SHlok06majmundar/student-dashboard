// components/ui/accordion.tsx
import React from 'react';

export const Accordion = ({ children }) => {
  return <div className="accordion">{children}</div>;
};

export const AccordionItem = ({ children }) => {
  return <div className="accordion-item">{children}</div>;
};

export const AccordionTrigger = ({ children }) => {
  return <button className="accordion-trigger">{children}</button>;
};

export const AccordionContent = ({ children }) => {
  return <div className="accordion-content">{children}</div>;
};
