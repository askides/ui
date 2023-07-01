"use client";

import { Preview } from "@/_comp/docs/Preview";
import { Button } from "@/_comp/ui/Button";
import { allPosts } from "contentlayer/generated";
// import type { MDXComponents } from 'mdx/types'
import { useMDXComponent } from "next-contentlayer/hooks";

const MDXComponents = {
  Button,
  Preview,
};

export default function Page({ params }: { params: { slug: string } }) {
  const doc = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!doc) throw new Error(`Post not found for slug: ${params.slug}`);

  const MDXContent = useMDXComponent(doc.body.code);

  return (
    <div className="h-full flex-1 overflow-y-auto bg-white px-10 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">{doc.title}</h2>
        <p className="mt-1 text-lg font-light text-zinc-600">
          {doc.description}
        </p>
      </div>

      <article className="prose prose-h2:mb-0 prose-p:font-light">
        {/* @ts-ignore */}
        <MDXContent components={MDXComponents} />
      </article>
    </div>
  );
}
