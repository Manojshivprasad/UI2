import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
