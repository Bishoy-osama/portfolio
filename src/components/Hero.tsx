import React from "react";
import { ArrowUpRight, ArrowRight, ShieldAlert, ExternalLink, ShieldCheck } from "lucide-react";
import { portfolioContent } from "@/data/content";

export default function Hero() {
  const { hero } = portfolioContent;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden border-b border-[#1E293B]/40">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[320px] bg-[#2DD4BF]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Subtext, Actions, Proof Chips */}
          <div className="lg:col-span-7">
            {/* Small mono label above headline */}
            <div className="inline-block mb-3.5">
              <span className="text-xs font-mono font-medium tracking-wider text-[#2DD4BF] bg-[#2DD4BF]/10 px-3 py-1 rounded-full border border-[#2DD4BF]/20">
                {hero.label}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.15rem] font-bold tracking-tight text-[#F1F5F9] leading-[1.15] mb-4">
              {hero.headline}
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-xl mb-6">
              {hero.subtext}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#0B0F14] bg-[#2DD4BF] hover:bg-[#2DD4BF]/90 rounded-md transition-all shadow-md shadow-[#2DD4BF]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              >
                {hero.primaryCta.label}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#F1F5F9] bg-[#111720] hover:bg-[#1E293B] border border-[#1E293B] hover:border-[#334155] rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              >
                {hero.secondaryCta.label}
                <ArrowUpRight className="w-4 h-4 text-[#CBD5E1]" />
              </a>
            </div>

            {/* Proof Chips Row - shortened & single row on desktop */}
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-2">
              {hero.proofChips.map((chip, idx) => {
                if (chip.href) {
                  return (
                    <a
                      key={idx}
                      href={chip.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#111720] border border-[#1E293B] text-xs font-mono text-[#F1F5F9] hover:border-[#2DD4BF]/50 hover:text-[#2DD4BF] transition-colors group shrink-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                      <span>{chip.text}</span>
                      <ExternalLink className="w-3 h-3 text-[#CBD5E1] group-hover:text-[#2DD4BF]" />
                    </a>
                  );
                }

                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#111720]/80 border border-[#1E293B] text-xs font-mono text-[#CBD5E1] whitespace-nowrap"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]/60" />
                    <span>{chip.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Decorative Minimal "Finding Card" Mockup (Desktop) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#111720] border border-[#1E293B] rounded-xl p-6 shadow-2xl shadow-black/40 relative">
              {/* Card Header with Top Tag */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#1E293B]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-[#CBD5E1] ml-2">
                    security-finding.json
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#2DD4BF] bg-[#2DD4BF]/10 px-2 py-0.5 rounded border border-[#2DD4BF]/20">
                  {hero.exampleFinding.tag}
                </span>
              </div>

              {/* Title & Badge */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-orange-400 shrink-0" />
                  <h3 className="text-base font-semibold text-[#F1F5F9] tracking-tight">
                    {hero.exampleFinding.title}
                  </h3>
                </div>
                <span className="text-[11px] font-mono font-medium uppercase px-2.5 py-0.5 rounded-full bg-orange-400/10 text-orange-400 border border-orange-400/30 whitespace-nowrap">
                  {hero.exampleFinding.severity}
                </span>
              </div>

              {/* One-line Impact explanation */}
              <div className="bg-[#0B0F14] border border-[#1E293B] rounded-lg p-3.5 mb-3.5">
                <p className="text-xs sm:text-sm text-[#F1F5F9] leading-relaxed">
                  &ldquo;{hero.exampleFinding.description}&rdquo;
                </p>
              </div>

              {/* Explicit Example Finding Notice with high-contrast text */}
              <div className="flex items-center justify-between pt-2 text-[11px] font-mono text-[#CBD5E1] border-t border-[#1E293B]/60">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2DD4BF]" />
                  <span>{hero.exampleFinding.notice}</span>
                </span>
                <span className="text-[11px] text-[#CBD5E1] font-semibold">CVSS 8.2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
