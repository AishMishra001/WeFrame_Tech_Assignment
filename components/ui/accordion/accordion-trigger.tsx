import * as React from "react";

export const AccordionTrigger = ({ children, ...props }: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="flex justify-between w-full text-left py-2 font-medium"
      {...props}
    >
      {children}
    </button>
  );
};
