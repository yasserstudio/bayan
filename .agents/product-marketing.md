# Product Marketing Context

*Last updated: 2026-05-20*

## Product Overview
**One-liner:** An open proposal and citizen tool for verifying Algerian government announcements — replacing the forgeable red stamp with QR code verification.
**What it does:** Bayan (بيان) is a public initiative that (1) proposes a QR-based verification system for government communications and (2) builds a real citizen tool that aggregates official announcements into one searchable directory, letting anyone verify whether an announcement is real by scanning a QR code, typing a verification code, or uploading a screenshot.
**Product category:** Civic tech / misinformation prevention / government transparency tool
**Product type:** Open-source public good (benevolat) — free concept site (v1) evolving into a free citizen tool (v2)
**Business model:** None. This is a volunteer public good project. No monetization. Built in public to raise awareness and inspire government adoption.

## Target Audience

**Primary — Algerian citizens:**
- Anyone who encounters government announcements on social media (Facebook, WhatsApp, Telegram)
- Especially: students, job seekers, parents, public sector employees — groups most affected by fake education/recruitment announcements
- Arabic-speaking, mobile-first, heavy social media users

**Secondary — Algerian media & journalists:**
- Need reliable sourcing for government announcements
- Would use the public directory and Wall of Fakes as references

**Tertiary — Algerian government / tech community:**
- Government officials who might champion adoption
- Algerian tech community who can amplify the build-in-public story

**Primary use case:** "I just saw a government announcement shared on Facebook — is it real or fake?"

**Jobs to be done:**
- Verify if a government announcement I received is authentic
- Find the official version of a government announcement I've heard about
- Report a suspicious announcement I believe is fake
- Stay informed about common scams and digital security

**Key scenarios:**
- Student sees an announcement about exam date changes on a Facebook group
- Job seeker receives a recruitment announcement via WhatsApp
- Parent sees a school calendar change posted on Telegram
- Journalist needs to verify a ministry statement before publishing

## Problems & Pain Points

**Core problem:** Algerian citizens have no fast, reliable way to verify government announcements. Fake announcements look identical to real ones — same headers, stamps, seals, formal language — and spread virally before anyone can check.

**Why current solutions fall short:**
- Ministry websites are hard to find, poorly maintained, and not designed for quick lookups
- Official social media accounts are often unverified or inactive
- Calling the ministry is slow, unreliable, and doesn't scale
- Waiting for media coverage is too slow for social media speed
- The red stamp/seal — the only "proof" of authenticity — is trivially forgeable with modern tools

**What it costs them:**
- Wrong life decisions (missed exams, wasted travel, false job applications)
- Exposed personal data on fraudulent registration sites
- Emotional distress (false hope, unnecessary panic)
- Eroded trust in ALL government communications, even real ones

**Emotional tension:** "I can't trust anything I see anymore. Every announcement could be fake, but I can't afford to ignore them either — what if this one is real?"

## Competitive Landscape

**Direct competitors:** None in Algeria. No existing tool specifically verifies Algerian government announcements.

**Secondary competitors (different approach, same problem):**
- **Checking ministry websites manually** — slow, fragmented, poor UX, citizens often don't know the URLs
- **Asking in Facebook groups / forums** — unreliable, crowdsourced guessing, no authoritative answer
- **Calling the ministry** — doesn't scale, phone lines overwhelmed, no after-hours support

**Indirect competitors (adjacent space):**
- **OpenAI Verify** — detects AI-generated images, but most fake announcements are edited documents, not AI-generated. Only works for OpenAI-created content. Different problem.
- **C2PA / Content Credentials** — cryptographic provenance for digital content. Requires creator adoption. Doesn't help with documents that were never signed.

**How they all fall short:** They're either too slow (manual checking), unreliable (social media crowdsourcing), limited (AI detection only catches specific tools), or require infrastructure that doesn't exist yet (C2PA adoption by Algerian government).

## Differentiation

**Key differentiators:**
- **Source-of-truth approach** — doesn't try to detect fakes; instead provides the verified original. Doesn't matter how the fake was made.
- **Content binding** — QR codes are tied to specific content, defeating reuse attacks
- **Negative proof** — if it's not on Bayan, it's not official. Simple, powerful rule.
- **Works without government cooperation (v2)** — scraping official sources means citizens get value immediately
- **Zero-friction** — no app, no account, no registration. Scan/type/upload and verify.
- **Open proposal** — not a commercial product trying to sell to the government. A public good that proves the concept.

