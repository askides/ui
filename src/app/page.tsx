"use client";

import { Markdown } from "@/_comp/docs/Markdown";
import { fetchDocOrFail } from "@/lib/content";

export default function Page() {
  const doc = fetchDocOrFail("segments/homepage");

  return (
    <div className="h-full flex-1 overflow-y-auto bg-white px-5 md:px-10 py-6 md:py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">{doc.title}</h2>
        <p className="mt-1 text-lg font-light text-zinc-600">
          {doc.description}
        </p>
      </div>

      <Markdown mdx={doc.body.code} />
    </div>
  );
}
