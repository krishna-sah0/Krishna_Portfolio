"use client";

import dynamic from "next/dynamic";

// `ssr: false` is only valid inside a Client Component.
// This wrapper is imported by the Server Component `SiteHeader`
// to avoid the hydration mismatch caused by dark-mode class differences.
const NavItemGitHubDynamic = dynamic(
  () =>
    import("@/components/nav-item-github").then((mod) => mod.NavItemGitHub),
  { ssr: false }
);

export function NavItemGitHubWrapper() {
  return <NavItemGitHubDynamic />;
}
