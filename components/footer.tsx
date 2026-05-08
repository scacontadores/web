import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-ink text-ink-4">
      <div className="sca-wrap py-16">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logoSCA.png"
                alt="SCA Contadores"
                className="h-8 w-8 rounded-md object-contain"
              />
              <span className="text-[16px] font-medium tracking-[-0.02em] text-cream-soft">
                SCA Contadores
              </span>
            </div>
            <p className="mt-5 max-w-[44ch] text-[14px] leading-[1.6] text-ink-4">
              Servicios de confianza orientados al crecimiento empresarial mediante
              una gestión financiera integral y una planificación estratégica eficaz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mono mb-4 text-[12px] font-medium uppercase tracking-[0.08em] text-cream-soft">
              Links
            </h5>
            <ul className="space-y-1.5">
              <FooterLink href="/">Inicio</FooterLink>
              <FooterLink href="/about">Nosotros</FooterLink>
              <FooterLink href="/services">Servicios</FooterLink>
              <FooterLink href="/contact">Contáctanos</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="mono mb-4 text-[12px] font-medium uppercase tracking-[0.08em] text-cream-soft">
              Servicios
            </h5>
            <ul className="space-y-1.5">
              <FooterLink href="/services/asesoria-financiera">Asesoría financiera</FooterLink>
              <FooterLink href="/services/auditoria-eeff">Auditoría de estados financieros</FooterLink>
              <FooterLink href="/services/auditoria-fiscal">Auditoría fiscal electrónica</FooterLink>
              <FooterLink href="/services/contabilidad">Contabilidad y obligaciones fiscales</FooterLink>
              <FooterLink href="/services/dictamen-acciones">Dictamen de enajenación de acciones</FooterLink>
              <FooterLink href="/services/dictamen-imss">Dictamen IMSS</FooterLink>
              <FooterLink href="/services/nomina">Nómina y obligaciones laborales</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="mono mb-4 text-[12px] font-medium uppercase tracking-[0.08em] text-cream-soft">
              Información de contacto
            </h5>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[14px]">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-cobalt" />
                <a
                  href="tel:+526677520080"
                  className="text-ink-4 transition-colors hover:text-cream-soft"
                >
                  (667) 752-0080
                </a>
              </li>
              <li className="flex items-start gap-3 text-[14px]">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-cobalt" />
                <a
                  href="mailto:administracion@contadoressca.com"
                  className="text-ink-4 transition-colors hover:text-cream-soft"
                >
                  administracion@contadoressca.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-[14px]">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-cobalt" />
                <a
                  href="https://maps.app.goo.gl/4vxYzKCMVJTVPop17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-4 transition-colors hover:text-cream-soft"
                >
                  Juan José Ríos 378 Pte.
                  <br />
                  Colonia Jorge Almada
                  <br />
                  Culiacán, Sinaloa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mono flex flex-wrap items-center justify-between gap-5 pt-8 text-[11px] uppercase tracking-[0.06em] text-ink-4">
          <span>© {new Date().getFullYear()} SCA Contadores · Culiacán, Sinaloa</span>
          <span>Derechos reservados</span>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[14px] text-ink-4 transition-colors hover:text-cream-soft hover:underline"
      >
        {children}
      </Link>
    </li>
  )
}
