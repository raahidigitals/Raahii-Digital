"use client";

type Service = {
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  {
    title: "Performance Marketing",
    description:
      "Data-driven campaigns that bring the right guests to your doorstep and maximise direct bookings.",
    icon: "↗",
  },
  {
    title: "Social Media Management",
    description:
      "Consistent, engaging content that builds community, inspires wanderlust and drives bookings.",
    icon: "◎",
  },
  {
    title: "GMB Optimisation",
    description:
      "Be the first choice in local search and maps. Increased visibility, more calls, more bookings.",
    icon: "⌖",
  },
  {
    title: "Professional Videography & Photography",
    description:
      "Visual stories that inspire, connect and convert. Because every property has a story worth telling.",
    icon: "▣",
  },
  {
    title: "Website Development",
    description:
      "Beautiful, high-performing websites designed specifically for hospitality brands.",
    icon: "□",
  },
  {
    title: "Website SEO",
    description:
      "Get found by the right travellers and stay ahead of the competition.",
    icon: "⌕",
  },
  {
    title: "Branding Strategy",
    description:
      "A distinct identity that reflects your soul, builds trust and sets you apart.",
    icon: "✦",
  },
  {
    title: "OTA Strategy",
    description:
      "Smarter listings, better visibility and higher occupancy across platforms.",
    icon: "≋",
  },
  {
    title: "Marketing Consultant & Guidances",
    description:
      "Personalised advisory to help you make the right decisions — from marketing to operations — for sustainable growth.",
    icon: "♧",
  },
  {
    title: "Raahii Companion",
    description:
      "A one-stop solution for hospitality marketing. Ongoing support, strategy, execution and a dedicated partner in your growth journey.",
    icon: "✧",
  },
];

export default function Services() {
  return (
    <section
      id="work"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#10110f]
        px-5
        py-16
        text-[#f5eee2]
        sm:px-6
        md:px-8
        md:py-24
        lg:px-10
        lg:py-28
      "
    >
      <div className="mx-auto w-full max-w-[1500px]">

        {/* =====================================================
            INTRO + HERO IMAGE
        ====================================================== */}

        <div
          className="
            grid
            w-full
            gap-6
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-7
          "
        >

          {/* LEFT INTRO */}

          <div
            className="
              flex
              min-h-[360px]
              flex-col
              justify-center
              px-1
              py-8
              sm:px-2
              md:min-h-[420px]
              md:px-6
              lg:min-h-[430px]
              lg:px-8
            "
          >

            {/* EYEBROW */}

            <div className="mb-6 flex items-center gap-4">

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.45em]
                  text-[#d8b887]
                  md:text-[10px]
                "
              >
                Our Services
              </span>

              <span className="h-px w-10 bg-[#d8b887]/70" />

            </div>


            {/* HEADING */}

            <h2
              className="
                max-w-2xl
                font-serif
                text-[42px]
                font-light
                leading-[0.94]
                tracking-[-0.035em]
                sm:text-5xl
                md:text-6xl
                lg:text-[64px]
              "
            >
              Complete
              <br />
              Hospitality Growth.
              <br />

              <span className="text-[#b6815e]">
                Under One Roof.
              </span>
            </h2>


            {/* DESCRIPTION */}

            <p
              className="
                mt-7
                max-w-xl
                font-serif
                text-[14px]
                leading-6
                text-[#f5eee2]/70
                sm:text-[15px]
                md:text-base
                md:leading-7
              "
            >
              Strategy, creativity, technology and hands-on guidance —
              everything your hospitality brand needs to be discovered,
              chosen and remembered.
            </p>

          </div>


          {/* RIGHT HERO IMAGE */}

          <div
            className="
              relative
              min-h-[330px]
              w-full
              overflow-hidden
              rounded-[24px]
              sm:min-h-[380px]
              md:min-h-[430px]
              lg:rounded-[26px]
            "
          >

            <div
              className="
                absolute
                inset-0
                bg-cover
                bg-center
                transition-transform
                duration-700
                hover:scale-[1.02]
              "
              style={{
                backgroundImage: "url('/services-hero.jpeg')",
              }}
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/50
                via-transparent
                to-black/10
              "
            />


            {/* IMAGE TEXT */}

            <div
              className="
                absolute
                right-5
                top-6
                max-w-[150px]
                text-right
                sm:right-7
                sm:top-7
                md:right-9
                md:top-9
                md:max-w-[180px]
              "
            >

              <p
                className="
                  font-serif
                  text-base
                  italic
                  leading-tight
                  text-[#f5eee2]/85
                  sm:text-lg
                  md:text-xl
                "
              >
                More
                <br />
                Than Marketing.
              </p>

              <p
                className="
                  mt-1
                  font-serif
                  text-base
                  italic
                  leading-tight
                  text-[#b6815e]
                  sm:text-lg
                  md:text-xl
                "
              >
                A Kinder Tomorrow.
              </p>

              <div className="ml-auto mt-3 h-px w-10 bg-[#d8b887]" />

            </div>

          </div>

        </div>


        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <div
          className="
            mt-6
            grid
            w-full
            grid-cols-1
            gap-3
            sm:grid-cols-2
            sm:gap-4
            lg:grid-cols-4
          "
        >

          {services.map((service, index) => (

            <article
              key={service.title}
              className="
                group
                relative
                flex
                min-h-[245px]
                w-full
                flex-col
                overflow-hidden
                rounded-[20px]
                border
                border-[#d8b887]/25
                bg-[#11120f]
                px-5
                py-5
                opacity-100
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#d8b887]/60
                hover:bg-[#151611]
                sm:min-h-[250px]
                lg:min-h-[255px]
              "
            >

              {/* TOP ROW */}

              <div className="flex items-start justify-between">

                {/* ICON */}

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#d8b887]/50
                    bg-[#10110f]
                    text-lg
                    text-[#d8b887]
                    transition-transform
                    duration-500
                    group-hover:rotate-12
                  "
                >
                  {service.icon}
                </div>


                {/* NUMBER */}

                <span
                  className="
                    font-serif
                    text-xs
                    text-[#f5eee2]/25
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>


              {/* TITLE */}

              <h3
                className="
                  mt-6
                  max-w-[280px]
                  font-serif
                  text-[20px]
                  font-light
                  leading-[1.08]
                  text-[#f5eee2]
                  sm:text-[21px]
                "
              >
                {service.title}
              </h3>


              {/* DESCRIPTION */}

              <p
                className="
                  mt-3
                  max-w-[290px]
                  text-[11px]
                  leading-[1.55]
                  text-[#f5eee2]/55
                  sm:text-[12px]
                  sm:leading-5
                "
              >
                {service.description}
              </p>


              {/* EXPLORE */}

              <div className="mt-auto pt-5">

                <a
                  href="#contact"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    text-[8px]
                    uppercase
                    tracking-[0.35em]
                    text-[#d8b887]
                    transition-all
                    duration-300
                    group-hover:gap-5
                  "
                >
                  Explore

                  <span className="text-sm tracking-normal">
                    →
                  </span>

                </a>

              </div>

            </article>

          ))}

        </div>


        {/* =====================================================
            BOTTOM SECTION
        ====================================================== */}

       
      </div>
    </section>
  );
}