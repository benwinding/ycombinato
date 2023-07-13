"use client";
import { useSearchParams } from "next/navigation";

export function usePageFromParams() {
  const params = useSearchParams();
  return Number(params?.get("page") || 1);
}
