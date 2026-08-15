import { GeistMono } from "geist/font/mono";
import {
  // IBM_Plex_Mono as FontMono,
  IBM_Plex_Sans as FontSans,
  Great_Vibes as FontCursive
} from "next/font/google";

export const fontSans = FontSans({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontCursive = FontCursive({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-cursive",
});

// export const fontMono = FontMono({
//   weight: ["400", "500", "600"],
//   display: "swap",
//   subsets: ["latin"],
//   variable: "--font-mono",
// });

export const fontMono = GeistMono;
