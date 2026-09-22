import Link from "next/link";

type FooterProps = {
  settings?: {
    brandName?: string;
    tagline?: string;

    navigation?: {
      label?: string;
      href?: string;
    }[];

    primaryCta?: {
      label?: string;
      url?: string;
      openInNewTab?: boolean;
    };

    contact?: {
      hotelEmail?: string;
      guestEmail?: string;
      whatsapp?: string;
      instagram?: string;
      linkedin?: string;
      youtube?: string;
    };

    footer?: {
      statement?: string;
      location?: string;
      copyright?: string;
    };
  } | null;
};

export default function Footer({ settings }: FooterProps) {
  const brandName = settings?.brandName || "Raahii Digital";

  const tagline =
    settings?.tagline || "Hospitality Growth Partner";

  const footerStatement =
    settings?.footer?.statement ||
    "Meaningful travel builds a kinder, more connected world.";

  const footerLocation =
    settings?.footer?.location ||
    "Udaipur · Rajasthan · India";

  const copyright =
    settings?.footer?.copyright ||
    "Raahii Digital. All rights reserved.";

  const instagram =
    settings?.contact?.instagram || "#";

  const linkedin =
    settings?.contact?.linkedin || "#";

  const youtube =
    settings?.contact?.youtube || "#";

  const hotelEmail =
    settings?.contact?.hotelEmail || "";

  const guestEmail =
    settings?.contact?.guestEmail || "";

  const whatsapp =
    settings?.contact?.whatsapp || "";

  const primaryCtaUrl =
    settings?.primaryCta?.url ||
    "https://forms.gle/Rbb86sVxxU2fuetC7";

  /*
   * These remain hardcoded for now because
   * Site Settings schema doesn't have dedicated
   * Explore / Legal link fields yet.
   */
  const exploreLinks = [
    { label: "Philosophy", href: "/#philosophy" },
    { label: "Journey", href: "/#journey" },
    { label: "What We Do", href: "/services" },
    { label: "About", href: "/about" },
  ];

  const connectLinks = [
    {
      label: "Start a Journey",
      href: primaryCtaUrl,
    },
    {
      label: "Instagram",
      href: instagram,
    },
    {
      label: "LinkedIn",
      href: linkedin,
    },
  ];

  const isExternal = (href: string) =>
    href.startsWith("http://") ||
    href.startsWith("https://");

  return (
    <footer className="relative overflow-hidden bg-[#101311] text-[#f7f3e8]">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/footer-bg.jpeg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#080b09]/80" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">

        {/* TOP CONTENT */}
        <div className="grid gap-14 lg:grid-cols-[1.5fr_0.65fr_0.65fr_1.2fr]">

          {/* BRAND */}
          <div>

            <h2 className="font-serif text-6xl font-light tracking-tight md:text-7xl lg:text-8xl">
              {brandName}
            </h2>

            <p className="mt-5 text-[11px] uppercase tracking-[0.35em] text-[#f7f3e8]/65">
              {tagline}
            </p>

            {/* SMALL LINE */}
            <div className="mt-8 h-px w-11 bg-[#d8b887]" />

            {/* STATEMENT */}
            <h3 className="mt-7 max-w-xl font-serif text-2xl font-light leading-tight md:text-3xl lg:text-[32px]">
              {footerStatement}
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-lg text-sm leading-7 text-[#f7f3e8]/70 md:text-base">
              We help hospitality brands find their story,
              connect with the right guests, and grow with meaning.
            </p>

            {/* LOCATION */}
            <p className="mt-6 text-[10px] uppercase tracking-[0.25em] text-[#d8b887]/70">
              {footerLocation}
            </p>

          </div>


          {/* EXPLORE */}
          <div>

            <p className="text-[11px] uppercase tracking-[0.3em] text-[#f7f3e8]/50">
              Explore
            </p>

            <div className="mt-7 flex flex-col gap-5 text-sm">

              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors duration-300 hover:text-[#d8b887]"
                >
                  {link.label}
                </Link>
              ))}

            </div>

          </div>


          {/* CONNECT */}
          <div className="lg:border-l lg:border-[#f7f3e8]/15 lg:pl-10">

            <p className="text-[11px] uppercase tracking-[0.3em] text-[#f7f3e8]/50">
              Connect
            </p>

            <div className="mt-7 flex flex-col gap-5 text-sm">

              {connectLinks.map((link) => {
                const external =
                  isExternal(link.href);

                if (external) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:text-[#d8b887]"
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition-colors duration-300 hover:text-[#d8b887]"
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* EMAIL */}
              {hotelEmail && (
                <a
                  href={`mailto:${hotelEmail}`}
                  className="break-all transition-colors duration-300 hover:text-[#d8b887]"
                >
                  {hotelEmail}
                </a>
              )}

              {/* WHATSAPP */}
              {whatsapp && (
                <a
                  href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-[#d8b887]"
                >
                  WhatsApp
                </a>
              )}

            </div>

          </div>


          {/* NEWSLETTER */}
          <div className="lg:border-l lg:border-[#f7f3e8]/15 lg:pl-10">

            <p className="text-[11px] uppercase tracking-[0.3em] text-[#f7f3e8]/50">
              Stay in the Journey
            </p>

            <p className="mt-6 max-w-sm font-serif text-xl leading-relaxed text-[#f7f3e8]/90">
              Thoughts, stories and ideas for a more meaningful tomorrow.
            </p>

            {/* EMAIL */}
            <div className="mt-7 flex h-14 items-center rounded-full border border-[#f7f3e8]/20 bg-[#f7f3e8]/5 p-1">

              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent px-5 text-sm text-[#f7f3e8] outline-none placeholder:text-[#f7f3e8]/40"
              />

              <button
                type="button"
                aria-label="Subscribe"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eadbc3] text-[#17352d] transition-transform duration-300 hover:scale-105"
              >
                <span className="text-xl">
                  →
                </span>
              </button>

            </div>

            {/* CONSENT */}
            <label className="mt-5 flex cursor-pointer items-start gap-3 text-xs leading-5 text-[#f7f3e8]/60">

              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 shrink-0 accent-[#d8b887]"
              />

              <span>
                I agree to receive updates from Raahii
              </span>

            </label>

          </div>

        </div>


        {/* DECORATIVE JOURNEY LINE */}
        <div className="relative mt-20 hidden h-32 md:block">

          {/* CURVE */}
          <svg
            viewBox="0 0 1400 120"
            preserveAspectRatio="none"
            className="absolute inset-x-0 bottom-0 h-20 w-full"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M-20 65
                 C140 65 180 92 330 82
                 C480 72 510 22 650 35
                 C790 48 820 92 980 78
                 C1130 65 1210 35 1420 52"
              stroke="rgba(216,184,135,0.38)"
              strokeWidth="1.2"
            />
          </svg>


          {/* LEFT LABELS */}
          <div className="absolute bottom-15 left-[7%] flex gap-9">

            <span className="text-[9px] uppercase tracking-[0.35em] text-[#d8b887]/70">
              People
            </span>

            <span className="text-[9px] uppercase tracking-[0.35em] text-[#d8b887]/70">
              Places
            </span>

            <span className="text-[9px] uppercase tracking-[0.35em] text-[#d8b887]/70">
              Stories
            </span>

          </div>


          {/* CENTER LABEL */}
          <p className="absolute bottom-2 left-[35%] text-[9px] uppercase tracking-[0.35em] text-[#d8b887]/70">
            A Brighter Tomorrow
          </p>


          {/* RIGHT MESSAGE */}
          <div className="absolute right-0 top-0 flex items-center gap-5">

            <div className="text-right">

              <p className="font-serif text-lg italic leading-tight text-[#f7f3e8]/80">
                Better Hospitality.
              </p>

              <p className="font-serif text-lg italic leading-tight text-[#f7f3e8]/80">
                A Kinder Tomorrow.
              </p>

            </div>

            <div className="h-px w-12 bg-[#d8b887]/60" />

          </div>

        </div>


        {/* DIVIDER */}
        <div className="mt-10 h-px bg-[#f7f3e8]/15 md:mt-6" />


        {/* BOTTOM */}
        <div className="flex flex-col gap-5 pt-7 text-xs text-[#f7f3e8]/45 md:flex-row md:items-center md:justify-between">

          <div>
            <p>
              © {new Date().getFullYear()} {copyright}
            </p>

            {guestEmail && (
              <a
                href={`mailto:${guestEmail}`}
                className="mt-2 inline-block transition-colors hover:text-[#f7f3e8]"
              >
                {guestEmail}
              </a>
            )}
          </div>

          <div className="flex gap-7">

            <a
              href="#"
              className="transition-colors hover:text-[#f7f3e8]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-[#f7f3e8]"
            >
              Terms
            </a>

            <a
              href="/sitemap.xml"
              className="transition-colors hover:text-[#f7f3e8]"
            >
              Sitemap
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}