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
  { label: "Clientes satisfechos", value: "100+" },
  { label: "Staff experto", value: "20" },
  { label: "Retención de clientes", value: "99%" },
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
