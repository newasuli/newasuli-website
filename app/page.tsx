"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRightCircle,
  Clock,
  Phone,
  MapPin,
  ArrowRight,
  ArrowLeft,
  Star,
  Quote,
  Diamond,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { i } from "framer-motion/client";

const DUMMY_RESTAURANT_REVIEWS = [
  {
    name: "Aarav Sharma",
    rating: 5,
    comment:
      "The food was absolutely delicious and full of flavor. The service was quick, and the staff was very friendly. I would definitely visit again.",
  },
  {
    name: "Nisha Karki",
    rating: 5,
    comment:
      "Great ambiance and a cozy environment. The menu had plenty of options, and everything we ordered tasted fresh and well-prepared.",
  },
  {
    name: "Rohan Thapa",
    rating: 5,
    comment:
      "Overall a wonderful experience. The portions were generous, prices were reasonable, and the quality of food exceeded my expectations.",
  },
];

const FEATURED_DISHES = [
  {
    name: "Samay Baji",
    desc: "Traditional ceremonial platter",
    image: "/images/samay_baji.png",
  },
  { name: "Choila", desc: "Spiced grilled meat", image: "/images/choila.jpg" },
  {
    name: "Yomari",
    desc: "Sweet rice dumplings",
    image: "/images/yomari.webp",
  },
  { name: "Bara", desc: "Lentil pancake", image: "/images/bara.jpg" },
];

const GALLERY_IMAGES = [1, 2, 3, 4, 5, 6];

