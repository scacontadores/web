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
