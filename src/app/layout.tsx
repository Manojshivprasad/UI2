import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

// Self-hosted (latin, variable) so builds don't depend on fetching Google Fonts.
const lexend = localFont({
  src: "./fonts/Lexend-latin.woff2",
  variable: "--font-lexend",
  weight: "500 800",
  display: "swap",
});

const sourceSans = localFont({
  src: "./fonts/SourceSans3-latin.woff2",
  variable: "--font-source-sans",
  weight: "400 600",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ThoughtsCrest — Core Banking, Automation & AI for Banks",
  description:
    "ThoughtsCrest is a global technology partner for banks and financial institutions — core banking implementation, workflow automation, data migration, and AI, backed by proprietary delivery accelerators.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
