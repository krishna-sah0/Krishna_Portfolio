import { Code, ExternalLink, ImageIcon, Video } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Tag } from "@/components/ui/tag";
import type { Project } from "../../types/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-edge/50 bg-accent2/30 transition-all hover:border-primary/30 hover:bg-accent2/80 hover:shadow-sm">
      
      {/* Image / Video Header */}
      <div className="relative w-full aspect-video border-b border-edge/50 bg-muted/30">
        {project.video ? (
          <video
            src={project.video}
            className="w-full h-full object-cover"
            controls
            preload="metadata"
          />
        ) : project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="flex w-full h-full items-center justify-center flex-col gap-2 text-muted-foreground/30">
            <ImageIcon className="w-8 h-8" />
            <span className="text-[10px] font-semibold uppercase tracking-widest">Add Media</span>
          </div>
        )}
      </div>

      <div className="flex items-start justify-between gap-4 p-5 pb-3">
        <div className="flex items-center gap-4">
          {project.logo ? (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-background p-1.5 ring-1 ring-edge ring-offset-1 ring-offset-background">
              <Image
                src={project.logo}
                alt={project.title}
                width={32}
                height={32}
                className="h-full w-full object-contain"
                unoptimized
              />
            </div>
          ) : (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-edge ring-offset-1 ring-offset-background">
              <Code className="h-5 w-5" />
            </div>
          )}
          <h3 className="line-clamp-2 text-lg font-semibold leading-tight text-foreground">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5">
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {project.skills && project.skills.length > 0 && (
          <ul className="mb-6 flex flex-wrap gap-1.5 mt-auto">
            {project.skills.map((skill, index) => (
              <li key={index}>
                <Tag>{skill}</Tag>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex items-center gap-3 pt-4 border-t border-edge/50">
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Code className="h-3.5 w-3.5" />
            View Code
          </a>
          
          <a
            href={project.videoLink || "#"}
            target={project.videoLink ? "_blank" : undefined}
            rel={project.videoLink ? "noopener noreferrer" : undefined}
            className="ml-auto flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:underline"
            onClick={(e) => !project.videoLink && e.preventDefault()}
          >
            <Video className="h-3.5 w-3.5" />
            Watch Video
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
