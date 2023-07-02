import Link from "next/link";

import "@/styles/code-atom-dark.css";
import { GithubIcon, HeartIcon } from "lucide-react";
import "../styles.css";

export const metadata = {
  title: "askides/ui",
  description: "Extensible React component library built with TailwindCSS.",
  icons: {
    icon: "/icon.svg",
  },
};

function Item({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center gap-3 rounded-lg px-3 py-0.5 font-base text-sm text-zinc-500 hover:text-violet-500 transition-colors duration-150"
      >
        <span>{label}</span>
      </Link>
    </li>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="fixed bottom-0 left-0 right-0 top-0 flex gap-2 bg-white px-2">
          <aside className="border-r w-56 overflow-y-auto">
            <div className="py-4 flex items-center justify-between gap-3 px-3 text-lg font-semibold text-black">
              <Link href="/">askides/ui</Link>
              <Link
                href="https://github.com/askides/ui"
                className="hover:text-violet-500 transition-colors duration-150"
              >
                <GithubIcon size={20} />
              </Link>
            </div>
            <div data-role="sidebar-menu">
              <div className="px-3 py-2 text-xs font-bold tracking-tighter text-zinc-800 uppercase">
                Introduction
              </div>
              <ul className="space-y-1">
                <Item label="Getting Started" href="/" />
              </ul>
            </div>
            <div data-role="sidebar-menu" className="mt-5">
              <div className="px-3 py-2 text-xs font-bold tracking-tighter text-zinc-800 uppercase">
                Components
              </div>
              <ul className="space-y-1">
                <Item label="Button" href="/docs/button" />
                <Item label="Card" href="/docs/card" />
                <Item label="Input" href="/docs/input" />
                <Item label="Label" href="/docs/label" />
                <Item label="Select" href="/docs/select" />
                <Item label="Textarea" href="/docs/textarea" />
              </ul>
            </div>
            <div data-role="sidebar-menu" className="mt-5">
              <div className="px-3 py-2 text-xs font-bold tracking-tighter text-zinc-800 uppercase">
                Charts
              </div>
              <ul className="space-y-1">
                <Item label="Bar Chart" href="/docs/bar-chart" />
              </ul>
            </div>
            <div data-role="sidebar-menu" className="mt-5">
              <div className="px-3 py-2 text-xs font-bold tracking-tighter text-zinc-800 uppercase">
                Ideas
              </div>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="https://github.com/askides/ui/issues/new"
                    className="flex rounded-lg px-3 py-0.5 gap-1.5 hover:underline items-center font-medium text-sm text-violet-500"
                  >
                    <span>Drop Yours!</span>
                    <HeartIcon size={16} />
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
          {children}
        </div>
      </body>
    </html>
  );
}
