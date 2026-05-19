import Image from "next/image";
import Link from "next/link";

const TEAM_MEMBERS = [
    {
        name: "Head Chef",
        desc: "Leads the kitchen with traditional Newari recipes and modern technique.",
        image: null,
    },
    {
        name: "Sous Chef",
        desc: "Supports daily prep and delivers consistent flavors across the menu.",
        image: null,
    },
    {
        name: "Pastry Specialist",
        desc: "Creates signature sweets and seasonal desserts for guests.",
        image: null,
    },
    {
        name: "Restaurant Manager",
        desc: "Ensures service quality and a warm, welcoming dining experience.",
        image: null,
    },
];

const TeamMembers = () => {
    return (
        <section className="py-24 bg-white text-stone-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


                <div className="text-center mb-16">
                    <div>
              <span className="text-primary-light text-sm tracking-[0.3em] uppercase">
                  Our Team
              </span>
                        <h2 className="text-4xl lg:text-5xl font-serif mt-4 mb-6">
                            Meet the People Behind the Kitchen
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM_MEMBERS.map((dish, index) => (
                        <div
                            key={dish.name}
                            className="group relative"
                        >
                            <div className="aspect-4/5 relative overflow-hidden rounded-sm">
                                {dish.image ? (
                                    <Image
                                        src={dish.image}
                                        alt={dish.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div
                                        className="absolute inset-0 flex items-center justify-center bg-stone-800 text-stone-400 text-xs tracking-[0.2em] uppercase"
                                        aria-label={`${dish.name} placeholder image`}
                                    >
                                        Photo
                                    </div>
                                )}
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


            </div>
        </section>
    )
}

export default TeamMembers;
