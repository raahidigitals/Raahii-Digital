"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type JourneyType = "hotel" | "guest" | null;

const hotelServices = [
  {
    number: "01",
    title: "DIGITAL MARKETING",
    description: "SEO · Google · Meta · Performance",
  },
  {
    number: "02",
    title: "BRANDING",
    description: "Positioning · Identity · Storytelling",
  },
  {
    number: "03",
    title: "CONTENT",
    description: "Photography · Videography · Reels",
  },
  {
    number: "04",
    title: "WEBSITE",
    description: "Website · Booking Journey · UX",
  },
  {
    number: "05",
    title: "DIRECT BOOKINGS",
    description: "WhatsApp · Booking Engine · Conversion",
  },
  {
    number: "06",
    title: "OTA GROWTH",
    description: "Listing · Content · Visibility · Optimization",
  },
  {
    number: "07",
    title: "REPUTATION",
    description: "Reviews · Google Business Profile",
  },
  {
    number: "08",
    title: "COMPLETE GROWTH",
    description: "End-to-end hospitality growth",
  },
];

const hotelGoals = [
  "Increase direct bookings",
  "Reduce OTA dependency",
  "Improve online visibility",
  "Build a stronger brand",
  "Generate more enquiries",
  "Improve Instagram/content",
  "Improve Google ranking",
  "Launch a new property",
  "Improve website/booking journey",
  "Other",
];

const guestNeeds = [
  {
    icon: "⌁",
    title: "PLAN MY DAY",
    text: "Custom itinerary",
  },
  {
    icon: "⌖",
    title: "WHERE SHOULD I GO?",
    text: "Local recommendations",
  },
  {
    icon: "◌",
    title: "WHERE SHOULD I EAT?",
    text: "Food & cafés",
  },
  {
    icon: "◇",
    title: "WHAT SHOULD I SEE?",
    text: "Places & experiences",
  },
  {
    icon: "↗",
    title: "HOW DO I GET THERE?",
    text: "Directions / transport",
  },
  {
    icon: "♧",
    title: "I NEED A LOCAL GUIDE",
    text: "On-call guide support",
  },
  {
    icon: "✦",
    title: "SOMETHING ELSE",
    text: "Talk to Raahii",
  },
];

const hotelTypes = [
  "Hotel",
  "Resort",
  "Boutique Hotel",
  "Villa",
  "Homestay",
  "Hostel",
  "Other",
];

const budgetOptions = [
  "Under ₹25K",
  "₹25K–₹50K",
  "₹50K–₹1L",
  "₹1L+",
  "Not sure yet",
];

const marketingSetupOptions = [
  "In-house",
  "Freelancer",
  "Agency",
  "No dedicated marketing",
  "Other",
];

const sourceOptions = [
  "Google",
  "Instagram",
  "Referral",
  "Hotel / Client",
  "LinkedIn",
  "Other",
];

const guestTiming = ["RIGHT NOW", "TODAY", "TOMORROW", "THIS WEEK"];

