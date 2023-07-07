import { Drawer, Sidebar } from "@/_comp/docs/Sidebar";
import { createButtonVariants } from "@/_comp/ui/Button";
import { cn } from "@/lib/utils";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

import "../styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          type="text/javascript"
          src="https://api.pirsch.io/pirsch.js"
          id="pirschjs"
          data-code="mDKxLKdCSIl8daXaYNNiI6GTPh2DTDH9"
        />
      </head>
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
