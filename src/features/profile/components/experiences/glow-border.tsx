"use client";

import { useState } from "react";

export function GlowBorder({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-lg transition-all duration-300"
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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}
