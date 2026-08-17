import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="relative shrink-0 border-r border-edge">
        <SimpleTooltip content="I'm from Nepal">
          <img
            src="/images/flagmov.gif"
            alt="Flag of Nepal"
            className="absolute -right-1 top-2 z-10 h-8 drop-shadow-sm sm:h-10 origin-left"
          />
        </SimpleTooltip>
        <div className="mx-[0.5px] my-[3px] relative rounded-full p-1 shadow-lg shadow-pink-500/30 transition-transform duration-500 hover:scale-105 group z-0 animate-float">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 animate-[rainbow_1s_linear_infinite] -z-10" />
          <img
            className="size-32 rounded-full border-4 border-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>


      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          {/* Removed text-3xl tailwind class decoration per user request */}
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              {USER.displayName}
            </span>
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
            </SimpleTooltip>
            {USER.namePronunciationUrl && (
              <>
                &nbsp;
                <PronounceMyName
                  className="translate-y-px"
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              </>
            )}
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
