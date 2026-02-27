"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLeaf, FaFire, FaAppleAlt } from "react-icons/fa";

const menuData = {
  entrees: [
    {
      name: "Harisiddhi Newa Suli Signature Set",
      description: "Baji | Mushyaa | Badam | Aalu Wala | Newa Achaar | Chwey Laa | Kachi Laa | Ja Laa | Dyaku Laa | Malta Meyi Laa | Sukuti | Henya Chwey Laa | Nyakhunaa (Winter only)",
      price: [1500, 2400],
      tag: "SIGNATURE",
    },
    {
      name: "Newa Suli Grand Set",
      description: "Baji | Mushyaa | Badam | Aalu Wala | Newa Achaar | Chwey Laa | Kachi Laa | Ja Laa | Dyaku Laa | Malta Meyi Laa | Sukuti | Henya Chwey Laa | Paangra | Swon | Khaa Gwoh | Mey | Nhyepu | Tishya | Shyapu Mhicha | Bhutan | Chow Hee | Sandeko Chyau | Seitan Sukuti | Aalu Tama | Nyakhunaa (Winter only)",
      price: 3500,
      tag: "GRAND",
    },
    {
      name: "Newa Suli Veg Set",
      description: "Baji | Mushyaa | Badam | Aalu Wala | Achaar | Sandeko Chyau | Seitan Sukuti | Aalu Tama",
      price: 750,
      tag: "VEGETARIAN",
    },
  ],
  individualItems: [
    { name: "Baji | Chiura | Beaten Rice", price: 100, tag: "VEGETARIAN" },
    { name: "Mushya | Bhatmas | Fried Soyabean", price: 80, tag: "VEGETARIAN" },
    { name: "Bara | Badam | Salted Peanuts", price: 80, tag: "VEGETARIAN" },
    { name: "Aalu Wala | Seasoned Potato", price: 80, tag: "VEGETARIAN" },
    { name: "Newa Achaar | Pickle", price: 80, tag: "VEGETARIAN" },
    { name: "Aalu Tama | Bamboo Shoot", price: 280, tag: "VEGETARIAN" },
    { name: "Chwey Laa | BBQ Buff Meat", price: 240 },
    { name: "Kachi Laa | Raw Buff Minced Meat", price: 220 },
    { name: "Ja Laa | Buff Skin", price: 220 },
    { name: "Dyaku Laa | Well Cooked Buff Meat", price: 220 },
    { name: "Malta Meila | Buff Chilli", price: 350 },
    { name: "Sukuti Sandeko | Buff Dry Meat", price: 380 },
    { name: "Henya Chwey Laa | Duck Meat", price: 80 },
    { name: "Nyakhuna | Buff Meat Gelatin", price: 100 },
  ],
  twaakkaItems: [
    { name: "Khaa Gwoh | Baklo Bhudi | Buff Stomach", price: 190 },
    { name: "Mey | Jibro | Buff Tongue", price: 190 },
    { name: "Nhyepu | Gidi | Brain", price: 170 },
    { name: "Tishya | Buff Spinal Cord", price: 170 },
    { name: "Syapu Mhicha | Buff Bone Marrow", price: 340 },
    { name: "Bhutan | Buff Intestines", price: 170 },
    { name: "Swon | Fokso | Mutton Lungs", price: 190 },
    { name: "Choon Laa | Keema | Fried Minced Buff", price: 260 },
    { name: "Anda Chhoon Laa | Fried Egg with Minced Buff", price: 300 },
    { name: "Seitan Sukuti | Seasoned Seitan", price: 300, tag: "VEGETARIAN" },
    { name: "Sadeko Chyau | Seasoned Mushroom", price: 220, tag: "VEGETARIAN" },
    { name: "Kheyn | Egg - Boiled/Omlette/SSU/Bhurji", price: 120 },
    { name: "Chwo Hee | Rakti | Steamed WBC", price: 120 },
    { name: "Jhuku | Newari Sausage", price: 190 },
  ],
  riceMeals: [
    { name: "Jaa Khana (Buff/Chicken/Fish)", price: 490 },
    { name: "Mutton Khana", price: 590 },
    { name: "Veg Khana", price: 290, tag: "VEGETARIAN" },
    { name: "Plain Daal Bhaat", price: 190, tag: "VEGETARIAN" },
  ],
  baraItems: [
    { name: "Saada | Plain", price: 100, tag: "VEGETARIAN" },
    { name: "Veggie", price: 120, tag: "VEGETARIAN" },
    { name: "Anda (Egg)", price: 140 },
    { name: "Keema (Minced Meat)", price: 190 },
    { name: "Mishran (Mixed)", price: 240 },
  ],
  sweets: [
    { name: "Yamari (2 Pcs)", price: 190 },
    { name: "Ju: Ju: Dhau", price: 100 },
    { name: "Paan", price: 100 },
  ],
  soups: [
    { name: "Ka: Kwaa | Newari Soup", price: 180 },
    { name: "Kweyn Kwaa | Bone Soup", price: 180 },
    { name: "Mii Kwaa | Methi Soup", price: 180, tag: "VEGETARIAN" },
    { name: "Paamu Kwaa | Lapsi Soup", price: 180, tag: "VEGETARIAN" },
  ],
  chickenItems: [
    { name: "Malta Khaaya Laa | Chilly Chicken", price: 340 },
    { name: "Khaaya | Chicken Chwey Laa", price: 340 },
    { name: "Paangra | Gizzard", price: 240 },
    { name: "Khayi Laa | Chicken Gravy", price: 340 },
    { name: "Khayi Laa | Chicken Roast", price: 240 },
  ],
  chatamariItems: [
    { name: "Saada | Plain", price: 80, tag: "VEGETARIAN" },
    { name: "Anda | Egg", price: 120 },
    { name: "Anda Aalu | Egg Potato", price: 160 },
    { name: "Keema | Minced Meat", price: 190 },
    { name: "Mishran | Mixed", price: 240 },
  ],
  salads: [
    { name: "Green Salad", price: 220, tag: "VEGETARIAN" },
    { name: "Fruit Salad", price: 380, tag: "Contains Fruit" },
  ],
  drinks: [
    { name: "Chaaku Thwon", peg: 60, qtr: 240, half: 480, full: 720 },
    { name: "Khayu Thwon", peg: 60, qtr: 240, half: 480, full: 720 },
    { name: "Hyamu Thwon", peg: 60, qtr: 240, half: 480, full: 720 },
    { name: "Aila | Raksi", peg: 60, qtr: 180, half: 360, full: 560 },
  ],
};

