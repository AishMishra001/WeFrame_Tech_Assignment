// components/ui/button.tsx
import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "ghost" | "solid";
  size?: "icon" | "large" | "small";
  className?: string;
}

export const Button = ({ children, variant = "solid", size = "small", className, ...props }: ButtonProps) => {
  const baseClasses = "rounded px-4 py-2";
  const variantClasses = variant === "ghost" ? "bg-transparent hover:bg-gray-200" : "bg-blue-500 text-white";
  const sizeClasses = size === "icon" ? "p-2" : size === "large" ? "text-lg" : "text-sm";

  return (
    <button className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className ?? ""}`} {...props}>
      {children}
    </button>
  );
};
