import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";

export function Nav({
  items,
  activeId,
  className,
}: {
  items: NavItem[];
  activeId?: string;
  className?: string;
}) {
  return (
    <div 
      className={cn(
        "relative rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500", 
        className
      )}
    >
      <nav
        data-active-id={activeId}
        className="flex items-center gap-6 rounded-full bg-blue-50/90 dark:bg-slate-950/90 px-6 py-2.5 backdrop-blur-md"
      >
        {items.map(({ title, href }) => {
          const active =
            activeId === href ||
            (href === "/" // Home page
              ? ["/", "/index"].includes(activeId || "")
              : activeId?.startsWith(href));

          return (
            <NavItem key={href} href={href} active={active}>
              {title}
            </NavItem>
          );
        })}
      </nav>
    </div>
  );
}

import { usePathname } from "next/navigation";

export function NavItem({
  active,
  href,
  onClick,
  ...props
}: React.ComponentProps<typeof Link> & {
  active?: boolean;
}) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // If we are on the home page and clicking a hash link
    const hrefStr = href.toString();
    if (pathname === "/" && hrefStr.startsWith("/#")) {
      e.preventDefault();
      const hash = hrefStr.replace("/", "");
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Optional: Update URL without triggering router navigation
        window.history.pushState(null, "", hrefStr);
      }
    }
    if (onClick) onClick(e);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        "font-mono text-sm font-semibold text-muted-foreground transition-colors duration-300 hover:text-foreground",
        active && "text-blue-600 dark:text-blue-400 drop-shadow-sm"
      )}
      {...props}
    />
  );
}
