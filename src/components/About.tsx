import React from "react";
import { MapPin, Languages, GraduationCap, Target } from "lucide-react";
import { portfolioContent } from "@/data/content";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import ProfilePhoto from "@/components/ProfilePhoto";

export default function About() {
  const { personal } = portfolioContent;
  const { quickFacts } = personal;

  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#1E293B]/40 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Tag */}
        <SectionReveal className="mb-10">
          <span className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider block mb-2">
            01 // About Me
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F1F5F9]">
            Background & Foundation
          </h2>
        </SectionReveal>

        {/* Mobile-only centered photo above About text */}
        <SectionReveal className="lg:hidden flex justify-center mb-8">
          <ProfilePhoto size={200} variant="square" />
        </SectionReveal>

        {/* Two-Column Layout */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Short Text */}
          <StaggerItem className="lg:col-span-7 space-y-5 text-[#CBD5E1] leading-relaxed text-sm sm:text-base">
            {personal.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-[#CBD5E1]">
                {paragraph}
              </p>
            ))}
          </StaggerItem>

          {/* Right Column: Quick Facts Card with Photo at top on desktop */}
          <StaggerItem className="lg:col-span-5 space-y-6">
            {/* Desktop photo at top of Quick Facts column */}
            <div className="hidden lg:flex justify-center">
              <ProfilePhoto size={200} variant="square" />
            </div>

            <div className="bg-[#111720] border border-[#1E293B] rounded-xl p-6 shadow-xl relative">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#1E293B]">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF] font-semibold">
                  Quick Facts
                </h3>
                <span className="w-2 h-2 rounded-full bg-[#2DD4BF]" />
              </div>

              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#0B0F14] border border-[#1E293B] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#2DD4BF]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#CBD5E1] block uppercase">
                      Location
                    </span>
                    <p className="text-sm font-medium text-[#F1F5F9]">
                      {quickFacts.location}
                    </p>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#0B0F14] border border-[#1E293B] flex items-center justify-center shrink-0">
                    <Languages className="w-4 h-4 text-[#2DD4BF]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#CBD5E1] block uppercase">
                      Languages
                    </span>
                    <p className="text-sm font-medium text-[#F1F5F9]">
                      {quickFacts.languages}
                    </p>
                  </div>
                </div>

                {/* Studying */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#0B0F14] border border-[#1E293B] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4 text-[#2DD4BF]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#CBD5E1] block uppercase">
                      Studying
                    </span>
                    <p className="text-sm font-medium text-[#F1F5F9] leading-snug">
                      {quickFacts.studying}
                    </p>
                  </div>
                </div>

                {/* Focus */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#0B0F14] border border-[#1E293B] flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4 text-[#2DD4BF]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#CBD5E1] block uppercase">
                      Focus
                    </span>
                    <p className="text-sm font-medium text-[#F1F5F9]">
                      {quickFacts.focus}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
