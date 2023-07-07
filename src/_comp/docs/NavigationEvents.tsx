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
    onNavigate();
  }, [onNavigate, pathname, searchParams]);

  return null;
}
