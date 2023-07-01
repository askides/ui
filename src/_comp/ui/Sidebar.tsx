import { cn } from "@/lib/utils";
import * as React from "react";

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("w-56 overflow-y-auto", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Sidebar.displayName = "Sidebar";

export interface SidebarTitleProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarTitle = React.forwardRef<HTMLDivElement, SidebarTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center gap-3 px-3 py-2 text-lg font-semibold text-black",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

SidebarTitle.displayName = "SidebarTitle";

export interface SidebarMenuProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarMenu = React.forwardRef<HTMLDivElement, SidebarMenuProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(className)}
        data-role="sidebar-menu"
        ref={ref}
        {...props}
      />
    );
  }
);

SidebarMenu.displayName = "SidebarMenu";

export interface SidebarMenuHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarMenuHeader = React.forwardRef<
  HTMLDivElement,
  SidebarMenuHeaderProps
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "px-3 py-2 text-xs font-bold tracking-tighter text-zinc-800 uppercase",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

SidebarMenuHeader.displayName = "SidebarMenuHeader";

export function SidebarMenuItems({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-1">{children}</ul>;
}

export function SidebarMenuItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 rounded-lg px-3 py-1 hover:underline text-sm text-white">
      {children}
    </li>
  );
}
