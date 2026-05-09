"use client";

import  {
  useRef,
  useLayoutEffect,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  UtensilsCrossed,
  Heart,
  Leaf,
  Building2,
} from "lucide-react";
import AboutSection from "@/components/AboutSection"
import SignatureDishes from "@/components/SignatureDishes";
import GalleryEditorial from "@/src/components/ui/GalleryEditorial";



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
        <div ref={badgeRef} className="mb-8 md:mb-10">
          <span className="inline-flex items-center gap-3 px-5 py-2 border border-amber-600/40 text-amber-400 text-[10px] tracking-[0.4em] uppercase backdrop-blur-sm bg-stone-950/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse inline-block" />
            Est. 1982 · Harisiddhi, Kathmandu
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse inline-block" />
          </span>
        </div>

        <h1 className="font-serif tracking-tight leading-none mb-8 md:mb-10">
          <span
            ref={line1Ref}
            className="block text-5xl md:text-7xl lg:text-[8.5rem] text-amber-400/90 font-light italic"
          >
            Our
          </span>
          <span
            ref={line2Ref}
            className="block text-7xl md:text-9xl lg:text-[11rem] text-stone-100 font-black -mt-3"
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
          className="text-base md:text-2xl text-stone-300/80 font-light italic max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          "Preserving the authentic flavors of Newari culture
          <br className="hidden md:block" /> through generations of culinary
          tradition"
        </p>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 md:h-16 bg-gradient-to-b from-transparent to-amber-600 will-change-transform" />
        <span className="text-stone-500 text-[9px] tracking-[0.5em] uppercase rotate-90 origin-center translate-x-5 mt-1">
          Scroll
        </span>
      </div>
    </section>
  );
}



// ─── VALUES ────────────────────────────────────────────────────────────────────

function Values() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
	// removed gsap animation
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-44 bg-stone-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px]  rounded-[50%] blur-[70px] pointer-events-none" />

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

// ─── CULTURAL ─────────────────────────────────────────────────────────────────

function Cultural() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
	// removed gsap animation
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
            className="relative overflow-hidden flex gap-4 h-full min-h-[500px] items-stretch"
          >
            <div className="overflow-hidden relative flex-1 rounded-sm w-full h-full">
              <div className="cultural-img-inner absolute inset-0 will-change-transform">
                <Image
                  src="/images/bara.jpg"
                  alt="Newari Cultural Feast"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply pointer-events-none" />
              </div>
            </div>
            <div className="overflow-hidden relative flex-1 rounded-sm w-full h-full">
              <div className="cultural-img-inner absolute inset-0 will-change-transform">
                <Image
                  src="/images/choila.jpg"
                  alt="Newari Cultural Feast 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
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


// ─── MAIN ──────────────────────────────────────────────────────────────────────

export default function About() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
  }, []);

  return (
    <>
     
      <div className="bg-stone-50 overflow-x-hidden">
        <Hero />
        <AboutSection/>
        <GalleryEditorial />

        <Values />
        <SignatureDishes/>
        <Cultural />

      </div>
    </>
  );
}
