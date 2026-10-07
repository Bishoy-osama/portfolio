import React from "react";
import {
  Shield,
  Wrench,
  Terminal,
  Crosshair,
  Search,
  Radio,
  Cpu,
  Hash,
  Key,
  Flame,
  Globe,
  Network,
  Binary,
} from "lucide-react";
import { portfolioContent } from "@/data/content";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export default function SkillsAndTools() {
  const { skillsAndTools } = portfolioContent;

  const coreToolIcon = (tool: string) => {
    switch (tool) {
      case "Burp Suite":
        return <Globe className="w-4 h-4 text-[#2DD4BF]" />;
      case "Nmap":
        return <Network className="w-4 h-4 text-[#2DD4BF]" />;
      case "Metasploit":
        return <Flame className="w-4 h-4 text-orange-400" />;
      case "Wireshark":
        return <Radio className="w-4 h-4 text-[#2DD4BF]" />;
      case "GoBuster":
        return <Search className="w-4 h-4 text-[#2DD4BF]" />;
      case "Hydra":
        return <Key className="w-4 h-4 text-yellow-400" />;
      case "John the Ripper":
        return <Hash className="w-4 h-4 text-red-400" />;
      case "Netcat":
        return <Terminal className="w-4 h-4 text-[#2DD4BF]" />;
      default:
        return <Terminal className="w-4 h-4 text-[#2DD4BF]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#1E293B]/40 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <SectionReveal className="mb-12">
          <span className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider block mb-2">
            05 // Technical Competencies
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F1F5F9] mb-3">
            Skills & Security Tools
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl">
            Offensive security methodology, active testing areas, attack vectors, and hands-on tooling.
          </p>
        </SectionReveal>

        {/* Combined Two-Column Layout */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* COLUMN 1 */}
          <div className="lg:col-span-6 space-y-6">
            {/* 1. Testing Areas (Chips) */}
            <StaggerItem className="bg-[#111720] border border-[#1E293B] rounded-xl p-6">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#1E293B]">
                <Shield className="w-4 h-4 text-[#2DD4BF]" />
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-[#F1F5F9]">
                  Testing Areas
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsAndTools.testingAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0B0F14] border border-[#1E293B] text-xs font-mono text-[#F1F5F9]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                    <span>{area}</span>
                  </span>
                ))}
              </div>
            </StaggerItem>

            {/* 2. Attack Techniques */}
            <StaggerItem className="bg-[#111720] border border-[#1E293B] rounded-xl p-6">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#1E293B]">
                <Crosshair className="w-4 h-4 text-orange-400" />
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-[#F1F5F9]">
                  Attack Techniques I Test For
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {skillsAndTools.attackTechniques.map((tech, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0B0F14] border border-[#1E293B] rounded-md p-2.5 flex items-center gap-2 text-xs font-mono text-[#CBD5E1]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400/80" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </StaggerItem>

            {/* 3. Shortened OS & Code */}
            <StaggerItem className="bg-[#111720] border border-[#1E293B] rounded-xl p-6">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#1E293B]">
                <Binary className="w-4 h-4 text-[#2DD4BF]" />
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-[#F1F5F9]">
                  Operating Systems & Code
                </h3>
              </div>
              <div className="space-y-2">
                {skillsAndTools.platformsAndCode.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0B0F14] border border-[#1E293B] rounded-md px-3 py-2 flex items-center justify-between gap-2 text-xs"
                  >
                    <span className="font-semibold text-[#F1F5F9] font-mono whitespace-nowrap">
                      {item.title}
                    </span>
                    <span className="text-[#CBD5E1] truncate font-mono text-[11px] text-right">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </div>

          {/* COLUMN 2 */}
          <div className="lg:col-span-6 space-y-6">
            {/* 1. Core Tools */}
            <StaggerItem className="bg-[#111720] border border-[#1E293B] rounded-xl p-6">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E293B]">
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#2DD4BF]" />
                  <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-[#F1F5F9]">
                    Core Tools
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#CBD5E1]">
                  Hands-On Field Tooling
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skillsAndTools.coreTools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0B0F14] border border-[#1E293B] rounded-lg p-3 flex items-center gap-2.5 hover:border-[#2DD4BF]/40 transition-colors"
                  >
                    <div className="w-7 h-7 rounded bg-[#111720] border border-[#1E293B] flex items-center justify-center shrink-0">
                      {coreToolIcon(tool)}
                    </div>
                    <span className="text-xs font-mono text-[#F1F5F9] font-medium">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </StaggerItem>

            {/* 2. Automation & Recon Stack */}
            <StaggerItem className="bg-[#111720] border border-[#1E293B] rounded-xl p-6">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E293B]">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#2DD4BF]" />
                  <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-[#F1F5F9]">
                    Automation & Recon Stack
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#2DD4BF]">
                  Pipeline Stack
                </span>
              </div>
              <p className="text-xs text-[#CBD5E1] leading-relaxed mb-4">
                Modular tool integrations powering my custom automated recon-to-scan pipeline:
              </p>
              <div className="flex flex-wrap gap-2">
                {skillsAndTools.automationReconStack.map((tool, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0B0F14] border border-[#1E293B] text-xs font-mono text-[#F1F5F9]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                    <span>{tool}</span>
                  </span>
                ))}
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
