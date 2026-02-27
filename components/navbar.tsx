
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-stone-900/95 backdrop-blur-md shadow-lg py-3" 
            : "bg-transparent py-6"
        }`}
      >
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`relative transition-all duration-300 ${scrolled ? 'w-12 h-12' : 'w-14 h-14'}`}>
                  <Image
                    src="/images/logo.png"
                    alt="Harisiddhi Newa Suli"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className={`hidden sm:block transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-90'}`}>
                  <Image
                    src="/images/textlogo.png"
                    alt="Newa Suli"
                    width={scrolled ? 100 : 120}
                    height={40}
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group py-2"
                >
                  <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                    pathname === link.href 
                      ? "text-amber-400" 
                      : "text-stone-200 hover:text-white"
                  }`}>
                    {link.name}
                  </span>
                  <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              ))}
              
             
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5 items-end">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`block h-0.5 rounded-full origin-center ${isOpen ? 'w-6 bg-stone-100' : 'w-6 bg-stone-100'}`}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block w-4 h-0.5 bg-stone-100 rounded-full"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`block h-0.5 rounded-full origin-center ${isOpen ? 'w-6 bg-stone-100' : 'w-5 bg-stone-100'}`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-stone-950/98 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.nav
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-stone-900 z-40 lg:hidden flex flex-col justify-center px-8"
            >
              <div className="space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
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
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 pt-8 border-t border-stone-800"
              >
                <a 
                  href="tel:+9779828711989"
                  className="flex items-center gap-3 text-stone-400 hover:text-amber-500 transition-colors"
                >
                  <FaPhone className="w-5 h-5" />
                  <span className="text-lg">+977 982-8711989</span>
                </a>
                <p className="mt-4 text-sm text-stone-500">
                  Godawari Road, Lalitpur<br />
                  Kathmandu Valley, Nepal
                </p>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;