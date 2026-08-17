import dynamic from "next/dynamic";
import Link from "next/link";

import { DesktopNav } from "@/components/desktop-nav";
import { NavItemGitHub } from "@/components/nav-item-github";
import { MAIN_NAV } from "@/config/site";
import { getAllPosts } from "@/features/blog/data/posts";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Icons } from "./icons";
import { SiteHeaderMark } from "./site-header-mark";
import { SiteHeaderWrapper } from "./site-header-wrapper";
import { ToggleTheme } from "./toggle-theme";

const BrandContextMenu = dynamic(() =>
  import("@/components/brand-context-menu").then((mod) => mod.BrandContextMenu)
);

const CommandMenu = dynamic(() =>
  import("@/components/command-menu").then((mod) => mod.CommandMenu)
);

const MobileNav = dynamic(() =>
  import("@/components/mobile-nav").then((mod) => mod.MobileNav)
);

export function SiteHeader() {
  const posts = getAllPosts();

  return (
    <SiteHeaderWrapper
      className={cn(
        "sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm transition-all duration-300 border-b border-transparent",
        "data-[affix=true]:border-edge data-[affix=true]:shadow-sm"
      )}
    >
      <div
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-2 px-4 sm:gap-4 sm:pl-6 sm:pr-2"
        data-header-container
      >
        <BrandContextMenu>
          <Link
            className="flex items-center gap-0 [&_svg]:h-11 [&_img]:h-11 [&_img]:w-auto [&>div]:h-11 [&>div]:w-11"
            href="/"
            aria-label="Home"
          >
            <SiteHeaderMark />
            <span className="font-cursive text-2xl font-black tracking-wider whitespace-nowrap mt-1 pr-2 -ml-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text [-webkit-text-stroke:1px_transparent]">Krishna Sah</span>
          </Link>
        </BrandContextMenu>

        <div className="flex-1" />

        <DesktopNav items={MAIN_NAV} />

        <div className="flex items-center gap-2 max-sm:ml-auto">
          {/* Command Menu */}
          <div className="relative rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="flex items-center justify-center rounded-full bg-blue-50/90 dark:bg-slate-950/90 backdrop-blur-md">
              <CommandMenu posts={posts} />
            </div>
          </div>

          {/* GitHub */}
          <div className="relative rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hidden sm:block">
            <div className="flex items-center justify-center rounded-full bg-blue-50/90 dark:bg-slate-950/90 backdrop-blur-md">
              <NavItemGitHub />
            </div>
          </div>

          {/* Hire Me */}
          <div className="relative rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="flex items-center justify-center rounded-full bg-blue-50/90 dark:bg-slate-950/90 px-1 py-1 backdrop-blur-md">
              <Link href="/#contact">
                <Button size="sm" className="h-8 gap-1 rounded-full font-semibold">
                  Hire Me
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="relative rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hidden sm:block">
            <div className="flex items-center justify-center rounded-full bg-blue-50/90 dark:bg-slate-950/90 backdrop-blur-md">
              <ToggleTheme />
            </div>
          </div>

          {/* Mobile Nav */}
          <div className="relative rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 sm:hidden">
            <div className="flex items-center justify-center rounded-full bg-blue-50/90 dark:bg-slate-950/90 backdrop-blur-md">
              <MobileNav items={MAIN_NAV} />
            </div>
          </div>
        </div>
      </div>
    </SiteHeaderWrapper>
  );
}
