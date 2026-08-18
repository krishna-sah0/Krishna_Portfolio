import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { About } from "@/features/profile/components/about";
import { Awards } from "@/features/profile/components/awards";
import { Blog } from "@/features/profile/components/blog";
import { Brand } from "@/features/profile/components/brand";
import { Certifications } from "@/features/profile/components/certifications";
import { Experiences } from "@/features/profile/components/experiences";
import { GitHubContributions } from "@/features/profile/components/github-contributions";
import { Overview } from "@/features/profile/components/overview";
import { ProfileCover } from "@/features/profile/components/profile-cover";
import { ProfileHeader } from "@/features/profile/components/profile-header";
import { Projects } from "@/features/profile/components/projects";
import { Services } from "@/features/profile/components/services";
import { SocialLinks } from "@/features/profile/components/social-links";
import { TeckStack } from "@/features/profile/components/teck-stack";
import { TestimonialsMarquee } from "@/features/profile/components/testimonials-marquee";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto w-[95%] md:max-w-5xl">
        <ProfileCover />
        <ProfileHeader />
        <Separator />

        <ScrollReveal delay={0.2}>
          <Overview />
        </ScrollReveal>
        <Separator />

        <ScrollReveal delay={0.2}>
          <div id="about">
            <About />
          </div>
        </ScrollReveal>
        <Separator />

        <ScrollReveal delay={0.2}>
          <div id="services">
            <Services />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div id="skills">
            <TeckStack />
          </div>
        </ScrollReveal>
        <Separator />

        <ScrollReveal delay={0.2}>
          <div id="projects">
            <Projects />
          </div>
        </ScrollReveal>
        <Separator />

        <ScrollReveal delay={0.2}>
          <div id="experience">
            <Experiences />
          </div>
        </ScrollReveal>
        <Separator />

        <ScrollReveal delay={0.2}>
          <div id="github">
            <GitHubContributions />
          </div>
        </ScrollReveal>
        <Separator />

        <ScrollReveal delay={0.2}>
          <div id="testimonials">
            <TestimonialsMarquee />
          </div>
        </ScrollReveal>
        <Separator />

        <ScrollReveal delay={0.2}>
          <div id="contact">
            <SocialLinks />
            <Separator />
            <Brand />
          </div>
        </ScrollReveal>
        <Separator />
      </div>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
