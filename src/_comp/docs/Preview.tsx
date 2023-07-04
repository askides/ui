"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { FileJson2Icon } from "lucide-react";
import * as React from "react";

type PreviewProps = {
  example: string;
  vn?: string;
  children: React.ReactNode;
};

export function Preview({ children, example, vn }: PreviewProps) {
  const [open, setOpen] = React.useState(false);

  const LazyComponent = React.useMemo(
    () => React.lazy(() => import(`../examples/${example}.tsx`)),
    [example]
  );

  const Code = React.Children.toArray(children)[0] as React.ReactElement;
  const Nui = React.Children.toArray(
    Code.props.children
  )[0] as React.ReactElement;

  return (
    <Collapsible.Root
      className="not-prose mb-5"
      open={open}
      onOpenChange={setOpen}
    >
      <div className="min-h-[250px] rounded-xl border border-black/10 relative p-3">
        <div className="flex items-center w-full justify-center min-h-[250px] py-12 px-3 md:px-10">
          {vn && (
            <div className="absolute top-3 left-3 text-xs uppercase font-semibold text-black/80 bg-black/10 px-2 py-1 rounded-md">
              {vn}
            </div>
          )}
          <React.Suspense fallback={<div>Loading..</div>}>
            <LazyComponent />
          </React.Suspense>
        </div>

        <Collapsible.Content>
          <pre className="bg-zinc-900 overflow-x-auto text-sm p-4 rounded-xl mt-2">
            <code>{Nui.props.children}</code>
          </pre>
        </Collapsible.Content>

        <div className="absolute top-0 right-5 flex items-center">
          <div className="bg-zinc-100 text-black/80 p-1 rounded-b-xl flex justify-center items-center">
            <Collapsible.Trigger asChild>
              <button className="hover:bg-zinc-200 rounded-lg p-1">
                {open ? (
                  <FileJson2Icon size={20} />
                ) : (
                  <FileJson2Icon size={20} />
                )}
              </button>
            </Collapsible.Trigger>
          </div>
        </div>
      </div>
    </Collapsible.Root>
  );
}
