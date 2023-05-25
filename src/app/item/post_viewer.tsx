"use client"
import React from "react";
import { useUrlParams, fetchHackerNewsPost, Story, StoryComment } from "./fetcher";
import { QueryClientProvider, useQuery } from "react-query";
import { queryClient } from "./query_client";

export const PostViewerWrapper = () => {
  return <QueryClientProvider client={queryClient}>
    <PostViewer />
  </QueryClientProvider>
}

const PostViewer = () => {
  // const [searchText, setSearchText] = React.useState<string>('web');
  const params = useUrlParams();
  const postId = params?.get('id');
  const query = useQuery('post', () => fetchHackerNewsPost(postId + ''), {
    enabled: postId != null,
  });
  return <div className="flex flex-col py-1 px-2">
    {/* <SearchField value={searchText} onChange={setSearchText} /> */}
    {query.isLoading && query.isFetching && <div>Loading...</div>}
    {query.data && <Results story={query.data} />}
  </div>
}

const Results = (props: { story: Story }) => {
  return <div className="font-sans">
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold">{props.story.title}</h1>
      {props.story.children.map(child => <CommentCard key={child.id} comment={child} />)}
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
