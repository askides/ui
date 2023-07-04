"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { GithubIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Button } from "../ui/Button";
import { NavigationEvents } from "./NavigationEvents";

function Item({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center gap-3 rounded-lg px-5 py-0.5 font-base text-sm text-zinc-500 hover:text-violet-500 transition-colors duration-150"
      >
        <span>{label}</span>
      </Link>
    </li>
  );
}

function SidebarContent() {
  return (
    <>
      <div className="py-4 flex items-center justify-between gap-3 px-5 text-lg font-semibold text-black">
        <Link href="/">askides/ui</Link>
        <Link
          href="https://github.com/askides/ui"
          className="hover:text-violet-500 transition-colors duration-150"
        >
          <GithubIcon size={20} />
        </Link>
      </div>
      <div data-role="sidebar-menu">
        <div className="px-5 py-2 text-xs font-bold tracking-tighter text-zinc-800 uppercase">
          Introduction
        </div>
        <ul className="space-y-1">
          <Item label="Getting Started" href="/" />
        </ul>
      </div>
      <div data-role="sidebar-menu" className="mt-5">
        <div className="px-5 py-2 text-xs font-bold tracking-tighter text-zinc-800 uppercase">
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
        <div className="px-5 py-2 text-xs font-bold tracking-tighter text-zinc-800 uppercase">
          Charts
        </div>
        <ul className="space-y-1">
          <Item label="Bar Chart" href="/docs/bar-chart" />
        </ul>
      </div>
      <div data-role="sidebar-menu" className="mt-5">
        <div className="px-5 py-2 text-xs font-bold tracking-tighter text-zinc-800 uppercase">
          Ideas
        </div>
        <ul className="space-y-1">
          <li>
            <Link
              href="https://github.com/askides/ui/issues/new"
              className="flex rounded-lg px-5 py-0.5 gap-1.5 hover:underline items-center text-sm text-violet-500"
            >
              <span>Drop Yours!</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export function Sidebar() {
  return (
    <aside className="border-r w-56 overflow-y-auto bg-white hidden md:block">
      <SidebarContent />
    </aside>
  );
}

export function Drawer() {
  const [open, setOpen] = React.useState(false);
  const onNavigate = React.useCallback(() => setOpen(false), []);

  return (
    <>
      <React.Suspense fallback={null}>
        <NavigationEvents onNavigate={onNavigate} />
      </React.Suspense>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <Button variant="secondary" className="p-2">
            <MenuIcon />
          </Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/70 fixed z-30 inset-0" />
          <Dialog.Content className="fixed z-40 top-0 bottom-0 left-0 border-r w-56 overflow-y-auto bg-white">
            <SidebarContent />
            {/* <Dialog.Close>Close</Dialog.Close> */}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
