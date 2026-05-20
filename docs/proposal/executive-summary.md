# Bayan — Executive Summary

## The Problem

Fabricated government announcements are flooding Algerian social media. Using AI tools or simple editing software, bad actors produce convincing forgeries of official ministry communiqués — complete with headers, stamps, and seals — in minutes. Citizens have no reliable way to verify whether an announcement is real. The traditional red stamp, designed for a paper-based era, offers zero protection in a digital world.

The consequences are real: citizens make life decisions based on fake announcements, personal data is exposed through fraudulent registration links, and public trust in government communications is eroding.

## The Solution

**Bayan** (بيان) is an open proposal for a national verification system, paired with a real citizen-facing tool.

**The proposal to government:**
- Replace the forgeable red stamp with a QR code + unique verification code on every official announcement
- Citizens scan the QR or enter the code to see the official content and verify instantly
- A centralized portal (bayan.gov.dz) becomes the single source of truth

**The citizen tool (works without government cooperation):**
- Scrapes real announcements from official ministry websites
- Searchable public directory of all official communications
- Upload a screenshot of a suspicious announcement → system matches it against real data
- Report fakes, access digital security tips

**Three ways to verify:**
- **Scan QR** (physical/printed documents)
- **Type the code** (visible code, can't scan)
- **Screenshot & upload** (seeing it on the same phone — system reads the image and verifies automatically)

## Project Nature

Bayan is a **public good** (benevolat), built in the open. Not a government contract or commercial product. The concept is shared freely — the government can adopt or be inspired by it.

**Two phases:**
- **v1 (current):** Concept site with interactive demo using mock data — tells the story, shows the solution
- **v2 (future):** Real tool scraping official sources — provides actual verification utility for citizens

## Prototype

v1 demo is available at `bayan.yasser.studio`.

## Why It Works

- **Source-of-truth beats detection** — doesn't try to detect AI-generated content. Checks against official records. Doesn't matter how the fake was made.
- **QR + content binding** — verification code is tied to specific content. Reusing a code from another announcement exposes the mismatch.
- **Public directory = negative proof** — if it's not on Bayan, it's not official.
- **No government dependency for v2** — scraping official sources provides real value immediately. Usage data becomes the argument for formal adoption.

## The Opportunity

Algeria can lead the region in transparent, citizen-accessible verification of government communications — starting with a public initiative that demonstrates both the problem and the solution.
