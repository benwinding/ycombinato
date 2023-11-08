"use client";
import { useQueryParams } from "@/hooks/useQueryParams";
import {
  MagnifyingGlassCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { ResultsPageViewer } from "./SearchPageViewer";
import { SearchPageQuery, useHnSearch } from "@/api/use-hn-search";
import { Time } from "@/components/time";
import React, { useState } from "react";
import { LoadingScreen } from "@/components/loading_screen";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/api/query_client";

export default function Page() {
  const { currentParams, patchQueryParams } = useQueryParams<SearchPageQuery>({
    defaultParams: {
      text: "",
      afterISeconds: 0,
      minimumPoints: 0,
      beforeISeconds: Time.now().formatAsHnSeconds(),
      page: 1,
      pageSize: 30,
    },
  });
  const [state, setState] = useState<SearchPageQuery>(currentParams);
  React.useEffect(() => {
    setState(currentParams);
  }, [currentParams]);

  const onChangeText = (text: string) => setState((s) => ({ ...s, text }));
  const onChangeDateBefore = (date: Date) =>
    setState((s) => ({
      ...s,
      beforeISeconds: Time.fromDateObj({ dateObj: date }).formatAsHnSeconds(),
    }));
  const onChangeDateAfter = (date: Date) =>
    setState((s) => ({
      ...s,
      afterISeconds: Time.fromDateObj({ dateObj: date }).formatAsHnSeconds(),
    }));
  const onChangeMinimumPoints = (points: number) =>
    setState((s) => ({
      ...s,
      minimumPoints: points,
    }));
  const executeSearch = () => {
    patchQueryParams(state);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="flex items-center gap-2">
          <FilterText
            onChange={onChangeText}
            onEnter={executeSearch}
            value={state.text}
          />
          <SearchButton onClick={executeSearch} />
        </div>
        <div className="pl-1 py-2 flex gap-3 items-center">
          <DateSelect
            label="After >"
            valueDateString={Time.fromHn({
              seconds: state.afterISeconds,
            }).formatAsDateString()}
            onChange={onChangeDateAfter}
          />
          <span>and</span>
          <DateSelect
            label="Before <"
            valueDateString={Time.fromHn({
              seconds: state.beforeISeconds,
            }).formatAsDateString()}
            onChange={onChangeDateBefore}
          />
          <RangeSelect
            label="Minimum points"
            value={state.minimumPoints}
            max={1000}
            onChange={onChangeMinimumPoints}
          />
        </div>
      </div>
      <QueryClientProvider client={queryClient}>
        <DataViewer {...currentParams} />
      </QueryClientProvider>
    </main>
  );
}

function FilterText(props: {
  onChange: (newText: string) => void;
  onEnter: () => void;
  value: string;
}) {
  return (
    <div className="flex w-full">
      <input
        className="border rounded-md px-2 py-1 w-full"
        placeholder="Search posts..."
        onChange={(e) => props.onChange(e.target.value)}
        onKeyDown={(e) => {
          e.key === "Enter" ? props.onEnter() : null;
        }}
        value={props.value}
      />
      <button
        onClick={() => props.onChange("")}
        className="-ml-6 text-gray-400"
      >
        <XCircleIcon width={20} />
      </button>
    </div>
  );
}

function DateSelect(props: {
  label: string;
  valueDateString: string;
  onChange: (newDate: Date) => void;
}) {
  const onInput = (date: string) => {
    props.onChange(new Date(date));
  };
  return (
    <label className="flex flex-col">
      <span className="text-xs">{props.label}</span>
      <input
        type="date"
        value={props.valueDateString}
        onChange={(e) => onInput(e.target.value)}
      />
    </label>
  );
}

function RangeSelect(props: {
  label: string;
  max: number;
  value: number;
  onChange: (value: number) => void;
}) {
  const val = props.value > 0 ? props.value : "disabled";
  return (
    <label className="flex flex-col">
      <span className="text-xs">
        {props.label} ({val})
      </span>
      <input
        type="range"
        max={props.max}
        step={1}
        min={0}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
      />
    </label>
  );
}

function SearchButton(props: { onClick: () => void }) {
  return (
    <button
      onClick={props.onClick}
      role="button"
      className="bg-gray-200 rounded cursor-pointer px-2 py-1 gap-2 flex flex-row items-center"
    >
      Search <MagnifyingGlassCircleIcon width={20} />
    </button>
  );
}

const DataViewer = React.memo(function DataViewer(props: SearchPageQuery) {
  const query = useHnSearch(props);

  if (query.isLoading) {
    return <LoadingScreen />;
  }

  if (query.error) {
    return <div>{query.error.toString()}</div>;
  }

  if (!query.data) {
    return null;
  }

  return <ResultsPageViewer data={query.data} />;
});
