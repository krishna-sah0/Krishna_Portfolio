import { FileTextIcon, GlobeIcon, MapPinIcon, MarsIcon, VenusIcon } from "lucide-react";

import { USER } from "@/features/profile/data/user";
import { urlToName } from "@/utils/url";

import { Panel, PanelContent } from "../panel";
import { CurrentLocalTimeItem } from "./current-local-time-item";
import { EmailItem } from "./email-item";
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";
import { JobItem } from "./job-item";
import { PhoneItem } from "./phone-item";

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2.5">
        <JobItem
          title={USER.jobs[0].title}
          company={USER.jobs[0].company}
          website={USER.jobs[0].website}
        />

        <div className="grid gap-x-12 gap-y-2.5 sm:grid-cols-2">
          <JobItem
            title={USER.jobs[1].title}
            company={USER.jobs[1].company}
            website={USER.jobs[1].website}
          />



          <IntroItem>
            <IntroItemIcon>
              <MapPinIcon />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}
                aria-label={`Location: ${USER.address}`}
              >
                {USER.address}
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>



          <PhoneItem phoneNumber={USER.phoneNumber} />



          <EmailItem email={USER.email} />

          <IntroItem>
            <IntroItemIcon>
              <GlobeIcon />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={USER.website}
                aria-label={`Personal website: ${urlToName(USER.website)}`}
              >
                {urlToName(USER.website)}
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          <IntroItem>
            <IntroItemIcon>
              <FileTextIcon />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href="https://drive.google.com/file/d/1mDi5Tmu9b8bMWesMQlIy68Uyy4exllcQ/view?usp=sharing"
                aria-label="Resume"
                target="_blank"
              >
                Resume
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>
        </div>
      </PanelContent>
    </Panel>
  );
}
