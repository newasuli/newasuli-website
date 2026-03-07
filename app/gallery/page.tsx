"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Gallery() {
  return (
    <>
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
            <span className="text-amber-400 font-light italic">Our</span>
            <span className="block font-bold">Gallery</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-0.5 bg-amber-500 mx-auto mb-6"
          />

        </div>
      </section>
      <section className="w-full grid grid-cols-2  gap-1 lg:grid-cols-3 lg:gap-2 min-h-[600] mb-2 md:px-8  my-2 ">
        <div className="bg-gray-400 relative overflow-hidden cursor-pointer">
          <Image
            src={"/images/newasuli_img_1.jpg"}
            alt=""
            fill
            className="object-cover object-center hover:scale-105 transition-all duration-800 ease-out"
          />
        </div>
        <div className="bg-gray-400 relative overflow-hidden cursor-pointer">
          <Image
            src={"/images/newasuli_img_2.jpg"}
            alt=""
            fill
            className="object-cover object-center hover:scale-105 transition-all duration-800 ease-out"
          />
        </div>
        <div className="bg-gray-400 relative overflow-hidden cursor-pointer">
          <Image
            src={"/images/newasuli_img_3.jpg"}
            alt=""
            fill
            className="object-cover object-center hover:scale-105 transition-transform duration-800 ease-out"
          />
        </div>
        <div className="bg-gray-400 relative overflow-hidden cursor-pointer">
          <Image
            src={"/images/newasuli_img_4.jpg"}
            alt=""
            fill
            className="object-cover object-center hover:scale-105 transition-transform duration-800 ease-out"
          />
        </div>
        <div className="bg-gray-400 relative overflow-hidden cursor-pointer">
          <Image
            src={"/images/newasuli_img_7.jpg"}
            alt=""
            fill
            className="object-cover object-center hover:scale-105 transition-transform duration-800 ease-out"
          />
        </div>
      </section>
      {/* <section className="w-full flex justify-center py-2">
        <button className=" bg-gray-50 text-dark px-4 py-2 border-2 border-dark rounded-sm font-medium italic hover:bg-dark hover:text-gray-50 hover:cursor-pointer transition-colors duration-300">
          Show More
        </button>
      </section> */}
    </>
  );
}

export default Gallery;
