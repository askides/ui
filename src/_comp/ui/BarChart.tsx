import { cn } from "@/lib/utils";
import * as React from "react";

type BarChartProps = {
  children: React.ReactNode;
};

export function BarChart({ children }: BarChartProps) {
  return <div className="flex items-end flex-1 h-full">{children}</div>;
}

export interface BarChartColumnProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
}

export const BarChartColumn = React.forwardRef<
  HTMLDivElement,
  BarChartColumnProps
>(({ className, value, ...props }, ref) => {
  return (
    <div
      className={cn(
        "flex-grow bg-zinc-200 mx-1 first:ml-0 last:mr-0 transition-color duration-150",
        className
      )}
      style={{ height: `${value}%` }}
      ref={ref}
      {...props}
    />
  );
});

BarChartColumn.displayName = "Card";