export default function Home() {
  // Scroll-based hero transforms
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const [activeReview, setActiveReview] = useState(0);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  // Memoize review length to avoid recalculations
  const reviewsLength = useMemo(() => DUMMY_RESTAURANT_REVIEWS.length, []);

  // Auto cycle reviews every 3 seconds (fixed: useEffect instead of useState)
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviewsLength);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [reviewsLength]);

  // Smooth scroll helper for gallery
  const scrollGallery = (direction: "left" | "right") => {
    const container = galleryRef.current;
    if (!container) return;

    const firstChild = container.firstElementChild as HTMLElement | null;
    if (!firstChild) return;

    const gap = 16; // gap-4 = 16px
    const scrollAmount = firstChild.offsetWidth + gap;

    // On mobile, a slightly smaller scroll step feels smoother
    const isMobile = window.innerWidth < 768;
    const effectiveScroll = isMobile ? scrollAmount * 0.7 : scrollAmount;

    container.scrollBy({
      left: direction === "left" ? -effectiveScroll : effectiveScroll,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-stone-50 overflow-x-hidden">
      {/* Hero Section - Cinematic Parallax */}
      <div className="relative h-screen w-full overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ scale }}>
          <Image
            src="/images/home_bg.png"
            alt="Harisiddhi Newa Suli"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-stone-900/90" />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs tracking-[0.3em] text-amber-200/90 uppercase border border-amber-200/30 rounded-full backdrop-blur-sm">
              Est. 1982 • Harisiddhi
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-100 mb-6 tracking-tight"
          >
            <span className="block text-amber-400 font-light italic">
              Harisiddhi
            </span>
            <span className="block font-bold">Newa Suli</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-stone-300/90 max-w-2xl font-light leading-relaxed italic"
          >
            Authentic Newari cuisine crafted with ancestral recipes, served in
            the heart of cultural heritage
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/menu"
              className="group relative px-8 py-4 bg-amber-600 text-stone-50 overflow-hidden rounded-sm transition-all hover:bg-amber-700"
            >
              <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide">
                Explore Menu
                <ArrowRightCircle className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Heritage Bar */}
      <div className="bg-stone-900 text-stone-400 py-4 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm tracking-wider">
          <div className="flex items-center gap-2">
            <Clock className="text-amber-600" />
            <span>Open Daily: 10:00 AM - 10:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-amber-600" />
            <span>Harisiddhi, Lalitpur</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-amber-600" />
            <a href="tel:+9779828711989">+977 9828711989</a>
          </div>
        </div>
      </div>

      {/* About Section - Asymmetric Layout */}
      <section className="py-24 lg:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-4/5 rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/images/image1.jpg"
                  alt="Traditional Newari Architecture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-stone-900/40 to-transparent" />
              </div>
              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -right-8 bg-white p-6 shadow-xl rounded-sm max-w-xs hidden lg:block"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Diamond className="text-amber-600 w-3 h-3" />
                  <span className="text-xs tracking-widest text-stone-500 uppercase">
                    Heritage
                  </span>
                </div>
                <p className="text-stone-800 font-serif italic text-lg">
                  "Preserving the authentic taste of Newari culture for three
                  decades"
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:pl-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-amber-600" />
                <span className="text-amber-700 text-sm tracking-[0.2em] uppercase font-medium">
                  Our Story
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 mb-6 leading-tight">
                A Legacy of{" "}
                <span className="italic text-amber-700">Flavor</span> &
                Tradition
              </h2>

              <p className="text-stone-600 text-lg leading-relaxed mb-6 font-light">
                Nestled in the historic town of Harisiddhi, our restaurant
                stands as a testament to the rich culinary heritage of the Newar
                community. For generations, we have perfected the art of
                traditional Newari cooking, using recipes passed down through
                centuries and ingredients sourced from local markets.
              </p>

              <p className="text-stone-600 leading-relaxed mb-8 font-light">
                Every dish tells a story—of festivals, of family gatherings, of
                the intricate relationship between culture and cuisine. From the
                ceremonial Samay Baji to the comforting warmth of Yomari, we
                invite you to experience the authentic soul of Nepal.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium transition-colors group"
              >
                <span className="border-b border-amber-700/30 pb-0.5">
                  Discover Our Heritage
                </span>
                <ArrowRightCircle className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Menu Teaser */}
      <section className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-500 text-sm tracking-[0.3em] uppercase">
                Culinary Excellence
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif mt-4 mb-6">
                Signature Dishes
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_DISHES.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="aspect-4/5 relative overflow-hidden rounded-sm">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-stone-900 via-stone-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-serif text-amber-400 mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-stone-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {dish.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block px-8 py-3 border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-stone-900 transition-all duration-300 rounded-sm tracking-wide"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

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
              className="absolute top-1/2 left-2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-lg border border-white/10 shadow-lg transition"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              type="button"
              onClick={() => scrollGallery("right")}
              className="absolute top-1/2 right-2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-lg border border-white/20 shadow-lg transition"
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              ref={galleryRef}
              className="w-full flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth relative no-scrollbar touch-pan-x"
            >
              {GALLERY_IMAGES.map((num, idx) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.08 }}
                  className="relative overflow-hidden rounded-sm group cursor-pointer h-[400px] sm:h-[450px] lg:h-[500px] w-3/4 sm:w-1/2 lg:w-1/4 shrink-0 snap-start"
                >
                  <Image
                    src={`/images/newasuli_img_${num}.jpg`}
                    alt={`Gallery image ${num}`}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials - Carousel Style */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-900 mb-4">
              Guest Experiences
            </h2>
            <p className="text-stone-500 italic">
              What our visitors say about their culinary journey
            </p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center px-4 md:px-16"
              >
                <Quote className="w-10 h-10 text-amber-200 mx-auto mb-6" />
                <div className="flex justify-center gap-1 mb-6">
                  {[
                    ...Array(DUMMY_RESTAURANT_REVIEWS[activeReview].rating),
                  ].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-stone-700 font-light italic leading-relaxed mb-8">
                  "{DUMMY_RESTAURANT_REVIEWS[activeReview].comment}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-stone-200 rounded-full mb-4 overflow-hidden">
                    <div className="w-full h-full bg-linear-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-xl font-serif">
                      {DUMMY_RESTAURANT_REVIEWS[activeReview].name.charAt(0)}
                    </div>
                  </div>
                  <h4 className="font-serif text-lg text-stone-900">
                    {DUMMY_RESTAURANT_REVIEWS[activeReview].name}
                  </h4>
                  <span className="text-stone-400 text-sm">Verified Guest</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-3 mt-10">
              {DUMMY_RESTAURANT_REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeReview === idx
                      ? "bg-amber-600 w-8"
                      : "bg-stone-300 hover:bg-stone-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Footer */}
      <section className="bg-stone-900 text-stone-300">
        <div className="h-[300px] w-full relative grayscale hover:grayscale-0 transition-all duration-700">
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
