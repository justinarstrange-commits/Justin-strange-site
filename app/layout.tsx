import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://justinstrange.com"
  ),
  title: {
    default: "Justin Strange",
    template: "%s | Justin Strange",
  },
  description:
    "Founder, builder, creator, and operator. Vancouver-based entrepreneur building at the intersection of technology, confidence, and human potential.",
  openGraph: {
    title: "Justin Strange",
    description:
      "Founder. Builder. Creator. Operator. Twenty years building businesses from first principles.",
    type: "website",
    url: "/",
    siteName: "Justin Strange",
    images: [
      {
        url: "/justin-strange.png",
        width: 1200,
        height: 630,
        alt: "Justin Strange",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Strange",
    description:
      "Founder. Builder. Creator. Operator. Twenty years building businesses from first principles.",
    images: ["/justin-strange.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body className="bg-[#0a0a0a] text-white min-h-screen flex flex-col antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
