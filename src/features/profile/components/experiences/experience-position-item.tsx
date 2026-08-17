import { InfinityIcon } from "lucide-react";
import React from "react";

import { Markdown } from "@/components/markdown";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Tag } from "@/components/ui/tag";
import { Prose } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import type { ExperiencePosition } from "../../types/experiences";
import { ExperienceIcon } from "./experience-position-icon";
import { GlowBorder } from "./glow-border";

export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePosition;
}) {
  const { start, end } = position.employmentPeriod;
  const isOngoing = !end;

  return (
    <CollapsibleWithContext defaultOpen={position.isExpanded} asChild>
      <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        <GlowBorder>
          <CollapsibleTrigger
            className={cn(
              "block w-full text-left select-none p-2 rounded-lg",
            )}
          >
            <div className="relative z-1 mb-1 flex items-center gap-3">
              <div
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-lg",
                  "bg-muted text-muted-foreground",
                  "border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background"
                )}
                aria-hidden
              >
                <ExperienceIcon className="size-4" icon={position.icon} />
              </div>

              <h4 className="flex-1 font-medium text-balance">
                {position.title}
              </h4>

              <div
                className="shrink-0 text-muted-foreground [&_svg]:size-4"
                aria-hidden
              >
                <CollapsibleChevronsIcon />
              </div>
            </div>

            <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
              {position.employmentType && (
                <>
                  <dl>
                    <dt className="sr-only">Employment Type</dt>
                    <dd>{position.employmentType}</dd>
                  </dl>

                  <Separator
                    className="data-[orientation=vertical]:h-4"
                    orientation="vertical"
                  />
                </>
              )}

              <dl>
                <dt className="sr-only">Employment Period</dt>
                <dd className="flex items-center gap-0.5">
                  <span>{start}</span>
                  <span className="font-mono">—</span>
                  {isOngoing ? (
                    <>
                      <InfinityIcon
                        className="size-4.5 translate-y-[0.5px]"
                        aria-hidden
                      />
                      <span className="sr-only">Present</span>
                    </>
                  ) : (
                    <span>{end}</span>
                  )}
                </dd>
              </dl>
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-fade-up data-[state=open]:animate-collapsible-fade-down">
            {position.description && (
              <Prose className="pt-2 pl-9 pr-2 pb-2">
                <Markdown>{position.description}</Markdown>
              </Prose>
            )}

            {Array.isArray(position.skills) && position.skills.length > 0 && (
              <ul className="flex flex-wrap gap-1.5 pt-2 pl-9 pb-2">
                {position.skills.map((skill, index) => (
                  <li key={index} className="flex">
                    <Tag>{skill}</Tag>
                  </li>
                ))}
              </ul>
            )}
          </CollapsibleContent>
        </GlowBorder>
      </div>
    </CollapsibleWithContext>
  );
}
