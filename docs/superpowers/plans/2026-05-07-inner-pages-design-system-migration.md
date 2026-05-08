# Inner Pages SCA Design System Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate all non-homepage pages and the FAQSection component to the SCA cobalt+cream design system, matching the patterns established in `app/page.tsx`.

**Architecture:** Each file is updated independently — swap all `text-slate-*` / `bg-blue-600` / shadcn Card patterns for SCA design tokens and component primitives (`.pill`, `.h-display`, `.h-section`, `.lede`, `.sca-card`, `.btn`). No business logic changes. FAQSection is updated first since the service detail page depends on it.

**Tech Stack:** Next.js 15, Tailwind CSS, SCA design tokens in `app/globals.css`, lucide-react icons.

---

## File Map

| File | Action |
|---|---|
| `components/FAQSection.tsx` | Modify — swap tokens, add ChevronDown indicator |
| `app/about/page.tsx` | Modify — full restyle |
| `app/services/page.tsx` | Modify — full restyle |
| `app/services/[slug]/page.tsx` | Modify — full restyle, remove "← Inicio" button |
| `app/contact/page.tsx` | Modify — remove form, full restyle, convert to server component |
| `app/not-found.tsx` | Modify — full restyle, remove dark: variants |

**Shared rules applied in every file:**
- `container mx-auto px-4` → `sca-wrap`
- `py-20` / `py-24` → `py-[clamp(64px,8vw,120px)]`
- `text-slate-900` → `text-ink`, `text-slate-600` → `text-ink-2`, `text-slate-400` → `text-ink-3`
- `bg-slate-50` / `bg-slate-100` → `bg-cream-soft` or `bg-cream`
- `bg-blue-600` / `text-blue-600` → `bg-cobalt` / `text-cobalt`
- shadcn `<Card>` → `.sca-card`
- Raw `<button>` → `.btn .btn-cobalt` or `.btn .btn-ghost`
- No `dark:` variants

**Hero section pattern (all inner pages):**
```tsx
<section className="relative overflow-hidden py-[clamp(56px,8vw,120px)] bg-cream-soft">
  <div className="hero-grid-bg" />
  <div className="sca-wrap relative text-center">
    <div className="pill mx-auto mb-6">
      <span className="dot" />
      <span>{eyebrow}</span>
    </div>
    <h1 className="h-display mx-auto max-w-[18ch]">
      Headline <span className="serif">accent</span>.
    </h1>
    <p className="lede mx-auto mt-6 text-center">{subtitle}</p>
  </div>
</section>
```

---

## Task 1: Update FAQSection component

**Files:**
- Modify: `components/FAQSection.tsx`

- [ ] **Step 1: Replace the file contents**

