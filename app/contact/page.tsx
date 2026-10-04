"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { sanityClient } from "@/lib/sanity";
import { contactPageQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanityImage";
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
    icon: "✦",
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
    text: "Additional help or anything else",
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
export default function ContactPage() {
  const [journey, setJourney] = useState<JourneyType>(null);
  const [contactPage, setContactPage] = useState<any>(null);
  useEffect(() => {
    let mounted = true;
    const loadContactPage = async () => {
      try {
        const data = await sanityClient.fetch(
          contactPageQuery,
          {},
          { cache: "no-store" }
        );
        if (mounted) setContactPage(data);
      } catch (error) {
        console.error("Failed to fetch Contact Page from Sanity:", error);
      }
    };
    loadContactPage();
    return () => {
      mounted = false;
    };
  }, []);
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
  const hero = contactPage?.hero;
  const journeySelection = contactPage?.journeySelection;
  const hotelPath = contactPage?.hotelPath;
  const guestPath = contactPage?.guestPath;
  const directContact = contactPage?.directContact;
  const finalCta = contactPage?.finalCta;
  const services = hotelPath?.services?.length ? hotelPath.services : hotelServices;
  const goals = hotelPath?.goals?.length ? hotelPath.goals : hotelGoals;
  const hotelTypeOptions = hotelPath?.hotelTypes?.length ? hotelPath.hotelTypes : hotelTypes;
  const budgets = hotelPath?.budgetOptions?.length ? hotelPath.budgetOptions : budgetOptions;
  const marketingSetups = hotelPath?.marketingSetupOptions?.length
    ? hotelPath.marketingSetupOptions
    : marketingSetupOptions;
  const sources = hotelPath?.sourceOptions?.length ? hotelPath.sourceOptions : sourceOptions;
  const needs = guestPath?.helpOptions?.length ? guestPath.helpOptions : guestNeeds;
  const timings = guestPath?.timingOptions?.length ? guestPath.timingOptions : guestTiming;
  const communicationOptions = guestPath?.communicationOptions?.length
    ? guestPath.communicationOptions
    : ["WhatsApp", "Call", "Text"];
  const imageUrl = (source: any, fallback: string, width = 1800) => {
    if (!source) return fallback;
    try {
      return urlFor(source).width(width).url();
    } catch {
      return fallback;
    }
  };
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
            backgroundImage: `url(${imageUrl(hero?.backgroundImage, "/hero-bg.jpeg", 2200)})`,
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-[1500px] items-end px-6 pb-12 pt-32 md:px-10 md:pb-16 lg:px-16">
          <div className="max-w-[800px]">
            <div className="mb-6 flex items-center gap-4">
              <span className="text-[9px] uppercase tracking-[0.45em] text-[#d8b887]">
                {hero?.eyebrow || "Let's Start a Journey"}
              </span>
              <span className="h-px w-10 bg-[#d8b887]/70" />
            </div>
            <h1 className="max-w-[850px] font-serif text-[3.2rem] font-light leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.7rem]">
              {hero?.headingLineOne || "Tell Us Where"}
              <br />
              {hero?.headingLineTwo || "You're Going."}
              <br />
              <span className="text-[#d8b887]">
                {hero?.headingHighlight || "We'll Help You Get There."}
              </span>
            </h1>
            <p className="mt-7 max-w-[610px] font-serif text-base leading-7 text-[#f7f3e8]/75 sm:text-lg">
              {hero?.description || "Whether you're building a hospitality brand or exploring a new destination, you're in the right place."}
            </p>
          </div>
          <div className="absolute bottom-8 right-7 hidden text-right md:block lg:right-16">
            <p className="font-serif text-lg italic leading-tight text-[#f7f3e8]/65">
            {(hero?.sideMessage || "Every journey begins with a conversation.")
  .split("\n")
  .map((line: string, index: number) => (
    <span key={index} className="block">
      {line}
    </span>
  ))}
            </p>
          </div>
        </div>
      </section>
      {/* =========================================================
          02 — THE FIRST QUESTION
      ========================================================== */}
      <section className="bg-[#f5f0e6] px-5 pt-16 pb-10 md:px-8 md:pt-24 md:pb-12 lg:px-10 lg:pt-28 lg:pb-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="text-center">
            <p className="text-[9px] uppercase tracking-[0.45em] text-[#a56b3a]">
              {journeySelection?.eyebrow || "The First Question"}
            </p>
            <h2 className="mt-5 font-serif text-4xl font-light leading-[0.95] tracking-[-0.035em] sm:text-5xl md:text-6xl">
              {journeySelection?.headingLineOne || "What Brings You"}
              <br />
              <span className="text-[#90616a]">{journeySelection?.headingHighlight || "to Raahii?"}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[540px] text-sm leading-6 text-[#33433b]/65">
              {journeySelection?.description || "Two journeys. One place to begin."}
            </p>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {/* HOTEL OWNER */}
            <button
              type="button"
              onClick={() => selectJourney("hotel")}
              className={`group relative flex min-h-[520px] flex-col overflow-hidden rounded-[28px] text-left transition-all duration-700 ${
                journey === "hotel"
                  ? "ring-2 ring-[#d8b887]"
                  : ""
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                style={{
                  backgroundImage: `url(${imageUrl(journeySelection?.hotelCard?.image, "/philosophy-bg.jpeg", 1600)})`,
                }}
              />
              <div className="absolute inset-0 bg-black/55 transition-all duration-500 group-hover:bg-black/45" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
              <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-end p-7 md:p-10">
                <div className="mb-auto pt-3">
                  <p className="text-[8px] uppercase tracking-[0.4em] text-[#d8b887]">
                     {hotelPath?.eyebrow || "For Hospitality Businesses"}
                  </p>
                </div>
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d8b887]/50 bg-black/20 text-2xl text-[#d8b887] backdrop-blur-sm">
                    {journeySelection?.hotelCard?.icon || "♜"}
                  </div>
                  <h3 className="mt-6 font-serif text-4xl font-light leading-[0.95] text-[#f7f3e8] sm:text-5xl">
                    {journeySelection?.hotelCard?.headingLineOne || "I'm a"}
                    <br />
                    {journeySelection?.hotelCard?.headingLineTwo || "Hotel Owner."}
                  </h3>
                  <p className="mt-4 font-serif text-xl italic text-[#d8b887]">
                    {journeySelection?.hotelCard?.highlight || "I want to grow my hotel."}
                  </p>
                  <p className="mt-4 max-w-[500px] text-sm leading-6 text-[#f7f3e8]/70">
                    {journeySelection?.hotelCard?.description || "Looking for better marketing, stronger branding, more direct bookings or a complete digital growth strategy?"}
                  </p>
                  <div className="mt-7 inline-flex items-center gap-4 rounded-full bg-[#f3dfb5] px-6 py-3.5 text-[9px] uppercase tracking-[0.18em] text-[#17352d] transition-all duration-500 group-hover:gap-6">
                    Talk to Raahii
                    <span className="text-base">→</span>
                  </div>
                  <p className="mt-5 text-[8px] uppercase tracking-[0.3em] text-[#f7f3e8]/50">
                    {journeySelection?.hotelCard?.bottomLabel || "Hotels · Resorts · Villas · Homestays"}
                  </p>
                </div>
              </div>
            </button>
            {/* GUEST */}
            <button
              type="button"
              onClick={() => selectJourney("guest")}
              className={`group relative flex min-h-[520px] flex-col overflow-hidden rounded-[28px] text-left transition-all duration-700 ${
                journey === "guest"
                  ? "ring-2 ring-[#d8b887]"
                  : ""
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                style={{
                  backgroundImage: `url(${imageUrl(journeySelection?.guestCard?.image, "/services-hero.jpeg", 1600)})`,
                }}
              />
              <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
              <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-end p-7 md:p-10">
                <div className="mb-auto pt-3">
                  <p className="text-[8px] uppercase tracking-[0.4em] text-[#d8b887]">
                    {journeySelection?.guestCard?.eyebrow || "For Guests & Travellers"}
                  </p>
                </div>
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d8b887]/50 bg-black/20 text-2xl text-[#d8b887] backdrop-blur-sm">
                    ⌖
                  </div>
                  <h3 className="mt-6 font-serif text-4xl font-light leading-[0.95] text-[#f7f3e8] sm:text-5xl">
                    {journeySelection?.guestCard?.headingLineOne || "I'm a"}
                    <br />
                    {journeySelection?.guestCard?.headingLineTwo || "Guest."}
                  </h3>
                  <p className="mt-4 font-serif text-xl italic text-[#d8b887]">
                    {journeySelection?.guestCard?.highlight || "I need help exploring."}
                  </p>
                  <p className="mt-4 max-w-[500px] text-sm leading-6 text-[#f7f3e8]/70">
                    {journeySelection?.guestCard?.description || "Looking for a local guide, itinerary, recommendations or help during your stay?"}
                  </p>
                  <div className="mt-7 inline-flex items-center gap-4 rounded-full bg-[#f3dfb5] px-6 py-3.5 text-[9px] uppercase tracking-[0.18em] text-[#17352d] transition-all duration-500 group-hover:gap-6">
                    {journeySelection?.guestCard?.buttonLabel || "Get Travel Support"}
                    <span className="text-base">→</span>
                  </div>
                  <p className="mt-5 text-[8px] uppercase tracking-[0.3em] text-[#f7f3e8]/50">
                    {journeySelection?.guestCard?.bottomLabel || "Guests · Travellers · Raahii Companion"}
                  </p>
                </div>
              </div>
            </button>
          </div>
          <div className="mt-8 text-center">
            <span className="font-serif text-2xl italic text-[#90616a]">
              {journeySelection?.bottomStatement?.lineOne || "Same City."}
            </span>
            <span className="mx-2 font-serif text-2xl text-[#a56b3a]">
              {journeySelection?.bottomStatement?.lineTwo || "Different"}
            </span>
            <span className="font-serif text-2xl italic text-[#90616a]">
              {journeySelection?.bottomStatement?.lineThree || "Journeys."}
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
                {hotelPath?.headingLineOne || "Let's Grow"}
                <br />
                <span className="text-[#d8b887]">
                  {hotelPath?.headingHighlight || "Your Hotel."}
                </span>
              </h2>
              <p className="mt-7 max-w-[650px] text-sm leading-7 text-[#f7f3e8]/65 md:text-base">
                {hotelPath?.description || "Tell us a little about your property and where you want to go. We'll come back with the right growth conversation — not a generic sales pitch."}
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
                    label={hotelPath?.servicesLabel || "What Can We Help With?"}
                    dark
                  />
                  <p className="mt-3 text-xs text-[#f7f3e8]/45">
                    {hotelPath?.servicesHint || "Select everything that feels relevant."}
                  </p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service: { title: string; number?: string; description?: string }) => {
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
                    label={hotelPath?.propertyDetailsLabel || "Tell Us About Your Property"}
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
                      options={hotelTypeOptions}
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
                    label={hotelPath?.goalsLabel || "What Are You Trying to Improve?"}
                    dark
                  />
                  <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {goals.map((goal: string) => {
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
                    label={hotelPath?.businessLabel || "Understand the Business"}
                    dark
                  />
                  <div className="mt-7 grid gap-5 md:grid-cols-3">
                    <SelectField
                      label="Monthly Marketing Budget"
                      name="budget"
                      options={budgets}
                    />
                    <SelectField
                      label="Current Marketing Setup"
                      name="marketingSetup"
                      options={marketingSetups}
                    />
                    <SelectField
                      label="How Did You Hear About Raahii?"
                      name="source"
                      options={sources}
                    />
                  </div>
                  <div className="mt-5">
                    <label
                      htmlFor="hotelMessage"
                      className="text-[9px] uppercase tracking-[0.3em] text-[#d8b887]"
                    >
                      {hotelPath?.messageLabel || "Tell Us a Little More"}
                    </label>
                    <textarea
                      id="hotelMessage"
                      name="message"
                      rows={6}
                      placeholder={hotelPath?.messagePlaceholder || "What are you currently struggling with?"}
                      className="mt-3 w-full resize-none rounded-[18px] border border-[#f7f3e8]/12 bg-[#171d19] px-5 py-4 text-sm text-[#f7f3e8] outline-none transition-colors placeholder:text-[#f7f3e8]/25 focus:border-[#d8b887]/60"
                    />
                  </div>
                </div>
                {/* SUBMIT */}
                <div className="border-t border-[#f7f3e8]/10 pt-8">
                  <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                    <div>
                      <p className="font-serif text-xl">
                        {hotelPath?.submitHeading || "Ready to start the conversation?"}
                      </p>
                      <p className="mt-1 text-xs text-[#f7f3e8]/45">
                        {hotelPath?.submitDescription || "Tell us where you want to take your property."}
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-5 rounded-full bg-[#f3dfb5] px-7 py-4 text-[9px] uppercase tracking-[0.2em] text-[#17352d] transition-all duration-300 hover:-translate-y-1"
                    >
                      {hotelPath?.submitButton || "Start the Conversation"}
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
                eyebrow={hotelPath?.success?.eyebrow || "Thank You"}
                title={hotelPath?.success?.title || "We’ve Got the Journey From Here."}
                text={hotelPath?.success?.description || "Your property details are ready for the next conversation. The next step is a short discovery call where we understand your hotel, goals and growth opportunities."}
                buttonText={hotelPath?.success?.buttonText || "Back to Raahii"}
                buttonHref={hotelPath?.success?.buttonHref || "/"}
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
                {guestPath?.headingLineOne || "Lost?"}
                <br />
                <span className="text-[#90616a]">{guestPath?.headingLineTwo || "Good."}</span>
                <br />
                {guestPath?.headingLineThree || "You're About to"}
                <br />
                {guestPath?.headingLineFour || "Discover More."}
              </h2>
              <p className="mt-7 max-w-[650px] text-sm leading-7 text-[#33433b]/70 md:text-base">
                {guestPath?.description || "Need help exploring the city, planning your day, finding a place to eat or discovering something beyond the usual tourist trail?"}
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
                    label={guestPath?.helpLabel || "What Do You Need Help With?"}
                  />
                  <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {needs.map((need: { title: string; icon?: string; text?: string }) => {
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
                    label={guestPath?.detailsLabel || "Tell Us Where You Are"}
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
                    label={guestPath?.messageLabel || "Tell Us What You Have in Mind"}
                  />
                  <textarea
                    name="guestMessage"
                    rows={6}
                    placeholder={guestPath?.messagePlaceholder || "I have one evening in Udaipur and want to see the best sunset + dinner."}
                    className="mt-7 w-full resize-none rounded-[20px] border border-[#263a31]/12 bg-[#f5f0e6] px-5 py-4 text-sm text-[#172a23] outline-none transition-colors placeholder:text-[#33433b]/35 focus:border-[#a56b3a]/60"
                  />
                </div>
                {/* WHEN */}
                <div>
                  <SectionLabel
                    number="04"
                    label={guestPath?.timingLabel || "When Are You Exploring?"}
                  />
                  <div className="mt-7 flex flex-wrap gap-3">
                    {timings.map((time: string) => (
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
                    label={guestPath?.communicationLabel || "Preferred Communication"}
                  />
                  <div className="mt-7 flex flex-wrap gap-3">
                    {communicationOptions.map((method: string) => (
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
                        {guestPath?.submitHeading || "Your journey starts here."}
                      </p>
                      <p className="mt-1 text-xs text-[#33433b]/55">
                        {guestPath?.submitDescription || "We'll help you find your way around."}
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-5 rounded-full bg-[#17352d] px-7 py-4 text-[9px] uppercase tracking-[0.2em] text-[#f7f3e8] transition-all duration-300 hover:-translate-y-1"
                    >
                      {guestPath?.submitButton || "Get Help From a Local"}
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
                  eyebrow={guestPath?.success?.eyebrow || "Raahii Companion"}
                    title={guestPath?.success?.title || "Your Journey Starts Here."}
                    text={guestPath?.success?.description || "We’ve received your request. A Raahii Companion will connect with you shortly."}
                    buttonText={guestPath?.success?.buttonText || "Explore Raahii Experiences"}
                    buttonHref={guestPath?.success?.buttonHref || "/experience"}
                  dark
                />
                <div className="mt-6 rounded-[24px] bg-[#17352d] p-7 text-[#f7f3e8] md:p-9">
                  <p className="text-[9px] uppercase tracking-[0.35em] text-[#d8b887]">
                    {guestPath?.urgentHelp?.eyebrow || "Need Something Right Now?"}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl">
                    {guestPath?.urgentHelp?.heading || "Talk to Raahii."}
                  </h3>
                  <p className="mt-3 max-w-[500px] text-sm leading-6 text-[#f7f3e8]/55">
                    {guestPath?.urgentHelp?.description || "Connect with your Raahii Companion for destination help, recommendations and local guidance."}
                  </p>
                  <a
                    href="#"
                    onClick={(event) => event.preventDefault()}
                    className="mt-6 inline-flex items-center gap-4 rounded-full bg-[#f3dfb5] px-6 py-3.5 text-[9px] uppercase tracking-[0.2em] text-[#17352d]"
                  >
                    {guestPath?.urgentHelp?.buttonLabel || "WhatsApp Raahii"}
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
      <section className="bg-[#f5f0e6] px-5 pt-12 pb-20 md:px-8 md:pt-14 md:pb-24 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="text-[9px] uppercase tracking-[0.45em] text-[#a56b3a]">
              {directContact?.eyebrow || "Or Reach Out Directly"}
            </p>
            <div className="mx-auto mt-4 h-px w-12 bg-[#a56b3a]/50" />
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {directContact?.cards?.length ? (
              directContact.cards.map((card: any, index: number) => {
                const content = (
                  <>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#a56b3a]/35 text-xl text-[#a56b3a]">
                      {card.icon || "◎"}
                    </div>
                    <p className="mt-5 font-serif text-xl text-[#172a23]">
                      {card.title}
                    </p>
                    <p className="mt-2 text-xs text-[#33433b]/55">
                      {card.value}
                    </p>
                  </>
                );
                if (card.action === "hotel" || card.action === "guest") {
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => selectJourney(card.action)}
                      className="group rounded-[18px] border border-[#263a31]/10 bg-[#eee7da] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#a56b3a]/40"
                    >
                      {content}
                    </button>
                  );
                }
                return (
                  <a
                    key={index}
                    href={card.url || "#"}
                    target={card.url?.startsWith("http") ? "_blank" : undefined}
                    rel={card.url?.startsWith("http") ? "noreferrer" : undefined}
                    onClick={(event) => {
                      if (!card.url) event.preventDefault();
                    }}
                    className="group rounded-[18px] border border-[#263a31]/10 bg-[#eee7da] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#a56b3a]/40"
                  >
                    {content}
                  </a>
                );
              })
            ) : (
              <>
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
              </>
            )}
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
            backgroundImage: `url(${imageUrl(finalCta?.backgroundImage, "/footer-bg.jpeg", 2200)})`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
        <div className="relative z-10 mx-auto flex min-h-[570px] max-w-[1400px] flex-col justify-between px-6 py-16 md:px-10 md:py-20 lg:px-16">
          <div>
            <p className="text-[9px] uppercase tracking-[0.45em] text-[#d8b887]">
              {finalCta?.eyebrow || "Raahii Digital"}
            </p>
            <h2 className="mt-6 max-w-[800px] font-serif text-5xl font-light leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              {finalCta?.headingLineOne || "Every Journey"}
              <br />
              {finalCta?.headingLineTwo || "Starts With a"}
              <br />
              <span className="text-[#d8b887]">
                {finalCta?.headingHighlight || "Conversation."}
              </span>
            </h2>
            <p className="mt-7 max-w-[480px] text-sm leading-7 text-[#f7f3e8]/65">
              {finalCta?.description || "Let's begin yours."}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => selectJourney("hotel")}
                className="inline-flex h-14 items-center justify-center gap-4 rounded-full bg-[#f3dfb5] px-7 text-[9px] uppercase tracking-[0.2em] text-[#17352d] transition-all duration-300 hover:-translate-y-1"
              >
                {finalCta?.primaryButton?.label || "Talk to Raahii"}
                <span className="text-base">→</span>
              </button>
              <Link
                href={finalCta?.secondaryButton?.url || "/experience"}
                className="inline-flex h-14 items-center justify-center gap-4 rounded-full border border-[#f7f3e8]/35 px-7 text-[9px] uppercase tracking-[0.2em] text-[#f7f3e8] transition-all duration-300 hover:bg-[#f7f3e8] hover:text-[#17352d]"
              >
                {finalCta?.secondaryButton?.label || "Explore Udaipur"}
                <span className="text-base">→</span>
              </Link>
            </div>
          </div>
          <div className="flex items-end justify-between border-t border-[#f7f3e8]/15 pt-7">
            <div>
              <p className="font-serif text-2xl tracking-[0.18em]">
                {finalCta?.brand || "RAAHII"}
              </p>
              <p className="mt-1 text-[7px] uppercase tracking-[0.35em] text-[#d8b887]">
                {finalCta?.tagline || "Hospitality Growth Partner"}
              </p>
            </div>
            <p className="hidden text-right font-serif text-lg italic text-[#f7f3e8]/55 sm:block">
              {(finalCta?.bottomMessage || "Better Stays.\nBrighter Tomorrows.")
                .split("\n")
                .map((line: string, index: number, lines: string[]) => (
                  <span key={index}>
                    {line}
                    {index < lines.length - 1 && <br />}
                  </span>
                ))}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
/* ============================================================
   REUSABLE COMPONENTS
\\============================================================ */
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
