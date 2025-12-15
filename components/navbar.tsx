"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <header className="w-full flex justify-between items-center px-8 py-4 absolute">
      <Link href="/">
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
          <Image
            src="/images/logo.png"
            alt="Newasuli Logo"
            fill
            className="object-contain"
          />
        </div>
      </Link>
      <div
        className="size-8 bg-gray-600 border border-white md:hidden"
        onClick={toggleMobileNav}
      ></div>
      <nav
        className={`flex flex-col items-center gap-8 py-16 fixed inset-0 w-full h-screen top-0 left-0 bg-dark md:flex-row ${
          showMobileNav ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:static md:h-auto md:w-auto md:bg-transparent md:translate-x-0 md:py-0`}
      >
        <div
          className="size-8 bg-red-300 absolute top-4 right-4 md:hidden"
          onClick={toggleMobileNav}
        ></div>
        <ul className="flex flex-col items-center md:flex-row gap-8">
          <li>
            <Link
              href="/"
              className={`font-poppins font-medium ${
                pathname === "/" ? "text-white" : "text-gray-500"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`font-poppins font-medium ${
                pathname === "/about" ? "text-white" : "text-gray-500"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className={`font-poppins font-medium ${
                pathname === "/menu" ? "text-white" : "text-gray-500"
              }`}
            >
              Food & Drinks
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className={`font-poppins font-medium ${
                pathname === "/gallery" ? "text-white" : "text-gray-500"
              }`}
            >
              Gallery
            </Link>
          </li>
        </ul>
        <button className="px-4 py-2 bg-dark text-white rounded-lg cursor-pointer">
          Contact Us
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
