"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface EditorialItem {
    image: string;
    chapter?: string;
    title?: string;
    titleItalic?: string;
    description?: string;
}

interface GalleryEditorialProps {
    items?: EditorialItem[];
    backgroundColor?: string;
    textColor?: string;
    accentColor?: string;
}

const GalleryEditorial: React.FC<GalleryEditorialProps> = ({
    items = [
        {
            image: "/images/newasuli_img_1.webp",
            chapter: "1982",
            title: "The",
            titleItalic: "Beginning",
            description: "Started as a small family kitchen in Harisiddhi, serving traditional Newari feasts to locals. A hac sed sit sed elit integer at odio diam. Non lorem bibendum nunc scelerisque felis convallis mi commodo ornare.\n\nSagittis suspendisse purus neque sem vestibulum volutpat. Cursus mattis arcu sit felis. Cursus a tortor interdum in consectetur congue vel. Eu fermentum lobortis adipiscing gravida aliquam velit mauris non.",
        },
        {
            image: "/images/newasuli_img_2.webp",
            chapter: "1995",
            title: "First",
            titleItalic: "Restaurant",
            description: "Opened our first dedicated restaurant space, preserving authentic recipes passed down through generations. A hac sed sit sed elit integer at odio diam. Non lorem bibendum nunc scelerisque felis convallis mi commodo ornare.\n\nSagittis suspendisse purus neque sem vestibulum volutpat. Cursus mattis arcu sit felis. Cursus a tortor interdum in consectetur congue vel. Eu fermentum lobortis adipiscing gravida aliquam velit mauris non.",
        },
        {
            image: "/images/newasuli_img_3.webp",
            chapter: "2010",
            title: "Expanding",
            titleItalic: "Traditions",
            description: "Introduced our famous 'Newa Suli Sets' — complete traditional dining experiences. A hac sed sit sed elit integer at odio diam. Non lorem bibendum nunc scelerisque felis convallis mi commodo ornare.\n\nSagittis suspendisse purus neque sem vestibulum volutpat. Cursus mattis arcu sit felis. Cursus a tortor interdum in consectetur congue vel. Eu fermentum lobortis adipiscing gravida aliquam velit mauris non.",
        },
        {
            image: "/images/newasuli_img_7.webp",
            chapter: "Present",
            title: "Legacy",
            titleItalic: "Continues",
            description: "Still family-owned, still authentic — serving the same flavors that made us beloved. A hac sed sit sed elit integer at odio diam. Non lorem bibendum nunc scelerisque felis convallis mi commodo ornare.\n\nSagittis suspendisse purus neque sem vestibulum volutpat. Cursus mattis arcu sit felis. Cursus a tortor interdum in consectetur congue vel. Eu fermentum lobortis adipiscing gravida aliquam velit mauris non.",
        }
    ],

    textColor = "#e5e5e5",
    accentColor = "#d4af37",
}) => {
    return (
        <div className="min-h-screen py-32 px-4 bg-stone-900" style={{ color: textColor }}>
            <div className="max-w-7xl mx-auto px-6 space-y-32">
                {items.map((item, i) => (
                    <div key={i} className={cn("flex flex-col md:flex-row gap-12  items-center", i % 2 !== 0 ? "md:flex-row-reverse" : "")}>
                        <div className="w-full md:w-1/2 relative h-[60vh] overflow-hidden group">
                            <motion.div
                                initial={{ scale: 1.2 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="w-full h-full"
                            >
                                <img src={item.image} alt="Gallery Image" className="w-full h-full object-cover" />
                            </motion.div>
                            <div className="absolute top-4 right-4 bottom-4 left-4 border scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" style={{ borderColor: `${textColor}33` }} />
                        </div>

                        <div className="w-full md:w-1/2 space-y-6">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-xs font-bold tracking-[0.2em]"
                                style={{ color: accentColor }}
                            >
                                {item.chapter || `CHAPTER 0${i + 1}`}
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl font-serif leading-tight"
                            >
                                {item.title || "The Silent"} <br />
                                <span className="italic font-light opacity-60">{item.titleItalic || "Symphony"}</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="font-light leading-relaxed max-w-sm whitespace-pre-wrap text-justify"
                                style={{ color: `${textColor}66` }}
                            >
                                {item.description || "Architecture acts as a bridge between nature and humanity. A stillness that speaks volumes in the chaotic modern world."}
                            </motion.p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryEditorial;
