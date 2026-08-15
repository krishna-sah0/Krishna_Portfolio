export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string;
  title: string;
  /**
   * Project period for display and sorting.
   * Use "MM.YYYY" format. Omit `end` for ongoing projects.
   */
  period?: {
    /** Start date (e.g., "05.2025"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  /** URL to the source code repository. */
  sourceUrl: string;
  /** Optional public URL for a live demo. */
  demoUrl?: string;
  /** Tags/technologies for chips or filtering. */
  skills: string[];
  /** Optional rich description; Markdown and line breaks supported. */
  description?: string;
  /** Logo image URL (absolute or path under /public). */
  logo?: string;
  /** Optional large image/screenshot for the project card. */
  image?: string;
  /** Optional video URL for the project card (rendered inline). */
  video?: string;
  /** Optional link that redirects to an external video (e.g. LinkedIn). */
  videoLink?: string;
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean;
};
