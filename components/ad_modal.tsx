"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const AdModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;
  return (
    <div className="fixed bg-dark/50 inset-0 z-50 p-24" onClick={handleClose}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center max-w-xl h-full relative mx-auto rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src="/images/image1.jpg"
            alt="Ad"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 90vw, 500px"
          />
          <div
            className="absolute -top-8 -right-8 cursor-pointer"
            onClick={handleClose}
            title="Close"
          >
            <X size={32} color="#ffffff" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AdModal;
