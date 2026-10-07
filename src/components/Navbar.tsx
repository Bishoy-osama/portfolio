"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { portfolioContent } from "@/data/content";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { nav, personal } = portfolioContent;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0F14]/85 backdrop-blur-md border-b border-[#1E293B]/70 py-3 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Left: Wordmark with teal dot */}
        <Link
          href="#"
          className="flex items-center gap-2 group text-base font-semibold tracking-tight text-[#F1F5F9] hover:text-white transition-colors"
          aria-label="Bishoy Osama Homepage"
        >
          <span className="text-lg font-bold tracking-tight">{personal.name}</span>
          <span
            className="w-2 h-2 rounded-full bg-[#2DD4BF] group-hover:scale-125 transition-transform"
            aria-hidden="true"
          />
        </Link>

        {/* Center / Desktop Links */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#94A3B8]"
          aria-label="Main Navigation"
        >
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#F1F5F9] transition-colors focus-visible:outline-none focus-visible:text-[#2DD4BF]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={nav.ctaSecondary.href}
            download="Bishoy_Osama_CV.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-medium text-[#94A3B8] hover:text-[#F1F5F9] bg-[#111720] hover:bg-[#1E293B] border border-[#1E293B] hover:border-[#334155] rounded-md transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2DD4BF]"
          >
            <FileText className="w-3.5 h-3.5 text-[#2DD4BF]" />
            {nav.ctaSecondary.label}
          </a>
          <a
            href={nav.ctaPrimary.href}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#0B0F14] bg-[#2DD4BF] hover:bg-[#2DD4BF]/90 rounded-md font-semibold transition-all shadow-sm hover:shadow-[#2DD4BF]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]"
          >
            {nav.ctaPrimary.label}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#94A3B8] hover:text-[#F1F5F9] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2DD4BF] rounded-md"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F14]/95 backdrop-blur-xl border-b border-[#1E293B] px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#94A3B8]">
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="py-1 hover:text-[#2DD4BF] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-[#1E293B] flex flex-col gap-3">
              <a
                href={nav.ctaSecondary.href}
                download="Bishoy_Osama_CV.pdf"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono text-[#F1F5F9] bg-[#111720] border border-[#1E293B] rounded-md"
              >
                <FileText className="w-4 h-4 text-[#2DD4BF]" />
                {nav.ctaSecondary.label}
              </a>
              <a
                href={nav.ctaPrimary.href}
                onClick={closeMenu}
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-[#0B0F14] bg-[#2DD4BF] rounded-md"
              >
                {nav.ctaPrimary.label}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
