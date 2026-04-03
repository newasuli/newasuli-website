"use client";

import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { CustomEase } from "gsap/CustomEase";
import {
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  UtensilsCrossed,
  Heart,
  Leaf,
  Building2,
} from "lucide-react";

// ─── PLUGIN REGISTRATION ──────────────────────────────────────────────────────

if (typeof window !== "undefined") {
  gsap.registerPlugin(
    ScrollTrigger,
    ScrollSmoother,
    SplitText,
    DrawSVGPlugin,
    CustomEase,
  );
  CustomEase.create(
    "newari",
    "M0,0 C0.084,0.61 0.19,0.82 0.35,0.92 0.53,1.02 0.7,1 1,1",
  );

  // Global GSAP defaults for smoother performance
  gsap.config({ nullTargetWarn: false });
  gsap.defaults({ overwrite: "auto" });
}

// ─── UTILS ────────────────────────────────────────────────────────────────────

/** Returns true when the device supports hover (non-touch) */
const canHover = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

/** Reduce motion preference */
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ─── DATA ────────────────────────────────────────────────────────────────────

const timeline = [
  {
    year: "1982",
    title: "The Beginning",
    description:
      "Started as a small family kitchen in Harisiddhi, serving traditional Newari feasts to locals.",
    image: "/images/newasuli_img_1.jpg",
  },
  {
    year: "1995",
    title: "First Restaurant",
    description:
      "Opened our first dedicated restaurant space, preserving authentic recipes passed down through generations.",
    image: "/images/newasuli_img_2.jpg",
  },
  {
    year: "2010",
    title: "Expanding Traditions",
    description:
      "Introduced our famous 'Newa Suli Sets' — complete traditional dining experiences.",
    image: "/images/newasuli_img_3.jpg",
  },
  {
    year: "Present",
    title: "Legacy Continues",
    description:
      "Still family-owned, still authentic — serving the same flavors that made us beloved.",
    image: "/images/newasuli_img_7.jpg",
  },
];

const values = [
  {
    icon: UtensilsCrossed,
    title: "Authenticity",
    description:
      "Every recipe follows traditional methods passed down through generations of Newari families.",
    accent: "#D97706",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "We source local, seasonal ingredients daily from trusted suppliers in the Kathmandu Valley.",
    accent: "#059669",
  },
  {
    icon: Heart,
    title: "Family Heritage",
    description:
      "Our recipes are family treasures, prepared with the same care as in our ancestors' homes.",
    accent: "#E11D48",
  },
  {
    icon: Building2,
    title: "Cultural Preservation",
    description:
      "We keep Newari culinary traditions alive, sharing our heritage with every plate served.",
    accent: "#7C3AED",
  },
];

const specialties = [
  {
    name: "Samay Baji",
    description:
      "The ceremonial Newari feast featuring beaten rice, lentils, meat, and traditional sides",
    image: "/images/samay_baji.png",
  },
  {
    name: "Yomari",
    description:
      "Sweet steamed dumplings filled with molasses and sesame — a festival favorite",
    image: "/images/yomari.webp",
  },
  {
    name: "Choila",
    description: "Spicy grilled buffalo meat marinated in traditional spices",
    image: "/images/choila.jpg",
  },
  {
    name: "Bara",
    description: "Savory lentil pancakes — a Newari breakfast classic",
    image: "/images/bara.jpg",
  },
];

// ─── NOISE OVERLAY ─────────────────────────────────────────────────────────────

function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
        willChange: "auto",
      }}
    />
  );
}

// ─── HERO ──────────────────────────────────────────────────────────────────────

