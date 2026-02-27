import React from "react";

function About() {
  // Newari decorative pattern component
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

  // Timeline data
  const timeline = [
    {
      year: "1982",
      title: "The Beginning",
      description:
        "Started as a small family kitchen in Harisiddhi, serving traditional Newari feasts to locals.",
    },
    {
      year: "1995",
      title: "First Restaurant",
      description:
        "Opened our first dedicated restaurant space, preserving authentic recipes passed down through generations.",
    },
    {
      year: "2010",
      title: "Expanding Traditions",
      description:
        "Introduced our famous 'Newa Suli Sets' - complete traditional dining experiences.",
    },
    {
      year: "Present",
      title: "Legacy Continues",
      description:
        "Still family-owned, still authentic - serving the same flavors that made us beloved.",
    },
  ];

  // Values data
  const values = [
    {
      icon: "🙏",
      title: "Authenticity",
      description:
        "Every recipe follows traditional methods passed down through generations of Newari families.",
    },
    {
      icon: "🌿",
      title: "Fresh Ingredients",
      description:
        "We source local, seasonal ingredients daily from trusted suppliers in the Kathmandu Valley.",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Heritage",
      description:
        "Our recipes are family treasures, prepared with the same care as in our ancestors' homes.",
    },
    {
      icon: "🏛️",
      title: "Cultural Preservation",
      description:
        "We keep Newari culinary traditions alive, sharing our heritage with every plate served.",
    },
  ];

  // Specialties data
  const specialties = [
    {
      name: "Samay Baji",
      description:
        "The ceremonial Newari feast featuring beaten rice, lentils, meat, and traditional sides",
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    },
    {
      name: "Yomari",
      description:
        "Sweet steamed dumplings filled with molasses and sesame - a festival favorite",
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop",
    },
    {
      name: "Choila",
      description: "Spicy grilled buffalo meat marinated in traditional spices",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    },
    {
      name: "Bara",
      description: "Savory lentil pancakes - a Newari breakfast classic",
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f0e6] relative overflow-hidden scroll-smooth font-newsreader">
      {/* Background Pattern Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-900 via-red-800 to-[#f5f0e6] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(251, 191, 36, 0.3) 0%, transparent 50%),
                                radial-gradient(circle at 70% 50%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)`,
          }}
        ></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="mb-6">
            <span className="text-amber-300 text-sm tracking-[0.4em] uppercase font-semibold">
              Est. 1982
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black text-amber-100 uppercase tracking-tight mb-4"
            style={{
              fontFamily: "serif",
              textShadow: "3px 3px 6px rgba(0,0,0,0.3)",
            }}
          >
            Our Story
          </h1>

          <NewariPattern className="w-48 h-8 text-amber-400 mx-auto mb-6" />

          <p
            className="text-xl md:text-2xl text-amber-200/90 max-w-3xl mx-auto leading-relaxed italic"
            style={{ fontFamily: "serif" }}
          >
            "Preserving the authentic flavors of Harisiddhi, one traditional
            feast at a time"
          </p>
        </div>

        {/* Scroll indicator */}
        <a
          href="#whoarewe"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <svg
            className="w-6 h-6 text-amber-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </section>

      {/* Introduction Section */}
      <section id="whoarewe" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-amber-600/30 rounded-lg"></div>
              <img
                src="/images/newasuli_img_1.jpg"
                alt="Traditional Newari Kitchen"
                className="relative rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-800 text-amber-100 p-4 rounded-lg shadow-xl">
                <p
                  className="text-3xl font-bold"
                  style={{ fontFamily: "serif" }}
                >
                  43+
                </p>
                <p className="text-xs uppercase tracking-wider">
                  Years of Tradition
                </p>
              </div>
            </div>

            <div>
              <span className="text-red-800 text-sm font-bold uppercase tracking-widest">
                Who We Are
              </span>
              <h2
                className="text-4xl font-bold text-amber-900 uppercase mt-2 mb-6"
                style={{ fontFamily: "serif" }}
              >
                Harisiddhi Newa Suli
              </h2>

              <NewariPattern className="w-24 h-6 text-amber-700 mb-6" />

              <div
                className="relative space-y-4 p-8 text-amber-900/80 leading-relaxed text-justify italic font-newsreader rounded-lg shadow-2xl"
                style={{
                  backgroundColor: "#f4e6c8",
                  backgroundImage: "url('/images/paper-texture.png')",
                  backgroundRepeat: "repeat",
                  backgroundSize: "300px 300px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                }}
              >
                <p>
                  Nestled in the heart of Harisiddhi, one of the oldest
                  settlements in the Kathmandu Valley, our restaurant carries
                  forward a legacy of authentic Newari cuisine that spans nearly
                  four decades.
                </p>
                <p>
                  What began as a humble family kitchen serving traditional
                  feasts to neighbors has grown into a beloved institution, yet
                  our commitment remains unchanged: to preserve and share the
                  true flavors of Newari culture.
                </p>
                <p>
                  Every dish we serve is prepared using time-honored techniques
                  passed down through generations. From our signature{" "}
                  <em>Samay Baji</em> to the sweet <em>Yomari</em>, each recipe
                  tells a story of our heritage.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1583394293214-28ez8ac94e4a?w=100&h=100&fit=crop"
                  alt="Owner"
                  className="w-16 h-16 rounded-full border-4 border-amber-400 object-cover"
                />
                <div>
                  <p
                    className="font-bold text-amber-900"
                    style={{ fontFamily: "serif" }}
                  >
                    The Shrestha Family
                  </p>
                  <p className="text-sm text-amber-700">
                    Founders & Keepers of Tradition
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#ebe4d6] to-[#f5f0e6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-800 text-sm font-bold uppercase tracking-widest">
              Our Journey
            </span>
            <h2
              className="text-4xl font-bold text-amber-900 uppercase mt-2"
              style={{ fontFamily: "serif" }}
            >
              Through The Years
            </h2>
            <NewariPattern className="w-32 h-6 text-amber-700 mx-auto mt-4" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-800 via-amber-600 to-red-800 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 text-center md:text-right">
                    <div
                      className={`bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-amber-200 shadow-lg ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                    >
                      <span
                        className="text-3xl font-bold text-red-800"
                        style={{ fontFamily: "serif" }}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-amber-900 uppercase mt-2 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-amber-800/70 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-red-800 rounded-full border-4 border-amber-400 flex items-center justify-center shadow-lg">
                      <span className="text-amber-100 text-xs font-bold">
                        {idx + 1}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-800 text-sm font-bold uppercase tracking-widest">
              What We Stand For
            </span>
            <h2
              className="text-4xl font-bold text-amber-900 uppercase mt-2"
              style={{ fontFamily: "serif" }}
            >
              Our Values
            </h2>
            <NewariPattern className="w-32 h-6 text-amber-700 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="group bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-amber-200 hover:shadow-xl transition-all text-center"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3
                  className="text-lg font-bold text-amber-900 uppercase mb-2"
                  style={{ fontFamily: "serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-sm text-amber-800/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f5f0e6] to-[#ebe4d6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-800 text-sm font-bold uppercase tracking-widest">
              Our Specialties
            </span>
            <h2
              className="text-4xl font-bold text-amber-900 uppercase mt-2"
              style={{ fontFamily: "serif" }}
            >
              Signature Dishes
            </h2>
            <NewariPattern className="w-32 h-6 text-amber-700 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white/80 backdrop-blur-sm rounded-lg border border-amber-200 overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3
                    className="text-lg font-bold text-amber-900 uppercase mb-2"
                    style={{ fontFamily: "serif" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-sm text-amber-800/70 leading-relaxed italic font-newsreader">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Significance Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 italic">
        <div className="max-w-6xl mx-auto">
          <div className="bg-red-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-amber-300 text-sm font-bold uppercase tracking-widest mb-4">
                  Cultural Heritage
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold text-amber-100 uppercase mb-6"
                  style={{ fontFamily: "serif" }}
                >
                  More Than Just Food
                </h2>
                <div className="space-y-4 text-amber-200/90 leading-relaxed ">
                  <p>
                    Newari cuisine is deeply intertwined with the cultural and
                    religious life of the Newar people. Every dish has its place
                    in festivals, ceremonies, and daily life.
                  </p>
                  <p>
                    At Harisiddhi Newa Suli, we don't just serve meals - we
                    offer an authentic cultural experience. Our restaurant is a
                    living museum of Newari gastronomy, where ancient recipes
                    meet warm hospitality.
                  </p>
                  <p>
                    From the preparation of <em>Samay Baji</em> for festivals to
                    the careful crafting of
                    <em> Yomari</em> during Yomari Punhi, we honor the
                    traditions that make our cuisine unique.
                  </p>
                </div>
                <button className="mt-8 bg-amber-500 hover:bg-amber-400 text-red-900 font-bold py-3 px-8 rounded-sm uppercase tracking-wider text-sm transition-colors w-fit">
                  Explore Our Menu
                </button>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop"
                  alt="Newari Cultural Feast"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-transparent md:bg-gradient-to-l"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#ebe4d6] to-[#f5f0e6]">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-red-800 text-sm font-bold uppercase tracking-widest">
            Visit Us
          </span>
          <h2
            className="text-4xl font-bold text-amber-900 uppercase mt-2 mb-6"
            style={{ fontFamily: "serif" }}
          >
            Experience Authentic Newari Hospitality
          </h2>
          <NewariPattern className="w-32 h-6 text-amber-700 mx-auto mb-8" />

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-amber-200">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-bold text-amber-900 uppercase mb-2">
                Location
              </h3>
              <p className="text-sm text-amber-800/70">
                Harisiddhi, Lalitpur
                <br />
                Kathmandu Valley, Nepal
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-amber-200">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="font-bold text-amber-900 uppercase mb-2">Hours</h3>
              <p className="text-sm text-amber-800/70">
                Daily: 10:00 AM - 9:00 PM
                <br />
                Festivals: Special Hours
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-amber-200">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-bold text-amber-900 uppercase mb-2">
                Contact
              </h3>
              <a
                href="tel:+9779828711989"
                className="text-sm text-amber-800/70"
              >
                +977 9828711989
                <br />{" "}
                <a
                  href="mailto:info@harisiddhinewasuli.com"
                  className="text-amber-800/70"
                >
                  info@harisiddhinewasuli.com
                </a>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-900 text-amber-100 py-12 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(251, 191, 36, 0.1) 35px, rgba(251, 191, 36, 0.1) 70px)`,
          }}
        ></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h3
            className="text-3xl font-bold uppercase mb-2"
            style={{ fontFamily: "serif" }}
          >
            Harisiddhi Newa Suli
          </h3>
          <NewariPattern className="w-32 h-6 text-amber-400 mx-auto mb-4" />
          <p className="text-amber-200/80 text-sm max-w-md mx-auto mb-6">
            Preserving Newari culinary heritage since 1982. Every meal is a
            celebration of tradition.
          </p>
          <div className="flex justify-center gap-4 text-xs text-amber-300/60">
            <span>© 2026 Harisiddhi Newa Suli</span>
            <span>•</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
