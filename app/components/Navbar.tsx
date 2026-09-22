"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { urlFor } from "@/lib/sanityImage";

type NavItem = {
  label?: string;
  href?: string;
};

type SiteSettings = {
  brandName?: string;
  tagline?: string;
  logo?: unknown;

  navigation?: NavItem[];

  primaryCta?: {
    label?: string;
    url?: string;
    openInNewTab?: boolean;
  };
};

type NavbarProps = {
  settings?: SiteSettings | null;
};

const fallbackNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "What We Do", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

function isExternalLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function Navbar({ settings }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const brandName = settings?.brandName || "Raahii Digital";

  const navigation =
    settings?.navigation && settings.navigation.length > 0
      ? settings.navigation
      : fallbackNavigation;

  const ctaLabel =
    settings?.primaryCta?.label || "Book Free Consultation";

  const ctaUrl =
    settings?.primaryCta?.url ||
    "https://forms.gle/Rbb86sVxxU2fuetC7";

  const openInNewTab =
    settings?.primaryCta?.openInNewTab ?? true;

  const sanityLogo = settings?.logo
    ? urlFor(settings.logo).width(220).auto("format").url()
    : null;

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="px-4 py-2.5 sm:px-5 md:px-7 md:py-3">
        <div
          className="
            relative mx-auto flex h-[54px] max-w-7xl items-center justify-between
            rounded-full border border-[#17352d]/10 bg-[#f7f3e8]/80 px-3
            shadow-sm backdrop-blur-xl
            sm:px-4 md:h-[58px] md:px-4
          "
        >
          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className="
              relative z-10 flex h-10 w-[82px] shrink-0 items-center
              md:h-11 md:w-[92px]
            "
          >
            {sanityLogo ? (
              <img
                src={sanityLogo}
                alt={brandName}
                className="h-full w-full object-contain object-left"
              />
            ) : (
              <Image
                src="/Raahii-logo.PNG"
                alt={brandName}
                fill
                priority
                sizes="(max-width: 768px) 82px, 92px"
                className="object-contain object-left"
              />
            )}
          </Link>

          {/* BRAND NAME */}
          <Link
            href="/"
            onClick={closeMenu}
            className="
              absolute left-1/2 top-1/2 z-10 -translate-x-1/2
              -translate-y-1/2 font-serif text-[20px] font-medium
              tracking-[0.06em] text-[#17352d]
              transition-opacity duration-300 hover:opacity-70
              lg:left-[125px] lg:translate-x-0 lg:text-[23px]
            "
          >
            {brandName}
          </Link>

          {/* DESKTOP NAV */}
          <div className="ml-auto hidden items-center gap-5 lg:flex">
            <nav className="flex items-center gap-5 xl:gap-6">
              {navigation.map((link, index) => {
                if (!link.href || !link.label) return null;

                const key = `${link.label}-${index}`;

                if (isExternalLink(link.href)) {
                  return (
                    <a
                      key={key}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        relative text-[12px] text-[#40514a]
                        transition-colors duration-300
                        hover:text-[#a56b3a] xl:text-[13px]
                      "
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={key}
                    href={link.href}
                    className="
                      relative text-[12px] text-[#40514a]
                      transition-colors duration-300
                      hover:text-[#a56b3a] xl:text-[13px]
                    "
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            {isExternalLink(ctaUrl) ? (
              <a
                href={ctaUrl}
                target={openInNewTab ? "_blank" : undefined}
                rel={openInNewTab ? "noopener noreferrer" : undefined}
                className="
                  rounded-full bg-[#17352d] px-4 py-2.5 text-[10px]
                  uppercase tracking-[0.12em] text-[#f7f3e8]
                  transition-all duration-300 hover:-translate-y-0.5
                  hover:bg-[#24483e] xl:px-5
                "
              >
                {ctaLabel}
              </a>
            ) : (
              <Link
                href={ctaUrl}
                className="
                  rounded-full bg-[#17352d] px-4 py-2.5 text-[10px]
                  uppercase tracking-[0.12em] text-[#f7f3e8]
                  transition-all duration-300 hover:-translate-y-0.5
                  hover:bg-[#24483e] xl:px-5
                "
              >
                {ctaLabel}
              </Link>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              relative z-20 flex h-9 w-9 items-center justify-center
              rounded-full border border-[#17352d]/10 lg:hidden
            "
          >
            <div className="flex w-4 flex-col gap-1.5">
              <span
                className={`block h-px w-full bg-[#17352d] transition-transform duration-300 ${
                  menuOpen
                    ? "translate-y-[4px] rotate-45"
                    : ""
                }`}
              />

              <span
                className={`block h-px w-full bg-[#17352d] transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-px w-full bg-[#17352d] transition-transform duration-300 ${
                  menuOpen
                    ? "-translate-y-[4px] -rotate-45"
                    : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl
            border border-[#17352d]/10 bg-[#f7f3e8]/95 shadow-lg
            backdrop-blur-xl transition-all duration-500 lg:hidden
            ${
              menuOpen
                ? "max-h-[500px] opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }
          `}
        >
          <nav className="flex flex-col px-5 py-4">
            {navigation.map((link, index) => {
              if (!link.href || !link.label) return null;

              const key = `mobile-${link.label}-${index}`;

              if (isExternalLink(link.href)) {
                return (
                  <a
                    key={key}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="
                      border-b border-[#17352d]/10 py-3.5
                      text-base font-light text-[#17352d]
                      transition-colors hover:text-[#a56b3a]
                    "
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={key}
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    border-b border-[#17352d]/10 py-3.5
                    text-base font-light text-[#17352d]
                    transition-colors hover:text-[#a56b3a]
                  "
                >
                  {link.label}
                </Link>
              );
            })}

            {/* MOBILE CTA */}
            {isExternalLink(ctaUrl) ? (
              <a
                href={ctaUrl}
                target={openInNewTab ? "_blank" : undefined}
                rel={
                  openInNewTab
                    ? "noopener noreferrer"
                    : undefined
                }
                onClick={closeMenu}
                className="
                  mt-4 rounded-full bg-[#17352d] px-5 py-3
                  text-center text-xs text-[#f7f3e8]
                "
              >
                {ctaLabel}
              </a>
            ) : (
              <Link
                href={ctaUrl}
                onClick={closeMenu}
                className="
                  mt-4 rounded-full bg-[#17352d] px-5 py-3
                  text-center text-xs text-[#f7f3e8]
                "
              >
                {ctaLabel}
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}