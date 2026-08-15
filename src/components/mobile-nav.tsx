"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import type { NavItem } from "@/types/nav";

import { usePathname } from "next/navigation";

export function MobileNav({
  items,
  className,
}: {
  items: NavItem[];
  className?: string;
}) {
  const pathname = usePathname();
  const sectionIds = items
    .map(item => item.href.replace("/#", ""))
    .filter(id => id && id !== "/");

  const activeSection = useActiveSection(sectionIds);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    // If we are on the home page and clicking a hash link
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const hash = href.replace("/", "");
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Optional: Update URL without triggering router navigation
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "group/toggle flex flex-col gap-1 data-[state=open]:bg-accent",
            className
          )}
          size="icon"
        >
          <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[3px] group-data-[state=open]/toggle:rotate-45" />
          <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[-3px] group-data-[state=open]/toggle:-rotate-45" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64" align="end" sideOffset={8}>
        {items.map((link) => {
          const isActive =
            activeSection === link.href ||
            (link.href === "/" && ["/", "/index"].includes(activeSection || ""));
            
          return (
            <DropdownMenuItem key={link.href} asChild>
              <Link 
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={cn(isActive && "text-foreground font-semibold bg-accent")}
              >
                {link.title}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
