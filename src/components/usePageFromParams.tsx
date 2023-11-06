"use client";
import { Time } from "./time";
import { useQueryParams } from "@/hooks/useQueryParams";

type HnQueryUrlParams = {
  page: string;
  perPage: string;
  date: string;
};

const defaultParams: HnQueryUrlParams = {
  page: "1",
  perPage: "50",
  date: Time.now().formatAsDateString(),
};

export function usePageFromParams() {
  const params = useHnQueryUrlParams();
  return params.page;
}

export function useHnQueryUrlParams(): HnQueryUrlParams {
  const { currentParams } = useQueryParams<HnQueryUrlParams>({ defaultParams });
  return currentParams;
}

export function useSetUrlQueryParams() {
  const { patchQueryParams } = useQueryParams<HnQueryUrlParams>({
    defaultParams,
  });
  return { patchQueryParams };
}
