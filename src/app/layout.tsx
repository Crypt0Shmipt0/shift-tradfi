import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHIFT | The Home of Tokenized Leveraged Stocks",
  description:
    "Trade tokenized stocks and leveraged equity tokens 24/7 — non-liquidatable, fully backed, and composable across DeFi.",
  keywords: [
    "tokenized stocks", "leveraged tokens", "RWA", "real-world assets",
    "no liquidation", "DeFi", "Solana", "SHIFT",
  ],
  openGraph: {
    type: "website",
    title: "SHIFT | The Home of Tokenized Leveraged Stocks",
    description:
      "Trade tokenized stocks and leveraged equity tokens 24/7 — non-liquidatable, fully backed, and composable across DeFi.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${inter.variable} ${mono.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-16YK1Q7QHD"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-16YK1Q7QHD');
          `}
        </Script>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
