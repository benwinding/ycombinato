import { StoryComment } from "./fetcher";

export const CommentResults = (props: {
  title: string | null;
  comments: StoryComment[];
  isFiltering: boolean;
}) => {
  return (
    <div className="font-sans">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">{props.title}</h1>
        {props.comments.map((child) => (
          <CommentCard
            key={child.id}
            comment={child}
            isFiltering={props.isFiltering}
          />
        ))}
      </div>
    </div>
  );
};

const CommentCard = (props: {
  comment: StoryComment;
  isFiltering: boolean;
}) => {
  const comment = props.comment;
  const html = comment.textMarked || comment.text || "";
  const hasMarked = comment.textMarked != null;
  return (
    <ul className="list-decimal bg-black bg-opacity-5 rounded pl-2">
      <div className="">
        <div
          className="text-xs py-1 pr-2"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <div className="flex flex-col gap-2">
        {comment.children.map((child) => (
          <CommentCard
            key={child.id}
            comment={child}
            isFiltering={props.isFiltering}
          />
        ))}
      </div>
    </ul>
  );
};
