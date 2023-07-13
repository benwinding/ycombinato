"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export function HnPageFooter(props: { pageCount: number }) {
  const pages = new Array(props.pageCount).fill(0).map((_, i) => i + 1);
  const router = useRouter();
  const pathname = usePathname();

  function onClick(page: number) {
    router.push(pathname + `?page=${page}`);
  }

  return (
    <div className="flex gap-2 pt-4 justify-center w-full flex-wrap">
      {pages.map((page) => (
        <span
          key={page}
          className="cursor-pointer hover:underline"
          onClick={() => onClick(page)}
        >
          {page}
        </span>
      ))}
    </div>
  );
}
