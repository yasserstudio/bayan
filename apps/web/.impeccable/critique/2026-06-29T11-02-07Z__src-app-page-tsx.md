---
target: the homepage (src/app/page.tsx)
total_score: 26
p0_count: 0
p1_count: 4
timestamp: 2026-06-29T11-02-07Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Demo loading + found/not-found states good; the static "12,847 جرّبو" counter undermines status truthfulness |
| 2 | Match System / Real World | 3 | Realistic ministry names + code format; "MEN" abbreviation never explained |
| 3 | User Control and Freedom | 3 | Reset present in both result states; dot-nav gives no section names |
| 4 | Consistency and Standards | 2 | Identical icon-chip card grid repeated across Solution/Pillars/Proposal |
| 5 | Error Prevention | 3 | Disabled-when-empty, maxLength, auto-uppercase; no code-format hint for newcomers |
| 6 | Recognition Rather Than Recall | 3 | Pre-fill + sample codes excellent; dot-nav not recognizable |
| 7 | Flexibility and Efficiency | 2 | Primary viral path (mobile user with a suspicious announcement) has no fast lane to the verifier |
| 8 | Aesthetic and Minimalist Design | 2 | Snap-scroll panels overloaded (Pillars 4+4, Problem 3 chips+comparison+2 photos) |
| 9 | Error Recovery | 3 | Not-found guidance is good; doesn't show what a valid code looks like |
| 10 | Help and Documentation | 2 | Honest FAQ; no code-format help; open-source claim not surfaced |
| **Total** | | **26/40** | **Acceptable — significant refinement needed** |

## Anti-Patterns Verdict

**LLM assessment:** The *copy* is human and specifically Algerian; the *layout* is an AI scaffold. Solution, Pillars, and Proposal are three consecutive icon-chip + heading + text card grids that differ only in count and tint. The QR-dot background is a clever theme but applied uniformly to every section, neutralizing it. navy+gold is the govtech "trust" reflex — reads Gulf-civic-SaaS, not Algerian. The snap-scroll promises one idea per viewport but Pillars and Problem pack 6-8 items per panel. Verdict: content has a soul, structure doesn't.

**Deterministic scan:** `detect.mjs` over `src` returns **0 findings** — the mechanical tells (glassmorphism, ghost-card border+shadow, over-rounding, bounce easing, gradient text, side-stripes) are all absent (just fixed in the prior pass). Where they diverge: the detector is clean, but the real slop here is *compositional* (card-grid sameness, palette reflex) — exactly what a regex detector can't catch and the design review must.

## Overall Impression
The Problem→Demo core is genuinely good — the side-by-side real-vs-forged announcement and the verification loop are the page's soul and would survive any redesign. The biggest opportunity isn't polish; it's (a) restoring credibility (kill the fake counter) and (b) breaking the three-identical-card-grids monotony so the layout earns the trust the copy promises.

## What's Working
1. **The Problem comparison is the best thing on the page** — two near-identical ministry letterheads, one forged, side by side. More persuasive than any statistic.
2. **The Demo verification loop is clean and well-paced** — pre-filled suggestion, clickable samples, 800ms delay, distinct green/red panels, reset. The screenshot-and-share moment.
3. **Authentic Darija register** — "ردّ بالك من الاستعجال", "آخر أجل غدوة!" read as real spoken Algerian, not machine fusha. Rare in civic tech.

## Priority Issues

**[P1] Fabricated usage counter on the verification surface** — `demo.tsx` "+12,847 واحد جرّبو التحقّق" is a hardcoded static number on the one screen explicitly about authenticity and forgery. A skeptic who notices it has just been taught to distrust unverifiable claims — then handed one. *Why it matters:* directly contradicts the product's entire trust premise. *Fix:* remove it, or replace with an honest line ("نسخة تجريبية" / a real metric if one exists). *Suggested: `$impeccable clarify`*

