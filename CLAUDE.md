# SCA Contadores — design system rules

All new components and pages MUST follow the SCA design system. The system is
defined in [`app/globals.css`](app/globals.css) and exposed through Tailwind in
[`tailwind.config.ts`](tailwind.config.ts).

## Tokens

Use the design tokens, never raw hex values or hard-coded font names.

- **Colors:** `cobalt`, `cobalt-deep`, `cobalt-ink`, `cream`, `cream-soft`,
  `cream-deep`, `ink`, `ink-2`, `ink-3`, `ink-4`, `line`, `line-soft`. Use the
  Tailwind classes (`bg-cobalt`, `text-ink-3`, `border-line-soft`, etc.) or the
  CSS variables (`var(--cobalt)`, `var(--ink-3)`).
- **Fonts:** `font-sans` (Geist), `font-mono` (Geist Mono), `font-serif`
  (Instrument Serif — used italic only, for accents inside headlines).
- **Radius:** `rounded-sm | md | lg | xl` (10 / 14 / 22 / 32 px).
- **Shadow:** `shadow-card`.
- **Container:** wrap page content in `<div className="sca-wrap">…</div>`
  (max-width 1280px, fluid gutter).

## Type primitives (defined in `globals.css`)

- `.eyebrow` — uppercase mono caption (12px / 0.08em).
- `.h-display` — hero headline. Wrap a single italicized accent in
  `<span className="serif">…</span>`.
- `.h-section` — section headline (same serif accent rule).
- `.lede` — intro paragraph (max 56ch).
- `.mono`, `.num` — tabular figures.

## Components (defined in `globals.css`)

- `.pill` + `<span className="dot" />` — small uppercase eyebrow chip used at
  the top of every section.
- `.btn` + variant: `.btn-primary` (ink → cobalt on hover), `.btn-cobalt`
  (cobalt brand button), `.btn-ghost` (outline). Add a trailing
  `<ArrowRight className="arrow" />` to get the slide-on-hover treatment.
- `.sca-card` — white card with hover lift.
- `.hero-grid-bg` — absolutely-positioned faint grid backdrop for hero
  sections (parent must be `relative overflow-hidden`).

## Section patterns

- Sections use vertical padding `py-[clamp(64px,8vw,120px)]` and live inside an
  `.sca-wrap`.
- Section header pattern: `<div className="pill"><span className="dot"/>…</div>`
  followed by an `<h2 className="h-section">` with one serif italic accent.
- Service / process / step grids are rendered as a single border-wrapped
  `grid gap-px` over a `bg-line` background — the gap reveals the dividers
  rather than each cell drawing its own border.

## What NOT to do

- No raw `bg-blue-600` / `text-slate-*` Tailwind palette colors. Use the SCA
  tokens.
- No new font imports. Geist + Geist Mono + Instrument Serif are wired in
  [`app/layout.tsx`](app/layout.tsx) as CSS variables.
- Don't reach into the shadcn `--primary` / `--background` HSL variables
  directly — they're already bridged to the SCA tokens.
- Don't change copy without product approval. Restyling never includes
  rewording.

## shadcn/ui

Existing shadcn components keep working — `--primary`, `--background`,
`--foreground`, `--muted`, etc. are bound to the SCA palette in `globals.css`,
so `<Button />` and friends render in cobalt/cream automatically.
