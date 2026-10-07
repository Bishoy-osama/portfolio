import React from "react";
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  Calendar,
  CheckCircle2,
  Building,
} from "lucide-react";
import { portfolioContent } from "@/data/content";
import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";

export default function ExperienceAndTraining() {
  const { experienceAndTraining } = portfolioContent;
  const { timeline, coursesAndPrep, education, sectionHeading } = experienceAndTraining;

  return (
    <section id="experience" className="scroll-mt-20 py-20 md:py-28 border-b border-[#1E293B]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <SectionReveal>
          <div className="mb-14">
            <span className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider block mb-2">
              07 // Experience &amp; Training
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F1F5F9] mb-3">
              {sectionHeading || "Experience & Training"}
            </h2>
            <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl">
              Practical offensive security training, enterprise internships, continuous technical coursework, and engineering studies.
            </p>
          </div>
        </SectionReveal>

        {/* 1. Vertical Timeline (Newest First) */}
        <div className="mb-12">
          <SectionReveal delay={0.05}>
            <h3 className="text-xs font-mono uppercase text-[#2DD4BF] tracking-wider mb-6 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Professional &amp; Practical Experience</span>
            </h3>
          </SectionReveal>

          <div className="relative pl-6 sm:pl-8 border-l border-[#1E293B]">
            <StaggerContainer className="space-y-8">
              {timeline.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="relative group">
                    {/* Timeline Dot */}
                    <div
                      className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 ${
                        item.isCurrent
                          ? "bg-[#2DD4BF] border-[#0B0F14] shadow-sm shadow-[#2DD4BF]/50"
                          : "bg-[#111720] border-[#1E293B]"
                      }`}
                      aria-hidden="true"
                    />

                    {/* Card Container */}
                    <div className="bg-[#111720] border border-[#1E293B] hover:border-[#2DD4BF]/40 transition-colors rounded-xl p-6 sm:p-7">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h4 className="text-base sm:text-lg font-bold text-[#F1F5F9]">
                          {item.role}
                        </h4>
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded bg-[#0B0F14] border border-[#1E293B] text-[#CBD5E1] shrink-0 self-start sm:self-center">
                          <Calendar className="w-3.5 h-3.5 text-[#2DD4BF]" />
                          {item.period}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm font-mono text-[#2DD4BF] mb-4 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5" />
                        <span>{item.organization}</span>
                      </p>

                      <ul className="space-y-2">
                        {item.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* 2. Two-Column Grid: Courses & Prep (Left) + Education (Right) */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Courses & Prep */}
          <StaggerItem className="md:col-span-7">
            <div className="bg-[#111720] border border-[#1E293B] rounded-xl p-6 sm:p-7">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E293B]">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#2DD4BF]" />
                  <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-[#F1F5F9]">
                    {coursesAndPrep.label}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#CBD5E1]">
                  Structured Prep
                </span>
              </div>

              <p className="text-xs text-[#CBD5E1] mb-4">
                Comprehensive security coursework and structured self-study:
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {coursesAndPrep.items.map((course, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0B0F14] border border-[#1E293B] text-xs font-mono text-[#F1F5F9]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                    <span>{course}</span>
                  </span>
                ))}
              </div>

              {/* Courses note with high-contrast text */}
              <p className="text-[11px] font-mono text-[#CBD5E1] pt-2 border-t border-[#1E293B]/60">
                * Note: {coursesAndPrep.disclaimer}.
              </p>
            </div>
          </StaggerItem>

          {/* Education */}
          <StaggerItem className="md:col-span-5">
            <div className="bg-[#111720] border border-[#1E293B] rounded-xl p-6 sm:p-7">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E293B]">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#2DD4BF]" />
                  <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-[#F1F5F9]">
                    Education
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#CBD5E1]">
                  {education.period}
                </span>
              </div>

              <h4 className="text-base font-semibold text-[#F1F5F9] mb-1">
                {education.degree}
              </h4>
              <p className="text-xs font-mono text-[#2DD4BF] mb-4">
                {education.institution}
              </p>

              <span className="text-[11px] font-mono uppercase text-[#CBD5E1] block mb-2 font-medium">
                Relevant Coursework:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {education.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B0F14] border border-[#1E293B] text-[#CBD5E1]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
