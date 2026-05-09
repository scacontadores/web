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
