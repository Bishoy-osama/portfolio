import React from "react";
import { FileText, Clock, ShieldCheck } from "lucide-react";
import { portfolioContent } from "@/data/content";
import { SectionReveal } from "@/components/ScrollReveal";

export default function FeaturedCaseStudy() {
  const { caseStudy } = portfolioContent;

  return (
    <section className="py-20 md:py-28 border-b border-[#1E293B]/40 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <SectionReveal className="mb-10">
          <span className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider block mb-2">
            03 // Featured Case Study
          </span>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F1F5F9]">
                {caseStudy.title}
              </h2>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#111720] border border-[#2DD4BF]/30 text-[#2DD4BF]">
                {caseStudy.tag}
              </span>
            </div>

            {/* Download Sample Report Button */}
            {caseStudy.hasSampleReportFile && (
              <a
                href={caseStudy.sampleReport.href}
                download
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-md bg-[#111720] text-[#F1F5F9] border border-[#1E293B] hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition-colors"
                aria-label={caseStudy.sampleReport.label}
              >
                <FileText className="w-3.5 h-3.5 text-[#2DD4BF]" />
                <span>{caseStudy.sampleReport.label}</span>
              </a>
            )}
          </div>
        </SectionReveal>

        {/* In-progress card with subtle reveal */}
        <SectionReveal delay={0.1}>
          <div className="bg-[#111720] border border-[#1E293B] rounded-xl p-8 sm:p-10 relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#0B0F14] border border-[#1E293B] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-[#2DD4BF]" />
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F1F5F9] tracking-tight">
                    {caseStudy.inProgressCard.title}
                  </h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/20">
                    {caseStudy.tag}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-2xl">
                  {caseStudy.inProgressCard.description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#CBD5E1]">
                  <ShieldCheck className="w-4 h-4 text-[#2DD4BF]" />
                  <span>Executive summary, CVSS scoring, and remediation steps will be documented.</span>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