**Why people would choose Bayan:**
- It's the only tool that answers "is this specific announcement real?" in seconds
- It aggregates all ministries in one place (vs. checking 30 different websites)
- It's free, independent, and transparent

## Objections & Responses

| Objection | Response |
|-----------|----------|
| "The government will never adopt this" | v2 works without government cooperation. We scrape their public sites. Adoption is a bonus, not a requirement. |
| "Why should I trust this site over the ministry?" | Bayan aggregates from official ministry websites. It's not creating new information — it's making existing official information accessible. |
| "This is just a demo with fake data" | v1 is the concept. v2 brings real data. The demo shows how it works; the real tool is coming. |
| "What if Bayan itself gets compromised?" | The data comes from official sources. Bayan is a mirror, not the origin. Users can always cross-check with the source ministry. |

**Anti-persona:**
- People who never use social media and only get news from state TV (don't encounter the problem)
- Government officials resistant to transparency (they're not the audience — citizens are)

## Switching Dynamics

**Push (away from current behavior):** "I'm tired of not knowing what's real. I've been burned before — I drove across town for a deadline that didn't exist."

**Pull (toward Bayan):** "One place to check everything. Scan and know. That simple."

**Habit (keeping them stuck):** "I just ask in the Facebook group and go with the majority opinion." / "I call my cousin who works at the ministry."

**Anxiety (about switching):** "What if this site is wrong?" / "What if it's not updated?" / "Is this site itself legitimate?"

## Customer Language

**How they describe the problem (Arabic context):**
- "واش هذا البيان صحيح ولا مزور؟" (Is this announcement real or fake?)
- "كل يوم بيان جديد، ما نعرفوش واش نصدقو" (New announcement every day, we don't know what to believe)
- "خويا صدّق بيان فايسبوك وراح ضيّع وقتو" (My brother believed a Facebook announcement and wasted his time)
- "الختم يقدرو يزوروه بسهولة" (They can forge the stamp easily)

**How they'd describe the solution:**
- "تمسح QR code وتعرف على طول" (Scan the QR and know immediately)
- "موقع واحد فيه كلش رسمي" (One site with everything official)
- "إذا ماكانش في بيان، ماشي رسمي" (If it's not on Bayan, it's not official)

**Words to use:**
- تحقّق (verify), بيان (announcement/clarity), رسمي (official), مزوّر (fake/forged), صحيح (authentic)
- Simple, direct language. Darija-friendly explanations alongside formal Arabic.

**Words to avoid:**
- Technical jargon (OCR, fuzzy matching, cryptographic)
- Government/bureaucratic language (the site should feel citizen-friendly, not governmental)
- "AI" or "deepfake" in citizen-facing copy (too technical — say "fake" or "forged")

**Glossary:**
| Term | Meaning |
|------|---------|
| بيان (Bayan) | Both the platform name and the Arabic word for "official announcement" / "clarity" |
| رمز التحقق | Verification code (e.g., MEN-2026-0847) |
| جدار التزييف | Wall of Fakes — public display of confirmed forgeries |
| وعي رقمي | Digital awareness — security tips section |

## Brand Voice

**Tone:** Trustworthy, direct, modern, accessible
**Style:** Clean, confident, no jargon. Speaks to citizens as equals, not as a government talking down. Uses Algerian context and references naturally.
**Personality:** Independent, transparent, civic-minded, technically competent, approachable

**The vibe:** A smart Algerian friend who works in tech and built something useful for everyone — not a government portal, not a startup pitch, just a clear-headed public initiative.

## Proof Points

**Metrics:** (to be gathered post-launch)
- Number of verifications performed
- Number of fake reports submitted
- Number of announcements in the directory
- Social media shares and engagement

**Value themes:**
| Theme | Proof |
|-------|-------|
| The problem is real | Documented examples of fake announcements circulating on social media |
| Current system is broken | The red stamp is trivially forgeable; no existing verification mechanism |
| The solution is simple | QR scan → instant verification. No app, no account. |
| Source-of-truth beats detection | OpenAI Verify only catches OpenAI-generated content; Bayan works regardless of how the fake was made |
| Works without government | v2 scrapes official sources directly, no cooperation needed |

## Goals

**Primary goal:** Raise public awareness about the fake announcements problem in Algeria and demonstrate a clear, implementable solution — built as a public good.

**Conversion actions:**
- v1: Share the site / spread awareness (social virality)
- v2: Use the tool to verify an announcement / report a fake

**Success looks like:**
- The concept goes viral in Algerian social media
- Media picks up the story
- Government takes notice and considers adoption (or implements their own version inspired by Bayan)
- Citizens have a real tool they use regularly (v2)
