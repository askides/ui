import { cn } from "@/lib/utils";
import React from "react";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={cn("block text-sm text-zinc-800 font-medium", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Label.displayName = "Label";

export { Label };
