import type { Metadata } from "next";
import { Poppins, Newsreader } from "next/font/google";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/navbar";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import {
  defaultDescription,
  defaultImage,
  defaultTitle,
  siteName,
  siteUrl,
} from "@/lib/seo";

const AdModal = dynamic(() => import("@/components/ad_modal"));

const poppins = Poppins({
  variable: "--font-poppins",
  style: ["normal", "italic"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
  fallback: ["serif"],
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Harisiddhi Newa Suli",
  },
  description: defaultDescription,
  keywords: [
    "Newari restaurant",
    "best food",
    "best restaurant near me",
    "Harisiddhi Newa Suli",
    "authentic Nepali food",
    "top restaurants",
    "dining",
    "lunch",
    "dinner",
    "delicious food",
    "traditional Newari cuisine",
    "food in Harisiddhi",
    "Lalitpur restaurants",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: defaultImage,
        width: 800,
        height: 600,
        alt: `${siteName} Logo`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${newsreader.variable} antialiased`}
      >
        <AdModal />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
