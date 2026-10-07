import React from "react";
import { Globe, Wrench, CheckCircle2, Shield, ArrowRight } from "lucide-react";
import { portfolioContent } from "@/data/content";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export default function Services() {
  const { servicesSection } = portfolioContent;

  const cardIcons = [
    <Globe key="web" className="w-5 h-5 text-[#2DD4BF]" />,
    <Wrench key="tools" className="w-5 h-5 text-[#2DD4BF]" />,
  ];

  return (
    <section id="services" className="py-20 md:py-28 border-b border-[#1E293B]/40 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <SectionReveal className="mb-12">
          <span className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider block mb-2">
            02 // Services
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F1F5F9] mb-3">
            What I Offer
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl">
            Practical web application security testing and tailored security automation.
          </p>
        </SectionReveal>

        {/* Two Service Cards Staggered */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {servicesSection.cards.map((card, idx) => (
            <StaggerItem
              key={card.id}
              className="bg-[#111720] border border-[#1E293B] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#2DD4BF]/40 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-md bg-[#0B0F14] border border-[#1E293B] flex items-center justify-center mb-4">
                  {cardIcons[idx]}
                </div>

                <h3 className="text-lg font-semibold text-[#F1F5F9] mb-1 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#CBD5E1] mb-6">
                  {card.tagline}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-[#1E293B]">
                  {card.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                      <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* "What you receive" Strip */}
        <SectionReveal delay={0.1}>
          <div className="bg-[#111720] border border-[#1E293B] rounded-xl p-5 sm:p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="md:border-r md:border-[#1E293B] md:pr-6 shrink-0">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#2DD4BF] block font-semibold">
                  What you receive
                </span>
                <span className="text-xs text-[#CBD5E1]">Every engagement includes:</span>
              </div>

              <div className="flex flex-wrap items-center gap-y-2 text-xs text-[#F1F5F9]">
                {servicesSection.whatYouReceive.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <span className="inline-flex items-center gap-1.5 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                      <span>{item}</span>
                    </span>
                    {idx < servicesSection.whatYouReceive.length - 1 && (
                      <span className="mx-2.5 text-[#64748B] hidden sm:inline">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Authorization Note + Subtle CTA */}
        <SectionReveal delay={0.15}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 text-xs">
            <div className="flex items-center gap-2 text-[#CBD5E1]">
              <Shield className="w-4 h-4 text-[#2DD4BF] shrink-0" />
              <span>{servicesSection.authorizationNote}</span>
            </div>

            <div className="text-[#CBD5E1] font-mono text-[11px] shrink-0">
              <span>{servicesSection.subtleCta.text} </span>
              <a
                href={servicesSection.subtleCta.href}
                className="text-[#2DD4BF] hover:underline inline-flex items-center gap-1 font-semibold"
              >
                {servicesSection.subtleCta.actionText}
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
