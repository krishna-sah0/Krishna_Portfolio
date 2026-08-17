"use client";

import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import type { SocialLink } from "@/features/profile/types/social-links";
import { cn } from "@/lib/utils";

export function SocialLinkItem({
  icon,
  title,
  description,
  href,
  padding,
}: SocialLink) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      className={cn(
        "group/link flex cursor-pointer items-center gap-4 rounded-2xl p-4 pr-2 transition-all duration-300 select-none",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
      style={{
        border: "1.5px solid transparent",
        backgroundImage: hovered
          ? "linear-gradient(hsl(var(--accent2) / 0.6), hsl(var(--accent2) / 0.6)), linear-gradient(135deg, #a855f7, #3b82f6, #ec4899, #f59e0b)"
          : "none",
        backgroundOrigin: hovered ? "border-box" : "unset",
        backgroundClip: hovered ? "padding-box, border-box" : "unset",
        boxShadow: hovered
          ? "0 0 14px 2px rgba(168,85,247,0.2), 0 0 28px 4px rgba(59,130,246,0.10)"
          : "none",
      }}
      href={href}
      target="_blank"
      rel="noopener"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative size-12 shrink-0">
        <Image
          className={`rounded-xl object-contain ${padding && "p-[7px]"}`}
          src={icon}
          alt={title}
          width={48}
          height={48}
          quality={100}
          unoptimized
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
      </div>

      <div className="flex-1">
        <h3 className="flex items-center font-medium underline-offset-4 group-hover/link:underline">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      <ArrowUpRightIcon className="size-4 text-muted-foreground" />
    </a>
  );
}
