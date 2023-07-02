"use client";

import { Preview } from "@/_comp/docs/Preview";
import { useMDXComponent } from "next-contentlayer/hooks";

export function Markdown({ mdx }: { mdx: string }) {
  const Comp = useMDXComponent(mdx);

  return (
    <article className="prose prose-h2:mb-2 prose-p:font-light max-w-2xl">
      {/* @ts-ignore */}
      <Comp components={{ Preview }} />
    </article>
  );
}
