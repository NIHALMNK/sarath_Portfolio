import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sarath Kumar | Founder Brand Strategist & LinkedIn Thought Leadership Consultant",
  description: "I specialise in helping high-value founders, startup CEOs, investors, and industry leaders build authority, trust, and commercial leverage. By turning raw operator expertise into strategic thought leadership, positioning systems, and founder-led content, I help clients attract inbound opportunities, strengthen industry authority, improve hiring outcomes, and build long-term brand equity.",
  keywords: [
    "Founder Brand Strategist",
    "LinkedIn Thought Leadership Consultant",
    "Content Strategist",
    "Ghostwriter",
    "Executive Branding",
    "Personal Branding",
    "LinkedIn Ghostwriter",
    "Sarath Kumar"
  ],
  authors: [{ name: "Sarath Kumar" }],
  openGraph: {
    title: "Sarath Kumar | Founder Brand Strategist & LinkedIn Thought Leadership Consultant",
    description: "Helping founders become industry authorities through founder positioning, thought leadership, LinkedIn strategy, personal branding, and ghostwriting.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarath Kumar | Founder Brand Strategist & LinkedIn Thought Leadership Consultant",
    description: "Helping founders become industry authorities through founder positioning, thought leadership, LinkedIn strategy, personal branding, and ghostwriting.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${playfair.variable} dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="bg-background text-foreground font-sans min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
