"use client"

import {
  Calculator,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react"
import { useState } from "react"
import { notFound } from "next/navigation"

// --- Datos de servicios ---
const services = [
  {
    slug: "contabilidad",
    title: "Contabilidad y obligaciones fiscales",
    icon: Calculator,
    description:
      "Elaboración de contabilidad mensual del Cliente para el cumplimiento de obligaciones fiscales y mercantiles.",
    faqs: [
      {
        question: "¿Con qué frecuencia debo presentar mi contabilidad?",
        answer:
          "La contabilidad debe presentarse de forma mensual ante las autoridades fiscales.",
      },
      {
        question: "¿Incluye la elaboración de declaraciones?",
        answer:
          "Sí, incluye la elaboración y presentación de declaraciones fiscales correspondientes.",
      },
    ],
  },
  {
    slug: "consultoria",
    title: "Consultoría contable y fiscal",
    icon: TrendingUp,
    description:
      "Acompañamiento y supervisión al departamento de contabilidad del Cliente en la ejecución de la misma.",
    faqs: [
      {
        question: "¿Pueden revisar mi contabilidad interna?",
        answer:
          "Sí, ofrecemos supervisión para asegurar que el trabajo contable cumpla con normativas.",
      },
    ],
  },
  {
    slug: "auditoria-fiscal",
    title: "Auditoría fiscal electrónica",
    icon: Shield,
    description:
      "Revisión y verificación analítica con un alcance total del 100%.",
    faqs: [
      {
        question: "¿Qué incluye una auditoría electrónica?",
        answer: "Incluye la revisión del 100% de los XML y pólizas contables.",
      },
    ],
  },
  {
    slug: "nomina",
    title: "Nómina y obligaciones laborales",
    icon: Users,
    description:
      "Elaboración de nóminas de sueldos del Cliente en conformidad con las disposiciones legales aplicables.",
    faqs: [
      {
        question: "¿También calculan cuotas IMSS e INFONAVIT?",
        answer:
          "Sí, calculamos y timbramos todo lo relacionado a seguridad social y obligaciones laborales.",
      },
    ],
  },
]

// --- SSG para output: export ---
export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }))
}

interface PageProps {
  params: { slug: string }
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  if (!service) return notFound()

  const Icon = service.icon

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Encabezado */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 mb-12">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                {service.title}
              </h1>
              <p className="text-lg text-slate-600 max-w-xl">
                {service.description}
              </p>
            </div>
            <Icon className="h-16 w-16 text-blue-600" />
          </div>

          {/* Preguntas frecuentes */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Preguntas frecuentes
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="border rounded-lg p-4">
                    <button
                      className="w-full text-left text-slate-900 font-medium focus:outline-none"
                      onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                    >
                      {faq.question}
                    </button>
                    {openFAQ === idx && (
                      <p className="mt-2 text-slate-600">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
