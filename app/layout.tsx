import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DotGrid from "@/components/DotGrid";
import TargetCursor from "@/components/TargetCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Source Week | BMSCE IEEE Computer Society",
  description:
    "Join BMSCE IEEE CS for a week of workshops, an industry visit, a contribution sprint, and the RepoGenesis 24-hour hackathon.",
  openGraph: {
    title: "Open Source Week | BMSCE IEEE Computer Society",
    description:
      "Workshops, Industry Visit, Contribution Sprint, and RepoGenesis Hackathon.",
    url: "https://osweek.bmsceieeecs.in",
    siteName: "BMSCE IEEE CS Open Source Week",
    images: [
      {
        url: "https://osweek.bmsceieeecs.in/title.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} relative`}>
        <div className="fixed inset-0 -z-10 w-full h-screen bg-black">
          <DotGrid
            dotSize={2}
            gap={20}
            baseColor="#064e3b"
            activeColor="#34d399"
            proximity={40}
            shockRadius={250}
            shockStrength={0.5}
            resistance={1000}
            returnDuration={0.5}
          />
        </div>

        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <TargetCursor />

        {children}
      </body>
    </html>
  );
}
