import Image from "next/image";
import Link from "next/link";

const FEATURED_DISHES = [
  {
    name: "Samay Baji",
    desc: "Traditional ceremonial platter",
    image: "/images/samay_baji.webp",
  },
  { name: "Choila", desc: "Spiced grilled meat", image: "/images/choila.webp" },
  {
    name: "Yomari",
    desc: "Sweet rice dumplings",
    image: "/images/yomari.webp",
  },
  { name: "Bara", desc: "Lentil pancake", image: "/images/bara.webp" },
];

const SignatureDishes = () => {
  return (
      <section className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center mb-16">
            <span className="text-primary-lighter text-sm tracking-[0.3em] uppercase mb-4">
              Culinary Excellence
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif  mb-2 text-center">
              Signature Dishes
            </h2>
            <div className="flex items-center justify-center">
              <Image
                src="/images/title_underline.webp"
                alt="Decoration"
                width={200}
                height={10}
                className="object-contain brightness-0 invert"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_DISHES.map((dish, index) => (
              <div
                key={dish.name}
                className="group relative"
              >
                <div className="aspect-4/5 relative overflow-hidden rounded-sm">
                        <Image
                            
                    src={dish.image}
                    alt={dish.name}
                            fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-stone-900 via-stone-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-serif text-primary-lighter mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-stone-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {dish.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block px-8 py-3 border border-primary text-primary-light hover:bg-primary hover:text-stone-900 transition-all duration-300 rounded-sm tracking-wide"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>
  )
}

export default SignatureDishes
