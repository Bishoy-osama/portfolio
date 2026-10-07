# Project Action Items & Placeholders Checklist

This file tracks all configurable items and future assets for Bishoy Osama Fawzy's portfolio. Every section on the live site renders clean, production-styled cards with zero literal `[ADD LATER]` text.

---

## 📌 Configurable Items in `src/data/content.ts`

| Item | Location in `content.ts` | Default State | Action When Ready |
| :--- | :--- | :--- | :--- |
| **Sample Report PDF** | `caseStudy.hasSampleReportFile` | `false` | Place `sample-report.pdf` into `public/` and change `hasSampleReportFile: true`. The download button will automatically appear. |
| **Case Study Writeup** | `caseStudy.inProgressCard` | Displays single "Case study in progress" card | Replace placeholder text with full case study findings once target report is approved. |
| **CipherToolkit GitHub Link** | `projects[1].githubUrl` | `""` (hidden) | Paste your GitHub repository URL into `githubUrl: "https://github.com/..."`. The GitHub button will appear automatically on the card. |
| **IDOR Write-up** | `projects[2]` | Styled "Coming soon" case study card | Add link to your write-up or blog article when published. |
| **Contact Form Endpoint** | `contact.formspreeEndpoint` | `""` | Paste your Formspree form action URL (e.g. `https://formspree.io/f/your_form_id`). Defaults gracefully to immediate feedback and email client draft. |
| **GitHub Profile Link** | `contact.githubUrl` | `""` (hidden) | Set `contact.githubUrl` to your profile URL when ready. It will automatically render in the Contact section. |
| **CV Document** | `personal.socialLinks.cv` | `/cv.pdf` | Replace `public/cv.pdf` with your updated resume PDF. |

---

## 🛡️ Completed QA & Audit Checklist

- [x] **No literal `[ADD LATER]` text**: Every placeholder renders as a polished status card or is cleanly hidden until configured.
- [x] **Case Study**: Replaced 5 placeholder blocks with ONE clean card titled *"Case study in progress"* maintaining the `"Legal lab target"` tag.
- [x] **Conditional Buttons**: GitHub and Sample Report buttons are hidden unless enabled in `content.ts`.
- [x] **Email Typography**: Direct email rendered in normal sans-serif font (`Inter`), preventing confusion between "i" and "1".
- [x] **Typography & Quotes**: Removed quotation marks from both service taglines and the rule *"Authorized testing only. No exceptions."*.
- [x] **Contact Form**: Interactive loading, success (*"Thanks, I'll reply within 24-48 hours"*), and error states with hidden honeypot spam protection.
- [x] **Free Check Scope**: Displayed clearly under the Contact headline.
- [x] **Section 07 Heading**: Renamed to *"Experience & Training"*.
- [x] **Project Titles**: Cleaned of dates/languages (`Automated Recon and Exploitation Tool`, `CipherToolkit`), displayed as small metadata tags instead.
- [x] **Hero Spacing & Proof Chips**: Empty vertical space reduced; proof chips shortened to fit on a single desktop row.
- [x] **Contrast (WCAG AA)**: Small grey text (`#94A3B8`) elevated to `#CBD5E1` for maximum readability against `#0B0F14`.
- [x] **Skills**: Operating Systems & Code card shortened to clean one-liners.
- [x] **Accessibility & SEO**: Explicit `aria-label`s on all social links, dynamic SVG favicon, Open Graph preview image, and responsive layout verified down to 375px.