export default function ContactClient() {
  const [journey, setJourney] = useState<JourneyType>(null);

  const [hotelServicesSelected, setHotelServicesSelected] = useState<string[]>(
    []
  );

  const [hotelGoalsSelected, setHotelGoalsSelected] = useState<string[]>([]);

  const [guestNeed, setGuestNeed] = useState<string | null>(null);

  const [hotelSubmitted, setHotelSubmitted] = useState(false);
  const [guestSubmitted, setGuestSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const type = params.get("type");

    if (type === "hotel") {
      setJourney("hotel");
    }

    if (type === "guest") {
      setJourney("guest");
    }
  }, []);

  const selectJourney = (type: JourneyType) => {
    setJourney(type);

    setTimeout(() => {
      document
        .getElementById(type === "hotel" ? "hotel-path" : "guest-path")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 80);
  };

  const toggleHotelService = (service: string) => {
    setHotelServicesSelected((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    );
  };

  const toggleHotelGoal = (goal: string) => {
    setHotelGoalsSelected((current) =>
      current.includes(goal)
        ? current.filter((item) => item !== goal)
        : [...current, goal]
    );
  };

  const handleHotelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHotelSubmitted(true);

    setTimeout(() => {
      document.getElementById("hotel-success")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  const handleGuestSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGuestSubmitted(true);

    setTimeout(() => {
      document.getElementById("guest-success")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  return (
    <main className="overflow-hidden bg-[#f5f0e6] text-[#172a23]">

      {/* =========================================================
          01 — HERO
      ========================================================== */}

      <section className="relative min-h-[92vh] overflow-hidden bg-[#101511] text-[#f7f3e8]">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-bg.jpeg')",
          }}
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-[1500px] items-end px-6 pb-12 pt-32 md:px-10 md:pb-16 lg:px-16">

          <div className="max-w-[800px]">

            <div className="mb-6 flex items-center gap-4">
              <span className="text-[9px] uppercase tracking-[0.45em] text-[#d8b887]">
                Let&apos;s Start a Journey
              </span>

              <span className="h-px w-10 bg-[#d8b887]/70" />
            </div>

            <h1 className="max-w-[850px] font-serif text-[3.2rem] font-light leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.7rem]">
              Tell Us Where
              <br />
              You&apos;re Going.
              <br />
              <span className="text-[#d8b887]">
                We&apos;ll Help You Get There.
              </span>
            </h1>

            <p className="mt-7 max-w-[610px] font-serif text-base leading-7 text-[#f7f3e8]/75 sm:text-lg">
              Whether you&apos;re building a hospitality brand or exploring a
              new destination, you&apos;re in the right place.
            </p>

          </div>

          <div className="absolute bottom-8 right-7 hidden text-right md:block lg:right-16">
            <p className="font-serif text-lg italic leading-tight text-[#f7f3e8]/65">
              Every journey
              <br />
              starts with
              <br />
              a conversation.
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================
          02 — THE FIRST QUESTION
      ========================================================== */}

      <section className="bg-[#f5f0e6] px-5 py-16 md:px-8 md:py-24 lg:px-10 lg:py-28">

        <div className="mx-auto max-w-[1500px]">

          <div className="text-center">

            <p className="text-[9px] uppercase tracking-[0.45em] text-[#a56b3a]">
              The First Question
            </p>

            <h2 className="mt-5 font-serif text-4xl font-light leading-[0.95] tracking-[-0.035em] sm:text-5xl md:text-6xl">
              What Brings You
              <br />
              <span className="text-[#90616a]">to Raahii?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-[540px] text-sm leading-6 text-[#33433b]/65">
              Two journeys. One place to begin.
            </p>

          </div>


          <div className="mt-12 grid gap-4 lg:grid-cols-2">

            {/* HOTEL OWNER */}

            <button
              type="button"
              onClick={() => selectJourney("hotel")}
              className={`group relative min-h-[520px] overflow-hidden rounded-[28px] text-left transition-all duration-700 ${
                journey === "hotel"
                  ? "ring-2 ring-[#d8b887]"
                  : ""
              }`}
            >

              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                style={{
                  backgroundImage: "url('/philosophy-bg.jpeg')",
                }}
              />

              <div className="absolute inset-0 bg-black/55 transition-all duration-500 group-hover:bg-black/45" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

              <div className="relative z-10 flex min-h-[520px] flex-col justify-end p-7 md:p-10">

                <div className="mb-auto pt-3">

                  <p className="text-[8px] uppercase tracking-[0.4em] text-[#d8b887]">
                    For Hospitality Businesses
                  </p>

                </div>

                <div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d8b887]/50 bg-black/20 text-2xl text-[#d8b887] backdrop-blur-sm">
                    ♜
                  </div>

                  <h3 className="mt-6 font-serif text-4xl font-light leading-[0.95] text-[#f7f3e8] sm:text-5xl">
                    I&apos;m a
                    <br />
                    Hotel Owner.
                  </h3>

                  <p className="mt-4 font-serif text-xl italic text-[#d8b887]">
                    I want to grow my hotel.
                  </p>

                  <p className="mt-4 max-w-[500px] text-sm leading-6 text-[#f7f3e8]/70">
                    Looking for better marketing, stronger branding, more
                    direct bookings or a complete digital growth strategy?
                  </p>

                  <div className="mt-7 inline-flex items-center gap-4 rounded-full bg-[#f3dfb5] px-6 py-3.5 text-[9px] uppercase tracking-[0.18em] text-[#17352d] transition-all duration-500 group-hover:gap-6">
                    Talk to Raahii
                    <span className="text-base">→</span>
                  </div>

                  <p className="mt-5 text-[8px] uppercase tracking-[0.3em] text-[#f7f3e8]/50">
                    Hotels · Resorts · Villas · Homestays
                  </p>

                </div>

              </div>
            </button>


            {/* GUEST */}

            <button
              type="button"
              onClick={() => selectJourney("guest")}
              className={`group relative min-h-[520px] overflow-hidden rounded-[28px] text-left transition-all duration-700 ${
                journey === "guest"
                  ? "ring-2 ring-[#d8b887]"
                  : ""
              }`}
            >

              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                style={{
                  backgroundImage: "url('/services-hero.jpeg')",
                }}
              />

              <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/30" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />

              <div className="relative z-10 flex min-h-[520px] flex-col justify-end p-7 md:p-10">

                <div className="mb-auto pt-3">

                  <p className="text-[8px] uppercase tracking-[0.4em] text-[#d8b887]">
                    For Guests & Travellers
                  </p>

                </div>

                <div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d8b887]/50 bg-black/20 text-2xl text-[#d8b887] backdrop-blur-sm">
                    ⌖
                  </div>

                  <h3 className="mt-6 font-serif text-4xl font-light leading-[0.95] text-[#f7f3e8] sm:text-5xl">
                    I&apos;m a
                    <br />
                    Guest.
                  </h3>

                  <p className="mt-4 font-serif text-xl italic text-[#d8b887]">
                    I need help exploring.
                  </p>

                  <p className="mt-4 max-w-[500px] text-sm leading-6 text-[#f7f3e8]/70">
                    Looking for a local guide, itinerary, recommendations or
                    help during your stay?
                  </p>

                  <div className="mt-7 inline-flex items-center gap-4 rounded-full bg-[#f3dfb5] px-6 py-3.5 text-[9px] uppercase tracking-[0.18em] text-[#17352d] transition-all duration-500 group-hover:gap-6">
                    Get Travel Support
                    <span className="text-base">→</span>
                  </div>

                  <p className="mt-5 text-[8px] uppercase tracking-[0.3em] text-[#f7f3e8]/50">
                    Guests · Travellers · Raahii Companion
                  </p>

                </div>

              </div>
            </button>

          </div>

          <div className="mt-8 text-center">

            <span className="font-serif text-2xl italic text-[#90616a]">
              Same City.
            </span>

            <span className="mx-2 font-serif text-2xl text-[#a56b3a]">
              Different
            </span>

            <span className="font-serif text-2xl italic text-[#90616a]">
              Journeys.
            </span>

          </div>

        </div>
      </section>


      {/* =========================================================
          HOTEL PATH
      ========================================================== */}

      {journey === "hotel" && (
        <section
          id="hotel-path"
          className="bg-[#101511] px-5 py-20 text-[#f7f3e8] md:px-8 md:py-28 lg:px-10"
        >

          <div className="mx-auto max-w-[1250px]">

            {/* HOTEL INTRO */}

            <div className="max-w-[750px]">

              <p className="text-[9px] uppercase tracking-[0.45em] text-[#d8b887]">
                For Hospitality Businesses
              </p>

              <h2 className="mt-6 font-serif text-5xl font-light leading-[0.92] tracking-[-0.04em] md:text-7xl">
                Let&apos;s Grow
                <br />
                <span className="text-[#d8b887]">
                  Your Hotel.
                </span>
              </h2>

              <p className="mt-7 max-w-[650px] text-sm leading-7 text-[#f7f3e8]/65 md:text-base">
                Tell us a little about your property and where you want to go.
                We&apos;ll come back with the right growth conversation — not a
                generic sales pitch.
              </p>

            </div>


            {/* HOTEL FORM */}

            {!hotelSubmitted ? (
              <form
                onSubmit={handleHotelSubmit}
                className="mt-16 space-y-12"
              >

                {/* SERVICES */}

                <div>

                  <SectionLabel
                    number="01"
                    label="What Can We Help With?"
                    dark
                  />

                  <p className="mt-3 text-xs text-[#f7f3e8]/45">
                    Select everything that feels relevant.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                    {hotelServices.map((service) => {
                      const selected = hotelServicesSelected.includes(
                        service.title
                      );

                      return (
                        <button
                          key={service.title}
                          type="button"
                          onClick={() =>
                            toggleHotelService(service.title)
                          }
                          className={`group rounded-[18px] border p-5 text-left transition-all duration-300 ${
                            selected
                              ? "border-[#d8b887] bg-[#d8b887] text-[#17352d]"
                              : "border-[#f7f3e8]/12 bg-[#171d19] hover:border-[#d8b887]/50"
                          }`}
                        >

                          <div className="flex items-center justify-between">

                            <span
                              className={`text-[8px] tracking-[0.2em] ${
                                selected
                                  ? "text-[#17352d]/60"
                                  : "text-[#d8b887]"
                              }`}
                            >
                              {service.number}
                            </span>

                            <span
                              className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs ${
                                selected
                                  ? "border-[#17352d]/30"
                                  : "border-[#d8b887]/30"
                              }`}
                            >
                              {selected ? "✓" : "+"}
                            </span>

                          </div>

                          <h3 className="mt-7 font-serif text-lg leading-tight">
                            {service.title}
                          </h3>

                          <p
                            className={`mt-2 text-[10px] leading-5 ${
                              selected
                                ? "text-[#17352d]/65"
                                : "text-[#f7f3e8]/45"
                            }`}
                          >
                            {service.description}
                          </p>

                        </button>
                      );
                    })}

                  </div>

                </div>


                {/* PROPERTY DETAILS */}

                <div>

                  <SectionLabel
                    number="02"
                    label="Tell Us About Your Property"
                    dark
                  />

                  <div className="mt-7 grid gap-5 md:grid-cols-2">

                    <Field
                      label="Your Name *"
                      name="name"
                      placeholder="Enter your full name"
                      required
                    />

                    <Field
                      label="Hotel / Property Name *"
                      name="property"
                      placeholder="e.g. Hotel Lalit Imperial"
                      required
                    />

                    <Field
                      label="Phone / WhatsApp *"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />

                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="you@hotel.com"
                    />

                    <SelectField
                      label="Property Type"
                      name="propertyType"
                      options={hotelTypes}
                    />

                    <Field
                      label="Location *"
                      name="location"
                      placeholder="City / State"
                      required
                    />

                    <Field
                      label="Website"
                      name="website"
                      type="url"
                      placeholder="https://"
                    />

                    <Field
                      label="Instagram"
                      name="instagram"
                      placeholder="@yourhotel"
                    />

                  </div>

                </div>


                {/* BUSINESS GOALS */}

                <div>

                  <SectionLabel
                    number="03"
                    label="What Are You Trying to Improve?"
                    dark
                  />

                  <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                    {hotelGoals.map((goal) => {
                      const selected = hotelGoalsSelected.includes(goal);

                      return (
                        <button
                          key={goal}
                          type="button"
                          onClick={() => toggleHotelGoal(goal)}
                          className={`flex items-center gap-3 rounded-full border px-5 py-3.5 text-left text-xs transition-all duration-300 ${
                            selected
                              ? "border-[#d8b887] bg-[#d8b887] text-[#17352d]"
                              : "border-[#f7f3e8]/12 bg-[#171d19] text-[#f7f3e8]/70 hover:border-[#d8b887]/45"
                          }`}
                        >
                          <span className="text-sm">
                            {selected ? "✓" : "+"}
                          </span>

                          {goal}
                        </button>
                      );
                    })}

                  </div>

                </div>


                {/* BUSINESS CONTEXT */}

                <div>

                  <SectionLabel
                    number="04"
                    label="Understand the Business"
                    dark
                  />

                  <div className="mt-7 grid gap-5 md:grid-cols-3">

                    <SelectField
                      label="Monthly Marketing Budget"
                      name="budget"
                      options={budgetOptions}
                    />

                    <SelectField
                      label="Current Marketing Setup"
                      name="marketingSetup"
                      options={marketingSetupOptions}
                    />

                    <SelectField
                      label="How Did You Hear About Raahii?"
                      name="source"
                      options={sourceOptions}
                    />

                  </div>

                  <div className="mt-5">

                    <label
                      htmlFor="hotelMessage"
                      className="text-[9px] uppercase tracking-[0.3em] text-[#d8b887]"
                    >
                      Tell Us a Little More
                    </label>

                    <textarea
                      id="hotelMessage"
                      name="message"
                      rows={6}
                      placeholder="What are you currently struggling with?"
                      className="mt-3 w-full resize-none rounded-[18px] border border-[#f7f3e8]/12 bg-[#171d19] px-5 py-4 text-sm text-[#f7f3e8] outline-none transition-colors placeholder:text-[#f7f3e8]/25 focus:border-[#d8b887]/60"
                    />

                  </div>

                </div>


                {/* SUBMIT */}

                <div className="border-t border-[#f7f3e8]/10 pt-8">

                  <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

                    <div>

                      <p className="font-serif text-xl">
                        Ready to start the conversation?
                      </p>

                      <p className="mt-1 text-xs text-[#f7f3e8]/45">
                        Tell us where you want to take your property.
                      </p>

                    </div>

                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-5 rounded-full bg-[#f3dfb5] px-7 py-4 text-[9px] uppercase tracking-[0.2em] text-[#17352d] transition-all duration-300 hover:-translate-y-1"
                    >
                      Start the Conversation
                      <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>

                  </div>

                </div>

              </form>
            ) : (
              <SuccessCard
                id="hotel-success"
                eyebrow="Thank You"
                title="We’ve Got the Journey From Here."
                text="Your property details are ready for the next conversation. The next step is a short discovery call where we understand your hotel, goals and growth opportunities."
                buttonText="Back to Raahii"
                buttonHref="/"
              />
            )}

          </div>
        </section>
      )}


      {/* =========================================================
          GUEST PATH
      ========================================================== */}

      {journey === "guest" && (
        <section
          id="guest-path"
          className="bg-[#eee7da] px-5 py-20 md:px-8 md:py-28 lg:px-10"
        >

          <div className="mx-auto max-w-[1250px]">

            {/* GUEST INTRO */}

            <div className="max-w-[760px]">

              <p className="text-[9px] uppercase tracking-[0.45em] text-[#a56b3a]">
                Raahii Companion
              </p>

              <h2 className="mt-6 font-serif text-5xl font-light leading-[0.92] tracking-[-0.04em] md:text-7xl">
                Lost?
                <br />
                <span className="text-[#90616a]">
                  Good.
                </span>
                <br />
                You&apos;re About to
                <br />
                Discover More.
              </h2>

              <p className="mt-7 max-w-[650px] text-sm leading-7 text-[#33433b]/70 md:text-base">
                Need help exploring the city, planning your day, finding a
                place to eat or discovering something beyond the usual tourist
                trail?
              </p>

            </div>


            {!guestSubmitted ? (
              <form
                onSubmit={handleGuestSubmit}
                className="mt-16 space-y-12"
              >

                {/* HELP OPTIONS */}

                <div>

                  <SectionLabel
                    number="01"
                    label="What Do You Need Help With?"
                  />

                  <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                    {guestNeeds.map((need) => {
                      const selected = guestNeed === need.title;

                      return (
                        <button
                          key={need.title}
                          type="button"
                          onClick={() => setGuestNeed(need.title)}
                          className={`group rounded-[20px] border p-6 text-left transition-all duration-300 ${
                            selected
                              ? "border-[#a56b3a] bg-[#17352d] text-[#f7f3e8]"
                              : "border-[#263a31]/12 bg-[#f5f0e6] hover:border-[#a56b3a]/45"
                          }`}
                        >

                          <div
                            className={`flex h-11 w-11 items-center justify-center rounded-full border text-xl ${
                              selected
                                ? "border-[#d8b887]/50 text-[#d8b887]"
                                : "border-[#a56b3a]/30 text-[#a56b3a]"
                            }`}
                          >
                            {need.icon}
                          </div>

                          <h3 className="mt-6 font-serif text-lg leading-tight">
                            {need.title}
                          </h3>

                          <p
                            className={`mt-2 text-[10px] ${
                              selected
                                ? "text-[#f7f3e8]/55"
                                : "text-[#33433b]/55"
                            }`}
                          >
                            {need.text}
                          </p>

                        </button>
                      );
                    })}

                  </div>

                </div>


                {/* GUEST DETAILS */}

                <div>

                  <SectionLabel
                    number="02"
                    label="Tell Us Where You Are"
                  />

                  <div className="mt-7 grid gap-5 md:grid-cols-2">

                    <Field
                      label="Your Name *"
                      name="guestName"
                      placeholder="Enter your name"
                      required
                      light
                    />

                    <Field
                      label="WhatsApp Number *"
                      name="guestPhone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      light
                    />

                    <Field
                      label="Hotel / Stay Name *"
                      name="guestHotel"
                      placeholder="Where are you staying?"
                      required
                      light
                    />

                    <Field
                      label="City"
                      name="guestCity"
                      placeholder="Udaipur"
                      defaultValue="Udaipur"
                      light
                    />

                    <Field
                      label="Room / Booking Reference"
                      name="bookingReference"
                      placeholder="Optional"
                      light
                    />

                  </div>

                </div>


                {/* MESSAGE */}

                <div>

                  <SectionLabel
                    number="03"
                    label="Tell Us What You Have in Mind"
                  />

                  <textarea
                    name="guestMessage"
                    rows={6}
                    placeholder="I have one evening in Udaipur and want to see the best sunset + dinner."
                    className="mt-7 w-full resize-none rounded-[20px] border border-[#263a31]/12 bg-[#f5f0e6] px-5 py-4 text-sm text-[#172a23] outline-none transition-colors placeholder:text-[#33433b]/35 focus:border-[#a56b3a]/60"
                  />

                </div>


                {/* WHEN */}

                <div>

                  <SectionLabel
                    number="04"
                    label="When Are You Exploring?"
                  />

                  <div className="mt-7 flex flex-wrap gap-3">

                    {guestTiming.map((time) => (
                      <label
                        key={time}
                        className="cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="guestTiming"
                          value={time}
                          className="peer sr-only"
                        />

                        <span className="inline-flex rounded-full border border-[#263a31]/15 bg-[#f5f0e6] px-6 py-3 text-[9px] uppercase tracking-[0.2em] transition-all peer-checked:border-[#17352d] peer-checked:bg-[#17352d] peer-checked:text-[#f7f3e8]">
                          {time}
                        </span>
                      </label>
                    ))}

                  </div>

                </div>


                {/* COMMUNICATION */}

                <div>

                  <SectionLabel
                    number="05"
                    label="Preferred Communication"
                  />

                  <div className="mt-7 flex flex-wrap gap-3">

                    {["WhatsApp", "Call", "Text"].map((method) => (
                      <label
                        key={method}
                        className="cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="communication"
                          value={method}
                          defaultChecked={method === "WhatsApp"}
                          className="peer sr-only"
                        />

                        <span className="inline-flex rounded-full border border-[#263a31]/15 bg-[#f5f0e6] px-6 py-3 text-[9px] uppercase tracking-[0.2em] transition-all peer-checked:border-[#17352d] peer-checked:bg-[#17352d] peer-checked:text-[#f7f3e8]">
                          {method}
                        </span>
                      </label>
                    ))}

                  </div>

                </div>


                {/* SUBMIT */}

                <div className="border-t border-[#263a31]/10 pt-8">

                  <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

                    <div>

                      <p className="font-serif text-xl text-[#172a23]">
                        Your journey starts here.
                      </p>

                      <p className="mt-1 text-xs text-[#33433b]/55">
                        We&apos;ll help you find your way around.
                      </p>

                    </div>

                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-5 rounded-full bg-[#17352d] px-7 py-4 text-[9px] uppercase tracking-[0.2em] text-[#f7f3e8] transition-all duration-300 hover:-translate-y-1"
                    >
                      Get Help From a Local
                      <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>

                  </div>

                </div>

              </form>
            ) : (
              <div id="guest-success">

                <SuccessCard
                  eyebrow="Raahii Companion"
                  title="Your Journey Starts Here."
                  text="We’ve received your request. A Raahii Companion will connect with you shortly."
                  buttonText="Explore Raahii Experiences"
                  buttonHref="/experience"
                  dark
                />

                <div className="mt-6 rounded-[24px] bg-[#17352d] p-7 text-[#f7f3e8] md:p-9">

                  <p className="text-[9px] uppercase tracking-[0.35em] text-[#d8b887]">
                    Need Something Right Now?
                  </p>

                  <h3 className="mt-3 font-serif text-3xl">
                    Talk to Raahii.
                  </h3>

                  <p className="mt-3 max-w-[500px] text-sm leading-6 text-[#f7f3e8]/55">
                    Connect with your Raahii Companion for destination help,
                    recommendations and local guidance.
                  </p>

                  <a
                    href="#"
                    onClick={(event) => event.preventDefault()}
                    className="mt-6 inline-flex items-center gap-4 rounded-full bg-[#f3dfb5] px-6 py-3.5 text-[9px] uppercase tracking-[0.2em] text-[#17352d]"
                  >
                    WhatsApp Raahii
                    <span className="text-base">→</span>
                  </a>

                </div>

              </div>
            )}

          </div>
        </section>
      )}


      {/* =========================================================
          03 — UNIVERSAL CONTACT INFO
      ========================================================== */}

      <section className="bg-[#f5f0e6] px-5 py-20 md:px-8 md:py-24 lg:px-10">

        <div className="mx-auto max-w-[1400px]">

          <div className="text-center">

            <p className="text-[9px] uppercase tracking-[0.45em] text-[#a56b3a]">
              Or Reach Out Directly
            </p>

            <div className="mx-auto mt-4 h-px w-12 bg-[#a56b3a]/50" />

          </div>


          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            <ContactInfoCard
              icon="♜"
              title="For Hotel Enquiries"
              value="Start a conversation"
              onClick={() => selectJourney("hotel")}
            />

            <ContactInfoCard
              icon="⌖"
              title="For Guest Support"
              value="Meet your Raahii"
              onClick={() => selectJourney("guest")}
            />

            <ContactInfoCard
              icon="◉"
              title="Chat on WhatsApp"
              value="Connect with Raahii"
              href="#"
            />

            <ContactInfoCard
              icon="◎"
              title="Follow Our Journey"
              value="@raahii.digital"
              href="#"
            />

          </div>

        </div>
      </section>


      {/* =========================================================
          04 — FINAL CTA
      ========================================================== */}

      <section className="relative min-h-[570px] overflow-hidden bg-[#101511] text-[#f7f3e8]">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/footer-bg.jpeg')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[570px] max-w-[1400px] flex-col justify-between px-6 py-16 md:px-10 md:py-20 lg:px-16">

          <div>

            <p className="text-[9px] uppercase tracking-[0.45em] text-[#d8b887]">
              Raahii Digital
            </p>

            <h2 className="mt-6 max-w-[800px] font-serif text-5xl font-light leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              Every Journey
              <br />
              Starts With a
              <br />
              <span className="text-[#d8b887]">
                Conversation.
              </span>
            </h2>

            <p className="mt-7 max-w-[480px] text-sm leading-7 text-[#f7f3e8]/65">
              Let&apos;s begin yours.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button
                type="button"
                onClick={() => selectJourney("hotel")}
                className="inline-flex h-14 items-center justify-center gap-4 rounded-full bg-[#f3dfb5] px-7 text-[9px] uppercase tracking-[0.2em] text-[#17352d] transition-all duration-300 hover:-translate-y-1"
              >
                Talk to Raahii
                <span className="text-base">→</span>
              </button>

              <Link
                href="/experience"
                className="inline-flex h-14 items-center justify-center gap-4 rounded-full border border-[#f7f3e8]/35 px-7 text-[9px] uppercase tracking-[0.2em] text-[#f7f3e8] transition-all duration-300 hover:bg-[#f7f3e8] hover:text-[#17352d]"
              >
                Explore Udaipur
                <span className="text-base">→</span>
              </Link>

            </div>

          </div>


          <div className="flex items-end justify-between border-t border-[#f7f3e8]/15 pt-7">

            <div>

              <p className="font-serif text-2xl tracking-[0.18em]">
                RAAHII
              </p>

              <p className="mt-1 text-[7px] uppercase tracking-[0.35em] text-[#d8b887]">
                Hospitality Growth Partner
              </p>

            </div>

            <p className="hidden text-right font-serif text-lg italic text-[#f7f3e8]/55 sm:block">
              Better Stays.
              <br />
              Brighter Tomorrows.
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}


/* ============================================================
   REUSABLE COMPONENTS
============================================================ */

function SectionLabel({
  number,
  label,
  dark = false,
}: {
  number: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">

      <span
        className={`font-serif text-sm ${
          dark ? "text-[#d8b887]" : "text-[#a56b3a]"
        }`}
      >
        {number}
      </span>

      <span
        className={`h-px w-8 ${
          dark ? "bg-[#d8b887]/50" : "bg-[#a56b3a]/40"
        }`}
      />

      <span
        className={`text-[9px] uppercase tracking-[0.4em] ${
          dark ? "text-[#d8b887]/75" : "text-[#68736d]"
        }`}
      >
        {label}
      </span>

    </div>
  );
}


function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
  light = false,
  defaultValue,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  light?: boolean;
  defaultValue?: string;
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className={`text-[9px] uppercase tracking-[0.3em] ${
          light ? "text-[#a56b3a]" : "text-[#d8b887]"
        }`}
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        className={`mt-3 w-full rounded-full border px-5 py-3.5 text-sm outline-none transition-colors ${
          light
            ? "border-[#263a31]/12 bg-[#f5f0e6] text-[#172a23] placeholder:text-[#33433b]/35 focus:border-[#a56b3a]/60"
            : "border-[#f7f3e8]/12 bg-[#171d19] text-[#f7f3e8] placeholder:text-[#f7f3e8]/25 focus:border-[#d8b887]/60"
        }`}
      />

    </div>
  );
}


function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="text-[9px] uppercase tracking-[0.3em] text-[#d8b887]"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-3 w-full appearance-none rounded-full border border-[#f7f3e8]/12 bg-[#171d19] px-5 py-3.5 text-sm text-[#f7f3e8] outline-none transition-colors focus:border-[#d8b887]/60"
      >
        <option value="" disabled>
          Select
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

    </div>
  );
}


function SuccessCard({
  id,
  eyebrow,
  title,
  text,
  buttonText,
  buttonHref,
  dark = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  text: string;
  buttonText: string;
  buttonHref: string;
  dark?: boolean;
}) {
  return (
    <div
      id={id}
      className={`mt-16 rounded-[28px] p-8 md:p-12 ${
        dark
          ? "bg-[#17352d] text-[#f7f3e8]"
          : "border border-[#d8b887]/20 bg-[#171d19] text-[#f7f3e8]"
      }`}
    >

      <p className="text-[9px] uppercase tracking-[0.4em] text-[#d8b887]">
        {eyebrow}
      </p>

      <h3 className="mt-5 max-w-[700px] font-serif text-4xl font-light leading-[0.95] md:text-5xl">
        {title}
      </h3>

      <p className="mt-5 max-w-[650px] text-sm leading-7 text-[#f7f3e8]/60">
        {text}
      </p>

      <Link
        href={buttonHref}
        className="mt-7 inline-flex items-center gap-4 rounded-full bg-[#f3dfb5] px-6 py-3.5 text-[9px] uppercase tracking-[0.2em] text-[#17352d]"
      >
        {buttonText}
        <span className="text-base">→</span>
      </Link>

    </div>
  );
}


function ContactInfoCard({
  icon,
  title,
  value,
  href,
  onClick,
}: {
  icon: string;
  title: string;
  value: string;
  href?: string;
  onClick?: () => void;
}) {
  const content = (
    <>
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#a56b3a]/35 text-xl text-[#a56b3a]">
        {icon}
      </div>

      <p className="mt-5 font-serif text-xl text-[#172a23]">
        {title}
      </p>

      <p className="mt-2 text-xs text-[#33433b]/55">
        {value}
      </p>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="group rounded-[18px] border border-[#263a31]/10 bg-[#eee7da] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#a56b3a]/40"
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={href || "#"}
      onClick={(event) => {
        if (!href || href === "#") {
          event.preventDefault();
        }
      }}
      className="group rounded-[18px] border border-[#263a31]/10 bg-[#eee7da] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#a56b3a]/40"
    >
      {content}
    </a>
  );
}