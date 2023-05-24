"use client"
import React from "react";

type Story = {
  id: number;
  created_at: string;
  created_at_i: number;
  type: string;
  author: string;
  title: string;
  url: string;
  text: string | null;
  points: number | null;
  parent_id: number | null;
  story_id: number | null;
  children: StoryComment[];
}

type StoryComment = {
  id: number;
  created_at: string;
  created_at_i: number;
  type: string;
  author: string;
  title: string | null;
  url: string | null;
  text: string;
  points: number | null;
  parent_id: number;
  story_id: number;
  children: StoryComment[];
}

async function fetchHackerNewsPost(itemId: string) {
  const url = `http://hn.algolia.com/api/v1/items/${itemId}`;
  return fetch(url)
    .then(response => response.json() as unknown as Story)
}

function usePost(itemId: string) {
  const [post, setPost] = React.useState<Story>();

  React.useEffect(() => {
    itemId && fetchHackerNewsPost(itemId)
      .then(data => setPost(data))
      .catch(err => console.log(err));
  }, [itemId]);

  return post;
}

function useUrlParams() {
  const [id, setId] = React.useState<URLSearchParams>();
  React.useEffect(() => {
    // Get the query string from the URL
    const queryString = window.location.search;
    // Create a new URLSearchParams object from the query string
    const searchParams = new URLSearchParams(queryString);
    setId(searchParams);
  }, []);
  return id;
}

export default function Page() {
  const [searchText, setSearchText] = React.useState<string>('web');
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