function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) {
      gsap.set(maskRef.current, { scaleY: 0 });
      gsap.set(
        [
          badgeRef.current,
          line1Ref.current,
          line2Ref.current,
          subtitleRef.current,
          scrollRef.current,
        ],
        { opacity: 1 },
      );
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "newari" } });

      tl.fromTo(
        maskRef.current,
        { scaleY: 1, transformOrigin: "top" },
        { scaleY: 0, duration: 1.4, ease: "power4.inOut" },
        0,
      )
        .fromTo(
          bgRef.current,
          { scale: 1.12 },
          { scale: 1, duration: 1.8, ease: "power3.out" },
          0.3,
        )
        .fromTo(
          overlayRef.current,
          { opacity: 0.95 },
          { opacity: 0.65, duration: 1.4 },
          0.3,
        )
        .fromTo(
          badgeRef.current,
          { yPercent: 28, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.7 },
          0.9,
        )
        .fromTo(
          line1Ref.current,
          { xPercent: -10, opacity: 0 },
          { xPercent: 0, opacity: 1, duration: 0.9 },
          1.1,
        )
        .fromTo(
          line2Ref.current,
          { xPercent: 10, opacity: 0 },
          { xPercent: 0, opacity: 1, duration: 0.9 },
          1.1,
        )
        .fromTo(
          dividerRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, transformOrigin: "center" },
          1.35,
        )
        .fromTo(
          subtitleRef.current,
          { yPercent: 18, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.75 },
          1.55,
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0, yPercent: -18 },
          { opacity: 1, yPercent: 0, duration: 0.5 },
          1.95,
        );

      // Parallax only on desktop (skip on mobile for perf)
      if (canHover()) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
          onUpdate: (self) => {
            gsap.set(bgRef.current, { yPercent: self.progress * 20 });
          },
        });
      }

      // Scroll bounce
      gsap.to(".scroll-bounce", {
        yPercent: 38,
        duration: 1.1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <div
        ref={maskRef}
        className="absolute inset-0 bg-stone-950 z-30 will-change-transform"
      />

      <div
        ref={bgRef}
        className="absolute inset-0 scale-110 z-0 will-change-transform"
      >
        <Image
          src="https://kimi-web-img.moonshot.cn/img/booking-manager-api-hop-nepal.s3.eu-west-1.amazonaws.com/6a314e7e634bee248b32c9ef7d570b6e7209f304.jpg"
          alt="Harisiddhi Newa Suli"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div ref={overlayRef} className="absolute inset-0 bg-stone-950 z-10" />

      {/* Scan lines – desktop only for perf */}
      <div
        className="absolute inset-0 z-10 pointer-events-none hidden md:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        }}
      />

      {/* Golden frame – desktop only */}
      <div className="absolute inset-6 border border-amber-600/20 z-20 pointer-events-none hidden md:block" />
      <div className="absolute inset-8 border border-amber-600/10 z-20 pointer-events-none hidden md:block" />

      <div className="relative z-20 text-center px-5 max-w-5xl mx-auto pt-24 lg:pt-28">
        <div ref={badgeRef} className="mb-8 md:mb-10 opacity-0">
          <span className="inline-flex items-center gap-3 px-5 py-2 border border-amber-600/40 text-amber-400 text-[10px] tracking-[0.4em] uppercase backdrop-blur-sm bg-stone-950/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse inline-block" />
            Est. 1982 · Harisiddhi, Kathmandu
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse inline-block" />
          </span>
        </div>

        <h1 className="font-serif tracking-tight leading-none mb-8 md:mb-10">
          <span
            ref={line1Ref}
            className="block text-5xl md:text-7xl lg:text-[8.5rem] text-amber-400/90 font-light italic opacity-0"
          >
            Our
          </span>
          <span
            ref={line2Ref}
            className="block text-7xl md:text-9xl lg:text-[11rem] text-stone-100 font-black opacity-0 -mt-3"
          >
            Story
          </span>
        </h1>

        <div
          ref={dividerRef}
          className="w-36 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8 md:mb-10 origin-center"
        />

        <p
          ref={subtitleRef}
          className="text-base md:text-2xl text-stone-300/80 font-light italic max-w-2xl mx-auto leading-relaxed opacity-0"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          "Preserving the authentic flavors of Newari culture
          <br className="hidden md:block" /> through generations of culinary
          tradition"
        </p>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-0"
      >
        <div className="w-px h-12 md:h-16 bg-gradient-to-b from-transparent to-amber-600 scroll-bounce will-change-transform" />
        <span className="text-stone-500 text-[9px] tracking-[0.5em] uppercase rotate-90 origin-center translate-x-5 mt-1">
          Scroll
        </span>
      </div>
    </section>
  );
}

