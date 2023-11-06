"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export function useQueryParams<T extends Record<string, string>>(props: {
  defaultParams: T;
}): {
  currentParams: T;
  patchQueryParams: (query: Partial<T>) => void;
} {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentParams = React.useMemo(
    () =>
      Object.entries(props.defaultParams).reduce((prev, [key, value]) => {
        (prev as any)[key] = params.get(key) || value;
        return prev;
      }, {} as T),
    [params, props.defaultParams]
  );

  const patchQueryParams = React.useCallback(
    (query: Partial<T>) => {
      const existing = new URLSearchParams(window.location.search);
      const existingQueryAsObj = Array.from(existing.entries()).reduce(
        (acc, [key, val]) => {
          acc[key] = val;
          return acc;
        },
        {} as { [key: string]: string }
      );
      const patchedQueryObj = {
        ...existingQueryAsObj,
        ...query,
      };
      const newQueryAsString = Object.entries(patchedQueryObj)
        .map(([paramName, paramValue]) => `${paramName}=${paramValue}`)
        .join("&");
      router.push(pathname + `?${newQueryAsString}`);
    },
    [pathname, router]
  );

  return { currentParams, patchQueryParams };
}
