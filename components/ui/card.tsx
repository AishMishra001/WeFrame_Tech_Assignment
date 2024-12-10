// components/ui/card.tsx
import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return <div className={`card ${className ?? ""}`}>{children}</div>;
};

export const CardContent = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={`card-content p-4 ${className ?? ""}`}>{children}</div>;
};
