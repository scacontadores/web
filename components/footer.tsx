import { Calculator, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logoSCA.png"
                alt="Logo Contadores SCA"
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold">SCA Contadores</span>
            </div>
            <p className="text-slate-300 mb-4 text-justify">
              Servicios de confianza orientados al crecimiento empresarial mediante una gestión financiera integral y una planificación estratégica eficaz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white hover:underline transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white hover:underline transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white hover:underline transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white hover:underline transition-colors">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/services/asesoria-financiera" className="hover:text-white hover:underline transition-colors">
                  Asesoría financiera
                </Link>
              </li>
              <li>
                <Link href="/services/auditoria-eeff" className="hover:text-white hover:underline transition-colors">
                  Auditoría de estados financieros
                </Link>
              </li>
              <li>
                <Link href="/services/auditoria-fiscal" className="hover:text-white hover:underline transition-colors">
                  Auditoría fiscal electrónica
                </Link>
              </li>
              <li>
                <Link href="/services/contabilidad" className="hover:text-white hover:underline transition-colors">
                  Contabilidad y obligaciones fiscales
                </Link>
              </li>
              <li>
                <Link href="/services/dictamen-acciones" className="hover:text-white hover:underline transition-colors">
                  Dictamen de enajenación de acciones
                </Link>
              </li>
              <li>
                <Link href="/services/dictamen-imss" className="hover:text-white hover:underline transition-colors">
                  Dictamen IMSS
                </Link>
              </li>
              <li>
                <Link href="/services/nomina" className="hover:text-white hover:underline transition-colors">
                  Nómina y obligaciones laborales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Información de contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+526677520080">
                  <span className="text-slate-300 hover:underline">(667)752-0080</span>                
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:administracion@contadoressca.com">
                  <span className="text-slate-300 hover:underline">administracion@contadoressca.com</span>
                </a>
              </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-blue-400" />
                <a
                  href="https://maps.app.goo.gl/4vxYzKCMVJTVPop17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:underline"
                >
                  Juan José Ríos 378 Pte.<br />
                  Colonia Jorge Almada<br />
                  Culiacán, Sinaloa
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-300">© {new Date().getFullYear()} SCA Contadores. Derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
