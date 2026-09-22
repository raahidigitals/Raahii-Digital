import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raahii Experiences — Experience Udaipur Like a Local",
  description:
    "Discover Udaipur through curated local experiences, recommendations, guidance and personalised travel support with Raahii.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Raahii Experiences — Experience Udaipur Like a Local",
    description:
      "Not just places. Not just a tour. Your personal Raahii.",
    type: "website",
  },
};

type Package = {
  number: string;
  icon: string;
  title: string;
  subtitle: string;
  points: string[];
  price: string;
  cta: string;
  image: string;
  featured?: boolean;
};

type Interest = {
  title: string;
  places: string;
  image: string;
  icon: string;
};

type Mood = {
  title: string;
  description: string;
  icon: string;
  image: string;
};

const packages: Package[] = [
  {
    number: "01",
    icon: "♧",
    title: "Raahii Guide",
    subtitle: "For travellers who simply want to know what to do.",
    points: [
      "Curated Udaipur recommendations",
      "Places to visit",
      "Food recommendations",
      "Sunset spots",
      "Hidden places",
      "Suggested itineraries",
    ],
    price: "Starting at ₹299",
    cta: "Explore Guide",
    image: "/hero-bg.jpeg",
  },
  {
    number: "02",
    icon: "⌖",
    title: "Raahii Assisted",
    subtitle: "You explore. We make it effortless.",
    points: [
      "Personalised itinerary",
      "Restaurant recommendations",
      "Transport assistance",
      "Local recommendations",
      "WhatsApp support",
      "Day-wise planning",
    ],
    price: "Starting at ₹999",
    cta: "Plan My Udaipur",
    image: "/services-hero.jpeg",
  },
  {
    number: "03",
    icon: "♡",
    title: "Raahii Experience",
    subtitle: "Don’t just visit Udaipur. Experience it.",
    points: [
      "Dedicated Raahii guide",
      "Personalised itinerary",
      "Local experiences",
      "Hidden places",
      "Food experiences",
      "Sunset spots",
      "Heritage exploration",
      "On-trip assistance",
      "Booking support",
      "Local recommendations",
    ],
    price: "Starting at ₹2,499 / person",
    cta: "Create My Experience",
    image: "/philosophy-bg.jpeg",
    featured: true,
  },
  {
    number: "04",
    icon: "♛",
    title: "Raahii Bespoke",
    subtitle: "For couples, families & luxury travellers.",
    points: [
      "Custom itinerary",
      "Private guide",
      "Dining",
      "Activities & experiences",
      "Transport",
      "Special occasions",
    ],
    price: "Tailored for you",
    cta: "Request a Bespoke Journey",
    image: "/services/services-bottom.jpg",
  },
];

const interests: Interest[] = [
  {
    title: "Royal Udaipur",
    places: "City Palace · Jagdish Temple · Bagore Ki Haveli · Jagmandir",
    image: "/hero-bg.jpeg",
    icon: "♛",
  },
  {
    title: "Lakes & Sunsets",
    places: "Lake Pichola · Fateh Sagar · Badi Lake · Goverdhan Sagar",
    image: "/services-hero.jpeg",
    icon: "◌",
  },
  {
    title: "Hidden Udaipur",
    places: "Bahubali Hills · Ahar Cenotaphs · Neemach Mata · Doodh Talai",
    image: "/philosophy-bg.jpeg",
    icon: "✦",
  },
  {
    title: "Taste Udaipur",
    places: "Dal Baati · Gatte · Ker Sangri · Pyaaz Kachori · Ghevar",
    image: "/services/services-bottom.jpg",
    icon: "◇",
  },
  {
    title: "Photo Trails",
    places: "Gangaur Ghat · Ambrai · Bahubali Hills · Badi Lake · Karni Mata",
    image: "/footer-bg.jpeg",
    icon: "⌾",
  },
];

const moods: Mood[] = [
  {
    title: "Romantic",
    description: "Sunsets · lakes · rooftop dinners · private moments",
    icon: "♡",
    image: "/hero-bg.jpeg",
  },
  {
    title: "Instagrammable",
    description: "Hidden viewpoints · ghats · architecture · photography spots",
    icon: "◎",
    image: "/services-hero.jpeg",
  },
  {
    title: "Royal",
    description: "Palaces · heritage · history · culture",
    icon: "♛",
    image: "/philosophy-bg.jpeg",
  },
  {
    title: "Foodie",
    description: "Local food · Rajasthani cuisine · cafés · rooftops",
    icon: "◇",
    image: "/services/services-bottom.jpg",
  },
  {
    title: "Slow & Peaceful",
    description: "Badi · lakes · early mornings · quiet places",
    icon: "⌁",
    image: "/footer-bg.jpeg",
  },
  {
    title: "Adventure",
    description: "Hikes · viewpoints · offbeat experiences",
    icon: "△",
    image: "/hero-bg.jpeg",
  },
];

