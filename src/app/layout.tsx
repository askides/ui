import {
  Sidebar,
  SidebarMenu,
  SidebarMenuHeader,
  SidebarMenuItems,
  SidebarTitle,
} from "@/_comp/ui/Sidebar";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

import "@/styles/code-atom-dark.css";
import "../styles.css";

export const metadata = {
  title: "UI",
  description: "A bunch of reusable React Components.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="fixed bottom-0 left-0 right-0 top-0 flex gap-2 bg-black/80 px-2">
          <Sidebar>
            <SidebarTitle className="py-4">askides/ui</SidebarTitle>
            <SidebarMenu>
              <SidebarMenuHeader>Components</SidebarMenuHeader>
              <SidebarMenuItems>
                {allPosts.map((doc) => (
                  <li key={doc._id}>
                    <Link
                      href={doc.url}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/10 text-sm text-white"
                    >
                      <span>{doc.title}</span>
                    </Link>
                  </li>
                ))}
              </SidebarMenuItems>
            </SidebarMenu>
          </Sidebar>
          {children}
        </div>
      </body>
    </html>
  );
}
