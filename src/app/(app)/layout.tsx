import dynamic from "next/dynamic";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VantaWrapper } from "@/components/vanta-wrapper";

const ScrollTop = dynamic(() =>
  import("@/components/scroll-top").then((mod) => mod.ScrollTop)
);

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VantaWrapper />
      <SiteHeader />
      <main className="px-2">{children}</main>
      <SiteFooter />
      <ScrollTop />
    </>
  );
}
