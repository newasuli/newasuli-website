"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Calendar,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  Diamond,
} from "lucide-react";
import GalleryParallaxColumns from "@/src/components/ui/GalleryParallaxColumns";

const galleryImages = [
  {
    src: "/images/newasuli_img_1.jpg",
    alt: "Traditional Newari Feast",
    category: "Food",
  },
  {
    src: "/images/newasuli_img_2.jpg",
    alt: "Restaurant Interior",
    category: "Ambiance",
  },
  {
    src: "/images/newasuli_img_3.jpg",
    alt: "Samay Baji Platter",
    category: "Food",
  },
  {
    src: "/images/newasuli_img_4.jpg",
    alt: "Newari Cuisine",
    category: "Food",
  },
  {
    src: "/images/newasuli_img_7.jpg",
    alt: "Dining Experience",
    category: "Ambiance",
  },
  {
    src: "/images/newasuli_img_1.jpg",
    alt: "Yomari Preparation",
    category: "Kitchen",
  },
  {
    src: "/images/newasuli_img_2.jpg",
    alt: "Cultural Setting",
    category: "Ambiance",
  },
  { src: "/images/newasuli_img_3.jpg", alt: "Choila Dish", category: "Food" },
  { src: "/images/newasuli_img_4.jpg", alt: "Bara Special", category: "Food" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <main className="min-h-screen bg-stone-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/newasuli_img_4.jpg"
            alt="Newari Feast"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            <span className="text-amber-400 font-light italic">Gallery &</span>
            <span className="block font-bold">Events</span>
          </h1>

          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8" />

          <p className="text-lg text-stone-300/90 font-light max-w-2xl mx-auto font-poppins italic">
            A glimpse into our world of authentic Newari cuisine, tradition, and
            celebrations
          </p>
        </div>
      </section>

      <div className="py-12">
        <GalleryParallaxColumns

        />
      </div>


    </main>
  );
}
