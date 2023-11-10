"use client";
import { StoryItem } from "@/api/use-hn-page";
import { ExternalLink, LinkToAuthor } from "./ExternalLink";
import {
  ILinkToDiscussion,
  ILinkToDiscussionWrapper,
  InternalLink,
} from "./InternalLink";

export function FrontPageItem({
  item,
  index,
}: {
  item: StoryItem;
  index: number;
}) {
  const itemLink =
    item.url != null ? (
      <ExternalLink href={item.url}>{item.title}</ExternalLink>
    ) : (
      <InternalLink href={`/item?id=${item.objectID}`}>
        {item.title}
      </InternalLink>
    );

  return (
    <div className="flex flex-row items-start gap-1">
      <span>{index}.</span>
      <div className="flex flex-col">
        {itemLink}
        <div className="flex items-center flex-wrap gap-1 text-gray-500 text-xxs sm:text-xs">
          <p className="flex-shrink-0">{item.points} points by</p>
          <LinkToAuthor author={item.author} />
          <ILinkToDiscussion
            discussionId={Number(item.objectID)}
            createdAt={item.created_at}
          />
          <span>|</span>
          <ILinkToDiscussionWrapper discussionId={Number(item.objectID)}>
            {item.num_comments} comments
          </ILinkToDiscussionWrapper>
        </div>
      </div>
    </div>
  );
}
