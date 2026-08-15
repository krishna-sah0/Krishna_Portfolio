import dynamic from "next/dynamic";

import { KrishnaSahMark } from "@/components/krishasah-mark";
import { KrishnaSahWordmark } from "@/components/krishasah-wordmark";

import { Panel, PanelHeader, PanelTitle } from "./panel";

const BrandContextMenu = dynamic(() =>
  import("@/components/brand-context-menu").then((mod) => mod.BrandContextMenu)
);

export function Brand() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Brand</span>
        </PanelTitle>
      </PanelHeader>

      <BrandContextMenu>
        <div className="grid grid-cols-[2rem_1fr]">
          <div className="flex h-40 items-center justify-center border-r border-dashed border-edge bg-background">
            <span className="rotate-270 text-sm text-muted-foreground select-none">
              Mark
            </span>
          </div>

          <div className="screen-line-after flex items-center justify-center pr-8 after:z-1">
            <KrishnaSahMark className="h-20 w-auto sm:h-28" />
          </div>

          <div className="flex h-28 items-center justify-center border-r border-dashed border-edge bg-background">
            <span className="rotate-270 text-sm text-muted-foreground select-none">
              Logotype
            </span>
          </div>

          <div className="screen-line-after flex items-center justify-center pr-8 after:z-1">
            <KrishnaSahWordmark className="h-18 lg:h-28" />
          </div>
        </div>
      </BrandContextMenu>
    </Panel>
  );
}
