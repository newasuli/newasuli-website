"use client";
import Image from "next/image";
import about from "@/public/images/image1.jpg";
import food from "@/public/images/image2.jpg";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Home() {
     const containerRef = useRef(null);

useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
const ctx=gsap.context(()=>{

    gsap.timeline({
        scrollTrigger: {
            trigger: "#heroSection1",
            start: "top 80%",
            end: "bottom -5%",
            toggleActions: "play reverse play reverse"
        },
    })
        .from("#green", { x: -300, opacity: 0, duration: 0.6 })
        .from("#blue", { x: 300, opacity: 0, duration: 0.6 }, "-=0.4");

    gsap.timeline({
        scrollTrigger: {
            trigger: "#heroSection2",
            start: "top 100%",
            end: "bottom -5%",
            toggleActions: "play reverse play reverse"
      },
      
      
    })
        .from('#red', { duration: 0.6, x: -500, opacity: 0 })
        .from('#yellow', { duration: 0.6, x: 500, opacity: 0 }, "-=0.5");
}, containerRef);
    ScrollTrigger.refresh();


    return () => ctx.revert();
}, []);


    return (
    <>
      <div className="h-full lg:h-screen relative">
        <section className="w-full h-full fixed inset-0 -z-10">
          <Image
            src={"/images/home_bg.png"}
            alt="Newa Suli Restaurant"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </section>
        <section className="w-full h-full bg-black/20 flex items-center justify-center relative">
          <h2 className="text-4xl lg:text-7xl text-gray-50/80 text-center font-newsreader font-bold sticky top-1/2 transform -translate-y-1/2">
            Welcome to Newa Suli
          </h2>
        </section>
      </div>
      <section
          ref={containerRef}
          className="w-full min-h-screen bg-white px-8 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            id="heroSection1"
          >
            <div
              className="w-full aspect-square bg-gray-300 rounded-lg"
              id="green"
            >
              <Image
                src={about}
                alt="About Newa Suli"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex items-center">
              <div id="blue">
                <p className="text-gray-700 text-lg font-light leading-relaxed">
                  Summary of what newa suli is all about with complementing
                  picture or pictures subtle animations which links to second
                  page (about)
                </p>
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            id="heroSection2"
          >
            <div className="flex items-center">
              <div id="red">
                <p className="text-gray-700 text-lg font-light italic leading-relaxed">
                  brief summary of the foods newa suli offers with complementing
                  picture or pictures with subtle animation. This links to third
                  page food & drinks.
                </p>
              </div>
            </div>
            <div
              className="w-full aspect-square bg-gray-300 rounded-lg"
              id="yellow"
            >
              <Image
                src={food}
                alt="About Newa Suli"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-dark border-y-6 border-red py-16 flex flex-col items-center gap-2">
        <section className="w-full grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-2 h-[600]">
          <div className="bg-gray-400 relative col-span-2 row-span-2 overflow-hidden cursor-pointer">
            <Image
              src={"/images/newasuli_img_1.jpg"}
              alt=""
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-2000 ease-out"
            />
          </div>
          <div className="bg-gray-400 relative overflow-hidden cursor-pointer">
            <Image
              src={"/images/newasuli_img_2.jpg"}
              alt=""
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-800 ease-out"
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
      </section>
      <section className="w-full h-screen bg-white"></section>
      <div className="bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.724530092683!2d85.33673557617271!3d27.633047028763382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1738dc92c46f%3A0xac25e0e6e6e8c67e!2sHarisiddhi%20Newa%20Suli!5e0!3m2!1sen!2snp!4v1765278955274!5m2!1sen!2snp"
          allowFullScreen
          loading="lazy"
          className="w-full h-[450px] border-0"
        ></iframe>
      </div>
    </>
  );
}
