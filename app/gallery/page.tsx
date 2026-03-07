"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight, 
  FaInstagram, 
  FaCamera,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaArrowRight
} from "react-icons/fa";

const galleryImages = [
  { src: "/images/newasuli_img_1.jpg", alt: "Traditional Newari Feast", category: "Food" },
  { src: "/images/newasuli_img_2.jpg", alt: "Restaurant Interior", category: "Ambiance" },
  { src: "/images/newasuli_img_3.jpg", alt: "Samay Baji Platter", category: "Food" },
  { src: "/images/newasuli_img_4.jpg", alt: "Newari Cuisine", category: "Food" },
  { src: "/images/newasuli_img_7.jpg", alt: "Dining Experience", category: "Ambiance" },
  { src: "/images/newasuli_img_1.jpg", alt: "Yomari Preparation", category: "Kitchen" },
  { src: "/images/newasuli_img_2.jpg", alt: "Cultural Setting", category: "Ambiance" },
  { src: "/images/newasuli_img_3.jpg", alt: "Choila Dish", category: "Food" },
  { src: "/images/newasuli_img_4.jpg", alt: "Bara Special", category: "Food" },
];

const categories = ["All", "Food", "Ambiance", "Kitchen"];

const pastEvents = [
  {
    id: 1,
    title: "Yomari Punhi Festival Celebration",
    date: "December 15, 2024",
    description: "Traditional festival celebrating the harvest season with special Yomari making demonstrations and authentic Newari feast.",
    images: ["/images/newasuli_img_1.jpg", "/images/newasuli_img_2.jpg", "/images/newasuli_img_3.jpg"],
    attendees: 120,
    highlights: ["Live Yomari Making", "Traditional Music", "Cultural Dance"]
  },
  {
    id: 2,
    title: "Newari Food Festival 2024",
    date: "October 20, 2024",
    description: "A grand celebration of Newari cuisine featuring 50+ traditional dishes, cooking workshops, and cultural performances.",
    images: ["/images/newasuli_img_4.jpg", "/images/newasuli_img_7.jpg", "/images/newasuli_img_1.jpg", "/images/newasuli_img_2.jpg"],
    attendees: 250,
    highlights: ["Cooking Workshop", "Buffet Spread", "Cultural Show"]
  },
  {
    id: 3,
    title: "Mha Puja Special Dinner",
    date: "November 12, 2024",
    description: "Exclusive Mha Puja celebration dinner featuring traditional Samay Baji and special rituals for prosperity.",
    images: ["/images/newasuli_img_3.jpg", "/images/newasuli_img_4.jpg"],
    attendees: 80,
    highlights: ["Ritual Ceremony", "Family Feast", "Blessing Ceremony"]
  }
];

