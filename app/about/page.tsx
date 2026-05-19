import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  UtensilsCrossed,
  Heart,
  Leaf,
  Building2,
} from "lucide-react";
import AboutSection from "@/components/AboutSection"
import GalleryEditorial from "@/src/components/ui/GalleryEditorial";
import GallerySliced from "@/src/components/ui/GallerySliced";
import TeamMembers from "@/components/TeamMembers";

export const metadata = {
  title: "About Us | Harisiddhi Newa Suli",
  description: "Learn about the history and tradition of Harisiddhi Newa Suli, the best restaurant for authentic Newari food and dining experiences.",
  keywords: ["About Harisiddhi Newa Suli", "history of Newari food", "authentic food experience"],
};

const values = [
  {
    icon: UtensilsCrossed,
    title: "Authenticity",
    description:
      "Every recipe follows traditional methods passed down through generations of Newari families.",
    accent: "#D97706",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "We source local, seasonal ingredients daily from trusted suppliers in the Kathmandu Valley.",
    accent: "#059669",
  },
  {
    icon: Heart,
    title: "Family Heritage",
    description:
      "Our recipes are family treasures, prepared with the same care as in our ancestors' homes.",
    accent: "#E11D48",
  },
  {
    icon: Building2,
    title: "Cultural Preservation",
    description:
      "We keep Newari culinary traditions alive, sharing our heritage with every plate served.",
    accent: "#7C3AED",
  },
];



// ─── VALUES ────────────────────────────────────────────────────────────────────

function Values() {


  return (
    <section

      className="py-24 lg:py-44 bg-stone-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px]  rounded-[50%] blur-[70px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <span className="text-primary-dark text-sm tracking-[0.3em] uppercase mb-4">
            What We Stand For
          </span>
          <h2
            className="text-4xl lg:text-5xl font-serif text-stone-900 mb-2 text-center"
            style={{ fontFamily: "serif" }}
          >
            Our Values
          </h2>
          <div className="flex items-center justify-center">
            <Image
              src="/images/title_underline.webp"
              alt="Decoration"
              width={200}
              height={10}
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="value-card bg-white border border-stone-100 p-8 md:p-10 text-center relative overflow-hidden cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Top line hover – CSS only, no JS on mobile */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100 md:group-hover:scale-x-100"
                  style={{ background: v.accent }}
                />

                <div
                  className="w-14 h-14 rounded-full mx-auto mb-7 flex items-center justify-center text-white shadow-lg"
                  style={{ background: v.accent }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xs font-black text-stone-900 uppercase tracking-[0.2em] mb-3">
                  {v.title}
                </h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── CULTURAL ─────────────────────────────────────────────────────────────────

function Cultural() {



  return (
    <section

      className="py-24 lg:py-44 bg-stone-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div >
            <span className="text-primary-dark text-[11px] tracking-[0.6em] uppercase font-bold mb-7 block">
              Cultural Heritage
            </span>
            <h2

              className="text-4xl md:text-5xl lg:text-7xl font-black text-stone-900 mb-8 leading-[0.95]"
              style={{ fontFamily: "serif" }}
            >
              More Than
              <br />
              Just <span className="italic text-primary-dark">Food</span>
            </h2>

            <div className="space-y-6 text-stone-600 text-base md:text-lg font-light leading-[1.8]">
              <p className="border-l-4 border-primary-light pl-5 text-stone-700">
                Newari cuisine is deeply intertwined with the cultural and
                religious life of the Newar people. Every dish has its place in
                festivals, ceremonies, and daily life.
              </p>
              <p>
                At Harisiddhi Newa Suli, we don't just serve meals — we offer an
                authentic cultural experience. Our restaurant is a living museum
                of Newari gastronomy, where every bite tells a centuries-old
                story.
              </p>
            </div>

            <Link
              href="/menu"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-primary-dark text-white hover:bg-stone-900 transition-all duration-300 text-sm font-bold tracking-[0.2em] uppercase shadow-lg group active:scale-95"
              data-cursor="Menu"
              aria-label="Explore the Full Menu of Harisiddhi Newa Suli"
              title="View full Menu and Newari Specials"
            >
              Explore Our Menu
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
            </Link>
          </div>

          <div

            className="relative aspect-square w-full max-w-lg mx-auto lg:mx-0 lg:max-w-none lg:h-[550px] lg:w-[550px] ml-auto"
          >
            {/* Top Left Image (Back) */}
            <div className="absolute top-0 left-0 w-[65%] h-[65%] overflow-hidden z-10">
              <div className="cultural-img-inner absolute inset-0 will-change-transform">
                <Image
                  src="/images/bara.webp"
                  alt="Newari Cultural Feast"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
                <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply pointer-events-none" />
              </div>
            </div>
            
            {/* Bottom Right Image (Front) */}
            <div className="absolute bottom-0 right-0 w-[65%] h-[65%] overflow-hidden z-20 border-[12px] border-stone-50">
              <div className="cultural-img-inner absolute inset-0 will-change-transform">
                <Image
                  src="/images/choila.webp"
                  alt="Newari Cultural Feast 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
                <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply pointer-events-none" />
              </div>
            </div>
            
            {/* Decorative outline matching the original style */}
            <div className="absolute -bottom-4 -right-4 w-[65%] h-[65%] border border-primary-lighter/40 pointer-events-none -z-10 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}



export default function About() {
  return (
    <>
     
      <div className="bg-stone-50 overflow-x-hidden">
          <section className="mb-4 relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 z-0">
                  <Image
                      src="/images/image1.webp"
                      alt="About Harisiddhi Newa Suli"
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

                      <span className="block font-bold">About Us</span>
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

         
        <AboutSection/>
          <GalleryEditorial />




        <Values />
          <div className="hidden lg:block">
              <GallerySliced />
          </div>
          <div className="block lg:hidden">
              <TeamMembers />
          </div>

       
  
        <Cultural />

      </div>
    </>
  );
}
