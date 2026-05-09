"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery & Events", href: "/gallery" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 py-4 ${
          scrolled ? "bg-black/30 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative z-50">
              <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
                <div
                  className={`relative transition-all duration-300 ${scrolled ? "w-12 h-12" : "w-14 h-14"}`}
                >
                  <Image
                    src="/images/logo.png"
                    alt="Harisiddhi Newa Suli"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 48px, 56px"
                  />
                </div>
                <div
                  className={`hidden sm:block transition-all duration-300 ${scrolled ? "opacity-100" : "opacity-90"}`}
                >
                  <Image
                    src="/images/textlogo.png"
                    alt="Newa Suli"
                    width={scrolled ? 100 : 120}
                    height={40}
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group py-2"
                >
                  <span
                    className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-amber-400"
                        : "text-white hover:text-stone-200"
                    }`}
                  >
                    {link.name}
                  </span>
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                      pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5 items-end">
                <span
                  className={`block h-0.5 rounded-full origin-center transition-all duration-300 ${isOpen ? "w-6 bg-stone-100 rotate-45 translate-y-2" : "w-6 bg-white"}`}
                />
                <span
                  className={`block w-4 h-0.5 rounded-full transition-all duration-300 ${isOpen ? "opacity-0 bg-stone-100" : "opacity-100 bg-white"}`}
                />
                <span
                  className={`block h-0.5 rounded-full origin-center transition-all duration-300 ${isOpen ? "w-6 bg-stone-100 -rotate-45 -translate-y-2" : "w-5 bg-white"}`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-stone-950/98 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />

          <nav className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-stone-900 z-40 lg:hidden flex flex-col justify-center px-8">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-4 text-3xl font-serif transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-amber-500"
                        : "text-stone-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-stone-800">
              <a
                href="tel:+9779828711989"
                className="flex items-center gap-3 text-stone-400 hover:text-amber-500 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">+977 982-8711989</span>
              </a>
              <p className="mt-4 text-sm text-stone-500">
                Godawari Road, Lalitpur
                <br />
                Kathmandu Valley, Nepal
              </p>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
