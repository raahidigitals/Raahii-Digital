import Link from "next/link";

type FloatingCTAProps = {
  settings?: {
    enabled?: boolean;
    label?: string;
    url?: string;
    mobileLabel?: string;
  } | null;
};

export default function FloatingCTA({
  settings,
}: FloatingCTAProps) {
  // If Sanity says disabled, don't render anything.
  if (!settings || settings.enabled === false) {
  return null;
}

  const label =
    settings?.label || "Free Consultation";

  const mobileLabel =
    settings?.mobileLabel || label;

  const url =
    settings?.url ||
    "https://forms.gle/Rbb86sVxxU2fuetC7";

  const isExternal =
    url.startsWith("http://") ||
    url.startsWith("https://");

  const content = (
    <>
      {/* STATUS DOT */}
      <span className="relative flex h-2 w-2 shrink-0 items-center justify-center">
        <span className="absolute h-2 w-2 animate-ping rounded-full bg-[#d8b887]/50" />
        <span className="relative h-1.5 w-1.5 rounded-full bg-[#d8b887]" />
      </span>

      {/* DESKTOP LABEL */}
      <span className="hidden whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.22em] text-[#f7f3e8] sm:inline">
        {label}
      </span>

      {/* MOBILE LABEL */}
      <span className="whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.18em] text-[#f7f3e8] sm:hidden">
        {mobileLabel}
      </span>

      {/* ARROW */}
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f3dfb5] text-sm text-[#17352d] transition-transform duration-500 group-hover:translate-x-0.5">
        →
      </span>
    </>
  );

  return (
    <div className="fixed bottom-5 left-5 z-[60] md:bottom-7 md:left-auto md:right-7">
      {isExternal ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="
            group flex items-center gap-3 rounded-full
            border border-[#d8b887]/40 bg-[#17352d]
            px-4 py-3 text-[#f7f3e8]
            shadow-[0_10px_35px_rgba(0,0,0,0.22)]
            backdrop-blur-xl transition-all duration-500
            hover:-translate-y-1 hover:border-[#d8b887]/80
            hover:bg-[#21463b] hover:px-5
          "
        >
          {content}
        </a>
      ) : (
        <Link
          href={url}
          aria-label={label}
          className="
            group flex items-center gap-3 rounded-full
            border border-[#d8b887]/40 bg-[#17352d]
            px-4 py-3 text-[#f7f3e8]
            shadow-[0_10px_35px_rgba(0,0,0,0.22)]
            backdrop-blur-xl transition-all duration-500
            hover:-translate-y-1 hover:border-[#d8b887]/80
            hover:bg-[#21463b] hover:px-5
          "
        >
          {content}
        </Link>
      )}
    </div>
  );
}