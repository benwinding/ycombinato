"use client";
import { QueryClientProvider } from "react-query";
import { ExternalLink, LinkToAuthor } from "@/components/ExternalLink";
import { LoadingScreen } from "@/components/loading_screen";
import {
  ILinkToDiscussion,
  ILinkToDiscussionWrapper,
} from "@/components/InternalLink";
import { queryClient } from "@/api/query_client";
import { FrontPageQuery, StoryItem, useHnPage } from "@/api/use-hn-page";

export function FrontPageViewerWrapper(
  props: FrontPageQuery & { footer?: React.ReactNode }
) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col w-full">
        <FrontPageViewer {...props} />
        {props.footer}
      </div>
    </QueryClientProvider>
  );
}

function FrontPageViewer(props: FrontPageQuery) {
  const query = useHnPage(props);
  if (query.isLoading) {
    return <LoadingScreen />;
  }
  if (query.status === "error") {
    return <div>Problem loading data, err: {query.error + ""}</div>;
  }
  if (!query.data) {
    return <div>No data?...</div>;
  }

  return (
    <div className="flex flex-col gap-1 font-sans">
      {query.data.hits.map((item, index) => (
        <FrontPageItem key={item.objectID} index={index + 1} item={item} />
      ))}
    </div>
  );
}

function FrontPageItem({ item, index }: { item: StoryItem; index: number }) {
  return (
    <div className="flex flex-row items-start gap-1">
      <span>{index}.</span>
      <div className="flex flex-col">
        <ExternalLink href={item.url}>{item.title}</ExternalLink>
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