**[P1] Primary verify button is text-less on mobile** — `demo.tsx`: `<span className="hidden sm:inline">تحقّق</span>` leaves only an icon under 640px. *Why:* the core action of the core feature reads as an unlabeled gold square to mobile users (the majority). aria-label covers SR users, not sighted mobile. *Fix:* make the label `inline`, trim padding on mobile if needed. *Suggested: `$impeccable adapt`*

**[P1] Post-demo share is hidden at the exact mobile breakpoint** — the "جرّبتها؟ ابعثها لعائلتك" + WhatsApp/Facebook row is `hidden sm:flex`, gone below 640px — precisely where Algerian WhatsApp sharing happens. *Why:* kills the viral loop at its most natural moment. *Fix:* drop the `hidden sm:flex` guard; the row fits at 390px. *Suggested: `$impeccable adapt`*

**[P1] Snap-scroll panels are overloaded** — Pillars (4 cards + 4 tips) and Problem (3 chips + comparison + 2 photos) push 6-8 content items into one viewport; overflow on 768px laptops. *Why:* breaks the one-idea-per-fold contract the architecture sets up. *Fix:* split Pillars (tips → own section or one expandable card); make Problem's evidence photos an aside/carousel so the comparison breathes. *Suggested: `$impeccable layout`*

**[P2] Two greyed-out "coming soon" pillars sap momentum** — arriving from a successful verification to find 50% of the product dimmed as `opacity-75` "جاي في النسخة الثانية" reads as broken, not roadmap. *Fix:* collapse the unavailable pillars into one positive "النسخة 2" teaser strip. *Suggested: `$impeccable distill`*

**[P3] Proposal step icons are visually outweighed by the FAQ** — bare `w-12 h-12` navy icon squares sit above bordered full-width accordions that dominate; the `hidden lg:block` 16px connector arrows are invisible in practice. *Fix:* give steps a surface or a connecting line; bump arrows to `h-5 w-5`. *Suggested: `$impeccable layout`*

## Persona Red Flags

**Jordan (first-timer from a WhatsApp forward):** Jumps to the Demo via the hero CTA, but the input placeholder `MEN-2026-0847` means nothing — he has a screenshot, not a code. Taps "ارفع صورة البيان" (upload) in Solution expecting it to work; the demo only supports typing. Verifies the sample but still doesn't know what "MEN" is or where a real code comes from.

**Riley (stress-tester/skeptic):** lowercase + bogus codes handled well. Then spots the static "12,847" counter on an anti-forgery tool — credibility crisis. Hunts the footer for the "مفتوح/مستقل" open-source repo link; finds only yasser.studio, claim unsubstantiated.

**Casey (distracted mobile user):** sample announcement image is `hidden md:block` — gone on mobile, removing the "what a real doc looks like" context. The verify button is an unlabeled gold icon. After verifying, the share prompt (`hidden sm:flex`) never appears — the share moment is absent. Problem evidence photos at ~140px render but letterhead text is unreadable.

## Minor Observations
- Dot-nav counter uses Western digits (`1/7`) in an RTL Arabic product; Eastern Arabic (١/٧) would fit the typeface/culture.
- Hero stacks the animated scroll-nudge and the gold CTA close together in the bottom third — they compete.
- The French footer disclaimer adds nothing for the Darija audience; reads as regulatory cover.
- Hero is `max-w-5xl` while other sections are `max-w-7xl` — a width "pulse" as you scroll.

## Questions to Consider
1. Your primary viral user just got a suspicious announcement and wants to verify *now* — should a persistent collapsed verify widget make the core action one tap away from any section, instead of sequencing Problem→Solution→Demo first?
2. A fabricated usage stat on the verification screen of an anti-forgery product — design error or design crisis?
3. navy+gold is the "serious Arab civic platform" uniform (reads Gulf). What would make this unmistakably *Algerian* — postal green, the flag's crescent red, Algiers ochre — rather than generically trustworthy?
