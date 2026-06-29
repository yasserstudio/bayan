<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Dependency constraints

Package manager is **pnpm** (Corepack-managed) — do not use npm/yarn or commit `package-lock.json`.

Icons use **HugeIcons** (`@hugeicons/react` + `@hugeicons/core-free-icons`, stroke-rounded). Render via `<HugeiconsIcon icon={SomeIcon} className="h-5 w-5" />`; the `className` carries size (CSS overrides the SVG width/height attrs) and color (`currentColor` ← `text-*`).

One dep is intentionally held back; don't bump it blindly with `pnpm up`:

- **eslint is pinned to 9.** ESLint 10 breaks the Next lint stack — `eslint-config-next` pulls in `eslint-plugin-react@7.37.5`, which only peers to `eslint ^9.7` and crashes on v10 (`context.getFilename` removed). Bump only once that plugin ships ESLint 10 support.
