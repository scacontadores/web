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
              <span className="text-xl font-bold">Contadores SCA</span>
            </div>
            <p className="text-slate-300 mb-4">
              Servicios de contabilidad profesionales de confianza. Ayudamos a las empresas a crecer con una gestión financiera experta.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Asesoría financiera</li>
              <li>Auditoría de estados financieros</li>
              <li>Auditoría fiscal electrónica</li>
              <li>Contabilidad y obligaciones fiscales</li>
              <li>Dictamen de enajenación de acciones</li>
              <li>Dictamen IMSS</li>
              <li>Nómina y obligaciones laborales</li>
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
          <p className="text-slate-300">© {new Date().getFullYear()} Contadores SCA. Derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
