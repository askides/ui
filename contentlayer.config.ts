import { defineDocumentType, makeSource } from "contentlayer/source-files";
import fs from "node:fs";
import path from "node:path";
import rehypePrettyCode from "rehype-pretty-code";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/docs/${post._raw.flattenedPath}`,
    },
  },
}));

function rehypePreviews() {
  return async (tree: any) => {
    visit(tree, (node: any) => {
      if (node.name === "Preview") {
        const name = node.attributes.find(
          (attribute: any) => attribute.name === "example"
        );

        const _comp = fs.readFileSync(
          path.join(process.cwd(), `/src/_comp/examples/${name.value}.tsx`),
          "utf-8"
        );

        console.log("Name", name.value);
        console.log("Source", _comp);

        node.children?.push(
          u("element", {
            tagName: "pre",
            properties: {
              __src__: `/src/_comp/examples/${name.value}.tsx`,
            },
            children: [
              u("element", {
                tagName: "code",
                properties: {
                  className: ["language-tsx"],
                },
                children: [
                  {
                    type: "text",
                    value: _comp,
                  },
                ],
              }),
            ],
          })
        );
      }
    });
  };
}

export default makeSource({
  contentDirPath: "src/docs",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypePreviews, [rehypePrettyCode, { theme: "dracula" }]],
  },
});
