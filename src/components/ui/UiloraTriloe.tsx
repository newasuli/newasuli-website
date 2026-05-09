"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  company: string;
  seed: string;
  companySeed: string;
}

interface UiloraTriloeProps {
  testimonials?: TestimonialItem[];
  title?: string;
  accentColor?: string;
}

const defaultTestimonials: TestimonialItem[] = [
  {
    name: "Aarav Sharma",
    role: "Food Enthusiast",
    content:
      "The food was absolutely delicious and full of flavor. The service was quick, and the staff was very friendly. I would definitely visit again.",
    company: "Local Guide",
    seed: "AaravSharma",
    companySeed: "AaravCo",
  },
  {
    name: "Nisha Karki",
    role: "Diner",
    content:
      "Great ambiance and a cozy environment. The menu had plenty of options, and everything we ordered tasted fresh and well-prepared.",
    company: "Foodie",
    seed: "NishaKarki",
    companySeed: "NishaCo",
  },
  {
    name: "Rohan Thapa",
    role: "Frequent Visitor",
    content:
      "Overall a wonderful experience. The portions were generous, prices were reasonable, and the quality of food exceeded my expectations.",
    company: "Reviewer",
    seed: "RohanThapa",
    companySeed: "RohanCo",
  },
  {
    name: "Sita Gurung",
    role: "Culinary Explorer",
    content:
      "The best authentic Newari cuisine I have tasted outside of the valley. The spices were perfectly balanced, and the Bara was incredibly fluffy.",
    company: "Local",
    seed: "SitaGurung",
    companySeed: "SitaCo",
  },
  {
    name: "Bikash Maharjan",
    role: "Local",
    content:
      "Fantastic atmosphere and brilliant flavors. The Choila had the right amount of kick, and the staff made sure we were taken care of the entire evening.",
    company: "Guest",
    seed: "BikashMaharjan",
    companySeed: "BikashCo",
  },
  {
    name: "Pooja Shrestha",
    role: "Customer",
    content:
      "A hidden gem! The rich aromas pull you in, and the phenomenal taste keeps you coming back. I highly recommend the Samay Baji set for first-timers.",
    company: "Explorer",
    seed: "PoojaShrestha",
    companySeed: "PoojaCo",
  },
];

// Notched corners: top-right and bottom-left diagonally cut
const NOTCH = 22;
const notchedClip = `polygon(0 0, calc(100% - ${NOTCH}px) 0, 100% ${NOTCH}px, 100% 100%, ${NOTCH}px 100%, 0 calc(100% - ${NOTCH}px))`;

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const CARDS_PER_PAGE = 3;

export default function UiloraTriloe({
  testimonials = defaultTestimonials,
  title = "Guest Experiences",
  accentColor = "#5227FF",
}: UiloraTriloeProps) {
  const [startIndex, setStartIndex] = useState(0);
  const n = testimonials.length;

  const next = () => setStartIndex((s) => (s + CARDS_PER_PAGE) % n);

  // Auto-advance every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [n]);

  const visible = [0, 1, 2].map((offset) => ({
    item: testimonials[(startIndex + offset) % n],
    key: (startIndex + offset) % n,
  }));

  return (
    <section
      className="w-full flex flex-col items-center justify-center py-20 px-4 bg-stone-900"
     
    >
      <div className="max-w-6xl w-full mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span
            className="inline-block text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
            style={{
              color: "#22C55E",
              backgroundColor: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.2)",
            }}
          >
            Testimonial
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
           What our visitors say about their culinary journey
          </p>
        </motion.div>

        {/* Carousel with edge fade */}
        <div
          className="relative w-full"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.38, ease: "easeInOut" }}
              className=" grid grid-cols-1 md:grid-cols-3 gap-5 px-2"
            >
              {visible.map(({ item, key }) => (
                <div
                  key={key}
                  className="flex flex-col justify-between p-6"
                  style={{
                    backgroundColor: "#161616",
                    border: "1px solid rgba(255,255,255,0.07)",
                    clipPath: notchedClip,
                    minHeight: 260,
                  }}
                >
                  {/* Top: avatar + name + role */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <img
                        src={`https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(item.seed)}&backgroundColor=2a2a3e,1e1e2e,252540`}
                        alt={item.name}
                        width={44}
                        height={44}
                        className="rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.07)",
                          border: "1.5px solid rgba(255,255,255,0.1)",
                        }}
                      />
                      <div>
                        <div className="text-white font-bold text-[14px] leading-none mb-1">
                          {item.name}
                        </div>
                        <div className="text-white/40 text-xs">{item.role}</div>
                      </div>
                    </div>

                    {/* Small decorative quote mark */}
                    <span
                      className="block font-serif leading-none mb-2 select-none"
                      style={{
                        fontSize: 28,
                        color: "rgba(255,255,255,0.15)",
                        lineHeight: "24px",
                      }}
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>

                    {/* Quote text */}
                    <p className="text-white/55 text-[13px] leading-relaxed">
                      {item.content}
                    </p>
                  </div>

                  {/* Bottom: stars + company logo */}
                  <div className="flex items-center justify-between mt-6">
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                      <span className="text-white/50 text-xs font-medium ml-1.5">
                        5.0
                      </span>
                    </div>

                    {/* Company logo + name */}

                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>


      </div>
    </section>
  );
}
