import React from "react";
import Image from "next/image";
import { table } from "console";

function Menu() {
  const entrees = [
    {
      name: "Harisiddhi Newa Suli Signature Set",
      description:
        "Baji | Mushyaa | Badam | Aalu Wala | Newa Achaar | Chwey Laa | Kachi Laa | Ja Laa | Dyaku Laa | Malta Meyi Laa | Sukuti | Henya Chwey Laa | Nyakhunaa (Winter only)",
      price: [1500, 2400],
      tag: "SIGNATURE",
    },
    {
      name: "Newa Suli Grand Set",
      description:
        "Baji | Mushyaa | Badam | Aalu Wala | Newa Achaar | Chwey Laa | Kachi Laa | Ja Laa | Dyaku Laa | Malta Meyi Laa | Sukuti | Henya Chwey Laa | Paangra | Swon | Khaa Gwoh | Mey | Nhyepu | Tishya | Shyapu Mhicha | Bhutan | Chow Hee | Sandeko Chyau | Seitan Sukuti | Aalu Tama | Nyakhunaa (Winter only)",
      price: 3500,
      tag: "GRAND",
    },
    {
      name: "Newa Suli Veg Set",
      description:
        "Baji | Mushyaa | Badam | Aalu Wala | Achaar | Sandeko Chyau | Seitan Sukuti | Aalu Tama",
      price: 750,
      tag: "VEGETARIAN",
    },
  ];
  const individualItems = [
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
  ];

  const twaakkaItems = [
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
  ];

  const riceMeals = [
    { name: "Jaa Khana (Buff/Chicken/Fish)", price: 490 },
    { name: "Mutton Khana", price: 590 },
    { name: "Veg Khana", price: 290, tag: "VEGETARIAN" },
    { name: "Plain Daal Bhaat", price: 190, tag: "VEGETARIAN" },
  ];

  const baraItems = [
    { name: "Saada | Plain", price: 100, tag: "VEGETARIAN" },
    { name: "Veggie", price: 120, tag: "VEGETARIAN" },
    { name: "Anda (Egg)", price: 140 },
    { name: "Keema (Minced Meat)", price: 190 },
    { name: "Mishran (Mixed)", price: 240 },
  ];

  const sweets = [
    { name: "Yamari (2 Pcs)", price: 190 },
    { name: "Ju: Ju: Dhau", price: 100 },
    { name: "Paan", price: 100 },
  ];

  const soups = [
    { name: "Ka: Kwaa | Newari Soup", price: 180 },
    { name: "Kweyn Kwaa | Bone Soup", price: 180 },
    { name: "Mii Kwaa | Methi Soup", price: 180, tag: "VEGETARIAN" },
    { name: "Paamu Kwaa | Lapsi Soup", price: 180, tag: "VEGETARIAN" },
  ];

  const chickenItems = [
    { name: "Malta Khaaya Laa | Chilly Chicken)", price: 340 },
    { name: "Khaaya | Chicken Chwey Laa", price: 340 },
    { name: "Paangra | Gizzard", price: 240 },
    { name: "Khayi Laa | Chicken Gravy", price: 340 },
    { name: "Khayi Laa | Chicken Roast", price: 240 },
  ];

  const chatamariItems = [
    { name: "Saada | Plain", price: 80, tag: "VEGETARIAN" },
    { name: "Anda | Egg", price: 120 },
    { name: "Anda Aalu | Egg Potato", price: 160 },
    { name: "Keema | Minced Meat", price: 190 },
    { name: "Mishran | Mixed", price: 240 },
  ];

  const salads = [
    { name: "Green Salad", price: 220, tag: "VEGETARIAN" },
    { name: "Fruit Salad", price: 380, tag: "Contains Fruit" },
  ];

  const drinks = [
    { name: "Chaaku Thwon", peg: 60, qtr: 240, half: 480, full: 720 },
    { name: "Khayu Thwon", peg: 60, qtr: 240, half: 480, full: 720 },
    { name: "Hyamu Thwon", peg: 60, qtr: 240, half: 480, full: 720 },
    { name: "Aila | Raksi", peg: 60, qtr: 180, half: 360, full: 560 },
  ];

  const NewariPattern = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 100 20" preserveAspectRatio="none">
      <path
        d="M0,10 Q25,0 50,10 T100,10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="10" cy="10" r="3" fill="currentColor" />
      <circle cx="30" cy="10" r="3" fill="currentColor" />
      <circle cx="50" cy="10" r="3" fill="currentColor" />
      <circle cx="70" cy="10" r="3" fill="currentColor" />
      <circle cx="90" cy="10" r="3" fill="currentColor" />
    </svg>
  );

  const MenuSection = ({
    title,
    children,
    className = "",
  }: {
    title: string;
    children: any;
    className?: string;
  }) => (
    <div className={`mb-12 ${className}`}>
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-700 to-amber-700"></div>
        <h2
          className="text-2xl md:text-3xl font-bold text-amber-900 uppercase tracking-wider text-center px-4"
          style={{ fontFamily: "serif" }}
        >
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-amber-700 to-amber-700"></div>
      </div>
      {children}
    </div>
  );

  const MenuItem = ({
    name,
    description,
    price,
    tag,
  }: {
    name: string;
    description?: string;
    price: String | number | Array<string | number>;
    tag?: string;
  }) => (
    <div className="mb-6 group bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-amber-200/50 shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-1">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3
              className="text-lg font-bold text-amber-950 uppercase tracking-wide"
              style={{ fontFamily: "serif" }}
            >
              {name}
            </h3>
            {tag && (
              <span
                className={`text-xs px-2 py-1 rounded-sm uppercase font-bold tracking-wider ${
                  tag === "VEGETARIAN"
                    ? "bg-green-700 text-green-50"
                    : "bg-red-700 text-amber-50"
                }`}
              >
                {tag}
              </span>
            )}
          </div>
          {description && (
            <p className="text-sm text-amber-800/80 mt-2 leading-relaxed italic">
              {description}
            </p>
          )}
        </div>
        <span
          className="text-lg font-bold text-red-800 ml-4 whitespace-nowrap"
          style={{ fontFamily: "serif" }}
        >
          {Array.isArray(price) ? price.join(" / ") : price}
        </span>
      </div>
    </div>
  );

  const SimpleMenuItem = ({
    name,
    price,
    tag,
  }: {
    name: string;
    price: number;
    tag?: string;
  }) => (
    <div className="flex justify-between items-center py-3 border-b border-amber-200/50 last:border-0 hover:bg-white/40 px-2 transition-colors rounded">
      <div className="flex items-center gap-2">
        <span className="text-amber-950 font-medium">{name}</span>
        {tag && (
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              tag === "VEGETARIAN" ? "bg-green-600" : "bg-red-600"
            }`}
            title={tag}
          />
        )}
      </div>
      <span className="font-bold text-red-800" style={{ fontFamily: "serif" }}>
        {price}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen    relative overflow-hidden font-newsreader italic">
      <div
        className="absolute inset-0 opacity-80 pointer-events-none"
        style={{
          backgroundImage: "url('/images/paper-texture.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />

      <section className="py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900 via-red-800 to-red-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <span className="text-amber-300 text-xs font-bold uppercase tracking-[0.3em]">
                Slow-Crafted
              </span>
              <h2
                className="text-4xl md:text-5xl font-black text-amber-100 uppercase mt-2 mb-4"
                style={{ fontFamily: "serif" }}
              >
                Special Newari Feast
              </h2>
              <p className="text-amber-200/90 mb-6 leading-relaxed max-w-xl">
                Experience the authentic taste of Harisiddhi with our
                traditional Newari feast, prepared with recipes passed down
                through generations. Perfectly spiced and impossibly tender.
              </p>
              <button className="bg-amber-500 hover:bg-amber-400 text-red-900 font-bold py-3 px-8 rounded-sm uppercase tracking-wider text-sm transition-colors shadow-lg">
                Order Special Set
              </button>
            </div>
            <div className="w-full md:w-96 h-64 bg-amber-100/20 rounded-lg flex items-center justify-center border-4 border-amber-500/30 backdrop-blur-sm">
              <div className="text-center text-amber-200">
                <Image
                  src="/images/newasuli_img_7.jpg"
                  alt="Featured Newari Dish"
                  fill
                  className="object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-900/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl -z-10"></div>

        <MenuSection title="Newa Suli Sets">
          <div className="grid md:grid-cols-2 gap-6">
            {entrees.map((item, idx) => (
              <MenuItem key={idx} {...item} />
            ))}
          </div>
        </MenuSection>

        <div className="grid lg:grid-cols-2 gap-8">
          <MenuSection title="Individual Items">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-amber-200">
              {individualItems.map((item, idx) => (
                <SimpleMenuItem key={idx} {...item} />
              ))}
            </div>
          </MenuSection>

          <MenuSection title="Twaakka Sitan ">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-amber-200">
              {twaakkaItems.map((item, idx) => (
                <SimpleMenuItem key={idx} {...item} />
              ))}
            </div>
          </MenuSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <MenuSection title="Jaa Nae Dhuna Laa?">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-amber-200">
              {riceMeals.map((item, idx) => (
                <SimpleMenuItem key={idx} {...item} />
              ))}
            </div>
          </MenuSection>

          <MenuSection title="Bara ">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-amber-200">
              {baraItems.map((item, idx) => (
                <SimpleMenuItem key={idx} {...item} />
              ))}
            </div>
          </MenuSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <MenuSection title="Chaaku Maakku">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-amber-200">
              {sweets.map((item, idx) => (
                <SimpleMenuItem key={idx} {...item} />
              ))}
            </div>
          </MenuSection>

          <MenuSection title="Kwaa: Kwaa: Soup">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-amber-200">
              {soups.map((item, idx) => (
                <SimpleMenuItem key={idx} {...item} />
              ))}
            </div>
          </MenuSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <MenuSection title="Chicken Lover!">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-amber-200">
              {chickenItems.map((item, idx) => (
                <SimpleMenuItem key={idx} {...item} />
              ))}
            </div>
          </MenuSection>

          <MenuSection title="Chatamari">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-amber-200">
              {chatamariItems.map((item, idx) => (
                <SimpleMenuItem key={idx} {...item} />
              ))}
            </div>
          </MenuSection>
        </div>

        <MenuSection title="Waamu Paamu (Salads)">
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
            {salads.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-amber-200 flex justify-between items-center"
              >
                <div>
                  <span className="text-amber-950 font-medium">
                    {item.name}
                  </span>
                  {item.tag && (
                    <span
                      className={`inline-block ml-2 h-2.5 w-2.5 rounded-full ${
                        item.tag === "VEGETARIAN"
                          ? "bg-green-600"
                          : item.tag === "Contains Fruit"
                            ? "bg-orange-500"
                            : item.tag === "Spicy"
                              ? "bg-red-700"
                              : ""
                      }`}
                      title={item.tag}
                    />
                  )}
                </div>

                <span
                  className="font-bold text-red-800 text-lg"
                  style={{ fontFamily: "serif" }}
                >
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </MenuSection>

        <MenuSection title="Twaniu Makhu La? (Drinks)">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-amber-200 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-red-800">
                  <th
                    className="text-left py-3 text-sm font-bold uppercase text-amber-900"
                    style={{ fontFamily: "serif" }}
                  >
                    Item
                  </th>
                  <th
                    className="text-center py-3 text-sm font-bold uppercase text-amber-900"
                    style={{ fontFamily: "serif" }}
                  >
                    Peg
                  </th>
                  <th
                    className="text-center py-3 text-sm font-bold uppercase text-amber-900"
                    style={{ fontFamily: "serif" }}
                  >
                    Qtr
                  </th>
                  <th
                    className="text-center py-3 text-sm font-bold uppercase text-amber-900"
                    style={{ fontFamily: "serif" }}
                  >
                    Half
                  </th>
                  <th
                    className="text-center py-3 text-sm font-bold uppercase text-amber-900"
                    style={{ fontFamily: "serif" }}
                  >
                    Full
                  </th>
                </tr>
              </thead>
              <tbody>
                {drinks.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-amber-200 last:border-0 hover:bg-white/40 transition-colors"
                  >
                    <td className="py-3 font-medium text-amber-950">
                      {item.name}
                    </td>
                    <td className="py-3 text-center font-bold text-red-800">
                      {item.peg}
                    </td>
                    <td className="py-3 text-center font-bold text-red-800">
                      {item.qtr}
                    </td>
                    <td className="py-3 text-center font-bold text-red-800">
                      {item.half}
                    </td>
                    <td className="py-3 text-center font-bold text-red-800">
                      {item.full}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </MenuSection>

        <div className="mt-12 pt-8 border-t-2 border-amber-700/30">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-amber-900">
            <span className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full">
              <span className="w-3 h-3 bg-green-600 rounded-full"></span>
              Vegetarian
            </span>
            <span className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              Contains Fruit
            </span>
            <span className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full">
              <span className="w-3 h-3 bg-red-700 rounded-full"></span>
              Spicy
            </span>
          </div>
          <p className="mt-6 text-center text-xs text-amber-800/70">
            All prices are inclusive of Taxes. | Level of Spice: Mild → Hot
          </p>
        </div>
      </main>
    </div>
  );
}

export default Menu;
