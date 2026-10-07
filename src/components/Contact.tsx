"use client";

import React, { useState } from "react";
import {
  Mail,
  Shield,
  Send,
  ExternalLink,
  Check,
  Lock,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { portfolioContent } from "@/data/content";
import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";
import ProfilePhoto from "@/components/ProfilePhoto";

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

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Contact() {
  const { contact } = portfolioContent;
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    websiteUrl: "",
    worriedAbout: "",
    // Honeypot field for spam protection
    _gotcha: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Spam honeypot detection
    if (formData._gotcha) {
      return;
    }

    setFormState("loading");
    setErrorMessage("");

    try {
      if (contact.formspreeEndpoint && contact.formspreeEndpoint.trim() !== "") {
        // Post to configured Formspree endpoint
        const res = await fetch(contact.formspreeEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            websiteUrl: formData.websiteUrl,
            worriedAbout: formData.worriedAbout,
            message: formData.worriedAbout,
          }),
        });

        if (res.ok) {
          setFormState("success");
        } else {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || "Submission error. Please email directly.");
        }
      } else {
        // Fallback: simulate immediate fast send & trigger email draft
        await new Promise((r) => setTimeout(r, 600));
        const subject = encodeURIComponent(`[Security Inquiry] Free Check Request from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nWebsite URL: ${formData.websiteUrl}\n\nWhat I'm worried about:\n${formData.worriedAbout}`
        );
        window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
        setFormState("success");
      }
    } catch (err: unknown) {
      setFormState("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Could not send the message. Please write directly to the email on the right."
      );
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28 border-b border-[#1E293B]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <SectionReveal>
          <div className="mb-12">
            <span className="text-xs font-mono text-[#2DD4BF] uppercase tracking-wider block mb-2">
              08 // Contact & Free Assessment
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F1F5F9] mb-3">
              {contact.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl leading-relaxed mb-2">
              {contact.subtext}
            </p>
            {/* Free check scope line under Contact headline */}
            <p className="text-xs sm:text-sm text-[#2DD4BF] max-w-2xl font-mono leading-relaxed">
              {contact.scopeNote}
            </p>
          </div>
        </SectionReveal>

        {/* Two-Column Grid: Form (Left) vs Direct Profiles (Right) */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Simple Form */}
          <StaggerItem className="lg:col-span-7">
            <div className="bg-[#111720] border border-[#1E293B] rounded-xl p-6 sm:p-8 shadow-xl">
              {formState === "success" ? (
                <div className="p-6 rounded-md bg-[#0B0F14] border border-[#2DD4BF]/30 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF] flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-[#F1F5F9]">
                    Thanks, I&apos;ll reply within 24-48 hours
                  </h4>
                  <p className="text-xs text-[#CBD5E1] max-w-sm mx-auto">
                    Your request was received. You can also write directly anytime to{" "}
                    {/* Render email in Inter sans-serif font */}
                    <span className="text-[#2DD4BF] font-sans font-medium">{contact.email}</span>.
                  </p>
                </div>
              ) : (
                <>
                  {/* Photo header above the form */}
                  <div className="flex items-center gap-3.5 pb-5 mb-5 border-b border-[#1E293B]">
                    <ProfilePhoto size={56} variant="circle" />
                    <div>
                      <p className="text-sm font-medium text-[#F1F5F9]">
                        Send me a message and I&apos;ll reply personally.
                      </p>
                      <p className="text-xs font-mono text-[#CBD5E1]">
                        Direct assessment & inquiry line
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot Spam Protection */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={formData._gotcha}
                    onChange={(e) =>
                      setFormData({ ...formData, _gotcha: e.target.value })
                    }
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {/* Error banner if state is error */}
                  {formState === "error" && (
                    <div className="p-3.5 rounded-md bg-red-500/10 border border-red-500/30 text-xs text-red-400 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-[#CBD5E1] mb-1.5 uppercase tracking-wider"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#0B0F14] border border-[#1E293B] text-sm text-[#F1F5F9] placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#2DD4BF] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-[#CBD5E1] mb-1.5 uppercase tracking-wider"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#0B0F14] border border-[#1E293B] text-sm text-[#F1F5F9] placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#2DD4BF] transition-colors font-sans"
                    />
                  </div>

                  {/* Website URL */}
                  <div>
                    <label
                      htmlFor="websiteUrl"
                      className="block text-xs font-mono text-[#CBD5E1] mb-1.5 uppercase tracking-wider"
                    >
                      Website URL
                    </label>
                    <input
                      type="url"
                      name="websiteUrl"
                      id="websiteUrl"
                      required
                      value={formData.websiteUrl}
                      onChange={(e) =>
                        setFormData({ ...formData, websiteUrl: e.target.value })
                      }
                      placeholder="https://example.com"
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#0B0F14] border border-[#1E293B] text-sm text-[#F1F5F9] placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#2DD4BF] transition-colors font-sans"
                    />
                  </div>

                  {/* What are you worried about? */}
                  <div>
                    <label
                      htmlFor="worriedAbout"
                      className="block text-xs font-mono text-[#CBD5E1] mb-1.5 uppercase tracking-wider"
                    >
                      What are you worried about?
                    </label>
                    <textarea
                      name="worriedAbout"
                      id="worriedAbout"
                      rows={3}
                      required
                      value={formData.worriedAbout}
                      onChange={(e) =>
                        setFormData({ ...formData, worriedAbout: e.target.value })
                      }
                      placeholder="e.g. Account takeover, exposed database, recent code changes..."
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#0B0F14] border border-[#1E293B] text-sm text-[#F1F5F9] placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#2DD4BF] transition-colors resize-none font-sans"
                    />
                  </div>

                  {/* Submit Button with Loading State */}
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0B0F14] bg-[#2DD4BF] hover:bg-[#2DD4BF]/90 rounded-md transition-all shadow-md shadow-[#2DD4BF]/10 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Free Basic Security Check</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Short line under the button: I usually reply within 24-48 hours */}
                  <p className="text-center text-xs font-mono text-[#CBD5E1] pt-1">
                    {contact.replyTimeNote}
                  </p>

                  {/* Under the form: Authorized targets rule */}
                  <div className="pt-2 flex items-start gap-2 text-xs text-[#CBD5E1] font-mono border-t border-[#1E293B]/70">
                    <Lock className="w-3.5 h-3.5 text-[#2DD4BF] shrink-0 mt-0.5" />
                    <span>{contact.authorizedNote}</span>
                  </div>
                </form>
                </>
              )}
            </div>
          </StaggerItem>

          {/* RIGHT: Direct Profiles & Connect */}
          <StaggerItem className="lg:col-span-5 space-y-4">
            {/* Email Card - rendered in normal sans-serif font (Inter) */}
            <div className="bg-[#111720] border border-[#1E293B] rounded-xl p-5 sm:p-6 hover:border-[#2DD4BF]/40 transition-colors">
              <span className="text-[11px] font-mono text-[#CBD5E1] uppercase block mb-1">
                Direct Email
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="text-base sm:text-lg font-sans font-medium text-[#2DD4BF] hover:underline flex items-center gap-2 break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#2DD4BF]" />
                <span className="font-sans">{contact.email}</span>
              </a>
            </div>

            {/* LinkedIn Profile */}
            <div className="bg-[#111720] border border-[#1E293B] rounded-xl p-5 sm:p-6 hover:border-[#2DD4BF]/40 transition-colors">
              <span className="text-[11px] font-mono text-[#CBD5E1] uppercase block mb-1">
                LinkedIn
              </span>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-[#F1F5F9] hover:text-[#2DD4BF] flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-[#2DD4BF]" />
                  <span>Bishoy Osama Fawzy</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#CBD5E1] group-hover:text-[#2DD4BF]" />
              </a>
            </div>

            {/* TryHackMe Profile */}
            <div className="bg-[#111720] border border-[#1E293B] rounded-xl p-5 sm:p-6 hover:border-[#2DD4BF]/40 transition-colors">
              <span className="text-[11px] font-mono text-[#CBD5E1] uppercase block mb-1">
                TryHackMe Profile
              </span>
              <a
                href={contact.tryhackme}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-[#F1F5F9] hover:text-[#2DD4BF] flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              >
                <div className="flex items-center gap-2.5">
                  <TryHackMeIcon className="w-4 h-4 text-[#2DD4BF]" />
                  <span>tryhackme.com/p/bishop10</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#CBD5E1] group-hover:text-[#2DD4BF]" />
              </a>
            </div>

            {/* GitHub Profile - ONLY RENDERED IF URL EXISTS */}
            {contact.githubUrl && (
              <div className="bg-[#111720] border border-[#1E293B] rounded-xl p-5 sm:p-6 hover:border-[#2DD4BF]/40 transition-colors">
                <span className="text-[11px] font-mono text-[#CBD5E1] uppercase block mb-1">
                  GitHub
                </span>
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-[#F1F5F9] hover:text-[#2DD4BF] flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-[#2DD4BF]" />
                    <span>GitHub Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#CBD5E1] group-hover:text-[#2DD4BF]" />
                </a>
              </div>
            )}
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
