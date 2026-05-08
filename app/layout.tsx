import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gillespie-site.vercel.app"),

  title: {
    default: "P. Gillespie & Son | Dry Stone Walling & Stonework in Argyll",
    template: "%s | P. Gillespie & Son",
  },

  description:
    "P. Gillespie & Son provide dry stone walling, dyking, traditional stonework, restoration, garden walls and bespoke stone features across Argyll, Oban and the Western Isles.",

  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "P. Gillespie & Son | Dry Stone Walling & Stonework in Argyll",
    description:
      "Family-run dry stone walling, dyking and traditional stonework specialists serving Argyll, Oban and the Western Isles.",
    url: "https://gillespie-site.vercel.app",
    siteName: "P. Gillespie & Son",
    images: [
      {
        url: "/hero-wall-ext.png",
        width: 1200,
        height: 630,
        alt: "Dry stone walling and traditional stonework by P. Gillespie and Son",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "P. Gillespie & Son | Dry Stone Walling & Stonework in Argyll",
    description:
      "Dry stone walling, dyking and traditional stonework across Argyll, Oban and the Western Isles.",
    images: ["/hero-wall-ext.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${cormorant.className} min-h-full bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}