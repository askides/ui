import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

export const createButtonVariants = cva(
  "inline-flex font-semibold shadow-sm border transition-colors focus:outline-none rounded focus:ring",
  {
    variants: {
      variant: {
        primary:
          "border-zinc-900 bg-zinc-800 text-white hover:bg-zinc-900 focus:ring-zinc-400 disabled:bg-zinc-600",
        secondary:
          "border-zinc-150 bg-white text-zinc-800 hover:bg-zinc-50 hover:text-zinc-900 focus:ring-zinc-100",
      },
      size: {
        lg: "py-3 px-6 text-base",
        base: "py-2 px-4 text-sm",
        sm: "py-1 px-2 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "base",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof createButtonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(createButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
