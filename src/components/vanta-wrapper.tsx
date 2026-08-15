"use client";

import dynamic from "next/dynamic";

const VantaBirdsBackground = dynamic(
  () => import("@/components/vanta-birds-background").then((mod) => mod.VantaBirdsBackground),
  { ssr: false }
);

export function VantaWrapper() {
  return <VantaBirdsBackground />;
}
