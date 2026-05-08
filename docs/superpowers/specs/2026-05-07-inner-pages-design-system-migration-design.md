# Inner Pages — SCA Design System Migration

**Date:** 2026-05-07
**Branch:** fb/ft-revamp-styles
**Status:** Approved

## Goal

Migrate all non-homepage pages and their shared components to the SCA cobalt+cream design system established in `app/globals.css` and `tailwind.config.ts`. The homepage (`app/page.tsx`) is the reference implementation. Navigation and footer are already on-system and require no changes.

## Scope

### Files to update

| File | Current state |
|---|---|
| `app/about/page.tsx` | Old slate gradient hero, `text-slate-*`, `bg-blue-600`, shadcn Cards |
| `app/contact/page.tsx` | Old slate gradient hero, non-functional contact form, `text-slate-*` |
| `app/services/page.tsx` | Old slate gradient hero, `bg-blue-600` process circles, `text-slate-*` |
| `app/services/[slug]/page.tsx` | `text-slate-*`, raw `bg-blue-600` buttons |
| `app/not-found.tsx` | Slate gradient, `text-blue-600`, dark: variants |
| `components/FAQSection.tsx` | `text-slate-900`, `text-slate-600`, box-per-item border |

### Files already on-system (no changes)

- `components/navigation.tsx`
- `components/footer.tsx`
- `app/page.tsx` (reference)
- `app/layout.tsx`

## Shared migration rules

Apply these consistently across all files:

- `container mx-auto px-4` → `<div className="sca-wrap">`
- `py-20` / `py-24` → `py-[clamp(64px,8vw,120px)]`
- `text-slate-900` / `text-slate-800` → `text-ink`
- `text-slate-700` / `text-slate-600` → `text-ink-2`
- `text-slate-500` / `text-slate-400` → `text-ink-3`
- `bg-slate-50` / `bg-slate-100` → `bg-cream-soft` or `bg-cream`
- `bg-blue-600` → `bg-cobalt` (or `.btn .btn-cobalt`)
- `text-blue-600` → `text-cobalt`
- `hover:bg-blue-700` → `hover:bg-cobalt-deep`
- shadcn `<Card>` → `.sca-card`
- Raw `<button className="bg-blue-600 ...">` → `.btn .btn-cobalt` or `.btn .btn-ghost`
- Remove all `dark:` variants (site does not support dark mode)
- No raw hex values or Tailwind palette colors — SCA tokens only

## Hero section pattern (all inner pages)

Every inner page hero follows this structure:

```tsx
<section className="relative overflow-hidden py-[clamp(56px,8vw,120px)] bg-cream-soft">
  <div className="hero-grid-bg" />
  <div className="sca-wrap relative text-center">
    <div className="pill mx-auto mb-6">
      <span className="dot" />
      <span>{eyebrowText}</span>
    </div>
    <h1 className="h-display mx-auto max-w-[18ch]">
      {headlineText} <span className="serif">{accentWord}</span>.
    </h1>
    <p className="lede mx-auto mt-6 text-center">{subtitleText}</p>
  </div>
</section>
```

Copy is never changed. Accent word (serif italic) is chosen from a single word in the existing headline.

## Per-page design

### About (`app/about/page.tsx`)

**Hero**
- Eyebrow: "Nosotros"
- Headline: "Acerca de *nosotros*."
- Subtitle: existing subtitle text, unchanged

**Our Story section** (`bg-white`, 2-col layout preserved)
- Left: three history paragraphs, unchanged copy, `text-ink-2` body text
- Right: stats block restyled using `.num` / `.mono` classes (same pattern as homepage hero inline stats). Each stat: mono label above, num value below. 2×2 grid. Drop `text-blue-600` → `text-cobalt` on numbers.

**Values section** (`bg-cream`)
- Section header: `.pill` + `.h-section` "Nuestros *valores*."
- 4 value cards in `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-lg border border-line overflow-hidden` (border-reveal grid, same as homepage services)
- Each cell: `bg-cream-soft p-8`, icon `text-cobalt`, title `text-ink font-medium`, description `text-ink-2 text-[14px]`
- No shadcn `<Card>` / `<CardHeader>` / `<CardContent>`

### Contact (`app/contact/page.tsx`)

**Decision:** Remove the contact form (useState, handleSubmit, handleChange, all form fields) entirely. The page becomes a server component.

**Hero**
- Eyebrow: "Contacto"
- Headline: "*Contáctanos*."
- Subtitle: existing subtitle text, unchanged

**Contact info section** (`bg-white`)
- Section header: `.pill` + `.h-section`
- 4 `.sca-card` items in `grid grid-cols-1 md:grid-cols-2 gap-6`: Phone, Email, Address, Hours
- Each card: cobalt icon, mono label, `text-ink` value, `text-ink-3` subtext
- Phone and email wrap their values in `<a>` with `hover:text-cobalt`

