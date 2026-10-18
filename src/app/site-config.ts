import type { ComponentProps } from "react";
import { Cover, Footer } from "@emeki/band-site-kit";

export const SHEET_ID =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTzrVnw7gr06PvA5zJAwGaoJqM0FM98bhHa8SrqddbuIlaZmt4A6tpW2l7c4gJc7EJxhoc-_RtA-yY4/pub?output=csv";

export const coverProps: ComponentProps<typeof Cover> = {
  bandName: "Bau Stei Trio",
  logoSrc: "/logo_weiss_transparent.png",
  logoAlt: "Bau Stei Trio Logo",
  logoWidth: 768,
  logoHeight: 541,
  tagline: "Das Ensemble mit Akkordeon, Euphonium und Trompete",
  backgroundImageSrc: "/cover_bau_stei.jpg",
  backgroundImageAlt:
    "Bau Stei Trio – Ensemble mit Akkordeon, Euphonium und Trompete",
  // On mobile the natural image ratio is too short for logo + tagline, which
  // then get clipped; use a taller crop there and the full image from md up.
  backgroundAspectClassName: "aspect-[4/3] md:aspect-[2081/771]",
  overlayTopPercent: 50,
};

export const footerProps: ComponentProps<typeof Footer> = {
  copyrightName: "Bau Stei Trio",
  logoSrc: "/logo_weiss_transparent.png",
  logoAlt: "Bau Stei Trio Logo",
  logoWidth: 71,
  logoHeight: 50,
  // The logo is a white silhouette meant for photo overlays; invert it to
  // black for the footer's light background, and back to white in dark mode.
  logoClassName: "invert dark:invert-0",
  links: [
    { type: "email", href: "mailto:bausteitrio@gmail.com" },
    { type: "instagram", href: "https://instagram.com/bau_stei_trio" },
    { type: "youtube", href: "https://youtube.com/@BauSteiTrio" },
  ],
};
