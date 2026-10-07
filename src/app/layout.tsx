import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bishoy Osama Fawzy | Junior Penetration Tester",
  description:
    "I find the weak spots in your website before attackers do. Junior Penetration Tester specializing in Web Application Security (OWASP Top 10) and custom Python security automation.",
  authors: [{ name: "Bishoy Osama Fawzy" }],
  keywords: [
    "Bishoy Osama",
    "Bishoy Osama Fawzy",
    "Junior Penetration Tester",
    "Web Security",
    "AppSec",
    "Vulnerability Assessment",
    "OWASP Top 10",
    "Burp Suite",
    "Freelance Security Tester",
    "Egypt",
  ],
  metadataBase: new URL("https://bishoyosama.dev"),
  openGraph: {
    title: "Bishoy Osama Fawzy | Junior Penetration Tester",
    description:
      "I find the weak spots in your website before attackers do. Web application penetration testing, plain-English reporting, and developer-friendly remediation.",
    url: "https://bishoyosama.dev",
    siteName: "Bishoy Osama Fawzy Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bishoy Osama Fawzy | Junior Penetration Tester",
    description:
      "I find the weak spots in your website before attackers do. Web application penetration testing and custom Python security automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0F14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0B0F14] text-[#F1F5F9] font-sans antialiased selection:bg-[#2DD4BF]/20 selection:text-[#2DD4BF]">
        {children}
      </body>
    </html>
  );
}
