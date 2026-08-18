"use client";

import { DownloadIcon, TriangleDashedIcon, TypeIcon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { copyText } from "@/utils/copy";

import { KrishnaSahMark, getMarkSVG } from "./krishasah-mark";
import { getWordmarkSVG } from "./krishasah-wordmark";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu";

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR and first client render, pass children through without any
  // Radix wrapper. This prevents the hydration mismatch caused by Radix
  // injecting data-state/data-slot/style attributes only on the client.
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild suppressHydrationWarning>
        {children}
      </ContextMenuTrigger>

      <ContextMenuContent className="w-64">
        <ContextMenuItem
          onClick={() => {
            const svg = getMarkSVG(resolvedTheme === "light" ? "#000" : "#fff");
            copyText(svg);
            toast.success("Copied Mark as SVG");
          }}
        >
          <KrishnaSahMark />
          Copy Mark as SVG
        </ContextMenuItem>

        <ContextMenuItem
          onClick={() => {
            const svg = getWordmarkSVG(
              resolvedTheme === "light" ? "#000" : "#fff"
            );
            copyText(svg);
            toast.success("Copied Logotype as SVG");
          }}
        >
          <TypeIcon />
          Copy Logotype as SVG
        </ContextMenuItem>

        <ContextMenuItem asChild>
          <Link href="/blog/chanhdai-brand">
            <TriangleDashedIcon />
            Brand Guidelines
          </Link>
        </ContextMenuItem>

        <ContextMenuItem asChild>
          <a href="https://assets.chanhdai.com/chanhdai-brand.zip" download>
            <DownloadIcon />
            Download Brand Assets
          </a>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
