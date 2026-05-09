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
