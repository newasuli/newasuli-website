"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React, { useEffect } from "react";
import { CgMenu, CgClose } from "react-icons/cg";

const Navbar = () => {
  const pathname = usePathname();
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };
  useEffect(() => {
    if (showMobileNav) {
      document.body.style.overflow = "hidden";
      console.log(document.body.style.overflow);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMobileNav]);
  return (
    <header className="w-full flex justify-between items-center px-4 md:px-12 lg:px-16 py-4 absolute top-0 left-0 right-0">
      <Link href="/">
        <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
          <Image
            src="/images/logo.png"
            alt="Newasuli Logo"
            fill
            className="object-contain"
          />
        </div>
      </Link>
      <div
        className="lg:hidden flex flex-col gap-2 w-8 z-50 transition-all duration-300 ease-in-out"
        onClick={toggleMobileNav}
      >
        <div
          className={`w-full h-0.5 bg-gray-500 rounded-lg transition-all ${
            showMobileNav && "translate-0.5 rotate-34 origin-left"
          }`}
        ></div>
        <div
          className={`w-full h-0.5 bg-gray-500 rounded-lg transition-all delay-100 ${
            showMobileNav && "scale-x-0 origin-center"
          }`}
        ></div>
        <div
          className={`w-full h-0.5 bg-gray-500 rounded-lg transition-all ${
            showMobileNav && "translate-x-0.5 -rotate-34 origin-left"
          }`}
        ></div>
      </div>
      <nav
        className={`flex flex-col items-center gap-8 px-8 py-20 fixed top-0 right-0 bottom-0 w-1/2 h-screen z-40 bg-white md:right-0 md:left-auto md:w-1/2 lg:flex-row ${
          showMobileNav ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300 delay-100 lg:px-0 lg:scale-x-100 lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:translate-x-0 lg:py-0`}
      >
        <ul
          role="list"
          className="flex flex-col lg:flex-row gap-4 list-none lg:gap-8"
        >
          <li>
            <Link
              href="/"
              className={`font-poppins font-medium text-lg lg:text-base text-gray-500 ${
                pathname === "/" ? "lg:text-white" : ""
              } hover-effect-underline`}
              onNavigate={(e) => {
                setShowMobileNav(false);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`font-poppins font-medium text-lg lg:text-base text-gray-500 ${
                pathname === "/about" ? "lg:text-white" : ""
              } hover-effect-underline`}
              onNavigate={(e) => {
                setShowMobileNav(false);
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className={`font-poppins font-medium text-lg lg:text-base text-gray-500 ${
                pathname === "/menu" ? "lg:text-white" : ""
              } hover-effect-underline`}
              onNavigate={(e) => {
                setShowMobileNav(false);
              }}
            >
              Food & Drinks
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className={`font-poppins font-medium text-lg lg:text-base text-gray-500 ${
                pathname === "/gallery" ? "lg:text-white" : ""
              } hover-effect-underline`}
              onNavigate={(e) => {
                setShowMobileNav(false);
              }}
            >
              Gallery
            </Link>
          </li>
        </ul>
        <button className="px-6 py-2 bg-dark text-white font-poppins font-medium text-base lg:font-normal rounded-lg cursor-pointer">
          Contact Us
        </button>
      </nav>
      <div
        className={`w-screen h-screen absolute inset-0 bg-black/60 transition-all duration-300 ease-in-out ${
          showMobileNav ? "visible" : "invisible"
        } lg:hidden z-30`}
        onClick={() => setShowMobileNav(false)}
      ></div>
    </header>
  );
};

export default Navbar;
