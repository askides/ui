import {
  Sidebar,
  SidebarMenu,
  SidebarMenuHeader,
  SidebarMenuItem,
  SidebarMenuItems,
  SidebarTitle,
} from "@/_comp/ui/Sidebar";
import { FilePieChartIcon } from "lucide-react";
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
                <SidebarMenuItem>
                  <FilePieChartIcon size={20} />
                  <span>Button</span>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <FilePieChartIcon size={20} />
                  <span>Card</span>
                </SidebarMenuItem>
              </SidebarMenuItems>
            </SidebarMenu>
          </Sidebar>
          {children}
        </div>
      </body>
    </html>
  );
}
