"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { FEATURED_PROJECTS, MORE_PROJECTS } from "../../data/projects";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ProjectCard } from "./project-card";
import { CompactProjectItem } from "./compact-project-item";
import { Button } from "@/components/ui/button";

export function Projects() {
  const [showAllMore, setShowAllMore] = useState(false);
  const initialMoreCount = 4;
  
  const displayedMoreProjects = showAllMore 
    ? MORE_PROJECTS 
    : MORE_PROJECTS.slice(0, initialMoreCount);

  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Featured Projects</span>
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({FEATURED_PROJECTS.length})
          </sup>
        </PanelTitle>
        <p className="text-sm text-muted-foreground mt-2">
          A selection of my most significant and impactful work.
        </p>
      </PanelHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {FEATURED_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {MORE_PROJECTS.length > 0 && (
        <div className="mt-12 pt-8 border-t border-edge/40">
          <PanelHeader className="mb-6">
            <PanelTitle>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">More Projects</span>
              <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
                ({MORE_PROJECTS.length})
              </sup>
            </PanelTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Other notable assignments, scripts, and explorations.
            </p>
          </PanelHeader>

          <div className="flex flex-col gap-1 bg-background/50 rounded-xl border border-edge/30 p-2">
            {displayedMoreProjects.map((project) => (
              <CompactProjectItem key={project.id} project={project} />
            ))}
          </div>

          {MORE_PROJECTS.length > initialMoreCount && (
            <div className="mt-6 flex justify-center">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowAllMore(!showAllMore)}
                className="gap-2 rounded-full px-6"
              >
                {showAllMore ? (
                  <>Show Less <ChevronUp className="h-4 w-4" /></>
                ) : (
                  <>Show {MORE_PROJECTS.length - initialMoreCount} More <ChevronDown className="h-4 w-4" /></>
                )}
              </Button>
            </div>
          )}
        </div>
      )}
    </Panel>
  );
}