const upcomingEvents = [
  {
    id: 4,
    title: "Holi Special: Festival of Colors Dinner",
    date: "March 14, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Harisiddhi Newa Suli Garden",
    description: "Celebrate Holi with a special colorful feast featuring traditional Newari delicacies, live music, and color play.",
    image: "/images/newasuli_img_1.jpg",
    features: ["Welcome Drink", "Color Play", "Live Music", "Buffet Dinner"]
  },
  {
    id: 5,
    title: "Indra Jatra Cultural Night",
    date: "September 2025",
    time: "5:00 PM - 11:00 PM",
    location: "Main Dining Hall & Courtyard",
    description: "Experience the grandeur of Indra Jatra with traditional masked dances, Kumari blessings, and authentic festival foods.",
    image: "/images/newasuli_img_4.jpg",
    features: ["Masked Dance", "Kumari Blessing", "Festival Foods", "Cultural Exhibition"]
  },
  {
    id: 6,
    title: "Newari Cooking Masterclass",
    date: "April 20, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Newa Suli Kitchen",
    description: "Learn the secrets of authentic Newari cooking from our master chefs. Includes hands-on preparation of Samay Baji and Yomari.",
    image: "/images/newasuli_img_7.jpg",
    features: ["Hands-on Cooking", "Recipe Book", "Lunch Included", "Certificate"]
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<typeof pastEvents[0] | null>(null);
  const [activeTab, setActiveTab] = useState<"gallery" | "events">("gallery");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const newIndex = direction === "next" 
      ? (selectedImage + 1) % filteredImages.length
      : (selectedImage - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(newIndex);
  };

  const openEventGallery = (event: typeof pastEvents[0]) => {
    setSelectedEvent(event);
    document.body.style.overflow = "hidden";
  };

  const closeEventGallery = () => {
    setSelectedEvent(null);
    document.body.style.overflow = "unset";
  };

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
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

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
       

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-100 mb-6 tracking-tight"
          >
            <span className="text-amber-400 font-light italic">Gallery &</span>
            <span className="block font-bold">Events</span>
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
            className="text-lg text-stone-300/90 font-light max-w-2xl mx-auto"
          >
            A glimpse into our world of authentic Newari cuisine, tradition, and celebrations
          </motion.p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-0  bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <button
              onClick={() => setActiveTab("gallery")}
              className={`px-8 py-4 text-sm tracking-wide font-medium transition-all relative ${
                activeTab === "gallery" 
                  ? "text-stone-900" 
                  : "text-stone-500 hover:text-stone-700"
              }`}
            >
              Gallery
              {activeTab === "gallery" && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600" 
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`px-8 py-4 text-sm tracking-wide font-medium transition-all relative ${
                activeTab === "events" 
                  ? "text-stone-900" 
                  : "text-stone-500 hover:text-stone-700"
              }`}
            >
              Events
              {activeTab === "events" && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600" 
                />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {activeTab === "gallery" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Filter Tabs */}
          <section className="py-8 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 rounded-sm text-sm tracking-wide transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-stone-900 text-white"
                        : "bg-white text-stone-600 hover:bg-stone-200 border border-stone-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Masonry Gallery Grid */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]"
            >
              {filteredImages.map((image, idx) => (
                <motion.div
                  key={`${image.src}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`relative overflow-hidden rounded-sm cursor-pointer group ${
                    idx === 0 || idx === 4 ? 'md:col-span-2 lg:col-span-1 md:row-span-2' : ''
                  }`}
                  onClick={() => openLightbox(idx)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-amber-400 text-xs tracking-widest uppercase mb-2 block">
                      {image.category}
                    </span>
                    <h3 className="text-white font-serif text-lg">{image.alt}</h3>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaCamera className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </motion.div>
      )}

      {/* Events Section */}
      {activeTab === "events" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-stone-50"
        >
          {/* Upcoming Events */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-amber-700 text-sm tracking-[0.3em] uppercase font-medium">
                Mark Your Calendar
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 mt-4 mb-6">
                Upcoming Events
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, idx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-sm text-xs font-medium tracking-wide">
                      UPCOMING
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="flex items-center gap-2 text-white text-sm">
                        <FaCalendarAlt className="w-4 h-4 text-amber-400" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-serif text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-stone-600">
                        <FaClock className="w-4 h-4 text-amber-600" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-stone-600">
                        <FaMapMarkerAlt className="w-4 h-4 text-amber-600" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-stone-600 text-sm font-light leading-relaxed mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {event.features.map((feature, fidx) => (
                        <span 
                          key={fidx}
                          className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section className="py-20 bg-stone-900 text-stone-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-medium">
                  Memories
                </span>
                <h2 className="text-4xl lg:text-5xl font-serif mt-4 mb-6">
                  Past Events
                </h2>
                <div className="w-24 h-1 bg-amber-600 mx-auto" />
              </div>

              <div className="space-y-16">
                {pastEvents.map((event, idx) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col lg:flex-row gap-8 items-center"
                  >
                    {/* Image Grid - Responsive */}
                    <div className={`w-full lg:w-1/2 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        {event.images.slice(0, 4).map((img, imgIdx) => (
                          <div 
                            key={imgIdx}
                            className={`relative overflow-hidden rounded-sm cursor-pointer group ${imgIdx === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'}`}
                            onClick={() => openEventGallery(event)}
                          >
                            <Image
                              src={img}
                              alt={`${event.title} - ${imgIdx + 1}`}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                            {imgIdx === 3 && event.images.length > 4 && (
                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <span className="text-white font-serif text-xl sm:text-2xl">+{event.images.length - 4}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Content - Responsive */}
                    <div className={`w-full lg:w-1/2 ${idx % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
                      <div className={`flex items-center gap-3 mb-4 ${idx % 2 === 1 ? 'lg:justify-end' : ''}`}>
                        <span className="text-amber-500 text-sm font-medium">{event.date}</span>
                        <span className="w-1 h-1 bg-stone-600 rounded-full" />
                        <span className="text-stone-400 text-sm">{event.attendees} attendees</span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-serif mb-4">{event.title}</h3>
                      <p className="text-stone-400 font-light leading-relaxed mb-6">
                        {event.description}
                      </p>

                      <div className={`flex flex-wrap gap-3 mb-8 ${idx % 2 === 1 ? 'lg:justify-end' : ''}`}>
                        {event.highlights.map((highlight, hidx) => (
                          <span 
                            key={hidx}
                            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-stone-800 text-stone-300 text-xs sm:text-sm rounded-sm"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      <button 
                        onClick={() => openEventGallery(event)}
                        className={`inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors group ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                      >
                        {idx % 2 === 1 && <FaArrowRight className="w-4 h-4 transition-transform group-hover:-translate-x-1 rotate-180" />}
                        <FaCamera className="w-5 h-5" />
                        <span className="font-medium">View Gallery</span>
                        {idx % 2 === 0 && <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Host Your Event CTA */}
          <section className="py-24 px-4 sm:px-6 lg:px-8 bg-stone-100">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-amber-700 text-sm tracking-[0.3em] uppercase font-medium">
                Private Events
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 mt-4 mb-6">
                Host Your Special Occasion
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-8" />
              
              <p className="text-stone-600 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                From intimate family gatherings to corporate celebrations, let us create 
                an unforgettable Newari dining experience for your special event. 
                Our team will handle every detail, from traditional decor to authentic cuisine.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
                <div className="bg-white p-6 rounded-sm border border-stone-200">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaUsers className="w-6 h-6 text-amber-700" />
                  </div>
                  <h4 className="font-serif text-lg text-stone-900 mb-2">Capacity</h4>
                  <p className="text-sm text-stone-600">Up to 150 guests</p>
                </div>
                <div className="bg-white p-6 rounded-sm border border-stone-200">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCalendarAlt className="w-6 h-6 text-amber-700" />
                  </div>
                  <h4 className="font-serif text-lg text-stone-900 mb-2">Booking</h4>
                  <p className="text-sm text-stone-600">7 days advance notice</p>
                </div>
                <div className="bg-white p-6 rounded-sm border border-stone-200">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaMapMarkerAlt className="w-6 h-6 text-amber-700" />
                  </div>
                  <h4 className="font-serif text-lg text-stone-900 mb-2">Spaces</h4>
                  <p className="text-sm text-stone-600">Indoor & Garden</p>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white hover:bg-stone-800 transition-colors rounded-sm tracking-wide font-medium">
                Inquire Now
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        </motion.div>
      )}

      {/* Lightbox for Gallery */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <FaTimes className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <FaChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <FaChevronRight className="w-6 h-6 text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-amber-400 text-xs tracking-widest uppercase">
                  {filteredImages[selectedImage].category}
                </span>
                <h3 className="text-white font-serif text-2xl mt-2">
                  {filteredImages[selectedImage].alt}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Event Gallery Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/98 backdrop-blur-sm overflow-y-auto"
          >
            <div className="min-h-screen px-4 py-12">
              <button
                onClick={closeEventGallery}
                className="fixed top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-50"
              >
                <FaTimes className="w-6 h-6 text-white" />
              </button>

              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-center mb-12"
                >
                  <span className="text-amber-500 text-sm tracking-widest uppercase">{selectedEvent.date}</span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mt-2">{selectedEvent.title}</h2>
                  <div className="flex items-center justify-center gap-4 mt-4 text-stone-400">
                    <span className="flex items-center gap-2">
                      <FaUsers className="w-4 h-4" />
                      {selectedEvent.attendees} attendees
                    </span>
                  </div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {selectedEvent.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="relative aspect-square overflow-hidden rounded-sm group"
                    >
                      <Image
                        src={img}
                        alt={`${selectedEvent.title} - ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-3">
                  {selectedEvent.highlights.map((highlight, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-amber-600/20 text-amber-400 border border-amber-600/30 rounded-sm text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}