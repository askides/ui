"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type NavigationEventProps = {
  onNavigate: () => void;
};

export function NavigationEvents({ onNavigate }: NavigationEventProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);
    // You can now use the current URL
    onNavigate();
  }, [onNavigate, pathname, searchParams]);

  return null;
}
