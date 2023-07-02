import { allPosts } from "contentlayer/generated";

export function fetchDocOrFail(segment: string) {
  const doc = allPosts.find((post) => post._raw.flattenedPath === segment);

  if (!doc) throw new Error(`Post not found for slug: ${segment}`);

  return doc;
}
