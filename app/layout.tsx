import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#173d22",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gillespiestonework.vercel.app"),

  title: {
    default: "Dry Stone Walling in Argyll by P Gillespie and Son Stonework",
    template: "%s | P Gillespie and Son Stonework",
  },

  description:
    "P Gillespie and Son Stonework provide dry stone walling, dry stone dyking, traditional stonework, restoration, garden walls, entrances and bespoke stone features across Argyll, Oban and the Western Isles.",

  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Dry Stone Walling in Argyll by P Gillespie and Son Stonework",
    description:
      "Traditional dry stone dyking, walling and stonework based in Argyll, with over 40 years of experience across Oban and the Western Isles.",
    url: "https://gillespiestonework.vercel.app",
    siteName: "P Gillespie and Son Stonework",
    images: [
      {
        url: "/hero-wall-ext.png",
        width: 1200,
        height: 630,
        alt: "Dry stone walling and traditional stonework by P Gillespie and Son Stonework",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dry Stone Walling in Argyll by P Gillespie and Son Stonework",
    description:
      "Dry stone walling, dyking and traditional stonework across Argyll, Oban and the Western Isles.",
    images: ["/hero-wall-ext.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "gVYYy1KC2R5cGNXyE1bDCOeH4Ol0dI35RQXx2AB_JpI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-[#173d22] antialiased">
      <body
        className={`${cormorant.className} min-h-full bg-[#173d22] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
