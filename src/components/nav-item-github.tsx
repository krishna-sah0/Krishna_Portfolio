import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SOURCE_CODE_GITHUB_URL } from "@/config/site";

import { Icons } from "./icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export async function NavItemGitHub() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1 font-semibold" asChild>
          <a href={SOURCE_CODE_GITHUB_URL} target="_blank" rel="noopener">
            <Icons.github className="h-4 w-4" />
            <span>GitHub</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </TooltipTrigger>

      <TooltipContent>
        <p>Coding since 14y/o</p>
      </TooltipContent>
    </Tooltip>
  );
}
