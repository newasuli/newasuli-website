import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRightCircle
} from "lucide-react";

const AboutSection = () => {
    return (
       <>
           <section className="py-8 md:py-16 my-16  bg-stone-50 flex items-center">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                   {/* Header Row */}
                   <div className="flex flex-col  mb-16 ">
                       <div className="lg:w-1/4 flex items-center">
                           <div className="flex items-center gap-4">

            <span className="text-stone-900 text-md tracking-widest uppercase mb-12 block font-medium">
            About us
          </span>

                           </div>
                       </div>
                       <div className="lg:w-3/4">
                           <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 leading-tight font-bold "  style={{ fontFamily: "serif" }}>
                               Crafting Memorable Dining Experiences at <span className="text-primary italic ">Harisiddhi Newa Suli</span>
                           </h2>
                       </div>
                   </div>

                   {/* Content Row */}
                   <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                       {/* Left: Images */}
                       <div className="relative pt-4 group">
                           <div className="relative aspect-[4/5] w-full lg:w-4/5 rounded-lg overflow-hidden shadow-xl">
                               <Image
                                   src="/images/image1.webp"
                                   alt="Our Chefs and Kitchen"
                                   fill
                                   priority
                                   className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                   sizes="(max-width: 768px) 80vw, 40vw"
                               />
                               <div className="absolute inset-0 bg-stone-900/10 transition-opacity duration-700 group-hover:opacity-0"></div>
                           </div>
                           <div className="absolute top-1/2 right-0 transform -translate-y-1/3 w-[55%] aspect-square border-8 border-stone-50 overflow-hidden shadow-2xl rounded-lg hidden lg:block">
                               <Image
                                   src="/images/choila.webp"
                                   alt="Signature Dish"
                                   fill
                                   priority
                                   className="object-cover transition-transform duration-1000 group-hover:scale-110 "
                                   sizes="(max-width: 768px) 50vw, 25vw"
                               />
                           </div>
                       </div>

                       {/* Right: Text Content */}
                       <div className="flex flex-col gap-8 lg:pt-8  p-8 lg:p-12  relative">
                           <div className="absolute -top-6 -left-6 text-stone-100 opacity-50 font-serif text-9xl">&quot;</div>

                           <div className="relative z-10">
                               <h3 className="text-2xl font-serif text-stone-900 mb-4 flex items-center gap-3 ">
                                   Our Story
                               </h3>
                               <p className="italic text-stone-600 text-lg leading-relaxed font-light text-justify">
                                   Nestled in the historic town of Harisiddhi, our restaurant stands as a testament to the rich culinary heritage of the Newar community. For generations, we have perfected the art of traditional Newari cooking, using recipes passed down through centuries and ingredients sourced from local markets.
                               </p>
                           </div>

                           <hr className="border-stone-100 border-2" />

                           <div className="relative z-10">
                               <h3 className="text-2xl font-serif text-stone-900 mb-4 flex items-center gap-3">
                                   Our Vision
                               </h3>
                               <p className="italic text-stone-600 text-lg leading-relaxed font-light mb-8 text-justify">
                                   Every dish tells a story of festivals, of family gatherings, of the intricate relationship between culture and cuisine. From the ceremonial Samay Baji to the comforting warmth of Yomari, we invite you to experience the authentic soul of Nepal.
                               </p>

                               <Link
                                   href="/about"
                                   className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-dark text-white text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-stone-900 transition-colors duration-300 shadow-md group"
                               >
                                   Discover More
                                   <ArrowRightCircle className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                               </Link>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
       </>
    )
}
export default AboutSection
