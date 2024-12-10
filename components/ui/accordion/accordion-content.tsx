import * as React from "react";

export const AccordionContent = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="py-2 text-gray-600" {...props}>
      {children}
    </div>
  );
};
