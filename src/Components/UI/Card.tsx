import { cn } from "@/lib/utils";
import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("bg-white border border-zinc-100 rounded-sm", className)}
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
        className={cn("bg-white border-b border-zinc-100 py-4 px-5", className)}
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
        className={cn("bg-white py-4 px-5", className)}
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
        className={cn(
          "text-md font-semibold text-zinc-800 dark:text-white",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

CardTitle.displayName = "CardTitle";

export interface CardDescProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardDesc = React.forwardRef<HTMLParagraphElement, CardDescProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        className={cn(
          "mt-1 text-sm font-medium text-gray-500 dark:text-gray-500",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

CardDesc.displayName = "CardDesc";

export { Card, CardBody, CardDesc, CardHeader, CardTitle };
