"use client";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/api/query_client";
import { FrontPageQuery, useHnPage } from "@/api/use-hn-page";
import { FrontPageViewer } from "./FrontPageViewer";
import { HnPageFooter } from "./HnPageFooter";
import { LoadingScreen } from "./loading_screen";

export function FrontPageViewerWrapper(props: FrontPageQuery) {
  return (
    <QueryClientProvider client={queryClient}>
      <PageViewer {...props} />
    </QueryClientProvider>
  );
}

function PageViewer(props: FrontPageQuery) {
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
    <div className="flex flex-col w-full">
      <FrontPageViewer data={query.data} />
      <HnPageFooter pageCount={query.data.nbPages} />
    </div>
  );
}
