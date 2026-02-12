import "~/styles/globals.css";

import { type Metadata } from "next";
import { Fraunces, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "IK — Learning Synthetic Biology in Public",
    template: "%s — Iman",
  },
  description:
    "I'm Iman. I'm documenting my journey learning synthetic biology—the experiments, the failures, and everything in between.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sourceSerif.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-paper text-ink min-h-screen">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.dataset.theme='dark'}}catch(e){}})()`,
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
