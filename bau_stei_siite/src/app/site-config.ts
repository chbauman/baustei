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
  backgroundImageWidth: 2081,
  backgroundImageHeight: 771,
  overlayTopPercent: 56,
};

export const footerProps: ComponentProps<typeof Footer> = {
  copyrightName: "Bau Stei Trio",
  links: [
    { type: "email", href: "mailto:bausteitrio@gmail.com" },
    { type: "instagram", href: "https://instagram.com/bau_stei_trio" },
    { type: "youtube", href: "https://youtube.com/@BauSteiTrio" },
  ],
};