```tsx
"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <div className="mt-12">
      <h2 className="h-section mb-8">
        Preguntas <span className="serif">frecuentes</span>.
      </h2>
      <div className="border-t border-line-soft">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-line-soft">
            <button
              className="flex w-full items-center justify-between gap-4 py-5 text-left focus:outline-none"
              onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
            >
              <span className="text-[16px] font-medium text-ink">{faq.question}</span>
              <ChevronDown
                className={`h-4 w-4 flex-shrink-0 text-ink-3 transition-transform duration-200 ${
                  openFAQ === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            {openFAQ === idx && (
              <p className="mb-5 text-[15px] leading-[1.6] text-ink-2 text-justify">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: no TypeScript errors. Build completes successfully.

- [ ] **Step 3: Commit**

```bash
git add components/FAQSection.tsx
git commit -m "refactor(FAQSection): migrate to SCA design tokens"
```

---

## Task 2: Update About page

**Files:**
- Modify: `app/about/page.tsx`

- [ ] **Step 1: Replace the file contents**

```tsx
import { Award, Users, Clock, Target } from "lucide-react"
import type { ComponentType } from "react"

type Value = {
  Icon: ComponentType<{ className?: string }>
  title: string
  description: string
}

const VALUES: Value[] = [
  {
    Icon: Award,
    title: "Excelencia",
    description:
      "Brindamos un trato respetuoso, atención proactiva y soluciones basadas en dominio técnico, actuando con objetividad y diligencia.",
  },
  {
    Icon: Users,
    title: "Integridad",
    description:
      "Actuamos con honestidad, ética y transparencia, protegiendo la confidencialidad del cliente, actuando con imparcialidad y profesionalismo.",
  },
  {
    Icon: Clock,
    title: "Responsabilidad",
    description:
      "Cumplimos plazos y normativas, garantizando información precisa y actualizada, asumiendo con seriedad las consecuencias de nuestro trabajo.",
  },
  {
    Icon: Target,
    title: "Innovación",
    description:
      "Desarrollamos tecnología para agilizar procesos y ofrecer un servicio moderno, eficiente y adaptado a las necesidades del cliente.",
  },
]

const STATS = [
  { label: "Años de experiencia", value: "40+" },
  { label: "Clientes satisfechos", value: "999+" },
  { label: "Staff experto", value: "20" },
  { label: "Retención de clientes", value: "100%" },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream-soft">
      {/* Hero */}
      <section className="relative overflow-hidden py-[clamp(56px,8vw,120px)] bg-cream-soft">
        <div className="hero-grid-bg" />
        <div className="sca-wrap relative text-center">
          <div className="pill mx-auto mb-6">
            <span className="dot" />
            <span>Nosotros</span>
          </div>
          <h1 className="h-display mx-auto max-w-[18ch]">
            Acerca de <span className="serif">nosotros</span>.
          </h1>
          <p className="lede mx-auto mt-6 text-center">
            Socios financieros de confianza con más de cuatro décadas de experiencia apoyando a las empresas a tener éxito.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-[clamp(64px,8vw,120px)] bg-white">
        <div className="sca-wrap">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="pill mb-6">
                <span className="dot" />
                <span>Historia</span>
              </div>
              <h2 className="h-section mb-8">
                Nuestra <span className="serif">historia</span>.
              </h2>
              <p className="mb-5 text-[15px] leading-[1.6] text-ink-2 text-justify">
                Este Despacho fue fundado por el Sr. José Guadalupe Campos Morales con estudios de contador privado y
                experiencia práctica como administrador de negocios e inicia operaciones en el año de 1953 en el
                domicilio de Escobedo #248 Pte., colonia Centro, Culiacán, Sinaloa, atendiendo pequeños negocios en el
                manejo de contabilidad, declaraciones de impuestos y trámites fiscales ante dependencias
                gubernamentales. En 1962 el Despacho traslada sus operaciones a Juan José Ríos #368 Pte. Colonia Almada
                de la misma ciudad e incorpora la participación de sus hijos Ricardo y Héctor (hermanos de Samuel) para
                darle carácter de negocio familiar; es en el año de 1970 cuando Samuel se integra a este Despacho.
              </p>
              <p className="mb-5 text-[15px] leading-[1.6] text-ink-2 text-justify">
                Con el fallecimiento de su fundador en 1975, el Despacho transmuta a dos liderazgos, el de Ricardo y
                Héctor por su parte y el de Samuel, quien incorpora a esta nueva etapa a sus hermanos Martha Ruth y
                David. Los servicios que el Despacho ofrecía preponderantemente hasta ese momento era el de contabilidad
                a pequeños negocios.
              </p>
              <p className="text-[15px] leading-[1.6] text-ink-2 text-justify">
                En marzo de 1979 se formaliza la constitución de Samuel Campos y Asociados, S.C. a través de una
                Sociedad Civil con el objeto de aglutinar socios industriales; en 1980 amplía sus instalaciones
                iniciando la prestación del servicio de asesoría contable y fiscal para empresas de mayor tamaño y el
                proceso electrónico de información relativa a elaboración de contabilidades y nóminas generando
                programas informáticos propios para tal fin.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 pt-2">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="mono text-[11px] uppercase tracking-[0.06em] text-ink-3">{stat.label}</div>
                  <div className="num mt-2 text-[32px] font-medium tracking-[-0.02em] text-cobalt">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-[clamp(64px,8vw,120px)] bg-cream">
        <div className="sca-wrap">
          <div className="mb-14">
            <div className="pill mb-6">
              <span className="dot" />
              <span>Valores</span>
            </div>
            <h2 className="h-section">
              Nuestros <span className="serif">valores</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ Icon, title, description }) => (
              <div key={title} className="bg-cream-soft p-8">
                <Icon className="mb-5 h-8 w-8 text-cobalt" />
                <h3 className="mb-3 text-[18px] font-medium tracking-[-0.015em] text-ink">{title}</h3>
                <p className="text-[14px] leading-[1.55] text-ink-2">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: no TypeScript errors. Build completes successfully.

- [ ] **Step 3: Commit**

```bash
git add app/about/page.tsx
git commit -m "refactor(about): migrate to SCA design system"
```

---

## Task 3: Update Services listing page

**Files:**
- Modify: `app/services/page.tsx`

- [ ] **Step 1: Replace the file contents**

```tsx
import Link from "next/link"
import {
  FileText,
  MessagesSquare,
  FileSearch,
  Users,
  LineChart,
  ClipboardCheck,
  TrendingUp,
  ShieldCheck,
  RotateCcw,
  Stethoscope,
  Building,
  Cpu,
  Factory,
  ShoppingBag,
  Briefcase,
  HeartHandshake,
  Hammer,
  ArrowRight,
} from "lucide-react"
import type { ComponentType } from "react"

type Service = {
  href: string
  title: string
  description: string
  Icon: ComponentType<{ className?: string }>
}

const SERVICES: Service[] = [
  {
    Icon: FileText,
    title: "Contabilidad y obligaciones fiscales",
    description:
      "Elaboración de contabilidad mensual del Cliente para el cumplimiento de obligaciones fiscales y mercantiles.",
    href: "/services/contabilidad",
  },
  {
    Icon: MessagesSquare,
    title: "Consultoría contable y fiscal",
    description:
      "Acompañamiento y supervisión al departamento de contabilidad del Cliente en la ejecución de la misma.",
    href: "/services/consultoria",
  },
  {
    Icon: FileSearch,
    title: "Auditoría fiscal electrónica",
    description: "Revisión y verificación analítica con un alcance total del 100%.",
    href: "/services/auditoria-fiscal",
  },
  {
    Icon: Users,
    title: "Nómina y obligaciones laborales",
    description:
      "Elaboración de nóminas de sueldos del Cliente en conformidad con las disposiciones legales aplicables.",
    href: "/services/nomina",
  },
  {
    Icon: LineChart,
    title: "Asesoría financiera",
    description:
      "Aplicación de técnicas de análisis financiero con el objetivo de generar conocimiento práctico y valioso.",
    href: "/services/asesoria-financiera",
  },
  {
    Icon: ClipboardCheck,
    title: "Auditoría de estados financieros",
    description: "Opinión profesional acerca de la fiabilidad de los estados financieros de la empresa auditada.",
    href: "/services/auditoria-eeff",
  },
  {
    Icon: TrendingUp,
    title: "Dictamen de enajenación de acciones",
    description: "Determinación de la utilidad fiscal e ISR derivado de la venta de acciones.",
    href: "/services/dictamen-acciones",
  },
  {
    Icon: ShieldCheck,
    title: "Dictamen IMSS",
    description: "Análisis de los movimientos de afiliación de los trabajadores al IMSS.",
    href: "/services/dictamen-imss",
  },
  {
    Icon: RotateCcw,
    title: "Devolución de IVA",
    description:
      "Gestión ante la Autoridad Fiscal para la obtención de la devolución de impuestos a favor del Cliente.",
    href: "/services/devolucion-iva",
  },
]

const PROCESS = [
  {
    title: "Consulta inicial",
    description: "Nos reunimos para entender tus necesidades y situación financiera actual.",
  },
  {
    title: "Propuesta personalizada",
    description: "Creamos un plan de servicios con precios y tiempos transparentes.",
  },
  {
    title: "Implementación",
    description: "Ejecutamos el plan con comunicación y actualizaciones constantes.",
  },
  {
    title: "Soporte continuo",
    description: "Brindamos soporte y asesoría estratégica continua.",
  },
]

type Industry = { name: string; Icon: ComponentType<{ className?: string }> }

const INDUSTRIES: Industry[] = [
  { name: "Salud", Icon: Stethoscope },
  { name: "Bienes raíces", Icon: Building },
  { name: "Tecnología", Icon: Cpu },
  { name: "Manufactura", Icon: Factory },
  { name: "Retail", Icon: ShoppingBag },
  { name: "Servicios profesionales", Icon: Briefcase },
  { name: "Organizaciones sin fines de lucro", Icon: HeartHandshake },
  { name: "Construcción", Icon: Hammer },
]

export default function ServiciosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream-soft">
      {/* Hero */}
      <section className="relative overflow-hidden py-[clamp(56px,8vw,120px)] bg-cream-soft">
        <div className="hero-grid-bg" />
        <div className="sca-wrap relative text-center">
          <div className="pill mx-auto mb-6">
            <span className="dot" />
            <span>Servicios</span>
          </div>
          <h1 className="h-display mx-auto max-w-[18ch]">
            Nuestros <span className="serif">servicios</span>.
          </h1>
          <p className="lede mx-auto mt-6 text-center">
            Generamos y compartimos conocimiento de vanguardia en las áreas de contabilidad, fiscal, financiera y de
            auditoría.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-[clamp(64px,8vw,120px)] bg-white">
        <div className="sca-wrap">
          <div className="mb-14">
            <div className="pill mb-6">
              <span className="dot" />
              <span>Soluciones</span>
            </div>
            <h2 className="h-section">
              Explora nuestras <span className="serif">soluciones</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc, i) => {
              const { Icon } = svc
              return (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="group relative flex min-h-[240px] flex-col bg-cream-soft p-8 transition-colors hover:bg-white"
                >
                  <span className="mono text-[11px] uppercase tracking-[0.08em] text-ink-4">
                    {String(i + 1).padStart(2, "0")} / 09
                  </span>
                  <Icon className="absolute right-7 top-7 h-7 w-7 text-cobalt opacity-85" />
                  <h3 className="mt-5 max-w-[22ch] text-[19px] font-medium leading-[1.2] tracking-[-0.018em] text-ink">
                    {svc.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14px] leading-[1.55] text-ink-3">{svc.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-2 transition-colors group-hover:text-cobalt">
                    Ver detalle
                    <ArrowRight className="arrow h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-[clamp(64px,8vw,120px)] bg-cream">
        <div className="sca-wrap">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_1.2fr] md:gap-20">
            <div>
              <div className="pill mb-6">
                <span className="dot" />
                <span>Proceso</span>
              </div>
              <h2 className="h-section">
                Nuestro <span className="serif">proceso</span>.
              </h2>
              <p className="lede mt-6">Así trabajamos para brindarte resultados excepcionales.</p>
            </div>
            <div>
              {PROCESS.map((step, i) => (
                <div
                  key={step.title}
                  className={`grid grid-cols-[80px_1fr] gap-6 border-t border-line py-7 ${
                    i === PROCESS.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="mono pt-1 text-[12px] uppercase tracking-[0.08em] text-ink-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="mb-2 text-[22px] font-medium tracking-[-0.02em] text-ink">{step.title}</h3>
                    <p className="text-[15px] leading-[1.55] text-ink-2">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-[clamp(64px,8vw,120px)] bg-white">
        <div className="sca-wrap">
          <div className="mb-14">
            <div className="pill mb-6">
              <span className="dot" />
              <span>Sectores</span>
            </div>
            <h2 className="h-section">
              Sectores con los que <span className="serif">trabajamos</span>.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-4">
            {INDUSTRIES.map(({ name, Icon }) => (
              <div key={name} className="bg-cream-soft p-6 text-center">
                <Icon className="mx-auto mb-3 h-8 w-8 text-cobalt" />
                <p className="text-[14px] font-medium text-ink">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: no TypeScript errors. Build completes successfully.

- [ ] **Step 3: Commit**

```bash
git add app/services/page.tsx
git commit -m "refactor(services): migrate to SCA design system"
```

---

## Task 4: Update Service detail page

**Files:**
- Modify: `app/services/[slug]/page.tsx`

- [ ] **Step 1: Replace the file contents**

```tsx
import {
  FileText,
  MessagesSquare,
  FileSearch,
  Users,
  LineChart,
  ClipboardCheck,
  TrendingUp,
  ShieldCheck,
  RotateCcw,
  ArrowLeft,
} from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"
import FAQSection from "@/components/FAQSection"
import type { ComponentType } from "react"

type ServiceData = {
  slug: string
  title: string
  icon: ComponentType<{ className?: string }>
  description: string
  faqs: { question: string; answer: string }[]
}

const services: ServiceData[] = [
  {
    slug: "contabilidad",
    title: "Contabilidad y obligaciones fiscales",
    icon: FileText,
    description:
      "Este servicio consiste en elaborar cada mes la contabilidad del Cliente, cumpliendo con ello obligaciones de tipo fiscal y mercantil. Con los datos emanados de la contabilidad se hacen los cálculos y preparación de los formatos fiscales para el cumplimiento de las obligaciones fiscales.",
    faqs: [
      {
        question: "¿A quién está dirigido este servicio?",
        answer:
          "A negocios con hasta 10 empleados, cuyos dueños participan directamente en la operación y supervisión, y que prefieren subcontratar la contabilidad y obligaciones fiscales en lugar de mantener un departamento contable propio.",
      },
      {
        question: "¿Necesito invertir en equipo o software contable?",
        answer: "No, todo el equipo y software necesarios son proporcionados por nuestro despacho.",
      },
      {
        question: "¿Qué pasa si no llevo contabilidad siendo microempresario?",
        answer:
          "Incumplirías obligaciones fiscales, lo que puede generar sanciones, posibles delitos fiscales y que la autoridad determine los impuestos a pagar según sus criterios.",
      },
      {
        question: "¿Incluye asesoría sobre el régimen fiscal más conveniente y beneficios disponibles?",
        answer:
          "Sí, este servicio incluye orientación para elegir el régimen fiscal más favorable y aprovechar beneficios fiscales.",
      },
      {
        question: "¿Incluye asesoría sobre la emisión y validación de CFDI?",
        answer:
          "Sí, te orientamos en cómo emitir correctamente tus CFDI y verificar que los recibidos cumplan con los requisitos fiscales.",
      },
      {
        question: "¿Asumo alguna responsabilidad laboral por el personal del despacho?",
        answer:
          "No, el servicio es independiente y el personal del despacho atiende también a otros clientes, por lo que no asumes responsabilidades laborales.",
      },
    ],
  },
  {
    slug: "consultoria",
    title: "Consultoría contable y fiscal",
    icon: MessagesSquare,
    description:
      "Supervisamos y acompañamos a tu departamento de contabilidad para garantizar registros confiables, cumplimiento de las NIF y obligaciones fiscales, laborales y societarias. Optimizamos beneficios y tratamientos fiscales, y calculamos mensualmente tus impuestos federales con nuestra plataforma Compliance Fiscal Inteligente (CFI), que usa inteligencia artificial para adaptarse a las necesidades específicas de tu empresa.",
    faqs: [
      {
        question: "¿A quién está dirigido este servicio?",
        answer:
          "A pequeñas y medianas empresas que consideran la contabilidad como una herramienta clave para la toma de decisiones y el control interno, y que cuentan con un departamento contable propio apoyado en sistemas informáticos y personal competente.",
      },
      {
        question: "¿Cómo calcula la plataforma CFI mis obligaciones fiscales considerando beneficios y estímulos?",
        answer:
          "Realiza un diagnóstico de tu situación mediante cuestionarios inteligentes que identifican obligaciones y beneficios aplicables según leyes, reglamentos y reglas fiscales. Con esta información, construye un modelo personalizado para calcular tus obligaciones con alto grado de certeza.",
      },
      {
        question: "¿Cuáles son los entregables de este servicio?",
        answer:
          "Observaciones sobre inconsistencias contables, cédulas comparativas con el detalle del cálculo mensual de impuestos y fundamentos legales que respaldan las respuestas a tus consultas.",
      },
      {
        question: "¿Incluye capacitación para mi personal?",
        answer:
          "Sí, a través del acompañamiento y la atención de consultas, además de dos cursos anuales de actualización en disposiciones fiscales relevantes.",
      },
      {
        question: "¿Este servicio reemplaza a mi departamento de contabilidad?",
        answer:
          "No, complementa su trabajo mediante supervisión, asesoría especializada y herramientas que mejoran la calidad y confiabilidad de la información.",
      },
      {
        question: "¿Qué beneficios obtengo al contratar este servicio?",
        answer:
          "Mayor certeza y confiabilidad en la información contable, cumplimiento oportuno de obligaciones fiscales y aprovechamiento de beneficios legales que optimicen tu carga tributaria.",
      },
    ],
  },
  {
    slug: "auditoria-fiscal",
    title: "Auditoría fiscal electrónica",
    icon: FileSearch,
    description:
      "Revisamos y verificamos al 100% los CFDI emitidos y recibidos por tu empresa —incluyendo ingresos, egresos, complementos de pago, nómina y carta porte— para asegurar su correcta asociación con la contabilidad, cumplimiento de requisitos fiscales y validez ante el SAT. Validamos importes, retenciones, tasas de IVA, deducibilidad de gastos, operaciones vinculadas al objeto social y la existencia de CFDI que puedan corresponder a operaciones inexistentes. También conciliamos la información del SAT con tus registros y detectamos proveedores listados como EFOS en los últimos cinco ejercicios.",
    faqs: [
      {
        question: "¿Cuáles son las ventajas de contratar este servicio?",
        answer:
          "Permite conocer si los CFDI emitidos y recibidos cumplen con el CFF y la RMF, si todas las operaciones registradas están respaldadas, y si existen CFDI no registrados o vinculados con EFOS. Reduce el riesgo de visitas domiciliarias, restricciones al uso del certificado de sello digital y facilita responder oportunamente auditorías fiscales electrónicas.",
      },
      {
        question: "¿Cuáles son los reportes o entregables que recibo?",
        answer:
          "Un informe detallado con los resultados de la revisión, cuantificación de inconsistencias y sugerencias para corregirlas, acompañado de anexos con la evidencia y soporte de cada procedimiento aplicado.",
      },
      {
        question: "¿Qué consecuencias tiene emitir o recibir CFDI con deficiencias o no hacerlo estando obligado?",
        answer:
          "Puede generar sanciones administrativas, la imposibilidad de deducir fiscalmente o acreditar IVA, e incluso sanciones penales según el Código Fiscal de la Federación.",
      },
      {
        question: "¿Qué pasa si tengo CFDI emitidos por EFOS y no compruebo la materialidad de la operación?",
        answer:
          "La autoridad puede determinar que las erogaciones no sean deducibles, el IVA no acreditable, imponer sanciones, hacer responsables solidarios a socios y administradores, negar subsidios o estímulos, y restringir el certificado de sello digital.",
      },
      {
        question: "¿Incluye la conciliación con la información del SAT?",
        answer:
          "Sí, comparamos todos los CFDI en el repositorio del SAT con los registros contables, tanto de los emitidos como de los recibidos, para detectar omisiones o inconsistencias.",
      },
      {
        question: "¿Revisan la deducibilidad de gastos y el cumplimiento de requisitos fiscales?",
        answer:
          "Sí, validamos que los conceptos facturados correspondan a la actividad de la empresa y cumplan con las disposiciones fiscales para su deducibilidad y acreditamiento, incluyendo gastos de nómina, mantenimiento, viáticos y más.",
      },
    ],
  },
  {
    slug: "nomina",
    title: "Nómina y obligaciones laborales",
    icon: Users,
    description:
      "Elaboramos y timbramos tus nóminas cumpliendo con todas las disposiciones laborales y fiscales. Calculamos y preparamos para tu pago las cuotas IMSS, Infonavit, SAR y el impuesto estatal sobre nóminas, realizando los ajustes necesarios por incidencias del periodo.",
    faqs: [
      {
        question: "¿A quién está dirigido este servicio?",
        answer:
          "A negocios con hasta 10 empleados sin departamento contable, y a empresas más grandes que prefieren externalizar la nómina por ser más rentable que gestionarla internamente.",
      },
      {
        question: "¿Necesito invertir en equipo o software para la nómina?",
        answer: "No, todo el equipo y software necesarios son proporcionados por nuestro despacho.",
      },
      {
        question: "¿Por qué contratar este servicio si ya tengo contabilidad o recursos humanos internos?",
        answer:
          "Para delegar a expertos especializados en leyes laborales y fiscales, reducir riesgos por errores o incumplimientos, liberar a tu personal para tareas más rentables y evitar costos en equipo, software y capacitación continua.",
      },
      {
        question: "¿Incluye cálculos y comprobantes de vacaciones, aguinaldo, finiquitos y utilidades?",
        answer: "Sí, todos estos conceptos están incluidos en el servicio.",
      },
      {
        question: "¿Incluye el diseño e implementación de un plan de previsión social?",
        answer: "No, este trabajo no está incluido en el costo del servicio.",
      },
      {
        question: "¿Incluye el timbrado de los recibos de pago?",
        answer: "Sí, la emisión y timbrado de los recibos de pago a trabajadores está incluida en el servicio.",
      },
    ],
  },
  {
    slug: "asesoria-financiera",
    title: "Asesoría financiera",
    icon: LineChart,
    description:
      "Aplicamos técnicas de análisis financiero para transformar tus datos en información clave que te ayude a entender la situación real de tu empresa y tomar decisiones acertadas. Creamos un modelo personalizado con comparativos de estados financieros, análisis de resultados, balance, flujo de efectivo, capital de trabajo y razones financieras. Además, te acompañamos en reuniones de análisis para identificar tendencias, oportunidades, debilidades y amenazas.",
    faqs: [
      {
        question: "¿En qué consiste el servicio de asesoría financiera?",
        answer:
          "Analizamos a fondo tu información financiera para brindarte un diagnóstico claro de la situación económica de tu empresa y ayudarte a tomar decisiones oportunas.",
      },
      {
        question: "¿Qué tipo de análisis realizan?",
        answer:
          "Elaboramos un modelo personalizado que compara y analiza estados financieros, estado de resultados, balance general, flujo de efectivo, capital de trabajo y razones financieras.",
      },
      {
        question: "¿Incluye reuniones para revisar los resultados?",
        answer:
          "Sí, te acompañamos en reuniones periódicas para explicar el análisis, detectar tendencias, oportunidades, debilidades y amenazas.",
      },
      {
        question: "¿Se adapta el análisis a las necesidades de mi empresa?",
        answer:
          "Sí, el modelo es personalizado según tu estructura, pudiendo incluir estados financieros individuales, combinados o consolidados.",
      },
      {
        question: "¿Este servicio es sólo para empresas grandes?",
        answer:
          "No, está diseñado para cualquier empresa que busque comprender mejor su situación financiera y optimizar la toma de decisiones.",
      },
    ],
  },
  {
    slug: "auditoria-eeff",
    title: "Auditoría de estados financieros",
    icon: ClipboardCheck,
    description:
      "Emitimos una opinión profesional sobre la veracidad de tus estados financieros, brindando seguridad razonable a tu administración y a terceros sobre su confiabilidad para la toma de decisiones operativas, estratégicas o legales. Aplicamos normas internacionales de auditoría y evaluamos el control interno, políticas contables, salvaguarda de activos e integridad empresarial, adaptándonos a las circunstancias de tu empresa.",
    faqs: [
      {
        question: "¿A quién está dirigido este servicio?",
        answer:
          "A empresas con accionistas, proveedores, bancos u otros interesados que requieren información financiera confiable, ya sea por obligación legal, fiscal o estatutaria, o para contar con una opinión imparcial cuando la administración está a cargo de terceros.",
      },
      {
        question: "¿En qué consiste la auditoría de estados financieros?",
        answer:
          "En evaluar y emitir una opinión profesional sobre la veracidad y confiabilidad de los estados financieros, aplicando normas internacionales de auditoría y revisando el control interno de la empresa.",
      },
      {
        question: "¿Qué elementos garantizan la confianza en la opinión del auditor?",
        answer:
          "El cumplimiento de las Normas de Información Financiera (NIF), la aplicación de Normas Internacionales de Auditoría, el apego a un código de ética profesional y la experiencia, probidad y reconocimiento del Contador Público Certificado que realiza el trabajo.",
      },
      {
        question: "¿Cuáles son las principales ventajas de este servicio?",
        answer:
          "Detectar errores o sesgos en la información financiera, identificar riesgos y debilidades en controles internos, sugerir mejoras en procesos, y generar mayor confianza ante inversionistas o acreedores, lo que puede facilitar financiamiento en mejores condiciones.",
      },
      {
        question: "¿Incluye la revisión de controles internos?",
        answer:
          "Sí, el servicio evalúa políticas contables, salvaguarda de activos, integridad empresarial y otros aspectos clave para la confiabilidad de la información financiera.",
      },
      {
        question: "¿Se adapta la auditoría a cada empresa?",
        answer:
          "Sí, el trabajo se ajusta a las circunstancias específicas de cada cliente, considerando sus necesidades, estructura y requerimientos legales o contractuales.",
      },
    ],
  },
  {
    slug: "dictamen-acciones",
    title: "Dictamen de enajenación de acciones",
    icon: TrendingUp,
    description:
      "Determinamos la utilidad fiscal y el ISR derivado de la venta de acciones o partes sociales realizada por una persona física, emitiendo un dictamen ante el SAT que avala el correcto cálculo y pago del impuesto.",
    faqs: [
      {
        question: "¿Es obligatorio presentar el dictamen de enajenación de acciones?",
        answer: "No, solo se presenta si la persona física considera que le conviene hacerlo.",
      },
      {
        question: "¿Cuándo conviene presentar el dictamen de enajenación de acciones?",
        answer:
          "Cuando el 20% de retención sobre el valor de venta que aplica el comprador sea mayor al impuesto definitivo, ya que el dictamen permite reducir esa retención y evitar saldos a favor. También es recomendable cuando se requiere un cálculo preciso de la utilidad fiscal, debido a la alta complejidad y variables históricas involucradas en la venta de acciones.",
      },
      {
        question: "¿Qué ventajas ofrece este servicio?",
        answer:
          "Brinda seguridad y confianza al contar con un profesional experto en la materia, permite reducir la retención de ISR evitando desembolsos innecesarios y trámites de devolución, y en caso de revisión por parte del SAT, el despacho asume la corresponsabilidad y atiende directamente el proceso.",
      },
      {
        question: "¿El servicio incluye la presentación del dictamen ante el SAT?",
        answer:
          "Sí, nos encargamos de elaborar y presentar el dictamen cumpliendo con todos los requisitos legales y fiscales establecidos.",
      },
    ],
  },
  {
    slug: "dictamen-imss",
    title: "Dictamen IMSS",
    icon: ShieldCheck,
    description:
      "Revisamos la afiliación de trabajadores, la integración de salarios para el cálculo de cuotas, nóminas, contratos, registros contables y clasificación de prima de riesgo. Verificamos el cumplimiento de la Ley del IMSS y el RACERF, asegurando que el pago de cuotas obrero patronales sea correcto. Este dictamen, contemplado en el Art. 170 del RACERF, tiene validez legal salvo prueba en contrario, otorgando certeza a la empresa sobre el cumplimiento de sus obligaciones.",
    faqs: [
      {
        question: "¿A quién está dirigido este servicio?",
        answer:
          "Es obligatorio para patrones con más de 300 trabajadores (Art. 16 de la Ley del IMSS) y opcional para quienes tengan menos, pero deseen presentarlo de forma voluntaria para obtener sus beneficios.",
      },
      {
        question: "¿Qué pasa si no presento el dictamen teniendo más de 300 trabajadores?",
        answer:
          "El incumplimiento puede generar sanciones administrativas (Arts. 304-A y 304-B de la Ley del IMSS) y una opinión negativa del Instituto sobre el cumplimiento de obligaciones.",
      },
      {
        question: "¿Qué beneficios ofrece este servicio?",
        answer:
          "Permite la autocorrección de errores, evita multas, reduce revisiones del ejercicio anterior y exenta de visitas domiciliarias por los periodos dictaminados, ya sea de forma obligatoria o voluntaria.",
      },
      {
        question: "¿Quién puede emitir el dictamen para efectos del IMSS?",
        answer:
          "Solo un Contador Público Autorizado por el IMSS puede elaborarlo y presentarlo oficialmente, garantizando su validez legal.",
      },
      {
        question: "¿Incluye la revisión de la prima de riesgo de trabajo?",
        answer:
          "Sí, verificamos la correcta clasificación de la prima de riesgo para evitar pagos indebidos o diferencias posteriores.",
      },
      {
        question: "¿Qué pasa si el IMSS detecta diferencias después del dictamen?",
        answer:
          "El dictamen se presume válido salvo prueba en contrario; si se detectan diferencias, deberán regularizarse conforme a la ley.",
      },
    ],
  },
  {
    slug: "devolucion-iva",
    title: "Devolución de IVA",
    icon: RotateCcw,
    description:
      "Gestionamos ante la autoridad fiscal la devolución de saldos a favor de IVA, ya sea por aplicar tasa 0% en ingresos, pagos indebidos o provisionales en exceso. Revisamos minuciosamente registros contables, CFDI, estados de cuenta y materialidad de operaciones, y elaboramos la documentación requerida para presentar la solicitud formal y dar seguimiento a su resolución.",
    faqs: [
      {
        question: "¿En qué consiste este servicio?",
        answer:
          "En gestionar ante la autoridad fiscal la devolución de saldos a favor de IVA, revisando contabilidad, CFDI, estados de cuenta y materialidad de operaciones, y preparando toda la documentación requerida para sustentar la solicitud.",
      },
      {
        question: "¿En qué casos puedo solicitar la devolución de IVA?",
        answer:
          "Cuando se aplicó tasa 0% en ingresos, se hicieron pagos indebidos o pagos provisionales superiores al impuesto anual causado.",
      },
      {
        question: "¿Qué revisa el despacho antes de presentar la solicitud?",
        answer:
          "Realizamos una revisión detallada de registros contables, CFDI, estados de cuenta, razón de negocio y elementos de materialidad de las operaciones que originan el saldo a favor.",
      },
      {
        question: "¿Cuáles son las ventajas de contratar este servicio?",
        answer:
          "Recuperas un saldo a tu favor antes de que prescriba el derecho, cuentas con asesoría especializada que ahorra tiempo y reduce riesgos, tienes certeza de que la devolución es procedente y recibes un diagnóstico previo para evaluar la viabilidad antes de iniciar el trámite.",
      },
      {
        question: "¿El servicio incluye la presentación de la solicitud ante el SAT?",
        answer:
          "Sí, elaboramos los escritos, formatos y anexos, y presentamos la solicitud directamente ante la autoridad fiscal, dando seguimiento hasta la resolución.",
      },
    ],
  },
]

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }))
}

interface PageProps {
  params: { slug: string }
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return notFound()
  const Icon = service.icon

  return (
    <div className="flex flex-col min-h-screen bg-cream-soft">
      <section className="py-[clamp(64px,8vw,120px)] bg-cream-soft">
        <div className="sca-wrap">
          <div className="max-w-4xl mx-auto">
            <div className="pill mb-6">
              <span className="dot" />
              <span>Servicios</span>
            </div>
            <div className="flex flex-col gap-8 mb-12 md:flex-row md:items-start md:justify-between">
              <div>
                <h1 className="h-section mb-6">{service.title}</h1>
                <p className="lede">{service.description}</p>
              </div>
              <Icon className="h-14 w-14 flex-shrink-0 text-cobalt" />
            </div>
            {service.faqs.length > 0 && <FAQSection faqs={service.faqs} />}
            <div className="mt-12">
              <Link href="/services" className="btn btn-ghost">
                <ArrowLeft className="h-4 w-4" />
                Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: no TypeScript errors. Build completes successfully.

- [ ] **Step 3: Commit**

```bash
git add "app/services/[slug]/page.tsx"
git commit -m "refactor(service-detail): migrate to SCA design system"
```

---

## Task 5: Update Contact page

**Files:**
- Modify: `app/contact/page.tsx`

Note: The `"use client"` directive, all `useState`/event handler logic, and the form fields are removed. The page becomes a server component.

- [ ] **Step 1: Replace the file contents**

```tsx
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import ClientMap from "@/components/client-map"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream-soft">
      {/* Hero */}
      <section className="relative overflow-hidden py-[clamp(56px,8vw,120px)] bg-cream-soft">
        <div className="hero-grid-bg" />
        <div className="sca-wrap relative text-center">
          <div className="pill mx-auto mb-6">
            <span className="dot" />
            <span>Contacto</span>
          </div>
          <h1 className="h-display mx-auto max-w-[18ch]">
            <span className="serif">Contáctanos</span>.
          </h1>
          <p className="lede mx-auto mt-6 text-center">
            ¿Listo para dar el siguiente paso hacia soluciones contables y financieras efectivas?
          </p>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-[clamp(64px,8vw,120px)] bg-white">
        <div className="sca-wrap">
          <div className="mb-14">
            <div className="pill mb-6">
              <span className="dot" />
              <span>Información</span>
            </div>
            <h2 className="h-section">
              Estamos para <span className="serif">apoyarte</span>.
            </h2>
            <p className="lede mt-6">
              Queremos conocer tu proyecto y ofrecerte soluciones personalizadas. Elige el medio de contacto que
              prefieras.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="sca-card">
              <div className="mb-3 flex items-center gap-3">
                <Phone className="h-5 w-5 text-cobalt" />
                <span className="mono text-[11px] uppercase tracking-[0.08em] text-ink-3">Teléfono</span>
              </div>
              <a
                href="tel:+526677520080"
                className="text-[17px] font-medium text-ink transition-colors hover:text-cobalt"
              >
                (667) 752-0080
              </a>
              <p className="mt-1 text-[14px] text-ink-3">Lunes - Viernes, 9:00 AM - 6:00 PM</p>
            </div>

            <div className="sca-card">
              <div className="mb-3 flex items-center gap-3">
                <Mail className="h-5 w-5 text-cobalt" />
                <span className="mono text-[11px] uppercase tracking-[0.08em] text-ink-3">Email</span>
              </div>
              <a
                href="mailto:administracion@contadoressca.com"
                className="break-all text-[17px] font-medium text-ink transition-colors hover:text-cobalt"
              >
                administracion@contadoressca.com
              </a>
              <p className="mt-1 text-[14px] text-ink-3">Responderemos dentro de 24 horas.</p>
            </div>

            <div className="sca-card">
              <div className="mb-3 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-cobalt" />
                <span className="mono text-[11px] uppercase tracking-[0.08em] text-ink-3">Ubicación</span>
              </div>
              <a
                href="https://maps.app.goo.gl/4vxYzKCMVJTVPop17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[17px] font-medium text-ink transition-colors hover:text-cobalt"
              >
                Juan José Ríos 378 Pte.
                <br />
                Colonia Jorge Almada
                <br />
                Culiacán, Sinaloa
              </a>
            </div>

            <div className="sca-card">
              <div className="mb-3 flex items-center gap-3">
                <Clock className="h-5 w-5 text-cobalt" />
                <span className="mono text-[11px] uppercase tracking-[0.08em] text-ink-3">Horario</span>
              </div>
              <div className="space-y-1">
                <p className="text-[15px] text-ink">
                  <span className="font-medium">Lunes - Viernes:</span> 9:00 AM - 6:00 PM
                </p>
                <p className="text-[15px] text-ink">
                  <span className="font-medium">Sábado:</span> 9:00 AM - 2:00 PM
                </p>
                <p className="text-[15px] text-ink">
                  <span className="font-medium">Domingo:</span> Cerrado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-[clamp(64px,8vw,120px)] bg-cream">
        <div className="sca-wrap">
          <div className="mb-14">
            <div className="pill mb-6">
              <span className="dot" />
              <span>Ubicación</span>
            </div>
            <h2 className="h-section">
              Visita nuestras <span className="serif">oficinas</span>.
            </h2>
            <p className="lede mt-6">Ubicados en el centro de la ciudad.</p>
          </div>
          <ClientMap height="400px" className="overflow-hidden rounded-lg border border-line-soft shadow-card" />
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: no TypeScript errors. Build completes successfully.

- [ ] **Step 3: Commit**

```bash
git add app/contact/page.tsx
git commit -m "refactor(contact): migrate to SCA design system, remove unused form"
```

---

## Task 6: Update Not-found page

**Files:**
- Modify: `app/not-found.tsx`

- [ ] **Step 1: Replace the file contents**

```tsx
import { Phone, Mail, Home, Briefcase, BookOpenText, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { ComponentType } from "react"

type QuickLink = {
  href: string
  label: string
  Icon: ComponentType<{ className?: string }>
}

const quickLinks: QuickLink[] = [
  { href: "/", label: "Inicio", Icon: Home },
  { href: "/about", label: "Nosotros", Icon: BookOpenText },
  { href: "/services", label: "Servicios", Icon: Briefcase },
  { href: "/contact", label: "Contáctanos", Icon: Phone },
]

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-cream-soft">
      {/* Hero */}
      <section className="relative overflow-hidden py-[clamp(56px,8vw,120px)] bg-cream-soft">
        <div className="hero-grid-bg" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="select-none text-[180px] font-bold leading-none text-cobalt opacity-10">404</span>
        </div>
        <div className="sca-wrap relative text-center">
          <div className="pill mx-auto mb-6">
            <span className="dot" />
            <span>Error</span>
          </div>
          <h1 className="h-display mx-auto max-w-[18ch]">
            Página no <span className="serif">encontrada</span>.
          </h1>
          <p className="lede mx-auto mt-6 text-center">
            Lo sentimos, no pudimos encontrar la página que buscas. Es posible que se haya introducido una URL
            incorrecta.
          </p>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-[clamp(64px,8vw,120px)] bg-white">
        <div className="sca-wrap">
          <div className="mb-14 text-center">
            <h2 className="h-section">
              ¿A dónde te <span className="serif">gustaría</span> ir?
            </h2>
            <p className="lede mx-auto mt-6 text-center">
              Te mostramos otras opciones que podrían ayudarte a encontrar lo que estás buscando.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {quickLinks.map(({ href, label, Icon }) => (
              <Link key={href} href={href} className="sca-card flex flex-col items-center gap-4 text-center">
                <Icon className="h-10 w-10 text-cobalt" />
                <span className="text-[16px] font-medium text-ink">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Help */}
      <section className="py-[clamp(64px,8vw,120px)] bg-cream">
        <div className="sca-wrap">
          <div className="mb-14 text-center">
            <div className="pill mx-auto mb-6">
              <span className="dot" />
              <span>Ayuda</span>
            </div>
            <h2 className="h-section">
              ¿Necesitas <span className="serif">ayuda</span>?
            </h2>
            <p className="lede mx-auto mt-6 text-center">
              Si aún tiene problemas para encontrar lo que necesita, no dude en comunicarse con nuestro equipo.
            </p>
          </div>
          <div className="mx-auto grid max-w-2xl gap-6 md:grid-cols-2">
            <div className="sca-card text-center">
              <Phone className="mx-auto mb-4 h-10 w-10 text-cobalt" />
              <h3 className="mb-1 text-[18px] font-medium text-ink">Teléfono</h3>
              <p className="mb-4 text-[14px] text-ink-3">Comunícate directamente con nuestro equipo.</p>
              <p className="mb-4 text-[20px] font-medium text-ink">(667) 752-0080</p>
              <p className="mb-6 text-[13px] text-ink-3">Lunes - Viernes 9:00 AM - 6:00 PM</p>
              <a href="tel:+526677520080" className="btn btn-cobalt">
                Llamar
                <ArrowRight className="arrow h-4 w-4" />
              </a>
            </div>
            <div className="sca-card text-center">
              <Mail className="mx-auto mb-4 h-10 w-10 text-cobalt" />
              <h3 className="mb-1 text-[18px] font-medium text-ink">Email</h3>
              <p className="mb-4 text-[14px] text-ink-3">Contáctenos cuando guste.</p>
              <p className="mb-6 text-[14px] font-medium text-ink">administracion@contadoressca.com</p>
              <a href="mailto:administracion@contadoressca.com" className="btn btn-cobalt">
                Redactar
                <ArrowRight className="arrow h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: no TypeScript errors. Build completes successfully.

- [ ] **Step 3: Commit**

```bash
git add app/not-found.tsx
git commit -m "refactor(not-found): migrate to SCA design system"
```

---

## Task 7: Final visual verification

- [ ] **Step 1: Start the dev server**

```bash
npm run dev
```

Open `http://localhost:3000` in a browser.

- [ ] **Step 2: Check each page visually**

Visit each URL and confirm:

| URL | Check |
|---|---|
| `/about` | Cream-soft hero with grid backdrop, pill eyebrow, serif accent in headline. Stats use `num`/`mono` classes (cobalt numbers). Values section uses border-reveal grid (not shadcn Cards). No slate or blue-600 colors visible. |
| `/services` | Cream-soft hero. Services grid matches homepage pattern (mono counter top-left, cobalt icon top-right, hover to white). Process section uses numbered border rows (no blue circles). Industries use border-reveal grid. |
| `/services/contabilidad` | No hero. Pill + h-section title, lede description, cobalt icon. FAQ accordion uses ChevronDown that rotates, border-b dividers. "← Servicios" ghost button. No "← Inicio" button. |
| `/contact` | Cream-soft hero. Four sca-card info boxes (phone, email, address, hours). Map section with cream background. No form visible. |
| `/` + type a bad URL | 404 page: cream-soft hero with faint cobalt "404" watermark. Four quick link cards. Phone + email help cards with btn-cobalt CTAs. No dark: styles visible. |

- [ ] **Step 3: Stop dev server and do a final clean build**

```bash
npm run build
```

Expected: Build completes with 0 errors.

- [ ] **Step 4: Final commit**

```bash
git add .
git commit -m "chore: final build verification — inner pages SCA migration complete"
```
