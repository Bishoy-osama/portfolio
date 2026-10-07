import React from "react";
import {
  Lock,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  FileCode2,
} from "lucide-react";
import { portfolioContent } from "@/data/content";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export default function Projects() {
  const { projects } = portfolioContent;

  const flagship = projects.find((p) => p.isFlagship);
  const otherProjects = projects.filter((p) => !p.isFlagship);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#1E293B]/40 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <SectionReveal className="mb-12">
          <span className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider block mb-2">
            04 // Selected Projects
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F1F5F9] mb-3">
            Offensive Security Work & Tooling
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl">
            Real freelance automation pipelines, cryptography utilities, and security research.
          </p>
        </SectionReveal>

        {/* FLAGSHIP PROJECT CARD */}
        {flagship && (
          <SectionReveal delay={0.08} className="mb-8">
            <div className="bg-[#111720] border border-[#1E293B] hover:border-[#2DD4BF]/50 transition-colors rounded-xl p-6 sm:p-8 relative">
              {/* Top Bar with Badge & Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-[#1E293B]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/20 font-medium">
                      {flagship.badge}
                    </span>
                    {flagship.typeTags?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B0F14] border border-[#1E293B] text-[#CBD5E1]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F1F5F9] tracking-tight">
                    {flagship.title}
                  </h3>
                </div>

                {/* Action Button */}
                {flagship.cta && (
                  <a
                    href={flagship.cta.href}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#0B0F14] bg-[#2DD4BF] hover:bg-[#2DD4BF]/90 rounded-md transition-all shrink-0 self-start sm:self-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
                  >
                    {flagship.cta.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed mb-6">
                {flagship.description}
              </p>

              {/* Key Features Bullets */}
              {flagship.features && (
                <div className="mb-6 bg-[#0B0F14] border border-[#1E293B] rounded-lg p-5">
                  <span className="text-xs font-mono uppercase text-[#2DD4BF] tracking-wider block mb-3 font-semibold">
                    Core Capabilities
                  </span>
                  <ul className="space-y-2.5">
                    {flagship.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                        <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Architecture Diagram */}
              {flagship.architecture && (
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase text-[#CBD5E1] tracking-wider block mb-3 font-medium">
                    Pipeline Architecture
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {flagship.architecture.map((arch, aIdx) => (
                      <div
                        key={aIdx}
                        className="bg-[#0B0F14] border border-[#1E293B] rounded-lg p-3.5 relative flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-mono text-[#2DD4BF] uppercase font-bold">
                              Stage 0{aIdx + 1}
                            </span>
                            {aIdx < flagship.architecture.length - 1 && (
                              <ArrowRight className="w-3.5 h-3.5 text-[#64748B] hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 bg-[#111720] rounded-full p-0.5" />
                            )}
                          </div>
                          <h4 className="text-xs font-semibold text-[#F1F5F9] mb-1">
                            {arch.stage}
                          </h4>
                          <p className="text-[11px] font-mono text-[#CBD5E1] leading-tight">
                            {arch.tools}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Confidentiality Notice */}
              <div className="p-3.5 rounded-lg bg-[#0B0F14] border border-[#1E293B] flex items-start gap-2.5 text-xs text-[#CBD5E1] mb-5">
                <Lock className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                <span>{flagship.confidentialNote}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1E293B]">
                {flagship.techTags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#0B0F14] border border-[#1E293B] text-[#CBD5E1]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>
        )}

        {/* 2-COLUMN GRID FOR PROJECT 2 & PROJECT 3 (STAGGERED) */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((proj) => {
            if (proj.isPlaceholder) {
              return (
                <StaggerItem
                  key={proj.id}
                  className="bg-[#111720]/50 border border-dashed border-[#1E293B] rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono text-[#CBD5E1] uppercase">
                        Case Study
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1E293B] text-[#CBD5E1]">
                        {proj.badge || "Coming soon"}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-[#F1F5F9] mb-2 font-mono">
                      {proj.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-6">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1E293B]/60">
                    {proj.techTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1E293B]/40 text-[#CBD5E1]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </StaggerItem>
              );
            }

            return (
              <StaggerItem
                key={proj.id}
                className="bg-[#111720] border border-[#1E293B] hover:border-[#2DD4BF]/40 transition-colors rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5">
                      {proj.typeTags?.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0F14] border border-[#1E293B] text-[#CBD5E1]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/20">
                      CLI Tool
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-[#F1F5F9] mb-2 tracking-tight">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>

                <div>
                  {proj.githubUrl && (
                    <div className="mb-4">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0B0F14] border border-[#1E293B] text-xs font-mono text-[#F1F5F9] hover:border-[#2DD4BF] transition-colors"
                      >
                        <FileCode2 className="w-3.5 h-3.5 text-[#2DD4BF]" />
                        <span>{proj.cta?.label || "View on GitHub"}</span>
                        <ExternalLink className="w-3 h-3 text-[#CBD5E1]" />
                      </a>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1E293B]">
                    {proj.techTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B0F14] border border-[#1E293B] text-[#CBD5E1]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
