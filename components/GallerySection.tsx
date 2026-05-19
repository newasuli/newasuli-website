"use client";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

import { useRef, useState, useEffect } from "react";

const GALLERY_IMAGES = [1, 2, 3, 4, 5, 6];
const GallerySection = () => {


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
      // The scroll event is needed to update the buttons directly during scroll
    }
  };

  return (
    <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex flex-col items-center mb-16">
            <span className="text-primary-dark text-sm tracking-[0.3em] uppercase mb-4">
              Visual Journey
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 mb-2">
              Gallery
            </h2>
            <div className="flex items-center justify-center">
              <Image 
                src="/images/title_underline.webp" 
                alt="Decoration" 
                width={200} 
                height={10}
                className="object-contain"
              />
            </div>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => scrollGallery("left")}
              disabled={!canScrollLeft}
              className={`absolute top-1/2 left-2 z-20 bg-black/40 text-white rounded-full p-2 backdrop-blur-lg border border-white/10 shadow-lg transition ${
                !canScrollLeft ? "opacity-50 cursor-not-allowed" : "hover:bg-black/70"
              }`}
            >
              <ChevronLeft size={28} />
            </button>

            <button
              type="button"
              onClick={() => scrollGallery("right")}
              disabled={!canScrollRight}
              className={`absolute top-1/2 right-2 z-20 bg-black/40 text-white rounded-full p-2 backdrop-blur-lg border border-white/20 shadow-lg transition ${
                !canScrollRight ? "opacity-50 cursor-not-allowed" : "hover:bg-black/70"
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
                    src={`/images/newasuli_img_${num}.webp`}
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
  )
}

export default GallerySection
