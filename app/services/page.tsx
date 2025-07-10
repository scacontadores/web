"use client"

import ServiceCard from "@/components/ServiceCard"
import {
  Calculator,
  TrendingUp,
  Shield,
  Users,
  FileText,
  PieChart,
  Building,
  CreditCard,
  BookOpen,
  Target,
} from "lucide-react"

export default function ServiciosPage() {
  const services = [
    {
      icon: <Calculator className="h-12 w-12 text-blue-600 mx-auto" />,
      title: "Contabilidad y obligaciones fiscales",
      description:
        "Elaboración de contabilidad mensual del Cliente para el cumplimiento de obligaciones fiscales y mercantiles.",
      faqs: [
        "¿Cada cuándo debo presentar mis declaraciones fiscales?",
        "¿Qué documentos necesito para cumplir con mis obligaciones contables?",
        "¿Ofrecen contabilidad electrónica?",
      ],
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600 mx-auto" />,
      title: "Consultoría contable y fiscal",
      description:
        "Acompañamiento y supervisión al departamento de contabilidad del Cliente en la ejecución de la misma.",
      faqs: [
        "¿Incluye revisiones mensuales?",
        "¿Puedo solicitar asesorías por proyecto?",
      ],
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600 mx-auto" />,
      title: "Auditoría fiscal electrónica",
      description:
        "Revisión y verificación analítica con un alcance total del 100%.",
      faqs: [
        "¿Qué incluye una auditoría electrónica?",
        "¿Revisan todos los XML?",
      ],
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600 mx-auto" />,
      title: "Nómina y obligaciones laborales",
      description:
        "Elaboración de nóminas de sueldos del Cliente en conformidad con las disposiciones legales aplicables.",
      faqs: [
        "¿También calculan cuotas IMSS e INFONAVIT?",
        "¿Ofrecen soporte ante inspecciones laborales?",
      ],
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600 mx-auto" />,
      title: "Asesoría financiera",
      description:
        "Aplicación de técnicas de análisis financiero con el objetivo de generar conocimiento práctico y valioso.",
      faqs: [
        "¿Realizan análisis de estados financieros?",
        "¿Pueden ayudarme a estructurar un plan de inversión?",
      ],
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600 mx-auto" />,
      title: "Auditoría de estados financieros",
      description:
        "Opinión profesional acerca de la fiabilidad de los estados financieros de la empresa auditada.",
      faqs: [
        "¿Entregan dictamen con firma de auditor?",
        "¿Incluye carta de recomendaciones?",
      ],
    },
    {
      icon: <Calculator className="h-12 w-12 text-blue-600 mx-auto" />,
      title: "Dictamen de enajenación de acciones",
      description:
        "Determinación de la utilidad fiscal e ISR derivado de la venta de acciones.",
      faqs: [
        "¿Qué documentos necesito para este dictamen?",
        "¿Cuánto tarda el proceso?",
      ],
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600 mx-auto" />,
      title: "Dictamen IMSS",
      description:
        "Análisis de los movimientos de afiliación de los trabajadores al IMSS.",
      faqs: [
        "¿El dictamen es obligatorio?",
        "¿Incluye revisión de SUA?",
      ],
    },
    {
      icon: <Calculator className="h-12 w-12 text-blue-600 mx-auto" />,
      title: "Devolución de impuestos a favor",
      description:
        "Gestión ante la Autoridad Fiscal para la obtención de la devolución de impuestos a favor del Cliente.",
      faqs: [
        "¿Qué requisitos necesito?",
        "¿Cuánto tiempo tarda la devolución?",
      ],
    },
  ]

  const industries = [
    { name: "Salud", icon: Building },
    { name: "Bienes raíces", icon: Building },
    { name: "Tecnología", icon: Target },
    { name: "Manufactura", icon: Building },
    { name: "Retail", icon: CreditCard },
    { name: "Servicios profesionales", icon: Users },
    { name: "Organizaciones sin fines de lucro", icon: BookOpen },
    { name: "Construcción", icon: Building },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Servicios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Nuestros servicios</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Generamos y compartimos conocimiento de vanguardia en las áreas de contabilidad, fiscal, financiera y auditoría.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <ServiceCard
                key={idx}
                title={svc.title}
                description={svc.description}
                icon={svc.icon}
                faqs={svc.faqs}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestro proceso</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Así trabajamos para brindarte resultados excepcionales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Consulta inicial", "Propuesta personalizada", "Implementación", "Soporte continuo"].map((title, idx) => (
              <div className="text-center" key={idx}>
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-600">
                  {[
                    "Nos reunimos para entender tus necesidades y situación financiera actual.",
                    "Creamos un plan de servicios con precios y tiempos transparentes.",
                    "Ejecutamos el plan con comunicación y actualizaciones constantes.",
                    "Brindamos soporte y asesoría estratégica continua."
                  ][idx]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Sectores con los que trabajamos</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tenemos amplia experiencia colaborando con empresas de diversas industrias
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <industry.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
