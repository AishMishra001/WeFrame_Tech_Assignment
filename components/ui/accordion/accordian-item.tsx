import * as React from "react";

export const AccordionItem = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className="border-b py-2" {...props}>{children}</div>;
};
