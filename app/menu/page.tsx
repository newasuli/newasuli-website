"use client";
import React from "react";
import Image from "next/image";


const menuData = {
  entrees: [
    {
      name: "Harisiddhi Newa Suli Signature Set",
      description:
        "Baji | Mushyaa | Badam | Aalu Wala | Newa Achaar | Chwey Laa | Kachi Laa | Ja Laa | Dyaku Laa | Malta Meyi Laa | Sukuti | Henya Chwey Laa | Nyakhunaa (Winter only)",
      price: [1500, 2400],
      tag: "SIGNATURE",
        image: "/images/choila.webp",
    },
    {
      name: "Newa Suli Grand Set",
      description:
        "Baji | Mushyaa | Badam | Aalu Wala | Newa Achaar | Chwey Laa | Kachi Laa | Ja Laa | Dyaku Laa | Malta Meyi Laa | Sukuti | Henya Chwey Laa | Paangra | Swon | Khaa Gwoh | Mey | Nhyepu | Tishya | Shyapu Mhicha | Bhutan | Chow Hee | Sandeko Chyau | Seitan Sukuti | Aalu Tama | Nyakhunaa (Winter only)",
      price: [3500],
      tag: "GRAND",
        image: "/images/newa_suli_grand_set.webp",

    },
    {
      name: "Newa Suli Veg Set",
      description:
        "Baji | Mushyaa | Badam | Aalu Wala | Achaar | Sandeko Chyau | Seitan Sukuti | Aalu Tama",
      price: [750],
      tag: "VEGETARIAN",
      image: "/images/choila.webp",
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
    <span
      className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-sm uppercase tracking-wider font-medium border inline-block max-w-fit ${styles[type as keyof typeof styles] || styles.DEFAULT}`}
    >
      {type}
    </span>
  );
};

const MenuItem = ({
  name,
  description,
  price,
  tag,
  image,
}: {
  name: string;
  description?: string;
  price: number | number[];
  tag?: string;
  image?: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
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
      <div className="group bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col shadow-sm">
        {/* Image Area */}
        <div className="w-full h-48 sm:h-56 bg-stone-100 relative p-4 flex items-start justify-end overflow-hidden">
          {image && (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover z-0 group-hover:scale-105 transition-transform duration-500"
            />
          )}
          {tag && <div className="relative z-10"><Tag type={tag} /></div>}
        </div>
        
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-serif text-stone-900 font-medium mb-3">
            {name}
          </h3>
          
          {description && (
            <p className="text-sm text-stone-700 font-light leading-relaxed mb-6 line-clamp-2">
              {description.split(' | ').join(', ')}
            </p>
          )}
          
          <div className="mt-auto flex justify-between items-center pt-2">
            <span className="text-lg font-serif text-stone-900 font-semibold">
              Rs. {Array.isArray(price) ? price.join(" / ") : price}
            </span>
            <button 
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 bg-primary-dark text-white text-xs sm:text-sm font-medium tracking-wider uppercase rounded-sm hover:bg-stone-900 transition-colors duration-300 shadow-md group shrink-0"
            >
              Full Details
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl w-full max-w-lg h-[80vh] max-h-[800px] flex flex-col border-2 border-stone-800 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 pb-4 flex justify-between items-start border-b-2 border-stone-100 bg-white shrink-0">
              <div>
                <h3 className="text-2xl font-serif text-stone-900 font-medium mb-2">{name}</h3>
                {tag && <Tag type={tag} />}
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors shrink-0"
              >
                <span className="sr-only">Close</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="p-6 flex-1 overflow-y-auto">
              {/* Image Placeholder in Modal */}
              <div className="w-full h-48 sm:h-64 bg-stone-100 border-2 border-stone-800 rounded-2xl mb-6 relative flex items-center justify-center shrink-0 overflow-hidden">
                {image ? (
                  <Image src={image} alt={name} fill className="object-cover" />
                ) : (
                  <span className="text-stone-400 font-medium tracking-widest">IMAGE</span>
                )}
              </div>

              {description && (
                <div className="mb-6">
                  <h4 className="font-medium text-stone-900 mb-3 text-lg">Set Includes:</h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {description.split(' | ').map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-stone-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-light mt-2 shrink-0" />
                        <span>{item.trim()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="p-6 pt-4 border-t-2 border-stone-100 bg-white flex items-center justify-between shrink-0">
              <span className="text-2xl font-serif text-stone-900 font-semibold">
                Rs. {Array.isArray(price) ? price.join(" / ") : price}
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-stone-800 text-white rounded-xl font-medium hover:bg-stone-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const SimpleMenuItem = ({
  name,
  price,
  tag,
}: {
  name: string;
  price: number;
  tag?: string;
}) => (
  <div className="flex justify-between items-center py-3 border-b border-stone-200 last:border-0 hover:bg-stone-50 px-2 transition-colors rounded-sm group">
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
      {tag && <div className="sm:hidden self-start"><Tag type={tag} /></div>}
      <span className="text-stone-800 font-light">{name}</span>
      {tag && <div className="hidden sm:block"><Tag type={tag} /></div>}
    </div>
    <span className="font-serif text-primary-dark font-medium group-hover:text-amber-800 transition-colors shrink-0 ml-4">
      Rs. {price}
    </span>
  </div>
);

const MenuSection = ({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
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

const FeaturedSetItem = ({ item }: { item: any }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
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
      <div className="relative group flex flex-col items-start h-full">
        {/* Image */}
        <div className="relative w-full h-[520px] overflow-hidden bg-white shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Floating Content Card */}
        <div className="absolute bottom-0 right-0 bg-white p-6 md:p-6 w-[85%] md:w-[320px] h-[220px] flex flex-col">
          {item.tag && (
            <div className="mb-3">
              <Tag type={item.tag} />
            </div>
          )}

          <h3 className="text-2xl font-serif text-primary-dark mb-4 leading-snug">
            {item.name}
          </h3>

          <p className="text-stone-600 leading-8 text-sm font-light line-clamp-3">
            {item.description?.split("|").join(" • ")}
          </p>

          <div className="mt-auto pt-6 flex items-center justify-between">
            <span className="text-xl font-serif text-stone-900 font-medium">
              Rs. {Array.isArray(item.price) ? item.price.join(" / ") : item.price}
            </span>

            <button 
              onClick={() => setIsOpen(true)}
              className="text-sm uppercase tracking-[0.2em] text-primary-dark hover:text-stone-900 transition-colors"
            >
              View
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl w-full max-w-lg h-[80vh] max-h-[800px] flex flex-col border-2 border-stone-800 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 pb-4 flex justify-between items-start border-b-2 border-stone-100 bg-white shrink-0">
              <div>
                <h3 className="text-2xl font-serif text-stone-900 font-medium mb-2">{item.name}</h3>
                {item.tag && <Tag type={item.tag} />}
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors shrink-0"
              >
                <span className="sr-only">Close</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="p-6 flex-1 overflow-y-auto">
              <div className="w-full h-48 sm:h-64 bg-stone-100 rounded-2xl mb-6 relative flex items-center justify-center shrink-0 overflow-hidden">
                {item.image ? (
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                ) : (
                  <span className="text-stone-400 font-medium tracking-widest">IMAGE</span>
                )}
              </div>

              {item.description && (
                <div className="mb-6">
                  <h4 className="font-medium text-stone-900 mb-3 text-lg">Set Includes:</h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {item.description.split(' | ').map((descItem: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-stone-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-light mt-2 shrink-0" />
                        <span>{descItem.trim()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="p-6 pt-4 border-t-2 border-stone-100 bg-white flex items-center justify-between shrink-0">
              <span className="text-2xl font-serif text-stone-900 font-semibold">
                Rs. {Array.isArray(item.price) ? item.price.join(" / ") : item.price}
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-stone-800 text-white rounded-xl font-medium hover:bg-stone-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function Menu() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/newasuli_img_7.webp"
            alt="Newari Feast"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/90" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">


          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-100 mb-6 tracking-tight"
          >
            <span className="text-primary-lighter font-light italic">Our</span>
            <span className="block font-bold">Menu</span>
          </h1>

          <div
            className="w-24 h-0.5 bg-primary-light mx-auto mb-6"
          />

          <p
            className="text-lg text-stone-300/90 font-light max-w-2xl mx-auto italic font-poppins"
          >
            Experience the authentic taste of Harisiddhi with traditional Newari
            recipes passed down through generations
          </p>
        </div>
      </section>

        {/* Featured Sets */}

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-4 my-12">
                {menuData.entrees.map((item, idx) => (
                    <FeaturedSetItem key={idx} item={item} />
                ))}
            </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">


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
                <span className="font-serif text-primary-dark font-medium text-lg">
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
                      <td className="py-4 px-4 text-center font-serif text-primary-dark">
                        Rs. {item.peg}
                      </td>
                      <td className="py-4 px-4 text-center font-serif text-primary-dark">
                        Rs. {item.qtr}
                      </td>
                      <td className="py-4 px-4 text-center font-serif text-primary-dark">
                        Rs. {item.half}
                      </td>
                      <td className="py-4 px-4 text-center font-serif text-primary-dark">
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

          <p className="mt-8 text-center text-xs text-stone-400">
            All prices are inclusive of taxes • Prices subject to change without
            notice
          </p>
        </div>
      </div>
    </main>
  );
}
