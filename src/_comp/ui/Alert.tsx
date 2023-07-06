import { cn } from "@/lib/utils";
import * as React from "react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        role="alert"
        className={cn(
          "border-zinc-150 inline-flex items-center gap-5 w-full rounded-3xl border bg-white px-5 py-4 shadow-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Alert.displayName = "Alert";

export interface AlertContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const AlertContent = React.forwardRef<HTMLDivElement, AlertContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("flex flex-col gap-1", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

AlertContent.displayName = "AlertContent";

export interface AlertHeadProps extends React.HTMLAttributes<HTMLDivElement> {}

const AlertHead = React.forwardRef<HTMLDivElement, AlertHeadProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("font-semibold leading-tight text-zinc-800", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

AlertHead.displayName = "AlertHead";

export interface AlertBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const AlertBody = React.forwardRef<HTMLDivElement, AlertBodyProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("text-sm text-zinc-500", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

AlertBody.displayName = "AlertBody";

export { Alert, AlertBody, AlertContent, AlertHead };
