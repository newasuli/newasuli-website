import UiloraTriloe from "@/src/components/ui/UiloraTriloe";
import Link from "next/link";
import AboutSection from "@/components/AboutSection";
import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";
import SignatureDishes from "@/components/SignatureDishes";
import OpeningHours from "@/components/OpeningHours";
import Map from "@/components/Map";
import GallerySection from "@/components/GallerySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harisiddhi Newa Suli | Home",
  description:
    "Welcome to Harisiddhi Newa Suli. Explore the best authentic Newari food, our top restaurant experience, menu, and more. Highly rated for traditional dining in town.",
  keywords: [
    "best local restaurant",
    "Newari food home",
    "delicious meals",
    "Harisiddhi Newa Suli top restaurant",
  ],
};

export default function Home() {
  return (
    <main className="bg-stone-50 overflow-x-hidden">
      {/* Hero Section - Cinematic Parallax */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/homeimg.png"
            alt="Harisiddhi Newa Suli"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-stone-900/90" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-100 mb-6 tracking-tight">
            <span className="block text-amber-400 font-light italic">
              Harisiddhi
            </span>
            <span className="block font-bold">Newa Suli</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-300/90 max-w-2xl font-light leading-relaxed italic">
            Authentic Newari cuisine crafted with ancestral recipes, served in
            the heart of cultural heritage
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/menu"
              className="group relative px-8 py-3 bg-amber-600 text-stone-50 overflow-hidden rounded-sm transition-all hover:bg-amber-700"
            >
              <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide">
                Explore Menu
                <ArrowRightCircle className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* AboutSection.tsx Section - Redesigned Asymmetric Layout */}
      <AboutSection />

      {/* Featured Menu Teaser */}
      <SignatureDishes />

      {/* Gallery Section with smoother mobile scroll */}
      <GallerySection />

      {/*opening hours section */}
      <OpeningHours />

      {/* Testimonials - Carousel Style */}
      <UiloraTriloe />

      {/* Location & Footer */}
      <Map />
    </main>
  );
}
