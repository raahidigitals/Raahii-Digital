export default function CTA() {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#120e0b] text-[#f7f3e8]"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/cta-bg.jpeg')",
        }}
      />

      {/* Overall cinematic darkening */}
      <div className="absolute inset-0 bg-black/20" />

      {/* =====================================================
          LEFT DARK PANEL
          Desktop = roughly 50%
          Mobile = full width
      ===================================================== */}
      <div className="absolute inset-y-0 left-0 w-full bg-[#090806]/90 sm:w-[58%] lg:w-[52%]" />

      {/* Soft transition from dark panel to image */}
      <div className="absolute inset-y-0 left-[42%] hidden w-[25%] bg-gradient-to-r from-[#090806]/70 via-[#090806]/35 to-transparent sm:block" />

      {/* Bottom cinematic gradient */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/65 to-transparent" />

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-between px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
        {/* ===================================================
            TOP
        =================================================== */}
        <div className="flex items-start justify-between">
          {/* Left eyebrow */}
          <div className="flex items-center gap-4">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#f7f3e8]/75 sm:text-[10px]">
              Let&apos;s Build What&apos;s Next
            </span>

            <span className="h-px w-10 bg-[#d8a77a]/70 sm:w-14" />
          </div>

          {/* Right keywords */}
          <div className="hidden text-left sm:block lg:mr-2">
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#17130f]/90">
              Ideas
            </p>

            <p className="mt-2 text-[9px] uppercase tracking-[0.35em] text-[#17130f]/90">
              Content
            </p>

            <p className="mt-2 text-[9px] uppercase tracking-[0.35em] text-[#17130f]/90">
              Community
            </p>

            <p className="mt-2 text-[9px] uppercase tracking-[0.35em] text-[#17130f]/90">
              Growth
            </p>

            <div className="mt-4 h-px w-10 bg-[#17130f]/60" />
          </div>
        </div>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}
        <div className="mt-20 max-w-[760px] sm:mt-24 lg:mt-16">
          {/* Main heading */}
          <h2 className="max-w-[780px] font-serif text-[3.2rem] font-light leading-[0.92] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Ready to Grow
            <br />
            Your{" "}
            <span className="text-[#d8a77a]">
              Hospitality Brand?
            </span>
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-[650px] font-serif text-[16px] leading-7 text-[#f7f3e8]/85 sm:text-lg sm:leading-8">
            Whether you&apos;re a boutique stay, a growing hotel chain, or a
            new hospitality concept — Raahii is here to be your digital
            growth partner.
          </p>

          {/* =================================================
              BENEFITS
          ================================================= */}
          <div className="mt-10 grid max-w-[650px] grid-cols-2 border-y border-[#d9c7ad]/20 sm:grid-cols-4">
            {/* Benefit 01 */}
            <div className="flex min-h-[105px] flex-col items-center justify-center px-3 py-5 text-center sm:min-h-[115px] sm:px-4">
              <span className="mb-3 text-[27px] font-light text-[#d8a77a]">
                ↗
              </span>

              <span className="font-serif text-[14px] leading-5 text-[#f7f3e8]/90 sm:text-[15px]">
                More
                <br />
                Visibility
              </span>
            </div>

            {/* Benefit 02 */}
            <div className="flex min-h-[105px] flex-col items-center justify-center border-l border-[#d9c7ad]/20 px-3 py-5 text-center sm:min-h-[115px] sm:px-4">
              <span className="mb-3 text-[27px] font-light text-[#d8a77a]">
                ♧
              </span>

              <span className="font-serif text-[14px] leading-5 text-[#f7f3e8]/90 sm:text-[15px]">
                More
                <br />
                Guests
              </span>
            </div>

            {/* Benefit 03 */}
            <div className="flex min-h-[105px] flex-col items-center justify-center border-l border-[#d9c7ad]/20 px-3 py-5 text-center sm:min-h-[115px] sm:px-4">
              <span className="mb-3 text-[27px] font-light text-[#d8a77a]">
                ♡
              </span>

              <span className="font-serif text-[14px] leading-5 text-[#f7f3e8]/90 sm:text-[15px]">
                Stronger
                <br />
                Brand
              </span>
            </div>

            {/* Benefit 04 */}
            <div className="flex min-h-[105px] flex-col items-center justify-center border-l border-[#d9c7ad]/20 px-3 py-5 text-center sm:min-h-[115px] sm:px-4">
              <span className="mb-3 text-[27px] font-light text-[#d8a77a]">
                ▱
              </span>

              <span className="font-serif text-[14px] leading-5 text-[#f7f3e8]/90 sm:text-[15px]">
                Sustainable
                <br />
                Growth
              </span>
            </div>
          </div>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            {/* Primary */}
            <a
              href="https://wa.me/message/TKAO3SO455LAL1"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                h-14
                items-center
                justify-center
                gap-6
                rounded-full
                bg-[#e6b56e]
                px-7
                text-[11px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#17110b]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#efc37f]
                hover:shadow-2xl
                sm:min-w-[220px]
              "
            >
              <span>Let&apos;s Talk</span>

              <span className="text-xl leading-none transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Secondary */}
            <a
              href="https://forms.gle/Rbb86sVxxU2fuetC7"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                h-14
                items-center
                justify-center
                rounded-full
                border
                border-[#d9c7ad]/70
                px-7
                text-[11px]
                uppercase
                tracking-[0.22em]
                text-[#f7f3e8]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#f7f3e8]/10
                sm:min-w-[300px]
              "
            >
              Book a Free Consultation
            </a>
          </div>

          {/* =================================================
              HANDWRITTEN MESSAGE
          ================================================= */}
          <div className="mt-9">
            <p
              className="
                font-serif
                text-[20px]
                italic
                leading-[1.2]
                text-[#d8a77a]
                sm:text-[23px]
              "
            >
              Good Stays
              <br />
              Brighter Tomorrows
            </p>

            <div className="mt-3 ml-1 h-px w-20 rotate-[-5deg] bg-[#d8a77a]/80" />
          </div>
        </div>

        {/* ===================================================
            BOTTOM
        =================================================== */}
        <div className="mt-16 flex items-end justify-between">
          <div className="hidden text-[8px] uppercase tracking-[0.3em] text-[#f7f3e8]/35 sm:block">
            Hospitality Growth Partner
          </div>

          <div className="ml-auto text-right">
            <p className="text-[8px] uppercase tracking-[0.3em] text-[#f7f3e8]/35">
              Raahii Digital
            </p>

            <p className="mt-2 text-[8px] uppercase tracking-[0.3em] text-[#f7f3e8]/35">
              Travel · Experience · Belong
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}