"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

// Timeline data
const timeline = [
  {
    year: "1982",
    title: "The Beginning",
    description:
      "Started as a small family kitchen in Harisiddhi, serving traditional Newari feasts to locals.",
  },
  {
    year: "1995",
    title: "First Restaurant",
    description:
      "Opened our first dedicated restaurant space, preserving authentic recipes passed down through generations.",
  },
  {
    year: "2010",
    title: "Expanding Traditions",
    description:
      "Introduced our famous 'Newa Suli Sets' - complete traditional dining experiences.",
  },
  {
    year: "Present",
    title: "Legacy Continues",
    description:
      "Still family-owned, still authentic - serving the same flavors that made us beloved.",
  },
];

// Values data
const values = [
  {
    icon: "🙏",
    title: "Authenticity",
    description:
      "Every recipe follows traditional methods passed down through generations of Newari families.",
  },
  {
    icon: "🌿",
    title: "Fresh Ingredients",
    description:
      "We source local, seasonal ingredients daily from trusted suppliers in the Kathmandu Valley.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Heritage",
    description:
      "Our recipes are family treasures, prepared with the same care as in our ancestors' homes.",
  },
  {
    icon: "🏛️",
    title: "Cultural Preservation",
    description:
      "We keep Newari culinary traditions alive, sharing our heritage with every plate served.",
  },
];

// Specialties data
const specialties = [
  {
    name: "Samay Baji",
    description:
      "The ceremonial Newari feast featuring beaten rice, lentils, meat, and traditional sides",
    image: "/images/newasuli_img_1.jpg",
  },
  {
    name: "Yomari",
    description:
      "Sweet steamed dumplings filled with molasses and sesame - a festival favorite",
    image: "/images/newasuli_img_2.jpg",
  },
  {
    name: "Choila",
    description: "Spicy grilled buffalo meat marinated in traditional spices",
    image: "/images/newasuli_img_3.jpg",
  },
  {
    name: "Bara",
    description: "Savory lentil pancakes - a Newari breakfast classic",
    image: "/images/newasuli_img_4.jpg",
  },
];

