import { useState } from "react";
import { StoryComment } from "./fetcher";
import React from "react";

export const CommentResults = (props: {
  title: string | null;
  comments: StoryComment[];
  filterText: string;
}) => {
  return (
    <div className="font-sans">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">{props.title}</h1>
        {props.comments.map((child) => (
          <CommentCard
            key={child.id}
            comment={child}
            filterText={props.filterText}
          />
        ))}
      </div>
    </div>
  );
};

const CommentCard = (props: { comment: StoryComment; filterText: string }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { comment, filterText } = props;
  const html = comment.textMarked || comment.text || "<i>[deleted]<i/>";
  const shouldCollapse = !comment.textMarked;

  React.useEffect(() => {
    const isFiltering = !!filterText;
    setIsCollapsed(isFiltering && shouldCollapse);
  }, [comment.id, filterText, shouldCollapse]);

  const onCollapse = React.useCallback(() => setIsCollapsed(true), []);
  const onExpand = React.useCallback(() => setIsCollapsed(false), []);

  return (
    <CommentCardContent
      id={comment.id}
      html={html}
      comments={comment.children}
      isCollapsed={isCollapsed}
      onCollapse={onCollapse}
      onExpand={onExpand}
      filterText={filterText}
    />
  );
};

function CommentCardContent(props: {
  id: number;
  comments: StoryComment[];
  isCollapsed: boolean;
  onExpand: () => void;
  onCollapse: () => void;
  filterText: string;
  html: string;
}) {
  const { comments, isCollapsed, filterText, html } = props;
  return (
    <ul className="list-decimal bg-black bg-opacity-5 rounded pl-2">
      <div id={props.id + ""}>
        {isCollapsed ? (
          <button onClick={() => props.onExpand()}>+</button>
        ) : (
          <button onClick={() => props.onCollapse()}>-</button>
        )}
        {!isCollapsed && (
          <div
            className="text-xs py-1 pr-2"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
      <div className="flex flex-col gap-2">
        {comments.map((child) => (
          <CommentCard key={child.id} comment={child} filterText={filterText} />
        ))}
      </div>
    </ul>
  );
}
