"use client";

import { ReactNode } from "react";
import { useHydration } from "@/hooks/useHydration";

interface HydrationWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function HydrationWrapper({
  children,
  fallback = <div>Đang tải...</div>,
}: HydrationWrapperProps) {
  const isHydrated = useHydration();

  if (!isHydrated) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
