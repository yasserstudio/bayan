# بيان — Bayan

**تحقّق من البيانات الحكومية الجزائرية**
Verify Algerian government announcements.

Bayan is an open civic tech proposal to replace the forgeable red stamp on Algerian government announcements with a QR code + verification code system.

**Live demo → [bayan.yasser.studio](https://bayan.yasser.studio)**

## The Problem

Fake government announcements (بيانات مزوّرة) are flooding Algerian social media. The traditional red stamp is trivially forgeable with basic tools or AI. Citizens have no quick way to verify whether an announcement is real.

## The Proposal

Replace the stamp with:
- **QR code** on every official announcement linking to a verification page
- **Verification code** (e.g. `MEN-2026-0847`) for manual lookup
- **Public directory** of all official announcements

Three ways to verify: scan the QR, type the code, or upload a screenshot.

## Project Structure

```
bayan/
├── apps/web          # Next.js landing page (v1 concept site)
├── docs/             # Research & proposal documentation
├── brand/            # Logo and brand assets
└── .agents/          # Marketing & strategy context
```

## Tech Stack

- **Next.js 16** + React 19 + TypeScript 6
- **Tailwind CSS 4** + shadcn/ui
- **pnpm** (via Corepack), Node 24
- Arabic-first, RTL layout, mobile-first
- Deployed on Vercel

## Development

```bash
cd apps/web
pnpm install
pnpm dev      # dev server → http://localhost:3000
pnpm build    # production build (runs type-check)
pnpm lint     # eslint
```

## Status

**v1 (current)**: Concept/demo site with mock data showing the proposed system.

**v2 (planned)**: Real verification tool scraping official ministry websites.

## About

Bayan (بيان) means both "official announcement" and "clarity" in Arabic. This is an independent, open-source project — not a government website.

A [yasser.studio](https://yasser.studio) initiative.

## License

MIT
