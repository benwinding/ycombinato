"use client";
import React from "react";
import { getNowMinus, getNow } from "@/components/time";
import { FrontPageViewerWrapper } from "@/components/front-page-viewer";
import { usePageFromParams } from "@/components/usePageFromParams";

const Page = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const createdAfterI = getNowMinus(24, "hours");
  const createdBeforeI = getNow();
  const page = usePageFromParams();

  const viewer = React.useMemo(
    () =>
      mounted ? (
        <FrontPageViewerWrapper
          tag="ask_hn"
          page={page}
          pageSize={30}
          createdAfterI={createdAfterI}
          createdBeforeI={createdBeforeI}
        />
      ) : null,
    [createdAfterI, createdBeforeI, mounted, page]
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {viewer}
      </div>
    </main>
  );
};

export default Page;
