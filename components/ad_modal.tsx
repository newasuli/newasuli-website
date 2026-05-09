"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Calendar } from "lucide-react";
import Link from "next/link";

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

        <div className="relative w-full max-w-lg bg-stone-100 rounded-lg shadow-2xl overflow-hidden z-10">
          <Image
            src="/images/image1.jpg"
            alt="Ad"
            width={500}
            height={300}
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 90vw, 500px"
          />

          <button
            onClick={handleClose}
            className="w-10 h-10 bg-amber-600 hover:bg-amber-700 text-stone-950 rounded-full flex items-center justify-center transition-colors active:scale-95 z-50 float-right -m-4"
            title="Close"
          >
            <X size={16} />
          </button>

          <div className="text-center mt-6">
            <Link
              href="/reserve"
              className="inline-block px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors active:scale-95"
            >
              <Calendar size={16} className="inline-block mr-1" />
              <span>Reserve Table</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdModal;