export default function About() {
  return (
    <main className="bg-stone-50 min-h-screen">
      {/* Hero Section - Cinematic */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/newasuli_img_1.jpg"
            alt="Harisiddhi Newa Suli Heritage"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/90" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-100 mb-6 tracking-tight"
          >
            <span className="block text-amber-400 font-light italic">Our</span>
            <span className="block font-bold">Story</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-0.5 bg-amber-500 mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-stone-300/90 font-light italic max-w-2xl mx-auto"
          >
            "Preserving the authentic flavors of Newari culture through
            generations of culinary tradition"
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
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
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/images/image1.jpg"
                  alt="Traditional Newari Kitchen"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -right-8 bg-white p-8 shadow-xl rounded-sm max-w-xs hidden lg:block"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full" />
                  <span className="text-xs tracking-widest text-stone-500 uppercase">
                    Heritage
                  </span>
                </div>
                <p className="text-5xl font-serif text-stone-900 mb-1">43+</p>
                <p className="text-stone-600 text-sm">
                  Years of Culinary Excellence
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
                  Who We Are
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 mb-6 leading-tight">
                Harisiddhi{" "}
                <span className="italic text-amber-700">Newa Suli</span>
              </h2>

              <div className="prose prose-stone prose-lg text-stone-600 font-light leading-relaxed space-y-6">
                <p>
                  Nestled in the heart of Harisiddhi, one of the oldest
                  settlements in the Kathmandu Valley, our restaurant carries
                  forward a legacy of authentic Newari cuisine that spans nearly
                  four decades.
                </p>
                <p>
                  What began as a humble family kitchen serving traditional
                  feasts to neighbors has grown into a beloved institution, yet
                  our commitment remains unchanged: to preserve and share the
                  true flavors of Newari culture.
                </p>
                <p>
                  Every dish we serve is prepared using time-honored techniques
                  passed down through generations. From our signature{" "}
                  <em className="text-amber-700">Samay Baji</em> to the sweet{" "}
                  <em className="text-amber-700">Yomari</em>, each recipe tells
                  a story of our heritage.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-200">
                  <Image
                    src="/images/newasuli_img_7.jpg"
                    alt="The Shrestha Family"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif text-lg text-stone-900">
                    The Shrestha Family
                  </p>
                  <p className="text-sm text-stone-500">
                    Founders & Keepers of Tradition
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-700 text-sm tracking-[0.3em] uppercase font-medium">
              Our Journey
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 mt-4 mb-6">
              Through The Years
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto" />
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-stone-300 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 w-full">
                    <div
                      className={`bg-white p-8 rounded-sm shadow-sm border border-stone-200 ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                    >
                      <span className="text-3xl font-serif text-amber-700 block mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-medium text-stone-900 mb-3 uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-stone-600 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 shrink-0">
                    <div className="w-4 h-4 bg-amber-600 rounded-full border-4 border-stone-100 shadow-md" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-700 text-sm tracking-[0.3em] uppercase font-medium">
              What We Stand For
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 mt-4 mb-6">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white p-8 rounded-sm border border-stone-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-medium text-stone-900 uppercase tracking-wide mb-3">
                  {value.title}
                </h3>
                <p className="text-stone-600 font-light text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-24 bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-medium">
              Our Specialties
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif mt-4 mb-6">
              Signature Dishes
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-sm"
              >
                <div className="aspect-4/5 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-stone-900 via-stone-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-serif text-amber-400 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-stone-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-3 border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-stone-900 transition-all duration-300 rounded-sm tracking-wide group"
            >
              <span>View Full Menu</span>
              <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cultural Significance Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-amber-700 text-sm tracking-[0.2em] uppercase font-medium mb-4 block">
                Cultural Heritage
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 mb-6 leading-tight">
                More Than Just{" "}
                <span className="italic text-amber-700">Food</span>
              </h2>

              <div className="space-y-6 text-stone-600 font-light leading-relaxed">
                <p>
                  Newari cuisine is deeply intertwined with the cultural and
                  religious life of the Newar people. Every dish has its place
                  in festivals, ceremonies, and daily life.
                </p>
                <p>
                  At Harisiddhi Newa Suli, we don't just serve meals—we offer an
                  authentic cultural experience. Our restaurant is a living
                  museum of Newari gastronomy, where ancient recipes meet warm
                  hospitality.
                </p>
                <p>
                  From the preparation of{" "}
                  <em className="text-amber-700">Samay Baji</em> for festivals
                  to the careful crafting of{" "}
                  <em className="text-amber-700">Yomari</em> during Yomari
                  Punhi, we honor the traditions that make our cuisine unique.
                </p>
              </div>

              <Link
                href="/menu"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-amber-700 text-white hover:bg-amber-800 transition-colors rounded-sm tracking-wide group"
              >
                <span>Explore Our Menu</span>
                <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/images/newasuli_img_7.jpg"
                  alt="Newari Cultural Feast"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-amber-600/30 rounded-sm -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-700 text-sm tracking-[0.3em] uppercase font-medium">
              Visit Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 mt-4 mb-6">
              Experience Authentic Hospitality
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-white p-8 rounded-sm border border-stone-200 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <FaMapMarkerAlt className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="text-lg font-medium text-stone-900 uppercase tracking-wide mb-2">
                Location
              </h3>
              <p className="text-stone-600 font-light text-sm leading-relaxed">
                Godawari Road, Harisiddhi
                <br />
                Lalitpur, Kathmandu Valley
                <br />
                Nepal
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-sm border border-stone-200 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <FaClock className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="text-lg font-medium text-stone-900 uppercase tracking-wide mb-2">
                Opening Hours
              </h3>
              <p className="text-stone-600 font-light text-sm leading-relaxed">
                Sunday - Saturday
                <br />
                7:00 AM - 10:00 PM
                <br />
                <span className="text-amber-700 text-xs">
                  *Kitchen closes at 9:30 PM
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-sm border border-stone-200 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <FaPhone className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="text-lg font-medium text-stone-900 uppercase tracking-wide mb-2">
                Contact
              </h3>
              <p className="text-stone-600 font-light text-sm leading-relaxed">
                <a
                  href="tel:+9779828711989"
                  className="hover:text-amber-700 transition-colors"
                >
                  +977 982-8711989
                </a>
                <br />
                <a
                  href="mailto:info@newasuli.com"
                  className="hover:text-amber-700 transition-colors"
                >
                  info@newasuli.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
