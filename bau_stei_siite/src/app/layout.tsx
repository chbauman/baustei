import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bau-stei.ch"),
  title: {
    default: "Bau Stei Trio",
    template: "%s | Bau Stei Trio",
  },
  description:
    "Das Bau Stei Trio aus Schaffhausen – ein Ensemble mit Akkordeon, Euphonium und Trompete. Volkstümliche Musik, Klassik, Film- und Pop-Musik für Auftritte und Anlässe.",
  keywords: [
    "Bau Stei Trio",
    "Musikensemble",
    "Schaffhausen",
    "Akkordeon",
    "Euphonium",
    "Trompete",
    "Volkstümliche Musik",
    "Livemusik",
    "Schweiz",
  ],
  alternates: {
    canonical: "https://bau-stei.ch",
  },
  openGraph: {
    title: "Bau Stei Trio",
    description:
      "Das Bau Stei Trio aus Schaffhausen – ein Ensemble mit Akkordeon, Euphonium und Trompete.",
    type: "website",
    locale: "de_CH",
    url: "https://bau-stei.ch",
    siteName: "Bau Stei Trio",
    images: [
      {
        url: "/og_image.jpg",
        width: 1200,
        height: 630,
        alt: "Bau Stei Trio – Akkordeon, Euphonium und Trompete",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bau Stei Trio",
    description:
      "Das Bau Stei Trio aus Schaffhausen – ein Ensemble mit Akkordeon, Euphonium und Trompete.",
    images: ["/og_image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Bau Stei Trio",
  description:
    "Das Bau Stei Trio aus Schaffhausen – ein Ensemble mit Akkordeon, Euphonium und Trompete.",
  url: "https://bau-stei.ch",
  email: "bausteitrio@gmail.com",
  sameAs: ["https://instagram.com/bau_stei_trio"],
  genre: ["Volkstümliche Musik", "Klassik", "Filmmusik", "Pop"],
  member: [
    { "@type": "Person", name: "Finn Steinemann", roleName: "Euphonium" },
    { "@type": "Person", name: "Christian Baumann", roleName: "Trompete" },
    { "@type": "Person", name: "Hansueli Baumann", roleName: "Akkordeon" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
