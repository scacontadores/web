import {
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  FileText,
  MessagesSquare,
  FileSearch,
  Users,
  LineChart,
  ClipboardCheck,
  TrendingUp,
  ShieldCheck,
  RotateCcw,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import type { ComponentType } from "react"

type Service = {
  href: string
  title: string
  description: string
  Icon: ComponentType<{ className?: string }>
}

const SERVICES: Service[] = [
  {
    href: "/services/contabilidad",
    title: "Contabilidad y obligaciones fiscales",
    description:
      "Elaboración de contabilidad mensual del Cliente para el cumplimiento de obligaciones fiscales y mercantiles.",
    Icon: FileText,
  },
  {
    href: "/services/consultoria",
    title: "Consultoría contable y fiscal",
    description:
      "Acompañamiento y supervisión al departamento de contabilidad del Cliente en la ejecución de la misma.",
    Icon: MessagesSquare,
  },
  {
    href: "/services/auditoria-fiscal",
    title: "Auditoría fiscal electrónica",
    description: "Revisión y verificación analítica con un alcance total del 100%.",
    Icon: FileSearch,
  },
  {
    href: "/services/nomina",
    title: "Nómina y obligaciones laborales",
    description:
      "Elaboración de nóminas de sueldos del Cliente ​​en estricta conformidad con las disposiciones legales aplicables.",
    Icon: Users,
  },
  {
    href: "/services/asesoria-financiera",
    title: "Asesoría financiera",
    description:
      "Aplicación de técnicas de análisis financiero a la información del Cliente para generar conocimiento práctico y valioso.",
    Icon: LineChart,
  },
  {
    href: "/services/auditoria-eeff",
    title: "Auditoría de estados financieros",
    description:
      "Emisión de opiniones profesionales acerca de la fiabilidad de los estados financieros de la empresa auditada.",
    Icon: ClipboardCheck,
  },
  {
    href: "/services/dictamen-acciones",
    title: "Dictamen de enajenación de acciones",
    description:
      "Determinación de la utilidad fiscal y cálculo del ISR derivado de la venta de acciones.",
    Icon: TrendingUp,
  },
  {
    href: "/services/dictamen-imss",
    title: "Dictamen IMSS",
    description: "Análisis de los movimientos de afiliación de los trabajadores al IMSS.",
    Icon: ShieldCheck,
  },
  {
    href: "/services/devolucion-iva",
    title: "Devolución de IVA",
    description:
      "Gestión ante la Autoridad Fiscal para obtener la devolución de impuestos a favor del Cliente.",
    Icon: RotateCcw,
  },
]

const PILLARS = [
  {
    title: "Longevidad",
    description:
      "Desde el año 1953 y a través de tres generaciones, hemos estado apoyando de manera ininterrumpida a las PYMES y a los emprendedores de la región.",
  },
  {
    title: "Expertise",
    description:
      "Generamos y compartimos conocimiento de vanguardia en las áreas de contabilidad, fiscal, financiera y auditoría.",
  },
  {
    title: "Empatía",
    description:
      "Entendemos el entorno, las necesidades, posibilidades y las oportunidades de las empresas y sus empresarios más allá del ambiente contable y fiscal.",
  },
  {
    title: "Capital humano",
    description:
      "Nuestro equipo de trabajo está en constante capacitación y tiene el compromiso con la creación de valor y la perdurabilidad de las empresas a través de la prestación de nuestros servicios.",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream-soft">
      {/* Hero */}
      <section className="relative overflow-hidden py-[clamp(56px,8vw,120px)]">
        <div className="hero-grid-bg" />
        <div className="sca-wrap relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div className="flex flex-col gap-7">
              <div className="pill">
                <span className="dot" />
                <span>SCA Contadores · Desde 1953</span>
              </div>
              <h1 className="h-display max-w-[14ch]">
                Soluciones para su <span className="serif">negocio</span>.
              </h1>
              <p className="lede">
                Servicios de confianza orientados al crecimiento empresarial mediante una
                gestión financiera integral y una planificación estratégica eficaz.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Agendar
                  <ArrowRight className="arrow h-4 w-4" />
                </Link>
                <Link href="#services" className="btn btn-ghost">
                  Conocer servicios
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4 border-t border-line-soft pt-6">
                <div>
                  <div className="mono text-[11px] uppercase tracking-[0.06em] text-ink-3">
                    Experiencia
                  </div>
                  <div className="num mt-1 text-[22px] font-medium tracking-[-0.02em]">
                    40+ años
                  </div>
                </div>
                <div>
                  <div className="mono text-[11px] uppercase tracking-[0.06em] text-ink-3">
                    Servicios
                  </div>
                  <div className="num mt-1 text-[22px] font-medium tracking-[-0.02em]">
                    9 áreas
                  </div>
                </div>
                <div>
                  <div className="mono text-[11px] uppercase tracking-[0.06em] text-ink-3">
                    Sede
                  </div>
                  <div className="mt-1 text-[22px] font-medium tracking-[-0.02em]">
                    Culiacán, Sin.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/logoSCA.png"
                alt="SCA Contadores"
                className="w-full max-w-[360px] rounded-xl border border-line-soft bg-white p-10 shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-[clamp(64px,8vw,120px)]">
        <div className="sca-wrap">
          <div className="mb-14 grid items-end gap-6 md:grid-cols-[1.1fr_1fr] md:gap-16">
            <div>
              <div className="pill mb-6">
                <span className="dot" />
                <span>Servicios</span>
              </div>
              <h2 className="h-section">
                Nuestros <span className="serif">servicios</span>.
              </h2>
            </div>
            <p className="lede">
              Generamos y compartimos conocimiento de vanguardia en las áreas de
              contabilidad, fiscal, financiera y de auditoría.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => {
              const { Icon } = service
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group relative flex min-h-[240px] flex-col bg-cream-soft p-8 transition-colors hover:bg-white"
                >
                  <span className="mono text-[11px] uppercase tracking-[0.08em] text-ink-4">
                    {String(i + 1).padStart(2, "0")} / 09
                  </span>
                  <Icon className="absolute right-7 top-7 h-7 w-7 text-cobalt opacity-85" />
                  <h3 className="mt-5 max-w-[22ch] text-[19px] font-medium leading-[1.2] tracking-[-0.018em] text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14px] leading-[1.55] text-ink-3">
                    {service.description}
                  </p>
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

      {/* Pillars / Why choose us */}
      <section id="firm" className="bg-cream py-[clamp(64px,8vw,120px)]">
        <div className="sca-wrap">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_1.2fr] md:gap-20">
            <div>
              <div className="pill mb-6">
                <span className="dot" />
                <span>La firma</span>
              </div>
              <h2 className="h-section">
                Nuestra <span className="serif">firma</span>.
              </h2>
              <p className="lede mt-6">
                Con más de 40 años de experiencia, brindamos servicios de contabilidad
                profesionales y confiables que ayudan a las empresas a prosperar en el
                mercado competitivo actual.
              </p>
            </div>
            <div>
              {PILLARS.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className={`grid grid-cols-[80px_1fr] gap-6 border-t border-line py-7 ${
                    i === PILLARS.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="mono pt-1 text-[12px] uppercase tracking-[0.08em] text-ink-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="mb-2 text-[22px] font-medium tracking-[-0.02em] text-ink">
                      {pillar.title}
                    </h3>
                    <p className="text-[15px] leading-[1.55] text-ink-2">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden bg-cobalt py-[clamp(64px,8vw,120px)] text-white">
        <div className="sca-wrap relative">
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20">
            <div>
              <div className="pill mb-6 border-white/20 bg-white/10 text-white">
                <span className="dot bg-white" />
                <span>Contacto</span>
              </div>
              <h2 className="h-section text-white">
                <span className="serif">Contáctanos</span>.
              </h2>
              <p className="lede mt-6 max-w-[44ch] text-white/85">
                Conoceremos tu negocio y te diremos exactamente cómo podemos
                acompañarte.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+526677520080"
                  className="btn"
                  style={{ background: "white", color: "var(--cobalt)" }}
                >
                  Llamar ahora
                </a>
                <Link
                  href="/contact"
                  className="btn"
                  style={{ background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.4)" }}
                >
                  Agendar
                </Link>
              </div>
            </div>

            <div className="rounded-lg bg-white p-9 text-ink">
              <ContactRow icon={<Phone className="h-5 w-5" />} label="Teléfono">
                <a href="tel:+526677520080" className="hover:text-cobalt hover:underline underline-offset-4">
                  (667) 752-0080
                </a>
              </ContactRow>
              <ContactRow icon={<Mail className="h-5 w-5" />} label="Correo">
                <a
                  href="mailto:administracion@contadoressca.com"
                  className="hover:text-cobalt hover:underline underline-offset-4"
                >
                  administracion@contadoressca.com
                </a>
              </ContactRow>
              <ContactRow icon={<MapPin className="h-5 w-5" />} label="Oficina">
                <a
                  href="https://maps.app.goo.gl/4vxYzKCMVJTVPop17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cobalt hover:underline underline-offset-4"
                >
                  Juan José Ríos 378 Pte.
                  <br />
                  Colonia Jorge Almada, Culiacán, Sinaloa
                </a>
              </ContactRow>
              <div className="flex items-start gap-3.5 py-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-cobalt" />
                <div>
                  <div className="mono text-[11px] uppercase tracking-[0.06em] text-ink-3">
                    Compromiso
                  </div>
                  <div className="mt-0.5 text-[15px] leading-[1.4] text-ink">
                    Tres generaciones, una misma firma.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3.5 border-b border-line-soft py-4 last:border-b-0">
      <span className="mt-0.5 flex-shrink-0 text-cobalt">{icon}</span>
      <div>
        <div className="mono text-[11px] uppercase tracking-[0.06em] text-ink-3">
          {label}
        </div>
        <div className="mt-0.5 text-[15px] leading-[1.4] text-ink">{children}</div>
      </div>
    </div>
  )
}
