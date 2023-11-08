"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

type QueryObject = Record<string, string | number>;

// Caches params state to avoid re-renders
function useSearchParamsWrapper<T extends QueryObject>(defaultParams: T): T {
  const params = useSearchParams();
  const [paramsState, setParamsState] = React.useState<T>(defaultParams);

  React.useEffect(() => {
    const shouldUpdate = Array.from(params.entries()).some(
      ([key, value]) => paramsState[key] !== value
    );
    if (shouldUpdate) {
      const newState = Object.entries(defaultParams).reduce(
        (prev, [key, defaultValue]) => {
          (prev as any)[key] = params.get(key) || defaultValue;
          return prev;
        },
        {} as T
      );
      setParamsState({ ...paramsState, ...newState });
    }
  }, [defaultParams, params, paramsState]);

  return paramsState;
}

export function useQueryParams<T extends QueryObject>(props: {
  defaultParams: T;
}): {
  currentParams: T;
  patchQueryParams: (query: Partial<T>) => void;
} {
  const currentParams = useSearchParamsWrapper<T>(props.defaultParams);
  const router = useRouter();
  const pathname = usePathname();

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
