import React from "react";
import { ShieldAlert } from "lucide-react";
import { portfolioContent } from "@/data/content";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export default function HowIWork() {
  const { howIWork } = portfolioContent;

  return (
    <section id="process" className="py-20 md:py-28 border-b border-[#1E293B]/40 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <SectionReveal className="mb-14">
          <span className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider block mb-2">
            06 // Engagement Workflow
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F1F5F9] mb-3">
            How I Work
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl">
            A structured, non-disruptive 5-step approach from authorization to executive walkthrough.
          </p>
        </SectionReveal>

        {/* 5-Step Timeline */}
        <div className="relative mb-12">
          <div
            className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-[#1E293B]"
            aria-hidden="true"
          />

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-3 relative z-10">
            {howIWork.steps.map((step, idx) => (
              <StaggerItem
                key={step.number}
                className="bg-[#111720] border border-[#1E293B] hover:border-[#2DD4BF]/40 transition-colors rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#0B0F14] border border-[#2DD4BF]/40 text-[#2DD4BF] font-mono text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-mono text-[#CBD5E1] uppercase">
                      Step {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#F1F5F9] mb-2 font-mono">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                    {step.sentence}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Below the timeline: Authorized testing only rule */}
        <SectionReveal delay={0.15}>
          <div className="bg-[#111720]/80 border border-[#1E293B] rounded-xl p-4 sm:p-5 flex items-center justify-center gap-2.5 text-center">
            <ShieldAlert className="w-4 h-4 text-[#2DD4BF] shrink-0" />
            <p className="text-xs sm:text-sm font-mono font-medium text-[#F1F5F9] tracking-wide">
              {howIWork.ruleLine}
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
