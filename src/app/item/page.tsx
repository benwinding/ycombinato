"use client"
import React from "react";
import { useUrlParams, usePost, Story, StoryComment } from "./fetcher";

export default function Page() {
  // const [searchText, setSearchText] = React.useState<string>('web');
  const params = useUrlParams();
  const post = usePost(params?.get('id') + '');
  return <div className="flex flex-col">
    {/* <SearchField value={searchText} onChange={setSearchText} /> */}
    <Results story={post} />
  </div>
}

function Results(props: { story: Story | undefined }) {
  if (!props.story) {
    return null;
  }
  return <div className="font-mono">
    <div className="flex flex-col">
      <CommentList level={0} title={props.story.title} comments={props.story.children} />
    </div>
  </div>
}

function CommentList(props: { level: number, title: string, comments: StoryComment[] }) {
  return <ul className="list-decimal" style={{paddingLeft: props.level * 3}}>
    <div dangerouslySetInnerHTML={{ __html: props.title }} />
    {props.comments.map(child => <div key={child.id} className="flex">
      <CommentList level={props.level + 1} title={child.text?.slice(0,20)} comments={child.children} />
    </div>)}
  </ul>
}

// function SearchField(props: { value: string | undefined, onChange: (value: string) => void }) {
//   return <input className="" value={props.value} type="text" onKeyDown={e => props.onChange(e.currentTarget.value)} placeholder="Search favourites" />
// }
