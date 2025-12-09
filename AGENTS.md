# AGENTS.md

This file guides AI coding agents working on Magic Invoice.

## Project Overview

- Project: Magic Invoice — real-time invoice editor with PDF export.
- Framework: Next.js 16.0.8 (App Router); React 19.2.1; TypeScript.
- Styling: Tailwind CSS v4, Shadcn UI components, Radix primitives.
- Forms/validation: react-hook-form + zod; wizard via react-use-wizard.
- i18n: next-intl + custom TranslationContext (en, gr).
- Build: Next.js toolchain; package manager: pnpm; PostCSS with Tailwind plugin.
- Runtime: serverless routes for PDF export (puppeteer-core + @sparticuz/chromium) and email (nodemailer).

## Project Structure

- `/src/app` – App Router pages/layouts/metadata; `/invoice` route for editor UI.
- `/src/app/api/invoice/*` – API routes: generate PDF, export (json/csv/xml), send email.
- `/src/components/landing` – Landing sections (hero, features, FAQ, CTA, footer).
- `/src/components/invoice` – Invoice form wizard, steps, preview, payment, items, summary.
- `/src/components/ui` – Shadcn UI primitives (button, card, table, input, etc.).
- `/src/components/layout` – Header/nav wrappers; `/src/components/seo` JSON-LD.
- `/src/contexts` – Providers (Theme, Translation, Invoice, Charges, Signature, InvoiceAppProviders).
- `/src/lib` – helpers, utils, schemas (zod), types, seo, faqs, currencies.
- `/src/i18n/locales` – `en.json`, `gr.json`; `/src/i18n/routing.ts` locale list.
- `/public` – static assets; `/src/app/globals.css` theme tokens and print styles.
- Entry points: `src/app/layout.tsx` (RootLayout + Providers), `src/app/page.tsx` (landing), `src/app/invoice/page.tsx` (editor).

## Commands

- `pnpm dev` – start dev server.
- `pnpm build` – production build.
- `pnpm start` – run built app.
- `pnpm lint` – ESLint (Next core web vitals).
- `pnpm type-check` – TypeScript `tsc --noEmit`.

## Code Style & Conventions

### Do

- Use functional components with hooks; keep components focused.
- Use TypeScript strictness; prefer typed props/interfaces.
- Use `react-hook-form` with `zodResolver` and schemas in `src/lib/schemas.ts`.
- Use context providers from `src/contexts` (Translation, Theme, Invoice, Charges, Signature).
- Use Shadcn UI primitives from `src/components/ui` and Tailwind utility classes.
- Name components PascalCase; files kebab/descriptive (e.g., `invoice-preview.tsx`).
- Use `cn` helper from `src/lib/utils` to merge classes.
- Keep imports ordered: external, aliased `@/...`, then relative.
- Add small, purposeful comments only when logic is non-obvious.
- Do not live TODO comments on the code.
- Do not add comments on the code.

### Don’t

- Never run the server. Never run `pnpm run dev`.
- Don’t create class components.
- Don’t use inline styles when Tailwind or component props suffice.
- Don’t bypass zod schemas or `react-hook-form` validation.
- Don’t hardcode colors; use CSS variables/Tailwind tokens in `globals.css`.
- Don’t mutate context state directly; use provided setters/hooks.

## Coding Guidelines

- New components: place in `src/components/<area>/`; use functional components, Tailwind, Shadcn UI; export named.
- New pages/routes: add under `src/app/<route>/page.tsx`; include metadata as needed.
- State: prefer `react-hook-form` for form state; use contexts in `src/contexts` for cross-cutting data (Invoice, Charges, Translation, Theme, Signature).
- API calls: use fetch to `/api/invoice/*`; keep server logic in route handlers.
- Utilities: add shared helpers to `src/lib` (schemas, helpers, utils).
- i18n: add strings to `src/i18n/locales/en.json` and `gr.json`; access via `useTranslation().t`.
- Styling: extend tokens in `globals.css`; prefer Tailwind utilities and Shadcn variants.
- Forms: define/extend schema in `src/lib/schemas.ts`; update default values if needed.

## Safety & Permissions

### Allowed without asking

- Read any file.
- Create/modify components in `src/components` and pages under `src/app`.
- Update styles in `globals.css` or component-level classes.
- Add utilities in `src/lib`.
- Adjust translations in `src/i18n/locales`.

### Ask first

- Install new dependencies or change package manager.
- Modify build/runtime config (`next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, eslint config).
- Change routing structure or API contract.
- Delete files or refactor providers/contexts broadly.

## Good Examples

- Landing composition: `src/app/page.tsx` + `src/components/landing/*`.
- Form wizard + validation: `src/components/invoice/invoice-form.tsx` with schemas in `src/lib/schemas.ts`.
- Context patterns: `src/contexts/InvoiceContext.tsx`, `ChargesContext.tsx`, `TranslationContext.tsx`, `InvoiceAppProviders.tsx`.
- Theming/i18n wiring: `src/app/layout.tsx` + `src/contexts/Providers.tsx`.
- UI primitives and class merging: `src/components/ui/button.tsx` and `src/lib/utils.ts`.
- Styling tokens and print rules: `src/app/globals.css`.
