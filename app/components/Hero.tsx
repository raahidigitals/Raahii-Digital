export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#101311] text-[#f7f3e8]"
    >
      <div className="absolute inset-0">
  {/* Desktop */}
  <div
    className="absolute inset-0 hidden bg-cover bg-center md:block"
    style={{
      backgroundImage: "url('/hero-bg.jpeg')",
    }}
  />

  {/* Mobile */}
  <div
    className="absolute inset-0 bg-cover bg-center md:hidden"
    style={{
      backgroundImage: "url('/hero-mobile.jpeg')",
    }}
  />
</div>
      
      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-6 pb-20 pt-32 md:px-10 md:pt-36 lg:px-16">
        
        <div className="max-w-2xl">

          {/* EYEBROW */}
          <p className="mb-6 text-[15px] uppercase tracking-[0.42em] text-[#ffffff]/80 sm:text-sm">
            Your Hospitality Growth Partner
          </p>


          {/* MAIN HEADING */}
          <h1 className="font-serif text-[3.7rem] font-light leading-[0.9] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[6.2rem]">
            Find the Right
            <br />
            Direction.
          </h1>

          {/* SMALL LINE */}
          <div className="mt-7 h-px w-10 bg-[#eadbc3]" />

          {/* DESCRIPTION */}
          <p className="mt-7 max-w-xl text-base leading-7 text-[#f7f3e8]/85 sm:text-lg sm:leading-8">
            We help hospitality brands find their story, connect with the
            right guests, and grow with meaning.
          </p>

          {/* CTA */}
          <a
            href="https://forms.gle/Rbb86sVxxU2fuetC7"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex h-14 items-center gap-5 rounded-full bg-[#f7f3e8] pl-7 pr-2 text-sm font-medium text-[#17352d] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <span>Book Free Consultation</span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#17352d] text-lg text-[#f7f3e8] transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
          

        </div>
      </div>

      {/* BOTTOM LEFT — JOURNEY PROBLEM */}
      <div className="absolute bottom-85 left-30 z-10 hidden md:block lg:left-170">
        <div className="flex flex-col gap-2">
          <span className="text-[12px] uppercase tracking-[0.3em] text-[#eadbc3]/75">
            Confusion
          </span>

          <span className="text-[12px] uppercase tracking-[0.3em] text-[#eadbc3]/75">
            Low Bookings
          </span>

          <span className="text-[12px] uppercase tracking-[0.3em] text-[#eadbc3]/75">
            No Clear Brand Story
          </span>

          <span className="text-[12px] uppercase tracking-[0.3em] text-[#eadbc3]/75">
            Scattered Marketing
          </span>
        </div>
      </div>

      {/* BOTTOM RIGHT MESSAGE */}
      <div className="absolute bottom-8 right-6 z-10 hidden max-w-[180px] text-right md:block lg:right-16">
        <p className="font-serif text-sm italic leading-6 text-[#f7f3e8]/75">
          A kinder tomorrow
          <br />
          through meaningful
          <br />
          travel.
        </p>

        <div className="ml-auto mt-4 h-px w-10 bg-[#eadbc3]/60" />
      </div>

    </section>
  );
}