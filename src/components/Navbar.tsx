"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { portfolioContent } from "@/data/content";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

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
        {/* Left: Wordmark with teal dot scrolling to top */}
        <Link
          href="#hero"
          className="flex items-center gap-2 group text-base font-semibold tracking-tight text-[#F1F5F9] hover:text-white transition-colors shrink-0"
          aria-label="Bishoy Osama Homepage - Scroll to top"
        >
          <span className="text-lg font-bold tracking-tight">{personal.name}</span>
          <span
            className="w-2 h-2 rounded-full bg-[#2DD4BF] group-hover:scale-125 transition-transform"
            aria-hidden="true"
          />
        </Link>

        {/* Center / Desktop Links */}
        <nav
          className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium text-[#94A3B8]"
          aria-label="Main Navigation"
        >
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#F1F5F9] transition-colors focus-visible:outline-none focus-visible:text-[#2DD4BF] whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Desktop CTA Buttons + GitHub icon */}
        <div className="hidden md:flex items-center gap-2.5 lg:gap-3 shrink-0">
          {personal.socialLinks.github && (
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#94A3B8] hover:text-[#2DD4BF] bg-[#111720] hover:bg-[#1E293B] border border-[#1E293B] hover:border-[#334155] rounded-md transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2DD4BF]"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          <a
            href={nav.ctaSecondary.href}
            download="Bishoy_Osama_CV.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-medium text-[#94A3B8] hover:text-[#F1F5F9] bg-[#111720] hover:bg-[#1E293B] border border-[#1E293B] hover:border-[#334155] rounded-md transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2DD4BF]"
          >
            <FileText className="w-3.5 h-3.5 text-[#2DD4BF]" />
            {nav.ctaSecondary.label}
          </a>
          <a
            href={nav.ctaPrimary.href}
            className="inline-flex items-center gap-1.5 px-3.5 lg:px-4 py-2 text-xs font-medium text-[#0B0F14] bg-[#2DD4BF] hover:bg-[#2DD4BF]/90 rounded-md font-semibold transition-all shadow-sm hover:shadow-[#2DD4BF]/20 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]"
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
