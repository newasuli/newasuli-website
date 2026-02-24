import React from "react";
import Image from "next/image";

function Gallery() {
  return (
    <>
      <section className="w-full h-1/3 relative mb-2">
        <Image
          src={"/images/newasuli_img_3.jpg"}
          alt="Newa Suli Restaurant"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="-z-10"
        />
        <section className="w-full h-full bg-black/60 flex items-end-safe justify-center">
          <h1 className="text-7xl text-gray-50 font-medium mb-16 font-newsreader italic">
            Gallery
          </h1>
        </section>
      </section>
      <section className="w-full grid grid-cols-2  gap-1 lg:grid-cols-3 lg:gap-2 min-h-[600] mb-2 px-8">
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
