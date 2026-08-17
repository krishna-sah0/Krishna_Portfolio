"use client";

import { Code, GitBranch } from "lucide-react";
import React, { useState } from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import type { Project } from "../../types/projects";

export function CompactProjectItem({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group flex items-center justify-between gap-4 py-3 px-2 rounded-lg transition-all duration-300 border-b border-edge/40 last:border-0"
      style={{
        background: hovered ? "hsl(var(--accent2) / 0.2)" : "transparent",
        outline: hovered ? "1.5px solid transparent" : "none",
        backgroundImage: hovered
          ? "linear-gradient(hsl(var(--accent2) / 0.2), hsl(var(--accent2) / 0.2)), linear-gradient(135deg, #a855f7, #3b82f6, #ec4899, #f59e0b)"
          : "none",
        backgroundOrigin: hovered ? "border-box" : "unset",
        backgroundClip: hovered ? "padding-box, border-box" : "unset",
        border: hovered ? "1.5px solid transparent" : "none",
        borderBottom: !hovered ? "1px solid hsl(var(--edge) / 0.4)" : "1.5px solid transparent",
        boxShadow: hovered
          ? "0 0 10px 1px rgba(168,85,247,0.15)"
          : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground ring-1 ring-edge">
          <GitBranch className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="truncate text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h4>
          <p className="truncate text-xs text-muted-foreground">
            {project.description}
          </p>
        </div>
      </div>

      <SimpleTooltip content="View Source Code">
        <a
          href={project.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-accent2 hover:text-foreground transition-colors"
        >
          <Code className="h-4 w-4" />
          <span className="sr-only">View Source</span>
        </a>
      </SimpleTooltip>
    </div>
  );
}
