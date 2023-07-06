import { cn } from "@/lib/utils";
import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "bg-white border border-zinc-150 rounded-3xl overflow-hidden shadow-sm w-full",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("bg-white border-zinc-100 pb-2 pt-5 px-5", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

CardHeader.displayName = "CardHeader";

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "bg-white text-sm leading-relaxed pb-5 px-5 text-zinc-500",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

CardBody.displayName = "CardBody";

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        className={cn("font-semibold text-lg text-zinc-800", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

CardTitle.displayName = "CardTitle";

export { Card, CardBody, CardHeader, CardTitle };
