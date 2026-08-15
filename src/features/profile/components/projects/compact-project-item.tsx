import { Code, GitBranch } from "lucide-react";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import type { Project } from "../../types/projects";

export function CompactProjectItem({ project }: { project: Project }) {
  return (
    <div className="group flex items-center justify-between gap-4 py-3 border-b border-edge/40 last:border-0 hover:bg-accent2/20 px-2 rounded-lg transition-colors">
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
