import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import ClientEnvironment from "@/components/Env";

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
      <body>
        <Providers>
          <ClientEnvironment />
          {children}
        </Providers>
      </body>
    </html>
  );
}
