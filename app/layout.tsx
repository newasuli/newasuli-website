import type { Metadata } from "next";
import { Poppins, Newsreader } from "next/font/google";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/navbar";

const AdModal = dynamic(() => import("@/components/ad_modal"));

const poppins = Poppins({
  variable: "--font-poppins",
  style: ["normal", "italic"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
  fallback: ["serif"],
  preload: true,
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newasuli.com"),
  title: "Harisiddhi Newa Suli | Best Authentic Newari Restaurant in town",
  description:
    "Experience the best authentic Newari cuisine at Harisiddhi Newa Suli. We serve delicious traditional food, offering the best dining experience in town.",
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
  openGraph: {
    title: "Harisiddhi Newa Suli | Best Authentic Newari Restaurant in town",
    description:
      "Experience the best authentic Newari cuisine at Harisiddhi Newa Suli.",
    url: "https://newasuli.com",
    siteName: "Harisiddhi Newa Suli",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Harisiddhi Newa Suli Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harisiddhi Newa Suli | Best Authentic Newari Restaurant",
    description: "Experience the best authentic Newari cuisine at Harisiddhi Newa Suli.",
    images: ["/images/logo.png"],
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
      </body>
    </html>
  );
}
