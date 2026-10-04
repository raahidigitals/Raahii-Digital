import { urlFor } from "@/lib/sanityImage";

type SanityImage = {
  asset?: {
    _ref?: string;
    _type?: string;
  };
};

type PhilosophyProps = {
  philosophy?: {
    image?: SanityImage;

    eyebrow?: string;

    heading?: string;

    paragraphOne?: string;

    paragraphTwo?: string;

    signatureLineOne?: string;

    signatureLineTwo?: string;

    compass?: {
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
    };
  } | null;
};

export default function Philosophy({
  philosophy,
}: PhilosophyProps) {
  // =====================================================
  // CONTENT
  // =====================================================

  const eyebrow =
    philosophy?.eyebrow ||
    "Our Philosophy";

  const heading =
    philosophy?.heading ||
    "Travel. Experience. Belong.";

  const paragraphOne =
    philosophy?.paragraphOne ||
    "We believe travel is more than a destination — it’s a deeper connection. A chance to slow down, meet kinder people, experience richer stories, and feel a sense of belonging, wherever you go.";

  const paragraphTwo =
    philosophy?.paragraphTwo ||
    "At Raahii, we help hospitality brands share their true spirit, connect with the right guests, and grow with meaning — because a kinder tomorrow begins with more meaningful travel today.";

  const signatureLineOne =
    philosophy?.signatureLineOne ||
    "A Kinder";

  const signatureLineTwo =
    philosophy?.signatureLineTwo ||
    "Tomorrow";

  // =====================================================
  // COMPASS
  // =====================================================

  const compassTop =
    philosophy?.compass?.top || "Travel";

  const compassBottom =
    philosophy?.compass?.bottom || "Belong";

  const compassLeft =
    philosophy?.compass?.left || "Experience";

  const compassRight =
    philosophy?.compass?.right || "Journey";

  // =====================================================
  // IMAGE
  // =====================================================

  const philosophyImage = philosophy?.image
    ? urlFor(philosophy.image)
        .width(1800)
        .quality(90)
        .auto("format")
        .url()
    : "/philosophy-bg.jpeg";

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <section
      id="philosophy"
      className="
        relative overflow-hidden
        bg-[#11100e] text-[#f5eee2]
      "
    >
      <div className="grid min-h-[900px] lg:grid-cols-2">

        {/* =================================================
            LEFT — TRAVEL IMAGE
        ================================================= */}

        <div
          className="
            relative min-h-[650px]
            overflow-hidden
            lg:min-h-[900px]
          "
        >

          <div
            className="
              absolute inset-0
              bg-cover bg-center
            "
            style={{
              backgroundImage: `url("${philosophyImage}")`,
            }}
          />

          {/* IMAGE OVERLAY */}

          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/45
              via-transparent
              to-black/10
            "
          />

          {/* SMALL LANTERN DETAIL */}

          <div
            className="
              absolute bottom-8 left-8 z-10
              h-12 w-8 rounded-full
              border border-[#d8b887]/30
              bg-black/20
              blur-[0.2px]
              md:left-12
            "
          />

        </div>


        {/* =================================================
            RIGHT — PHILOSOPHY
        ================================================= */}

        <div
          className="
            relative flex items-center
            bg-[#11100e]
            px-8 py-20
            md:px-14 md:py-24
            lg:px-20 xl:px-24
          "
        >

          {/* SUBTLE TEXTURE */}

          <div
            className="
              pointer-events-none
              absolute inset-0
              opacity-[0.035]
            "
          >
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, #ffffff 0.7px, transparent 0.7px)",
                backgroundSize: "7px 7px",
              }}
            />
          </div>


          <div
            className="
              relative z-10
              w-full max-w-2xl
            "
          >

            {/* EYEBROW */}

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.45em]
                text-[#d8b887]/80
                md:text-xs
              "
            >
              {eyebrow}
            </p>


            {/* HEADING */}

            <h2
              className="
                mt-7
                font-serif
                text-4xl
                font-light
                leading-[1.05]
                tracking-[-0.025em]
                text-[#f5eee2]
                sm:text-5xl
                md:text-6xl
              "
            >
              {heading}
            </h2>


            {/* GOLD LINE */}

            <div
              className="
                mt-8
                h-px w-12
                bg-[#d8b887]
              "
            />


            {/* PARAGRAPH 1 */}

            <p
              className="
                mt-8 max-w-xl
                whitespace-pre-line
                font-serif
                text-lg font-light
                leading-8
                text-[#f5eee2]/80
                md:text-xl md:leading-9
              "
            >
              {paragraphOne}
            </p>


            {/* PARAGRAPH 2 */}

            <p
              className="
                mt-8 max-w-xl
                whitespace-pre-line
                font-serif
                text-lg font-light
                leading-8
                text-[#f5eee2]/80
                md:text-xl md:leading-9
              "
            >
              {paragraphTwo}
            </p>


            {/* =================================================
                BOTTOM PHILOSOPHY MARK
            ================================================= */}

            <div
              className="
                mt-16
                flex items-end
                justify-between
                gap-8
                md:mt-20
              "
            >

              {/* HANDWRITTEN MESSAGE */}

              <div className="relative">

                <p
                  className="
                    font-serif
                    text-4xl
                    font-light
                    italic
                    leading-[0.95]
                    text-[#a87958]
                    md:text-5xl
                  "
                  style={{
                    fontFamily: "cursive",
                  }}
                >
                  {signatureLineOne}
                  <br />
                  {signatureLineTwo}
                </p>

                <div
                  className="
                    ml-12 mt-3
                    h-px w-32
                    rotate-[-8deg]
                    bg-[#a87958]/70
                    md:w-40
                  "
                />

              </div>


              {/* =================================================
                  COMPASS
              ================================================= */}

              <div
                className="
                  relative hidden
                  h-32 w-32
                  shrink-0 rounded-full
                  border border-[#a87958]/35
                  md:block
                "
              >

                <div
                  className="
                    absolute inset-3
                    rounded-full
                    border border-[#a87958]/20
                  "
                />

                {/* COMPASS NEEDLE */}

                <div
                  className="
                    absolute inset-0
                    flex items-center
                    justify-center
                  "
                >

                  <div
                    className="
                      h-0 w-0
                      border-l-[6px]
                      border-r-[6px]
                      border-b-[28px]
                      border-l-transparent
                      border-r-transparent
                      border-b-[#a87958]/60
                    "
                  />

                </div>


                {/* TOP */}

                <div
                  className="
                    absolute left-1/2 top-3
                    -translate-x-1/2
                    text-[7px]
                    uppercase
                    tracking-[0.3em]
                    text-[#a87958]/70
                  "
                >
                  {compassTop}
                </div>


                {/* BOTTOM */}

                <div
                  className="
                    absolute bottom-3 left-1/2
                    -translate-x-1/2
                    text-[7px]
                    uppercase
                    tracking-[0.3em]
                    text-[#a87958]/70
                  "
                >
                  {compassBottom}
                </div>


                {/* LEFT */}

                <div
                  className="
                    absolute left-2 top-1/2
                    -translate-y-1/2
                    -rotate-90
                    text-[7px]
                    uppercase
                    tracking-[0.3em]
                    text-[#a87958]/70
                  "
                >
                  {compassLeft}
                </div>


                {/* RIGHT */}

                <div
                  className="
                    absolute right-2 top-1/2
                    -translate-y-1/2
                    rotate-90
                    text-[7px]
                    uppercase
                    tracking-[0.3em]
                    text-[#a87958]/70
                  "
                >
                  {compassRight}
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}