const Tag = ({ type }: { type: string }) => {
  const styles = {
    VEGETARIAN: "bg-emerald-100 text-emerald-800 border-emerald-200",
    SIGNATURE: "bg-amber-100 text-amber-800 border-amber-200",
    GRAND: "bg-stone-800 text-stone-100 border-stone-700",
    SPICY: "bg-red-100 text-red-800 border-red-200",
    DEFAULT: "bg-stone-100 text-stone-600 border-stone-200",
  };

  return (
    <span className={`text-xs px-2 py-1 rounded-sm uppercase tracking-wider font-medium border ${styles[type as keyof typeof styles] || styles.DEFAULT}`}>
      {type}
    </span>
  );
};

const MenuItem = ({ name, description, price, tag }: { name: string; description?: string; price: number | number[]; tag?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group bg-white p-6 rounded-sm border border-stone-200 hover:shadow-lg transition-all duration-300"
  >
    <div className="flex justify-between items-start gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-3 flex-wrap mb-2">
          <h3 className="text-lg font-serif text-stone-900 font-medium">
            {name}
          </h3>
          {tag && <Tag type={tag} />}
        </div>
        {description && (
          <p className="text-sm text-stone-500 font-light leading-relaxed">
            {description}
          </p>
        )}
      </div>
      <span className="text-lg font-serif text-amber-700 font-semibold whitespace-nowrap">
        Rs. {Array.isArray(price) ? price.join(" / ") : price}
      </span>
    </div>
  </motion.div>
);

const SimpleMenuItem = ({ name, price, tag }: { name: string; price: number; tag?: string }) => (
  <div className="flex justify-between items-center py-3 border-b border-stone-200 last:border-0 hover:bg-stone-50 px-2 transition-colors rounded-sm group">
    <div className="flex items-center gap-3">
      <span className="text-stone-800 font-light">{name}</span>
      {tag && <Tag type={tag} />}
    </div>
    <span className="font-serif text-amber-700 font-medium group-hover:text-amber-800 transition-colors">
      Rs. {price}
    </span>
  </div>
);

const MenuSection = ({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) => (
  <div className={`mb-16 ${className}`}>
    <div className="flex items-center gap-4 mb-8">
      <div className="h-px flex-1 bg-stone-300" />
      <h2 className="text-2xl md:text-3xl font-serif text-stone-900 text-center px-6">
        {title}
      </h2>
      <div className="h-px flex-1 bg-stone-300" />
    </div>
    {children}
  </div>
);

export default function Menu() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/newasuli_img_7.jpg"
            alt="Newari Feast"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/90" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 mb-6 text-xs tracking-[0.3em] text-amber-200/90 uppercase border border-amber-200/30 rounded-full backdrop-blur-sm"
          >
            Authentic Cuisine
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-100 mb-6 tracking-tight"
          >
            <span className="text-amber-400 font-light italic">Our</span>
            <span className="block font-bold">Menu</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-0.5 bg-amber-500 mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-stone-300/90 font-light max-w-2xl mx-auto"
          >
            Experience the authentic taste of Harisiddhi with traditional Newari recipes 
            passed down through generations
          </motion.p>
        </div>
      </section>

      {/* Menu Content */}
      <div className="max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        {/* Featured Sets */}
        <MenuSection title="Newa Suli Sets">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData.entrees.map((item, idx) => (
              <MenuItem key={idx} {...item} />
            ))}
          </div>
        </MenuSection>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          <MenuSection title="Individual Items">
            <div className="bg-white rounded-sm border border-stone-200 p-6">
              {menuData.individualItems.map((item, idx) => (
                <SimpleMenuItem key={idx} {...item} />
              ))}
            </div>
          </MenuSection>

          <MenuSection title="Twaakka Sitan">
            <div className="bg-white rounded-sm border border-stone-200 p-6">
              {menuData.twaakkaItems.map((item, idx) => (
                <SimpleMenuItem key={idx} {...item} />
              ))}
            </div>
          </MenuSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <MenuSection title="Rice Meals">
            <div className="bg-white rounded-sm border border-stone-200 p-6">
              {menuData.riceMeals.map((item, idx) => (
                <SimpleMenuItem key={idx} {...item} />
              ))}
            </div>
          </MenuSection>

          <MenuSection title="Bara">
            <div className="bg-white rounded-sm border border-stone-200 p-6">
              {menuData.baraItems.map((item, idx) => (
                <SimpleMenuItem key={idx} {...item} />
              ))}
            </div>
          </MenuSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <MenuSection title="Sweets">
            <div className="bg-white rounded-sm border border-stone-200 p-6">
              {menuData.sweets.map((item, idx) => (
                <SimpleMenuItem key={idx} {...item} />
              ))}
            </div>
          </MenuSection>

          <MenuSection title="Soups">
            <div className="bg-white rounded-sm border border-stone-200 p-6">
              {menuData.soups.map((item, idx) => (
                <SimpleMenuItem key={idx} {...item} />
              ))}
            </div>
          </MenuSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <MenuSection title="Chicken Specialties">
            <div className="bg-white rounded-sm border border-stone-200 p-6">
              {menuData.chickenItems.map((item, idx) => (
                <SimpleMenuItem key={idx} {...item} />
              ))}
            </div>
          </MenuSection>

          <MenuSection title="Chatamari">
            <div className="bg-white rounded-sm border border-stone-200 p-6">
              {menuData.chatamariItems.map((item, idx) => (
                <SimpleMenuItem key={idx} {...item} />
              ))}
            </div>
          </MenuSection>
        </div>

        {/* Salads */}
        <MenuSection title="Salads">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {menuData.salads.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-sm border border-stone-200 p-6 flex justify-between items-center hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <span className="text-stone-800 font-light">{item.name}</span>
                  {item.tag && <Tag type={item.tag} />}
                </div>
                <span className="font-serif text-amber-700 font-medium text-lg">
                  Rs. {item.price}
                </span>
              </div>
            ))}
          </div>
        </MenuSection>

        {/* Drinks Table */}
        <MenuSection title="Traditional Drinks">
          <div className="bg-white rounded-sm border border-stone-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-stone-100 border-b border-stone-200">
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-serif text-stone-900 font-medium">
                      Item
                    </th>
                    <th className="text-center py-4 px-4 text-sm font-serif text-stone-900 font-medium">
                      Peg
                    </th>
                    <th className="text-center py-4 px-4 text-sm font-serif text-stone-900 font-medium">
                      Quarter
                    </th>
                    <th className="text-center py-4 px-4 text-sm font-serif text-stone-900 font-medium">
                      Half
                    </th>
                    <th className="text-center py-4 px-4 text-sm font-serif text-stone-900 font-medium">
                      Full
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {menuData.drinks.map((item, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-stone-100 last:border-0 hover:bg-stone-50 transition-colors"
                    >
                      <td className="py-4 px-6 text-stone-800 font-light">
                        {item.name}
                      </td>
                      <td className="py-4 px-4 text-center font-serif text-amber-700">
                        Rs. {item.peg}
                      </td>
                      <td className="py-4 px-4 text-center font-serif text-amber-700">
                        Rs. {item.qtr}
                      </td>
                      <td className="py-4 px-4 text-center font-serif text-amber-700">
                        Rs. {item.half}
                      </td>
                      <td className="py-4 px-4 text-center font-serif text-amber-700">
                        Rs. {item.full}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </MenuSection>

        {/* Legend */}
        <div className="mt-16 pt-8 border-t border-stone-200">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-sm border border-stone-200">
              <FaLeaf className="w-4 h-4 text-emerald-600" />
              <span className="text-stone-600">Vegetarian</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-sm border border-stone-200">
              <FaAppleAlt className="w-4 h-4 text-orange-500" />
              <span className="text-stone-600">Contains Fruit</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-sm border border-stone-200">
              <FaFire className="w-4 h-4 text-red-600" />
              <span className="text-stone-600">Spicy</span>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-stone-400">
            All prices are inclusive of taxes • Prices subject to change without notice
          </p>
        </div>
      </div>
    </main>
  );
}