export default function ExperiencesPage() {
  return (
    <main className="w-full overflow-x-hidden bg-[#f4f0e7] text-[#17352d]">

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      {/* Existing Raahii Navbar */}
      <div className="relative z-50">
        {/* Navbar is intentionally reused through the layout/page structure */}
      </div>


      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[720px] overflow-hidden bg-[#10110f] text-[#f7f3e8] md:min-h-[760px]">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-bg.jpeg')",
          }}
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/5" />

        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/65 to-transparent" />


        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1500px] items-end px-6 pb-16 pt-36 sm:px-10 md:min-h-[760px] md:pb-20 lg:px-16">

          <div className="max-w-[650px]">

            <div className="mb-6 flex items-center gap-4">
              <span className="text-[9px] uppercase tracking-[0.45em] text-[#d8b887]">
                Raahii Experiences
              </span>

              <span className="h-px w-10 bg-[#d8b887]" />
            </div>


            <h1 className="font-serif text-[3.8rem] font-light leading-[0.88] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">

              Experience
              <br />

              Udaipur
              <br />

              <span className="italic text-[#d8b887]">
                Like a Local.
              </span>

            </h1>


            <p className="mt-6 font-serif text-xl italic text-[#f7f3e8]/85 sm:text-2xl">
              Not just places. Not just a tour.
              <br />
              Your personal Raahii.
            </p>


            <p className="mt-6 max-w-[570px] text-sm leading-7 text-[#f7f3e8]/70 sm:text-base sm:leading-8">
              Discover the lakes, hidden viewpoints, royal heritage, local
              food and stories of Udaipur — curated and supported by people
              who actually know the city.
            </p>


            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="#packages"
                className="group inline-flex h-13 items-center justify-center gap-5 rounded-full bg-[#d8b887] px-7 text-xs font-medium text-[#17352d] transition-all duration-300 hover:-translate-y-1"
              >
                Explore Experiences

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>


              <a
                href="https://wa.me/919950767925"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center rounded-full border border-[#f7f3e8]/60 px-7 text-xs text-[#f7f3e8] transition-all duration-300 hover:bg-[#f7f3e8] hover:text-[#17352d]"
              >
                Talk to a Raahii
              </a>

            </div>

          </div>


          {/* RIGHT MESSAGE */}

          <div className="absolute bottom-12 right-6 hidden border-l border-[#f7f3e8]/35 pl-5 md:block lg:right-16">

            <p className="text-[8px] uppercase leading-6 tracking-[0.35em] text-[#f7f3e8]/70">
              People
              <br />
              Places
              <br />
              Stories
              <br />
              Experiences
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          01 — PACKAGES
      ====================================================== */}

      <section
        id="packages"
        className="bg-[#f4f0e7] px-5 py-16 sm:px-7 md:px-10 md:py-24 lg:px-16"
      >

        <div className="mx-auto max-w-[1450px]">

          {/* SECTION HEADER */}

          <div className="grid gap-8 md:grid-cols-[1fr_0.65fr] md:items-end">

            <div>

              <div className="mb-5 flex items-center gap-4">

                <span className="font-serif text-sm text-[#17352d]">
                  01
                </span>

                <span className="h-px w-10 bg-[#17352d]/30" />

                <span className="text-[8px] uppercase tracking-[0.4em] text-[#676a61]">
                  Our Packages
                </span>

              </div>


              <h2 className="font-serif text-4xl font-light leading-[0.95] tracking-[-0.035em] sm:text-5xl md:text-6xl">

                Choose Your Way
                <br />

                <span className="text-[#8d6462]">
                  to Explore.
                </span>

              </h2>

            </div>


            <p className="max-w-[360px] text-sm leading-6 text-[#60635b] md:ml-auto">
              Different travellers. Different needs. Same city. A more
              meaningful experience.
            </p>

          </div>


          {/* PACKAGE CARDS */}

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {packages.map((item) => (

              <article
                key={item.number}
                className={`group relative flex overflow-hidden rounded-[20px] border border-[#17352d]/15 bg-white ${
                  item.featured ? "ring-1 ring-[#b6815e]/40" : ""
                }`}
              >

                {/* IMAGE */}

                <div className="absolute inset-x-0 top-0 h-[190px]">

                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${item.image}')`,
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#10251f] via-black/15 to-transparent" />

                </div>


                {/* CONTENT */}

                <div className="relative z-10 flex min-h-[590px] w-full flex-col pt-[150px]">

                  <div className="rounded-t-[20px] bg-[#10251f] px-5 pb-5 pt-5 text-[#f7f3e8]">

                    <div className="flex items-center justify-between">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8b887]/60 text-lg text-[#d8b887]">
                        {item.icon}
                      </div>

                      <span className="font-serif text-xs text-[#f7f3e8]/40">
                        {item.number}
                      </span>

                    </div>


                    <h3 className="mt-5 font-serif text-2xl font-light leading-none">
                      {item.title}
                    </h3>


                    <p className="mt-3 min-h-[42px] text-xs leading-5 text-[#f7f3e8]/65">
                      {item.subtitle}
                    </p>

                  </div>


                  {/* POINTS */}

                  <div className="flex flex-1 flex-col bg-[#10251f] px-5 pb-5 text-[#f7f3e8]">

                    <div className="space-y-2 border-t border-[#f7f3e8]/10 pt-5">

                      {item.points.map((point) => (

                        <p
                          key={point}
                          className="flex gap-2 text-[10px] leading-4 text-[#f7f3e8]/70"
                        >
                          <span className="text-[#d8b887]">
                            ✓
                          </span>

                          {point}
                        </p>

                      ))}

                    </div>


                    <div className="mt-auto pt-7">

                      <p className="font-serif text-lg text-[#d8b887]">
                        {item.price}
                      </p>


                      <a
                        href="#contact"
                        className="group/btn mt-4 flex h-11 items-center justify-center gap-4 rounded-full bg-[#d8b887] text-[9px] font-medium uppercase tracking-[0.18em] text-[#17352d] transition-all duration-300 hover:bg-[#f0d4a6]"
                      >
                        {item.cta}

                        <span className="transition-transform group-hover/btn:translate-x-1">
                          →
                        </span>
                      </a>

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          02 — EXPLORE BY INTEREST
      ====================================================== */}

      <section className="overflow-hidden bg-[#10251f] px-5 py-16 text-[#f7f3e8] sm:px-7 md:py-24 lg:px-16">

        <div className="mx-auto max-w-[1450px]">

          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">

            <div>

              <div className="mb-5 flex items-center gap-4">

                <span className="font-serif text-sm text-[#d8b887]">
                  02
                </span>

                <span className="h-px w-10 bg-[#d8b887]/50" />

                <span className="text-[8px] uppercase tracking-[0.4em] text-[#d8b887]/70">
                  Explore By Interest
                </span>

              </div>


              <h2 className="font-serif text-4xl font-light leading-none tracking-[-0.035em] sm:text-5xl md:text-6xl">
                Explore Udaipur
                <br />
                <span className="italic text-[#d8b887]">
                  Through Raahii.
                </span>
              </h2>

            </div>


            <p className="max-w-[330px] text-sm leading-6 text-[#f7f3e8]/55">
              Iconic. Offbeat. Delicious. Photogenic.
              <br />
              Discover Udaipur, your way.
            </p>

          </div>


          {/* HORIZONTAL SCROLL */}

          <div className="mt-10 flex gap-4 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            {interests.map((interest) => (

              <article
                key={interest.title}
                className="group relative h-[330px] min-w-[245px] overflow-hidden rounded-[18px] border border-[#f7f3e8]/15 sm:min-w-[275px] lg:min-w-[290px]"
              >

                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${interest.image}')`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />


                <div className="absolute bottom-0 left-0 right-0 p-5">

                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#d8b887]/70 text-[#d8b887]">
                    {interest.icon}
                  </div>


                  <h3 className="font-serif text-2xl font-light">
                    {interest.title}
                  </h3>


                  <p className="mt-2 text-[10px] leading-4 text-[#f7f3e8]/60">
                    {interest.places}
                  </p>


                  <button className="mt-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#d8b887] text-[#17352d] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </button>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          03 — TELL US YOUR MOOD
      ====================================================== */}

      <section className="bg-[#f4f0e7] px-5 py-16 sm:px-7 md:py-24 lg:px-16">

        <div className="mx-auto max-w-[1450px]">

          <div className="grid gap-8 md:grid-cols-[1fr_0.6fr] md:items-end">

            <div>

              <div className="mb-5 flex items-center gap-4">

                <span className="font-serif text-sm">
                  03
                </span>

                <span className="h-px w-10 bg-[#17352d]/30" />

                <span className="text-[8px] uppercase tracking-[0.4em] text-[#676a61]">
                  Find Your Vibe
                </span>

              </div>


              <h2 className="font-serif text-4xl font-light leading-none tracking-[-0.035em] sm:text-5xl md:text-6xl">
                What kind of Udaipur
                <br />
                are you looking for?
              </h2>

            </div>


            <p className="max-w-[340px] text-sm leading-6 text-[#60635b] md:ml-auto">
              Tell us your mood. We&apos;ll suggest the perfect experiences
              and itinerary for you.
            </p>

          </div>


          {/* MOOD GRID */}

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">

            {moods.map((mood) => (

              <button
                key={mood.title}
                className="group relative min-h-[210px] overflow-hidden rounded-[18px] text-left"
              >

                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${mood.image}')`,
                  }}
                />

                <div className="absolute inset-0 bg-black/45 transition-all duration-500 group-hover:bg-black/60" />


                <div className="relative z-10 flex h-full flex-col justify-end p-5 text-[#f7f3e8]">

                  <div className="mb-auto flex h-9 w-9 items-center justify-center rounded-full border border-[#d8b887]/70 text-[#d8b887]">
                    {mood.icon}
                  </div>


                  <h3 className="font-serif text-2xl font-light">
                    {mood.title}
                  </h3>


                  <p className="mt-2 max-w-[250px] text-[10px] leading-4 text-[#f7f3e8]/70">
                    {mood.description}
                  </p>


                  <span className="mt-4 text-[8px] uppercase tracking-[0.3em] text-[#d8b887]">
                    Build My Journey →
                  </span>

                </div>

              </button>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          04 — RAAHII PROMISE
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#10110f] px-6 py-20 text-[#f7f3e8] md:py-28 lg:px-16">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: "url('/services/services-bottom.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[#10110f]/75" />


        <div className="relative z-10 mx-auto max-w-[1200px]">

          <div className="text-center">

            <div className="mb-5 flex items-center justify-center gap-4">

              <span className="font-serif text-sm text-[#d8b887]">
                04
              </span>

              <span className="h-px w-10 bg-[#d8b887]/50" />

              <span className="text-[8px] uppercase tracking-[0.4em] text-[#d8b887]/70">
                The Raahii Promise
              </span>

            </div>


            <h2 className="mx-auto max-w-[800px] font-serif text-4xl font-light leading-[0.95] tracking-[-0.035em] sm:text-5xl md:text-6xl">

              A guide isn&apos;t just someone
              <br />

              who shows you places.

            </h2>


            <p className="mt-5 font-serif text-xl italic text-[#d8b887] sm:text-2xl">
              A Raahii helps you understand the place.
            </p>

          </div>


          {/* FOUR STAGES */}

          <div className="mt-16 grid border-y border-[#f7f3e8]/15 md:grid-cols-4">

            <div className="border-b border-[#f7f3e8]/15 px-5 py-8 text-center md:border-b-0 md:border-r">
              <span className="text-2xl text-[#d8b887]">01</span>
              <h3 className="mt-4 font-serif text-xl">
                Before you arrive
              </h3>
              <p className="mt-3 text-xs leading-5 text-[#f7f3e8]/55">
                Itinerary and recommendations designed around your trip.
              </p>
            </div>


            <div className="border-b border-[#f7f3e8]/15 px-5 py-8 text-center md:border-b-0 md:border-r">
              <span className="text-2xl text-[#d8b887]">02</span>
              <h3 className="mt-4 font-serif text-xl">
                While you&apos;re here
              </h3>
              <p className="mt-3 text-xs leading-5 text-[#f7f3e8]/55">
                Guidance, assistance and local recommendations.
              </p>
            </div>


            <div className="border-b border-[#f7f3e8]/15 px-5 py-8 text-center md:border-b-0 md:border-r">
              <span className="text-2xl text-[#d8b887]">03</span>
              <h3 className="mt-4 font-serif text-xl">
                When plans change
              </h3>
              <p className="mt-3 text-xs leading-5 text-[#f7f3e8]/55">
                Raahii support when your plans need a new direction.
              </p>
            </div>


            <div className="px-5 py-8 text-center">
              <span className="text-2xl text-[#d8b887]">04</span>
              <h3 className="mt-4 font-serif text-xl">
                When you leave
              </h3>
              <p className="mt-3 text-xs leading-5 text-[#f7f3e8]/55">
                Memories, recommendations and continued connection.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          05 — HOTEL QR INTEGRATION
      ====================================================== */}

      <section className="bg-[#f4f0e7] px-5 py-16 sm:px-7 md:py-24 lg:px-16">

        <div className="mx-auto max-w-[1450px]">

          <div className="grid overflow-hidden rounded-[25px] bg-[#eadfcd] lg:grid-cols-[1fr_1fr]">

            {/* LEFT */}

            <div className="flex flex-col justify-center px-7 py-12 sm:px-10 md:px-14">

              <div className="mb-5 flex items-center gap-4">

                <span className="font-serif text-sm">
                  05
                </span>

                <span className="h-px w-10 bg-[#17352d]/30" />

                <span className="text-[8px] uppercase tracking-[0.4em] text-[#676a61]">
                  For Hotels
                </span>

              </div>


              <h2 className="font-serif text-4xl font-light leading-[0.95] tracking-[-0.035em] sm:text-5xl">

                Your Guests Already Ask
                <br />

                What to Do in Udaipur.

                <br />

                <span className="italic text-[#8d6462]">
                  Give Them a Raahii.
                </span>

              </h2>


              <p className="mt-6 max-w-[520px] text-sm leading-6 text-[#555950]">
                Integrate Raahii Experiences at your hotel and offer your
                guests a complete local experience — not just a stay.
              </p>


              <a
                href="https://forms.gle/Rbb86sVxxU2fuetC7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex h-12 w-fit items-center gap-4 rounded-full bg-[#17352d] px-6 text-xs text-[#f7f3e8] transition-all hover:-translate-y-1"
              >
                Partner with Raahii
                <span>→</span>
              </a>

            </div>


            {/* RIGHT QR EXPERIENCE */}

            <div className="relative min-h-[430px] overflow-hidden bg-[#17352d] text-[#f7f3e8]">

              <div
                className="absolute inset-0 bg-cover bg-center opacity-35"
                style={{
                  backgroundImage: "url('/hero-bg.jpeg')",
                }}
              />

              <div className="absolute inset-0 bg-[#10251f]/70" />


              <div className="relative z-10 flex h-full items-center justify-center p-8">

                <div className="grid w-full max-w-[520px] items-center gap-8 sm:grid-cols-[170px_1fr]">

                  {/* QR PLACEHOLDER */}

                  <div className="mx-auto flex h-[170px] w-[170px] items-center justify-center bg-[#f7f3e8] p-3">

                    <div className="flex h-full w-full items-center justify-center border-2 border-dashed border-[#17352d] text-center">

                      <div>

                        <div className="text-3xl text-[#17352d]">
                          QR
                        </div>

                        <p className="mt-1 text-[7px] uppercase tracking-[0.2em] text-[#17352d]">
                          Scan to meet
                          <br />
                          your Raahii
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* CARD */}

                  <div>

                    <p className="font-serif text-2xl italic text-[#d8b887]">
                      Your Udaipur
                      <br />
                      starts here.
                    </p>


                    <p className="mt-4 text-sm leading-6 text-[#f7f3e8]/65">
                      Scan to meet your Raahii and discover Udaipur beyond
                      the usual tourist trail.
                    </p>


                    <div className="mt-6 space-y-3 border-t border-[#f7f3e8]/15 pt-5">

                      <p className="text-[9px] uppercase tracking-[0.25em]">
                        Room
                      </p>

                      <p className="text-[9px] uppercase tracking-[0.25em]">
                        Reception
                      </p>

                      <p className="text-[9px] uppercase tracking-[0.25em]">
                        Restaurant
                      </p>

                      <p className="text-[9px] uppercase tracking-[0.25em]">
                        Key Card
                      </p>

                      <p className="text-[9px] uppercase tracking-[0.25em]">
                        Welcome Kit
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          06 — BOOKING FLOW
      ====================================================== */}

      <section className="bg-[#10251f] px-5 py-16 text-[#f7f3e8] sm:px-7 md:py-24 lg:px-16">

        <div className="mx-auto max-w-[1450px]">

          <div className="mb-12">

            <div className="mb-5 flex items-center gap-4">

              <span className="font-serif text-sm text-[#d8b887]">
                06
              </span>

              <span className="h-px w-10 bg-[#d8b887]/50" />

              <span className="text-[8px] uppercase tracking-[0.4em] text-[#d8b887]/70">
                Simple & Seamless
              </span>

            </div>


            <h2 className="font-serif text-4xl font-light sm:text-5xl md:text-6xl">
              The Booking Flow.
            </h2>

          </div>


          {/* FLOW */}

          <div className="grid gap-0 md:grid-cols-6">

            {[
              ["01", "Tell us about", "your trip"],
              ["02", "Choose your", "experience"],
              ["03", "Talk to your", "Raahii"],
              ["04", "Confirm your", "bookings"],
              ["05", "Meet your", "Raahii in Udaipur"],
              ["06", "Explore", "with confidence"],
            ].map(([number, line1, line2], index) => (

              <div
                key={number}
                className="relative border-b border-[#f7f3e8]/15 px-4 py-8 text-center md:border-b-0 md:border-r md:last:border-r-0"
              >

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#d8b887]/60 text-[#d8b887]">
                  {number}
                </div>


                <p className="mt-5 font-serif text-lg leading-tight">
                  {line1}
                  <br />
                  {line2}
                </p>


                {index < 5 && (
                  <span className="absolute -right-2 top-[55px] z-10 hidden text-[#d8b887] md:block">
                    →
                  </span>
                )}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        id="contact"
        className="relative min-h-[590px] overflow-hidden text-[#f7f3e8]"
      >

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-bg.jpeg')",
          }}
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />


        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-[1450px] items-center px-6 py-16 sm:px-10 lg:px-16">

          <div className="max-w-[680px]">

            <p className="text-[9px] uppercase tracking-[0.45em] text-[#d8b887]">
              Your Journey Starts Here
            </p>


            <h2 className="mt-6 font-serif text-[3.5rem] font-light leading-[0.9] tracking-[-0.04em] sm:text-5xl md:text-7xl">

              Book through Raahii.
              <br />

              <span className="italic text-[#d8b887]">
                Travel with confidence.
              </span>

            </h2>


            <p className="mt-7 max-w-[560px] text-sm leading-7 text-[#f7f3e8]/75 sm:text-base sm:leading-8">
              Hotel booking ho, restaurant recommendation ho, local
              experience ho, transport ho ya itinerary — your Raahii remains
              your point of support throughout the journey.
            </p>


            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#packages"
                className="inline-flex h-13 items-center justify-center gap-5 rounded-full bg-[#d8b887] px-7 text-xs font-medium text-[#17352d] transition-all hover:-translate-y-1"
              >
                Plan My Udaipur
                <span>→</span>
              </a>


              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center rounded-full border border-[#f7f3e8]/60 px-7 text-xs text-[#f7f3e8] transition-all hover:bg-[#f7f3e8] hover:text-[#17352d]"
              >
                Chat on WhatsApp
              </a>

            </div>

          </div>


          {/* RIGHT MESSAGE */}

          <div className="absolute bottom-10 right-6 hidden text-right md:block lg:right-16">

            <p className="font-serif text-xl italic text-[#f7f3e8]/70">
              More
              <br />
              Meaningful
              <br />
              Journeys.
            </p>

            <div className="ml-auto mt-4 h-px w-10 bg-[#d8b887]" />

          </div>

        </div>

      </section>


      {/* =====================================================
          SMALL FOOTER STRIP
      ====================================================== */}

      <section className="flex flex-col justify-between gap-5 bg-[#10251f] px-6 py-7 text-[#f7f3e8] sm:flex-row sm:items-center sm:px-10 lg:px-16">

        <div>

          <p className="font-serif text-xl tracking-[0.18em]">
            RAAHII
          </p>

          <p className="mt-1 text-[7px] uppercase tracking-[0.35em] text-[#d8b887]">
            Experiences
          </p>

        </div>


        <p className="font-serif text-sm italic text-[#f7f3e8]/60">
          People · Places · Stories · Experiences
        </p>


        <p className="text-[8px] uppercase tracking-[0.3em] text-[#f7f3e8]/40">
          Udaipur, Rajasthan
        </p>

      </section>

    </main>
  );
}