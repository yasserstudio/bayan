# Bayan — Solution Overview

## One-Liner

An open proposal for a national verification system that replaces the forgeable red stamp with a verifiable QR code — plus a real citizen tool for verifying government announcements against official sources.

## Project Nature

Bayan is a **public good** (benevolat) built in the open. It is not a government contract or commercial product. The concept is shared freely for the government to adopt or be inspired by.

**Two versions:**
- **v1 (current):** Concept site — explains the problem, shows the proposed solution with an interactive demo using mock data
- **v2 (future):** Real citizen tool — scrapes official ministry websites, builds a searchable directory, lets citizens verify announcements against real data without any government cooperation

> **Domains:** v1 prototype at `bayan.yasser.studio`. If adopted by the government, the production system would use `bayan.gov.dz`.

## The Proposed Solution (for government adoption)

Every government announcement issued by any Algerian ministry would get:

1. **A unique verification code** — human-readable format: `MEN-2026-0847` (ministry prefix + year + sequence number)
2. **A QR code** — printed on the document in place of (or alongside) the traditional stamp
3. **A verification page** — hosted on a centralized portal, showing the full official content

Citizens verify by scanning the QR, typing the code, or uploading a screenshot. The verification page shows the official content for comparison. If it doesn't match or doesn't exist — it's fake.

## The Four Pillars

### 1. Verification Engine (تحقّق)

Three entry points:

- **QR scan** — camera scans the code on a physical document, opens the verification page. Best for printed announcements.
- **Manual entry** — citizen types the verification code on the homepage. Best when the code is visible but QR can't be scanned.
- **Screenshot upload** — citizen uploads an image of the announcement. The system extracts text via OCR and matches it against the directory. Best for on-phone verification — solves the "I'm seeing this on the same phone I'd scan with" problem.

The verification page displays:
- Issuing ministry name and logo
- Announcement date and publication timestamp
- Full official content of the announcement (text + any attachments)
- Status: **Active** / **Expired** / **Revoked**
- A clear visual verdict for easy comparison

**Anti-reuse protection:** The QR code is tied to specific content. If someone takes a QR from a real announcement and places it on a fake, the content won't match — the mismatch is immediately visible.

**v1 (demo):** Works with mock data to show the flow.
**v2 (real):** Works against scraped real announcements from official ministry websites.

### 2. Public Directory (الدليل الرسمي)

A searchable, browsable archive of official government announcements.

- Filter by ministry, date range, category (recruitment, exams, policy, etc.)
- Full-text search in Arabic
- Chronological and relevance-based sorting

**The rule becomes simple: if it's not on Bayan, it's not official.**

**v1 (demo):** Sample directory with mock announcements.
**v2 (real):** Scraped from official ministry websites and APS. Updated regularly. The single source of truth — built without requiring government participation.

### 3. Fake Reporting System (بلّغ)

Citizens can report suspicious announcements:

- Upload a screenshot or image of the suspected fake
- Identify which ministry it claims to be from
- Optional: add context (where they saw it, when, etc.)

**Public "Wall of Fakes" (جدار التزييف):**
- Transparency and deterrence — everyone can see what's being faked
- Trend tracking — which ministries are targeted most, seasonal patterns
- Media resource — journalists can reference confirmed fakes

**v1 (demo):** UI mockup only, no real submissions.
**v2 (real):** Functional reporting with community moderation.

### 4. Digital Security Awareness (وعي رقمي)

Educational content helping citizens protect themselves:

- How to spot fake announcements (even without Bayan)
- How to identify official ministry websites and social accounts
- General digital literacy: phishing, deepfakes, social engineering
- Short-form content optimized for social media sharing

**Included in both v1 and v2** — this provides value immediately regardless of which version is live.

## Verification Flow

```
Citizen receives announcement (image/print/PDF)
    │
    ├─→ Physical document → Scans QR code with phone camera
    │       │
    │       └─→ Opens verification page
    │
    ├─→ Knows the code → Types verification code on bayan
    │       │
    │       └─→ Searches for code
    │
    └─→ On phone screen → Screenshots and uploads to bayan
            │
            ├─→ OCR extracts verification code → looks up code
            │
            └─→ No code found → extracts full text → fuzzy-matches
                 against announcement directory
                    │
                    ├─→ MATCH FOUND
                    │       │
                    │       └─→ Shows official content
                    │               │
                    │               ├─→ Content matches → ✅ VERIFIED
                    │               └─→ Content differs → ⚠️ TAMPERED
                    │
                    └─→ NO MATCH → ❌ NOT OFFICIAL
```

## Key Design Principles

1. **Zero-friction for citizens** — no app download, no account, no registration. Scan and verify.
2. **Mobile-first** — most Algerians access the internet via smartphone. Must work fast on 3G/4G.
3. **Arabic-first** — UI, content, and all interactions primarily in Arabic, with French as secondary.
4. **Trust through transparency** — open data, public directory, visible fake reports. Nothing hidden.
5. **Independence from government** — v2 works by scraping official sources. No government cooperation required to provide value.
6. **Open proposal** — the QR code system is a gift to the government, not a sales pitch. They can take it or leave it.

## Why This Works

- **Source-of-truth beats detection** — Bayan doesn't try to detect if something is AI-generated (like OpenAI Verify). It checks against official records. Doesn't matter how the fake was made.
- **Content binding defeats QR reuse** — even if someone copies a QR from a real document, the verification page shows the original content, exposing the mismatch.
- **The public directory creates negative proof** — absence from the directory is itself evidence that an announcement is fake.
- **v2 works without government** — by scraping official sources, citizens get real value even if the government never adopts the QR proposal. Usage data then becomes the argument for adoption.
