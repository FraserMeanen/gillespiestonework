import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "P. Gillespie & Son Stonework",
  description: "Dry stone dykking and stonework in Argyll, Oban and the Western Isles.",
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