import React from "react";
import { ArrowUp, Mail, FileText } from "lucide-react";
import { portfolioContent } from "@/data/content";

function TryHackMeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m2 7 10-5 10 5-10 5z" />
      <path d="M12 22V12" />
      <path d="m22 7-10 5-10-5" />
      <path d="m17 9.5 5 2.5-10 5-10-5 5-2.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function Footer() {
  const { personal, contact } = portfolioContent;

  return (
    <footer className="py-10 bg-[#0B0F14] border-t border-[#1E293B] text-[#94A3B8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs font-mono text-center sm:text-left">
            <span className="text-[#F1F5F9] font-medium">
              © 2026 Bishoy Osama Fawzy
            </span>
            <span className="hidden sm:inline text-[#1E293B]">·</span>
            <span>Built with Next.js & Tailwind</span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3 text-xs font-mono">
            <a
              href={contact.tryhackme}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#111720] border border-[#1E293B] hover:text-[#2DD4BF] hover:border-[#2DD4BF]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              aria-label="TryHackMe Profile (opens in new tab)"
            >
              <TryHackMeIcon className="w-4 h-4" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#111720] border border-[#1E293B] hover:text-[#2DD4BF] hover:border-[#2DD4BF]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="p-2 rounded bg-[#111720] border border-[#1E293B] hover:text-[#2DD4BF] hover:border-[#2DD4BF]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              aria-label="Send direct email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personal.socialLinks.cv}
              download="Bishoy_Osama_CV.pdf"
              className="p-2 rounded bg-[#111720] border border-[#1E293B] hover:text-[#2DD4BF] hover:border-[#2DD4BF]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              aria-label="Download Bishoy Osama CV PDF"
            >
              <FileText className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded bg-[#111720] border border-[#1E293B] hover:text-[#2DD4BF] hover:border-[#2DD4BF]/50 transition-colors ml-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
