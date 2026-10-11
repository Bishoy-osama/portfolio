"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { portfolioContent } from "@/data/content";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export default function FAQ() {
  const { faq } = portfolioContent;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="scroll-mt-20 py-20 md:py-28 border-b border-[#1E293B]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <SectionReveal className="mb-12">
          <span className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider block mb-2">
            08 // FAQ
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F1F5F9] mb-3">
            {faq.title}
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl">
            {faq.subtitle}
          </p>
        </SectionReveal>

        {/* Accordion Container */}
        <StaggerContainer className="space-y-3">
          {faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-answer-${idx}`;
            const buttonId = `faq-question-${idx}`;

            return (
              <StaggerItem key={idx}>
                <div className="bg-[#111720] border border-[#1E293B] hover:border-[#2DD4BF]/40 transition-colors rounded-xl overflow-hidden">
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#F1F5F9] flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#2DD4BF] shrink-0" aria-hidden="true" />
                      <span>{item.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#2DD4BF] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-[#1E293B]/60"
                    >
                      <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed pt-3">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
