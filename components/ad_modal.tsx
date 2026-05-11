"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

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
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <div
          className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm"
          onClick={handleClose}
        />

        <div className="relative w-full max-w-lg z-10">
          <button
            onClick={handleClose}
            className="absolute -top-4 -right-4 w-10 h-10 bg-stone-200 hover:bg-stone-300 text-stone-950 rounded-full flex items-center justify-center transition-colors active:scale-95 z-50 shadow-lg"
            title="Close"
          >
            <X size={16} />
          </button>

          <div className="w-full bg-stone-100 rounded-lg shadow-2xl overflow-hidden">
            <Image
              src="/images/image1.jpg"
              alt="Ad"
              width={500}
              height={300}
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 90vw, 500px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdModal;
