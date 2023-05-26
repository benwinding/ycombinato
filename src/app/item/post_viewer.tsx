"use client"
import React, { useMemo } from "react";
import { useUrlParams, fetchHackerNewsPost, StoryComment } from "./fetcher";
import { QueryClientProvider, useQuery } from "react-query";
import { queryClient } from "./query_client";
import { sortChildren } from "./sorter";

export const PostViewerWrapper = () => {
  return <QueryClientProvider client={queryClient}>
    <PostViewer />
  </QueryClientProvider>
}

const PostViewer = () => {
  const [sortOption, setSortOoption] = React.useState<Option>(Option.byResponseCount);
  const params = useUrlParams();
  const postId = params?.get('id');
  const query = useQuery('post' + postId, () => fetchHackerNewsPost(postId + ''), {
    enabled: postId != null,
  });
  const data = query.data;
  const dataSorted = useMemo(() => data ? sortChildren(data, {
    byResponseCount: sortOption === Option.byResponseCount,
    byThreadLength: sortOption === Option.byThreadLength,
  }) : undefined, [data, sortOption]);
  return <div className="flex flex-col py-1 px-2">
    <SortOptions onChange={setSortOoption} value={sortOption} />
    {/* <SearchField value={searchText} onChange={setSearchText} /> */}
    {query.isLoading && query.isFetching && <div>Loading...</div>}
    {dataSorted && <Results title={dataSorted.title} comments={dataSorted.children} />}
  </div>
}

const enum Option {
  byResponseCount = 'Sort by response count',
  byThreadLength = 'Sort by thread length',
};

function SortOptions(props: { value: Option | undefined, onChange: (value: Option) => void }) {
  const options: Option[] = [Option.byResponseCount, Option.byThreadLength];

  return (
    <div className="flex items-center gap-2">
      {options.map(option => <RadioButton
        key={option}
        value={option}
        label={option}
        checked={option === props.value}
        onChange={e => props.onChange(option)}
      />)}
    </div>
  );
}

type RadioButtonProps = {
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function RadioButton({ label, value, checked, onChange }: RadioButtonProps) {
  return (
    <label className="text-xs flex items-center gap-1">
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
}

const Results = (props: { title: string, comments: StoryComment[] }) => {
  return <div className="font-sans">
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold">{props.title}</h1>
      {props.comments.map(child => <CommentCard key={child.id} comment={child} />)}
    </div>
  </div>
}

const CommentCard = (props: { comment: StoryComment }) => {
  return <ul className="list-decimal bg-black bg-opacity-5 rounded pl-2">
    <div className="">
      <div className="text-xs py-1 pr-2" dangerouslySetInnerHTML={{ __html: props.comment.text }} />
    </div>
    <div className="flex flex-col gap-2">
      {props.comment.children.map(child => <CommentCard key={child.id} comment={child} />)}
    </div>
  </ul>
}

// const SearchField = (props: { value: string | undefined, onChange: (value: string) => void }) => {
//   return <input className="" value={props.value} type="text" onKeyDown={e => props.onChange(e.currentTarget.value)} placeholder="Search favourites" />
// }
