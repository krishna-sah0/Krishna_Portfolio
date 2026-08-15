"use client";

import { Nav } from "@/components/nav";
import { useActiveSection } from "@/hooks/use-active-section";
import type { NavItem } from "@/types/nav";

export function DesktopNav({ items }: { items: NavItem[] }) {
  // Extract just the ID strings without the /#
  const sectionIds = items
    .map(item => item.href.replace("/#", ""))
    .filter(id => id && id !== "/");

  const activeSection = useActiveSection(sectionIds);

  return <Nav className="max-sm:hidden" items={items} activeId={activeSection} />;
}
