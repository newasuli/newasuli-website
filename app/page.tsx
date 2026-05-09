"use client";
import UiloraTriloe from "@/src/components/ui/UiloraTriloe";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import AboutSection from "@/components/AboutSection"
import Image from "next/image";
import {
  ArrowRightCircle,
  Diamond,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import SignatureDishes from "@/components/SignatureDishes";
import OpeningHours from "@/components/OpeningHours";

const GALLERY_IMAGES = [1, 2, 3, 4, 5, 6];

export default function Home() {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (galleryRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollGallery = (direction: "left" | "right") => {
    if (galleryRef.current && galleryRef.current.firstElementChild) {
      const scrollAmount = galleryRef.current.firstElementChild.clientWidth + 16;
      galleryRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
     <AboutSection/>

      {/* Featured Menu Teaser */}
    <SignatureDishes />

      {/* Gallery Section with smoother mobile scroll */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex flex-col items-center mb-16">
            <span className="text-amber-700 text-sm tracking-[0.3em] uppercase mb-4">
              Visual Journey
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 mb-6">
              Gallery
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-stone-300" />
              <Diamond className="text-amber-600 w-3 h-3" />
              <div className="w-16 h-px bg-stone-300" />
            </div>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => scrollGallery("left")}
              disabled={!canScrollLeft}
              className={`absolute top-1/2 left-2 z-20 text-white rounded-full p-2 backdrop-blur-lg border border-white/10 shadow-lg transition ${
                canScrollLeft 
                  ? "bg-black/40 hover:bg-black/70 cursor-pointer" 
                  : "bg-black/20 opacity-50 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={28} />
            </button>

            <button
              type="button"
              onClick={() => scrollGallery("right")}
              disabled={!canScrollRight}
              className={`absolute top-1/2 right-2 z-20 text-white rounded-full p-2 backdrop-blur-lg border border-white/20 shadow-lg transition ${
                canScrollRight 
                  ? "bg-black/40 hover:bg-black/70 cursor-pointer" 
                  : "bg-black/20 opacity-50 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={28} />
            </button>

            <div
              ref={galleryRef}
              onScroll={checkScroll}
              className="w-full flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth relative no-scrollbar touch-pan-x"
            >
              {GALLERY_IMAGES.map((num) => (
                <div
                  key={num}
                  className="relative overflow-hidden rounded-sm group cursor-pointer h-[400px] sm:h-[450px] lg:h-[500px] w-3/4 sm:w-1/2 lg:w-1/4 shrink-0 snap-start"
                >
                  <Image
                    src={`/images/newasuli_img_${num}.jpg`}
                    alt={`Gallery image ${num}`}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


        {/*opening hours section */}
      <OpeningHours />


      {/* Testimonials - Carousel Style */}
      <UiloraTriloe />

      {/* Location & Footer */}
      <section className="bg-stone-900 text-stone-300">
        <div className="h-[400px] w-full relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.724530092683!2d85.33673557617271!3d27.633047028763382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1738dc92c46f%3A0xac25e0e6e6e8c67e!2sHarisiddhi%20Newa%20Suli!5e0!3m2!1sen!2snp!4v1765278955274!5m2!1sen!2snp"
            allowFullScreen
            loading="lazy"
            className="w-full h-full border-0"
          />
          {/* <div className="absolute top-6 left-6 bg-stone-900/90 backdrop-blur p-6 rounded-sm max-w-sm">
            <h3 className="text-stone-100 font-serif text-xl mb-2">Visit Us</h3>
            <p className="text-sm leading-relaxed mb-4">
              Harisiddhi, Lalitpur
              <br />
              Kathmandu Valley, Nepal
            </p>
            <Link
              href="https://maps.google.com"
              target="_blank"
              className="text-amber-500 hover:text-amber-400 text-sm font-medium inline-flex items-center gap-1"
            >
              Get Directions <ArrowRightCircle />
            </Link>
          </div> */}
        </div>
      </section>
    </main>
  );
}
