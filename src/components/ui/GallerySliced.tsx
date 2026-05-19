"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SlicedItem {
    title: string;
    img: string;
}

interface GallerySlicedProps {
    items?: SlicedItem[];
    backgroundColor?: string;
    descriptionTemplate?: string;
}

const GallerySliced: React.FC<GallerySlicedProps> = ({
    items = [
        { title: "NATURE", img: "https://images.unsplash.com/photo-1773332611476-6ec2ba68049f?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0" },
        { title: "URBAN", img: "https://images.unsplash.com/photo-1774444487684-a796af0c2841?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0" },
        { title: "HUMAN", img: "https://images.unsplash.com/photo-1775126964224-99c03c0e439c?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0" },
        { title: "OBJECT", img: "https://images.unsplash.com/photo-1774696788918-fabf0c18e126?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0" },
    ],
    backgroundColor = "#ffffff",
    descriptionTemplate = "A Uilora editorial — an immersive dive into the world of {title}.",
}) => {
    return (
        <div className="h-[90vh] flex-col md:flex-row hidden sm:flex" style={{ backgroundColor }}>
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    className="relative flex-1 h-full border-r border-white group overflow-hidden cursor-pointer"
                    whileHover={{ flex: 3 }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                >
                    <div className="absolute inset-0 bg-black">
                        <img
                            src={item.img}
                            alt={item.title || "Gallery Image"}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                        />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Vertical Text (Default) */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 group-hover:opacity-0 transition-opacity duration-300">
                        <h3 className="text-white text-2xl font-bold tracking-widest rotate-[-90deg] whitespace-nowrap">{item.title}</h3>
                    </div>

                    {/* Expanded Content */}
                    <div className="absolute bottom-0 left-0 p-12 w-full translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        <h2 className="text-6xl font-black text-white mb-4">{item.title}</h2>
                        <p className="text-white/70 max-w-sm">
                            {descriptionTemplate.replace('{title}', item.title.toLowerCase())}
                        </p>

                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default GallerySliced;

