"use client"

import Link from "next/link"
import {
  Calculator,
  TrendingUp,
  Shield,
  Users,
  FileText,
  PieChart,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <Calculator className="h-10 w-10 text-blue-600" />,
      title: "Contabilidad y obligaciones fiscales",
      description: "Cumplimiento contable y fiscal mensual.",
      href: "/services/contabilidad",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
      title: "Consultoría contable y fiscal",
      description: "Supervisión estratégica del área contable.",
      href: "/services/consultoria",
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "Auditoría fiscal electrónica",
      description: "Revisión analítica con alcance del 100%.",
      href: "/services/auditoria-fiscal",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Nómina y obligaciones laborales",
      description: "Cálculo y emisión de nóminas conforme a ley.",
      href: "/services/nomina",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
      title: "Asesoría financiera",
      description: "Análisis e interpretación financiera aplicada.",
      href: "/services/asesoria-financiera",
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "Auditoría de estados financieros",
      description: "Opinión profesional sobre estados auditados.",
      href: "/services/auditoria-financiera",
    },
    {
      icon: <Calculator className="h-10 w-10 text-blue-600" />,
      title: "Dictamen de enajenación de acciones",
      description: "Cálculo de utilidad fiscal y ISR por venta de acciones.",
      href: "/services/dictamen-acciones",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Dictamen IMSS",
      description: "Análisis de afiliaciones ante el IMSS.",
      href: "/services/dictamen-imss",
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "Devolución de impuestos a favor",
      description: "Gestión de devoluciones ante la autoridad fiscal.",
      href: "/services/devolucion-impuestos",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Nuestros servicios</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Conozca los servicios que ofrecemos para acompañar su crecimiento empresarial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <Link
                key={idx}
                href={svc.href}
                className="border rounded-lg p-6 hover:shadow-md transition block text-slate-800"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">{svc.title}</h2>
                  {svc.icon}
                </div>
                <p className="text-slate-600">{svc.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
