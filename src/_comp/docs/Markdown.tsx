import { Preview } from "@/_comp/docs/Preview";
import { Button } from "@/_comp/ui/Button";
import { useMDXComponent } from "next-contentlayer/hooks";

export const MDXComponents = {
  Button,
  Preview,
};

export function Markdown({ mdx }: { mdx: string }) {
  const Comp = useMDXComponent(mdx);

  return (
    <article className="prose prose-h2:mb-2 prose-p:font-light max-w-2xl">
      {/* @ts-ignore */}
      <Comp components={MDXComponents} />
    </article>
  );
}
