import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://krishnasah0.com.np",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Services",
    href: "/#services",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Experience",
    href: "/#experience",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

export const GITHUB_USERNAME = "krishna-sah0";
export const SOURCE_CODE_GITHUB_REPO = "krishna-sah0/krishna-sah-portfolio";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/krishna-sah0/krishna-sah-portfolio";

export const UTM_PARAMS = {
  utm_source: "https://krishnasah0.com.np",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