// ─── INTRO ─────────────────────────────────────────────────────────────────────

function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const stConfig = (trigger: Element | null, opts = {}) => ({
        trigger,
        start: "top 82%",
        once: true,
        ...opts,
      });

      gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(100% 0 0 0)", yPercent: 8 },
        {
          clipPath: "inset(0% 0 0 0)",
          yPercent: 0,
          duration: 1.3,
          ease: "power4.out",
          scrollTrigger: stConfig(imageRef.current),
        },
      );

      gsap.fromTo(
        badgeRef.current,
        { scale: 0.65, opacity: 0, rotation: -10 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.75,
          ease: "back.out(1.7)",
          delay: 0.55,
          scrollTrigger: stConfig(imageRef.current, { start: "top 62%" }),
        },
      );

      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "chars" });
        gsap.fromTo(
          split.chars,
          { yPercent: 115, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            stagger: 0.025,
            duration: 0.85,
            ease: "power4.out",
            scrollTrigger: stConfig(headingRef.current, { start: "top 88%" }),
          },
        );
      }

      gsap.fromTo(
        contentRef.current,
        { xPercent: 5, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          delay: 0.18,
          scrollTrigger: stConfig(contentRef.current),
        },
      );

      // Parallax desktop only
      if (canHover()) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.8,
          onUpdate: (self) => {
            gsap.set(".intro-img-inner", { yPercent: self.progress * 14 });
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-44 bg-stone-50 relative overflow-hidden"
    >
      {/* Decorative typography – hidden on mobile for perf */}
      <div
        className="absolute -right-16 top-1/4 text-[20vw] font-black text-stone-100 select-none pointer-events-none leading-none hidden lg:block"
        style={{ fontFamily: "serif", writingMode: "vertical-rl" }}
      >
        NEWA
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div
              ref={imageRef}
              className="relative aspect-[3/4] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.22)]"
              style={{ clipPath: "inset(100% 0 0 0)" }}
            >
              <div className="intro-img-inner absolute inset-0 will-change-transform">
                <Image
                  src="/images/image1.jpg"
                  alt="Traditional Newari Kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply pointer-events-none" />
              </div>
            </div>

            <div className="absolute -top-5 -left-5 right-10 bottom-10 border border-amber-400/25 pointer-events-none -z-10 hidden md:block" />

            <div
              ref={badgeRef}
              className="absolute -bottom-6 -right-2 lg:-right-8 bg-stone-900 p-5 md:p-7 shadow-2xl z-10 opacity-0"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <span className="text-[10px] tracking-[0.4em] text-stone-500 uppercase">
                  Since
                </span>
              </div>
              <p className="text-5xl md:text-7xl font-black text-amber-500 font-serif leading-none">
                43
              </p>
              <p className="text-stone-400 text-[10px] md:text-xs tracking-widest uppercase mt-1">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="lg:col-span-7 lg:pl-10 mt-8 lg:mt-0">
            <div className="flex items-center gap-4 mb-7">
              <div className="h-px w-10 bg-amber-600" />
              <span className="text-amber-700 text-[11px] tracking-[0.5em] uppercase font-semibold">
                Who We Are
              </span>
            </div>

            <h2
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-7xl font-black text-stone-900 mb-8 leading-[0.95] overflow-hidden"
              style={{ fontFamily: "serif" }}
            >
              Harisiddhi
              <br />
              Newa Suli
            </h2>

            <div className="space-y-6 text-stone-600 text-base md:text-lg leading-[1.8] font-light">
              <p className="border-l-4 border-amber-500 pl-5 text-stone-700">
                Nestled in the heart of Harisiddhi, one of the oldest
                settlements in the Kathmandu Valley, our restaurant carries
                forward a legacy of authentic Newari cuisine spanning nearly
                four decades.
              </p>
              <p>
                What began as a humble family kitchen serving traditional feasts
                to neighbors has grown into a beloved institution — yet our
                commitment remains unchanged: to preserve and share the true
                flavors of Newari culture.
              </p>
              <p
                className="text-lg md:text-xl text-stone-800 italic font-medium"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Every dish prepared using time-honored techniques passed down
                through generations.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-300 shadow-xl flex-shrink-0">
                <Image
                  src="/images/newasuli_img_7.jpg"
                  alt="The Shrestha Family"
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p
                  className="text-lg md:text-xl font-bold text-stone-900"
                  style={{ fontFamily: "serif" }}
                >
                  The Shrestha Family
                </p>
                <p className="text-stone-500 text-[10px] tracking-[0.3em] uppercase mt-0.5">
                  Founders & Keepers of Tradition
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TIMELINE ─────────────────────────────────────────────────────────────────

function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "words" });
        gsap.fromTo(
          split.words,
          { yPercent: 108, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            stagger: 0.07,
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
      }

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
            end: "bottom 85%",
            scrub: 0.8,
          },
        },
      );

      document
        .querySelectorAll<HTMLElement>(".timeline-item")
        .forEach((item, i) => {
          const isEven = i % 2 === 0;
          gsap.fromTo(
            item,
            { xPercent: isEven ? -8 : 8, opacity: 0 },
            {
              xPercent: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: item, start: "top 82%", once: true },
            },
          );

          // Year counter
          const yearEl = item.querySelector<HTMLElement>(".year-number");
          if (yearEl && yearEl.dataset.year !== "Present") {
            const endVal = parseInt(yearEl.dataset.year || "0");
            ScrollTrigger.create({
              trigger: item,
              start: "top 80%",
              once: true,
              onEnter: () => {
                const obj = { val: endVal - 20 };
                gsap.to(obj, {
                  val: endVal,
                  duration: 1.4,
                  ease: "power2.out",
                  onUpdate() {
                    yearEl.textContent = Math.round(obj.val).toString();
                  },
                });
              },
            });
          }
        });

      document.querySelectorAll<HTMLElement>(".timeline-dot").forEach((dot) => {
        ScrollTrigger.create({
          trigger: dot,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              dot,
              { scale: 0 },
              { scale: 1, duration: 0.45, ease: "back.out(2)" },
            );
            const ring = dot.querySelector<HTMLElement>(".dot-ring");
            if (ring) {
              gsap.fromTo(
                ring,
                { scale: 1, opacity: 1 },
                {
                  scale: 2.4,
                  opacity: 0,
                  duration: 1.1,
                  ease: "power2.out",
                  repeat: -1,
                  repeatDelay: 1,
                },
              );
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-44 bg-stone-950 text-stone-100 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.04] hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Large bg number – desktop only */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden hidden md:flex">
        <span
          className="text-[30vw] font-black text-stone-900 select-none leading-none"
          style={{ fontFamily: "serif" }}
        >
          43
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-amber-500 text-[11px] tracking-[0.6em] uppercase font-bold block mb-5">
            Our Journey
          </span>
          <h2
            ref={headingRef}
            className="text-5xl md:text-6xl lg:text-8xl font-black overflow-hidden"
            style={{ fontFamily: "serif" }}
          >
            Through The Years
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-400 mx-auto mt-6" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-stone-800 hidden lg:block">
            <div
              ref={lineRef}
              className="w-full h-full bg-gradient-to-b from-amber-500 via-orange-500 to-amber-600 origin-top will-change-transform"
            />
          </div>

          <div className="space-y-12 lg:space-y-24">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`timeline-item flex flex-col lg:flex-row items-center gap-6 lg:gap-0 ${idx % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
              >
                <div
                  className={`flex-1 w-full ${idx % 2 === 0 ? "lg:pl-20" : "lg:pr-20"}`}
                >
                  <div
                    className="group relative bg-stone-900/70 backdrop-blur-sm border border-stone-800 p-7 md:p-10 transition-colors duration-400 overflow-hidden
                                        hover:border-amber-600/40"
                  >
                    {/* Hover fill – desktop only via CSS */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-amber-900/0 to-transparent transition-all duration-600
                                            group-hover:from-amber-900/20 hidden md:block"
                    />

                    <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-amber-500/50" />
                    <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-amber-500/50" />

                    <div className="relative z-10">
                      <span
                        className="year-number text-5xl md:text-6xl font-black text-amber-500 font-serif block mb-3 leading-none"
                        data-year={item.year}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-xs font-bold text-stone-100 mb-3 tracking-wide uppercase">
                        {item.title}
                      </h3>
                      <p className="text-stone-400 font-light leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 shrink-0 hidden lg:flex items-center justify-center">
                  <div className="timeline-dot relative w-5 h-5 will-change-transform">
                    <div className="w-5 h-5 bg-amber-500 rounded-full relative z-10" />
                    <div className="dot-ring absolute inset-0 rounded-full border-2 border-amber-500/50" />
                  </div>
                </div>

                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── VALUES ────────────────────────────────────────────────────────────────────

function Values() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const attach3DHover = useCallback((card: Element) => {
    if (!canHover()) return;

    const el = card as HTMLElement;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -18;
      gsap.to(el, {
        rotateY: x,
        rotateX: y,
        duration: 0.35,
        ease: "power2.out",
        transformPerspective: 800,
      });
    };
    const onLeave = () => {
      gsap.to(el, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.55,
        ease: "elastic.out(1, 0.5)",
      });
    };
    el.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);
  }, []);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "chars" });
        gsap.fromTo(
          split.chars,
          { yPercent: 100, opacity: 0, rotateX: -85 },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.035,
            duration: 0.75,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
      }

      document
        .querySelectorAll<HTMLElement>(".value-card")
        .forEach((card, i) => {
          gsap.fromTo(
            card,
            { yPercent: 25, opacity: 0, scale: 0.96 },
            {
              yPercent: 0,
              opacity: 1,
              scale: 1,
              duration: 0.75,
              ease: "power3.out",
              delay: i * 0.08,
              scrollTrigger: { trigger: card, start: "top 87%", once: true },
            },
          );
          attach3DHover(card);
        });
    }, sectionRef);

    return () => ctx.revert();
  }, [attach3DHover]);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-44 bg-stone-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-amber-200/20 rounded-[50%] blur-[70px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-amber-700 text-[11px] tracking-[0.6em] uppercase font-bold block mb-5">
            What We Stand For
          </span>
          <h2
            ref={headingRef}
            className="text-5xl md:text-6xl lg:text-8xl font-black text-stone-900 overflow-hidden"
            style={{ fontFamily: "serif" }}
          >
            Our Values
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="value-card bg-white border border-stone-100 p-8 md:p-10 text-center relative overflow-hidden cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Top line hover – CSS only, no JS on mobile */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100 md:group-hover:scale-x-100"
                  style={{ background: v.accent }}
                />

                <div
                  className="w-14 h-14 rounded-full mx-auto mb-7 flex items-center justify-center text-white shadow-lg"
                  style={{ background: v.accent }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xs font-black text-stone-900 uppercase tracking-[0.2em] mb-3">
                  {v.title}
                </h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── SPECIALTIES ──────────────────────────────────────────────────────────────

function Specialties() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "words" });
        gsap.fromTo(
          split.words,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
      }

      document
        .querySelectorAll<HTMLElement>(".specialty-card")
        .forEach((card, i) => {
          gsap.fromTo(
            card,
            { yPercent: 20, opacity: 0, clipPath: "inset(0 0 100% 0)" },
            {
              yPercent: 0,
              opacity: 1,
              clipPath: "inset(0 0 0% 0)",
              duration: 1.1,
              ease: "power4.out",
              delay: i * 0.1,
              scrollTrigger: { trigger: card, start: "top 87%", once: true },
            },
          );

          // Hover animations – desktop only
          if (!canHover()) return;

          const img = card.querySelector<HTMLElement>(".specialty-img");
          const overlay = card.querySelector<HTMLElement>(".specialty-overlay");
          const textReveal =
            card.querySelector<HTMLElement>(".specialty-reveal");

          card.addEventListener("mouseenter", () => {
            if (img)
              gsap.to(img, { scale: 1.08, duration: 0.7, ease: "power2.out" });
            if (overlay) gsap.to(overlay, { opacity: 0.92, duration: 0.35 });
            if (textReveal)
              gsap.fromTo(
                textReveal,
                { yPercent: 18, opacity: 0 },
                { yPercent: 0, opacity: 1, duration: 0.38, ease: "power3.out" },
              );
          });
          card.addEventListener("mouseleave", () => {
            if (img)
              gsap.to(img, { scale: 1, duration: 0.7, ease: "power2.out" });
            if (overlay) gsap.to(overlay, { opacity: 0.7, duration: 0.35 });
            if (textReveal)
              gsap.to(textReveal, { yPercent: 10, opacity: 0, duration: 0.25 });
          });
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-44 bg-stone-950 text-stone-100 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-600/8 rounded-full blur-[100px] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-amber-500 text-[11px] tracking-[0.6em] uppercase font-bold block mb-5">
            On The Menu
          </span>
          <h2
            ref={headingRef}
            className="text-5xl md:text-6xl lg:text-8xl font-black overflow-hidden"
            style={{ fontFamily: "serif" }}
          >
            Signature Dishes
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {specialties.map((item, i) => (
            <div
              key={i}
              className="specialty-card relative overflow-hidden cursor-pointer"
              data-cursor="Explore"
              style={{ clipPath: "inset(0 0 100% 0)" }}
            >
              <div className="aspect-[3/4] md:aspect-[4/5] relative">
                <div className="specialty-img absolute inset-0 will-change-transform">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>

                <div className="specialty-overlay absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent opacity-70" />

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-7">
                  <span className="text-amber-500/70 text-[10px] tracking-[0.4em] uppercase font-bold block mb-1">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg md:text-2xl font-black font-serif text-stone-100 mb-1 md:mb-2">
                    {item.name}
                  </h3>

                  {/* Always visible on mobile, hover-reveal on desktop */}
                  <div className="specialty-reveal md:opacity-0">
                    <p className="text-stone-400 text-xs md:text-sm font-light leading-relaxed mb-1 md:mb-4 hidden md:block">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link
            href="/menu"
            className="inline-flex items-center gap-3 md:gap-4 px-10 md:px-12 py-4 md:py-5 border border-amber-600/40 text-amber-500 hover:bg-amber-600 hover:text-stone-950 hover:border-amber-600 transition-all duration-300 tracking-[0.25em] uppercase text-xs md:text-sm font-bold group active:scale-95"
            data-cursor="Menu"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1 duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── CULTURAL ─────────────────────────────────────────────────────────────────

function Cultural() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "lines" });
        split.lines.forEach((line) => {
          const wrapper = document.createElement("div");
          wrapper.style.overflow = "hidden";
          wrapper.style.display = "block";
          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);
        });
        gsap.fromTo(
          split.lines,
          { yPercent: 100 },
          {
            yPercent: 0,
            stagger: 0.09,
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
      }

      gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.3,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        textRef.current,
        { xPercent: -4, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          delay: 0.25,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );

      if (canHover()) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
          onUpdate: (self) => {
            gsap.set(".cultural-img-inner", { yPercent: self.progress * 11 });
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-44 bg-stone-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div ref={textRef}>
            <span className="text-amber-700 text-[11px] tracking-[0.6em] uppercase font-bold mb-7 block">
              Cultural Heritage
            </span>
            <h2
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-7xl font-black text-stone-900 mb-8 leading-[0.95]"
              style={{ fontFamily: "serif" }}
            >
              More Than
              <br />
              Just <span className="italic text-amber-700">Food</span>
            </h2>

            <div className="space-y-6 text-stone-600 text-base md:text-lg font-light leading-[1.8]">
              <p className="border-l-4 border-amber-500 pl-5 text-stone-700">
                Newari cuisine is deeply intertwined with the cultural and
                religious life of the Newar people. Every dish has its place in
                festivals, ceremonies, and daily life.
              </p>
              <p>
                At Harisiddhi Newa Suli, we don't just serve meals — we offer an
                authentic cultural experience. Our restaurant is a living museum
                of Newari gastronomy, where every bite tells a centuries-old
                story.
              </p>
            </div>

            <Link
              href="/menu"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-amber-700 text-white hover:bg-stone-900 transition-all duration-300 text-sm font-bold tracking-[0.2em] uppercase shadow-lg group active:scale-95"
              data-cursor="Menu"
            >
              Explore Our Menu
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
            </Link>
          </div>

          <div
            ref={imageRef}
            className="relative overflow-hidden"
            style={{ clipPath: "inset(0 100% 0 0)" }}
          >
            <div className="aspect-square overflow-hidden relative">
              <div className="cultural-img-inner absolute inset-0 will-change-transform">
                <Image
                  src="https://kimi-web-img.moonshot.cn/img/cms.altitudehimalaya.com/5546efa36902ff165862bcbef1f9f34ae420b7f0.png"
                  alt="Newari Cultural Feast"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply pointer-events-none" />
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 left-10 top-10 border border-amber-400/25 pointer-events-none -z-10 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── VISIT ─────────────────────────────────────────────────────────────────────

function Visit() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "words" });
        gsap.fromTo(
          split.words,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            stagger: 0.06,
            duration: 0.85,
            ease: "power4.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
      }

      document
        .querySelectorAll<HTMLElement>(".contact-card")
        .forEach((card, i) => {
          gsap.fromTo(
            card,
            { yPercent: 18, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.75,
              ease: "power3.out",
              delay: i * 0.12,
              scrollTrigger: { trigger: card, start: "top 87%", once: true },
            },
          );
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contacts = [
    {
      icon: MapPin,
      title: "Location",
      content: (
        <p className="text-stone-500 font-light leading-relaxed text-sm">
          Godawari Road, Harisiddhi
          <br />
          Lalitpur, Kathmandu Valley
          <br />
          <span className="text-stone-400">Nepal</span>
        </p>
      ),
    },
    {
      icon: Clock,
      title: "Hours",
      content: (
        <p className="text-stone-500 font-light leading-relaxed text-sm">
          Sunday – Saturday
          <br />
          <span className="text-stone-800 font-bold">7:00 AM – 10:00 PM</span>
          <br />
          <span className="text-amber-700 text-xs">Kitchen closes 9:30 PM</span>
        </p>
      ),
    },
    {
      icon: Phone,
      title: "Contact",
      content: (
        <div className="space-y-2 text-sm">
          <a
            href="tel:+9779828711989"
            className="block text-stone-500 hover:text-amber-700 transition-colors font-light active:text-amber-700"
          >
            +977 982-8711989
          </a>
          <a
            href="mailto:info@newasuli.com"
            className="block text-stone-500 hover:text-amber-700 transition-colors font-light active:text-amber-700"
          >
            info@newasuli.com
          </a>
        </div>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-36 bg-stone-100 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.02] hidden md:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
          backgroundSize: "8px 8px",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative">
        <div className="text-center mb-14 md:mb-20">
          <span className="text-amber-700 text-[11px] tracking-[0.6em] uppercase font-bold block mb-5">
            Visit Us
          </span>
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-stone-900 overflow-hidden"
            style={{ fontFamily: "serif" }}
          >
            Experience Authentic
            <br />
            Hospitality
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {contacts.map(({ icon: Icon, title, content }, i) => (
            <div
              key={i}
              className="contact-card group bg-white p-8 md:p-10 text-center relative overflow-hidden border border-stone-200
                                transition-all duration-400
                                md:hover:shadow-2xl md:hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-600 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-6 md:mb-8
                                transition-all duration-350
                                group-hover:bg-amber-600 group-hover:border-amber-600"
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-amber-700 transition-colors duration-300 group-hover:text-white" />
              </div>

              <h3 className="text-xs font-black text-stone-900 uppercase tracking-[0.3em] mb-4">
                {title}
              </h3>
              {content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ───────────────────────────────────────────────────────────────────────

function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "words" });
        gsap.fromTo(
          split.words,
          { yPercent: 75, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            stagger: 0.07,
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
      }

      // Animated bg – desktop only to avoid mobile battery drain
      if (canHover()) {
        gsap.to(bgRef.current, {
          backgroundPosition: "100% 100%",
          duration: 8,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1c1917 0%, #292524 30%, #1c1917 50%, #0c0a09 80%, #292524 100%)",
          backgroundSize: "400% 400%",
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #F59E0B 0%, transparent 50%), radial-gradient(circle at 80% 50%, #EA580C 0%, transparent 50%)",
          }}
        />
        <div className="absolute top-8 left-8 right-8 bottom-8 border border-amber-600/10 hidden md:block" />
        <div className="absolute top-12 left-12 right-12 bottom-12 border border-amber-600/5 hidden md:block" />
      </div>

      <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
        <span className="text-amber-500 text-[11px] tracking-[0.6em] uppercase font-bold block mb-7">
          Reserve Your Table
        </span>
        <h3
          ref={headingRef}
          className="text-3xl md:text-5xl lg:text-6xl font-black text-stone-100 mb-5 overflow-hidden leading-[1.05]"
          style={{ fontFamily: "serif" }}
        >
          Ready to Experience
          <br />
          <span className="italic text-amber-500">
            Authentic Newari Cuisine?
          </span>
        </h3>
        <p className="text-stone-500 mb-10 text-base md:text-lg font-light max-w-xl mx-auto">
          Join us for a culinary journey through centuries of tradition
        </p>
        <Link
          href="/menu"
          className="inline-flex items-center gap-3 md:gap-4 px-10 md:px-14 py-4 md:py-5 bg-amber-600 text-stone-950 hover:bg-amber-500 transition-all duration-300 text-sm font-black tracking-[0.25em] uppercase shadow-2xl shadow-amber-600/25 hover:shadow-amber-500/40 group active:scale-95"
          data-cursor="Book"
        >
          Book a Table
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
        </Link>
      </div>
    </section>
  );
}

// ─── PROGRESS BAR ─────────────────────────────────────────────────────────────

function ProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.25,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 bg-stone-800/50 z-50">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-amber-600 via-orange-500 to-amber-400 origin-left scale-x-0 will-change-transform"
      />
    </div>
  );
}

// ─── MAIN ──────────────────────────────────────────────────────────────────────

export default function About() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <NoiseOverlay />
      <ProgressBar />
      <div className="bg-stone-50 overflow-x-hidden">
        <Hero />
        <Intro />
        <Timeline />
        <Values />
        <Specialties />
        <Cultural />
        <Visit />
      </div>
    </>
  );
}
