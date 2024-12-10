// components/ui/carousel.tsx
import React, { ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
  className?: string;
  opts?: { align?: string; loop?: boolean };
}

export const Carousel = ({ children, className, opts }: CarouselProps) => {
  return (
    <div className={`carousel-container ${className ?? ""}`} data-opts={JSON.stringify(opts)}>
      {children}
    </div>
  );
};

export const CarouselContent = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={`carousel-content flex ${className ?? ""}`}>{children}</div>;
};

export const CarouselItem = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={`carousel-item ${className ?? ""}`}>{children}</div>;
};

export const CarouselNext = () => (
  <button className="carousel-next px-4 py-2 bg-gray-200 hover:bg-gray-300">Next</button>
);

export const CarouselPrevious = () => (
  <button className="carousel-prev px-4 py-2 bg-gray-200 hover:bg-gray-300">Prev</button>
);
