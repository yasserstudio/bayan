# Bayan — Implementation Plan

## Project Nature

Bayan is an **open proposal and public good** (benevolat). It is not a government contract, consulting engagement, or commercial product. The concept is built publicly and shared freely — the government can adopt or be inspired by it at their discretion.

## Two Versions

### v1 — Concept & Proposal Site (Current)

**What it is:** A public-facing website that explains the problem, presents the solution, and includes an interactive demo showing how the verification system would work.

**Goal:** Get attention, start the conversation, build public awareness about the fake announcements problem and what a solution could look like.

**Scope:**
- Landing page telling the story (problem → solution → how it works)
- Before/after document mockup (traditional stamp vs. QR code)
- Interactive verification demo with mock data
- Sample announcements from mock ministries showing the full flow
- The QR code proposal explained visually
- Digital security tips section

**Tech stack:**
- Next.js + TypeScript on Vercel (bayan.yasser.studio)
- Tailwind + shadcn/ui
- Mock data in JSON files — no database, no backend, no API
- Arabic-first, mobile-responsive

**What it does NOT include:**
- No real announcement data
- No real verification capability
- No database or backend
- No ministry dashboard or admin panel

### v2 — Real Citizen Tool (Future)

**What it is:** A functional tool that provides real utility to Algerian citizens — without requiring any government cooperation.

**Goal:** Let citizens actually verify announcements against real official data. Build traction and usage data that demonstrates demand.

**How it works without government cooperation:**
- Scrape real announcements from official ministry websites and APS (Algeria Press Service)
- Build a real public directory — searchable, filterable, up-to-date
- Screenshot upload → OCR → match against scraped real announcements
- Fake reporting system with community moderation

**What this enables:**
- Citizens can actually search and verify announcements today
- Usage data proves demand ("X thousand people verified announcements this month")
- The scraped directory becomes the single reference point
- If the government wants to formalize it with QR codes, the infrastructure is ready

**Tech stack (tentative):**
- Next.js + TypeScript on Vercel
- Supabase (Postgres + auth + storage)
- Scraping pipeline for official ministry websites
- OCR service for screenshot analysis
- Arabic full-text search

## The QR Code Proposal

Regardless of v1 or v2, the site presents a clear proposal for how the government could strengthen official communications:

1. Replace the forgeable red stamp with a QR code + verification code on every official announcement
2. Each announcement gets a unique code: `MEN-2026-0847` (ministry prefix + year + sequence)
3. QR links to a verification page showing the official content
4. Citizens scan/type/upload to verify instantly
5. A centralized portal (e.g., bayan.gov.dz) serves as the single source of truth

This proposal is presented as an open idea — the government is free to implement it however they see fit.

## Verification Code Format

**Pattern:** `{MINISTRY_PREFIX}-{YEAR}-{SEQUENCE}`

Examples:
- `MEN-2026-0847` — Ministry of National Education, 2026, announcement #847
- `MES-2026-0132` — Ministry of Higher Education
- `MIN-2026-0045` — Ministry of Interior
- `MTR-2026-0291` — Ministry of Labor

Properties:
- Human-readable and dictatable over phone/radio
- Ministry is immediately identifiable from the prefix
- Year provides temporal context
- Sequence number is auto-incremented per ministry per year
- Short enough to type manually (13-15 characters)

## What Changes on the Document (Proposal)

### Before (current):
- Header: republic + ministry name
- Red circular stamp (forgeable)
- No verification mechanism

### After (proposed):
- Header: republic + ministry name (unchanged)
- QR code in place of or next to the stamp
- Verification code printed below the QR: `MEN-2026-0847`
- Plain text URL: `bayan.gov.dz/v/MEN-2026-0847`
- Optional: retain the traditional stamp alongside QR during transition

## Data Model (for v2)

**Announcement:**
- id (UUID)
- verification_code (if QR system adopted, otherwise null)
- ministry_id (FK)
- title
- content (rich text)
- source_url (original URL on ministry website)
- category (recruitment, exam, policy, general)
- status (active, expired)
- published_at
- scraped_at

**Ministry:**
- id
- name_ar
- name_fr
- prefix_code (e.g., MEN, MES, MIN)
- official_website
- logo_url

**FakeReport:**
- id
- image_url (uploaded screenshot)
- claimed_ministry_id
- source (where they saw it)
- status (pending, confirmed_fake, confirmed_real, inconclusive)
- submitted_at
