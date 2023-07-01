import { cn } from "@/lib/utils";
import * as React from "react";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, ...props }, ref) => {
    return (
      <select
        className={cn(
          "py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Select.displayName = "Select";

export { Select };
