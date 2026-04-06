"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const cameraLinks = [
  { label: "Cameră 2 Locuri", href: "/camere/camera-2-locuri" },
  { label: "Cameră 4 Locuri", href: "/camere/camera-4-locuri" },
  { label: "Suită", href: "/camere/suita" },
];

const navLinks = [
  { label: "Preturi", href: "/preturi" },
  { label: "Tur Video", href: "/tur-video" },
  { label: "Intrebari Frecvente", href: "/intrebari-frecvente" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-black/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="/"
          className={`font-heading text-2xl tracking-widest uppercase transition-colors duration-300 ${
            scrolled ? "text-foreground" : "text-white"
          }`}
          style={{ letterSpacing: "0.2em" }}
        >
          Casa Ciobi
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-widest font-medium transition-colors duration-300 hover:opacity-70 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Dropdown Tipuri de Camere */}
          <div className="relative" ref={dropdownRef} onMouseEnter={() => { clearTimeout(closeTimer.current); setDropdownOpen(true); }} onMouseLeave={() => { closeTimer.current = setTimeout(() => setDropdownOpen(false), 1000); }}>
            <button
              className={`flex items-center gap-1 text-xs uppercase tracking-widest font-medium transition-colors duration-300 hover:opacity-70 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Tipuri de Camere
              <ChevronDown
                className={`h-3 w-3 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white shadow-lg border border-border py-2">
                {cameraLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-5 py-3 text-xs uppercase tracking-widest font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className={`text-xs uppercase tracking-widest px-6 py-3 border transition-all duration-300 font-medium ${
              scrolled
                ? "border-primary text-primary hover:bg-primary hover:text-white"
                : "border-white text-white hover:bg-white hover:text-foreground"
            }`}
          >
            Rezerva Acum
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-border shadow-lg">
          <nav className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-xs uppercase tracking-widest font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile dropdown */}
            <div>
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="flex items-center gap-1 text-xs uppercase tracking-widest font-medium text-foreground hover:text-primary transition-colors w-full"
              >
                Tipuri de Camere
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileDropdownOpen && (
                <div className="mt-3 flex flex-col gap-3 pl-4 border-l border-border">
                  {cameraLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => { setMenuOpen(false); setMobileDropdownOpen(false); }}
                      className="text-xs uppercase tracking-widest font-medium text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-xs uppercase tracking-widest px-6 py-3 border border-primary text-primary text-center hover:bg-primary hover:text-white transition-all"
            >
              Rezerva Acum
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
