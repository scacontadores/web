"use client"

import { useParams } from "next/navigation"
import {
  Calculator,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react"
import { useState } from "react"

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
        answer: "La contabilidad debe presentarse de forma mensual ante las autoridades fiscales.",
      },
      {
        question: "¿Incluye la elaboración de declaraciones?",
        answer: "Sí, incluye la elaboración y presentación de declaraciones fiscales correspondientes.",
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
        answer: "Sí, ofrecemos supervisión para asegurar que el trabajo contable cumpla con normativas.",
      },
    ],
  },
  // Puedes añadir más servicios con sus respectivas FAQs aquí...
]

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Servicio no encontrado</h1>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 mb-12">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">{service.title}</h1>
              <p className="text-lg text-slate-600 max-w-xl">{service.description}</p>
            </div>
            <Icon className="h-16 w-16 text-blue-600" />
          </div>

          {service.faqs && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Preguntas frecuentes</h2>
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