**Map section** (`bg-cream`)
- Section header: `.pill` + `.h-section` "Visita nuestras *oficinas*."
- Keep `<ClientMap>` component as-is

### Services (`app/services/page.tsx`)

**Hero**
- Eyebrow: "Servicios"
- Headline: "Nuestros *servicios*."
- Subtitle: existing subtitle text, unchanged

**Services grid** — adopt homepage pattern exactly:
```tsx
<div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
  {services.map((svc, i) => (
    <Link href={svc.href} className="group relative flex min-h-[240px] flex-col bg-cream-soft p-8 transition-colors hover:bg-white">
      <span className="mono text-[11px] uppercase tracking-[0.08em] text-ink-4">
        {String(i + 1).padStart(2, "0")} / 09
      </span>
      {/* icon top-right */}
      <h3 className="mt-5 max-w-[22ch] text-[19px] font-medium leading-[1.2] tracking-[-0.018em] text-ink">{svc.title}</h3>
      <p className="mt-3 flex-1 text-[14px] leading-[1.55] text-ink-3">{svc.description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-2 group-hover:text-cobalt">
        Ver detalle <ArrowRight className="arrow h-3.5 w-3.5" />
      </span>
    </Link>
  ))}
</div>
```

**Process section** (`bg-cream`) — replace blue circles with homepage pillar pattern:
- Section header: `.pill` + `.h-section` "Nuestro *proceso*."
- 4 steps as horizontal border rows (`grid grid-cols-[80px_1fr] border-t border-line py-7`)
- Left col: mono step number `01`–`04`
- Right col: step title `text-ink font-medium text-[22px]` + description `text-ink-2 text-[15px]`

**Industries section** (`bg-white`)
- Section header: `.pill` + `.h-section`
- `grid grid-cols-2 md:grid-cols-4 gap-px bg-line rounded-lg border border-line overflow-hidden`
- Each cell: `bg-cream-soft p-6 text-center`, icon `text-cobalt`, name `text-ink font-medium`

### Service detail (`app/services/[slug]/page.tsx`)

**No hero section.** Page starts with content directly.

**Layout:**
```tsx
<section className="py-[clamp(64px,8vw,120px)] bg-cream-soft">
  <div className="sca-wrap max-w-4xl">
    <div className="pill mb-6"><span className="dot" /><span>Servicios</span></div>
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
      <div>
        <h1 className="h-section mb-4">{service.title}</h1>
        <p className="lede">{service.description}</p>
      </div>
      <Icon className="h-14 w-14 text-cobalt flex-shrink-0" />
    </div>
    <FAQSection faqs={service.faqs} />
    <div className="mt-12">
      <Link href="/services" className="btn btn-ghost">
        <ArrowLeft className="h-4 w-4" /> Servicios
      </Link>
    </div>
  </div>
</section>
```

- Remove "← Inicio" button entirely
- "← Servicios" → `.btn .btn-ghost` with `<ArrowLeft>` icon

### Not-found (`app/not-found.tsx`)

**Hero** (`bg-cream-soft`, `relative overflow-hidden`)
- Large "404" watermark: `text-cobalt opacity-10 text-[180px] font-bold absolute` centered
- `.pill` + `.h-display` "Página no *encontrada*."
- `.lede` subtitle, unchanged copy

**Quick links** (`bg-white`)
- Section header: `.h-section`
- 4 `.sca-card` items in `grid grid-cols-2 md:grid-cols-4 gap-6`
- Each: icon `text-cobalt`, label `text-ink font-medium`
- Remove all `dark:` class variants

**Help section** (`bg-cream`)
- 2 `.sca-card` items: Phone and Email
- CTA buttons: `.btn .btn-cobalt` ("Llamar" / "Redactar")
- Remove all `dark:` class variants

### FAQSection (`components/FAQSection.tsx`)

**Token swap:**
- `text-slate-900` → `text-ink`
- `text-slate-600` → `text-ink-2`
- `border rounded-lg p-4` → `border-b border-line-soft py-5` (no box, just divider)
- Add `border-t border-line-soft` to first item

**Open/close indicator:**
- Add `<ChevronDown>` icon to the right of each question button
- Rotate 180° when open: `transition-transform duration-200 ${openFAQ === idx ? "rotate-180" : ""}`

**Question style:** `text-ink font-medium text-[16px]`
**Answer style:** `text-ink-2 text-[15px] leading-[1.6] mt-3`

## Out of scope

- Copy changes (zero rewording)
- Adding new sections or features
- Making the contact form functional
- `components/ServiceCard.tsx` — not used by any page in scope
- shadcn `/ui/*` components — already bridged to SCA tokens, no changes needed
