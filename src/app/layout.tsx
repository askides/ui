import Link from "next/link";

import { Drawer, Sidebar } from "@/_comp/docs/Sidebar";
import { createButtonVariants } from "@/_comp/ui/Button";
import { cn } from "@/lib/utils";
import "@/styles/code-atom-dark.css";
import { GithubIcon } from "lucide-react";
import "../styles.css";

export const metadata = {
  metadataBase: new URL("https://ui.renatopozzi.me"),
  title: "askides/ui",
  description: "Extensible React component library built with TailwindCSS.",
  icons: {
    icon: "/icon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "askides/ui",
    description: "Extensible React component library built with TailwindCSS.",
    url: "/",
    siteName: "askides/ui",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="md:fixed bottom-0 left-0 right-0 top-0 md:flex gap-2 bg-white">
          <nav className="sticky z-20 top-0 bg-white flex items-center justify-between md:hidden px-5 h-20 border-b">
            <div className="flex items-center gap-4">
              <Drawer />
              <Link href="/" className="font-semibold text-lg">
                askides/ui
              </Link>
            </div>
            <Link
              href="https://github.com/askides/ui"
              className={cn(
                createButtonVariants({ variant: "secondary", className: "p-2" })
              )}
            >
              <GithubIcon />
            </Link>
          </nav>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
