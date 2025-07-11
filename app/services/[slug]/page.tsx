import {
  Calculator,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react"
import { notFound } from "next/navigation"
import FAQSection from "@/components/FAQSection"

// --- Datos de servicios ---
const services = [
  {
    slug: "contabilidad",
    title: "Contabilidad y obligaciones fiscales",
    icon: Calculator,
    description:
      "Este servicio consiste en elaborar cada mes la contabilidad del Cliente, cumpliendo con ello obligaciones de tipo fiscal y mercantil. Con los datos emanados de la contabilidad se hacen los cálculos y preparación de los formatos fiscales para el cumplimiento de las obligaciones fiscales.",
    faqs: [
      {
        question: "¿Cuál es el perfil o características adecuadas de los negocios a los que se orienta el servicio de contabilidad y obligaciones fiscales?",
        answer:
          "Este servicio está diseñado para negocios con hasta 10 empleados en donde su dueño o dueños están inmersos en la operación del mismo, estableciendo y supervisando a la vez los controles para salvaguardar los activos o propiedades del negocio y para ellos no es relevante el contar con información emanada de la contabilidad para la toma de decisiones. Generalmente a negocios les resulta más económico subcontratar este servicio que establecer un departamento contable propio que les realice esta función.",
      },
      {
        question: "¿El Cliente que contrata este servicio debe invertir en equipos de cómputo y programas informáticos?",
        answer:
          "No, la inversión en estos bienes corre a cargo del Despacho.",
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
  {
    slug: "asesoria-financiera",
    title: "Asesoría financiera",
    icon: Shield,
    description:
      "Este servicio consiste en apoyar al Cliente en la aplicación de técnicas de análisis financiero a su información con el fin de convertir este análisis en conocimiento útil que le permita entender la verdadera situación financiera y económica de la empresa a través de los modelos de tendencias y razones financieras que ayuden a tomar decisiones oportunas y de calidad.",
    faqs: [
      {
        question: "¿Qué es la asesoría financiera?",
        answer: "blablabla",
      },
    ],
  },
  {
    slug: "auditoria-eeff",
    title: "Auditoría de estados financieros",
    icon: Calculator,
    description:
      "Este servicio consiste en emitir una opinión profesional acerca del grado de veracidad que guardan los estados financieros de la empresa que se auditan con el fin de otorgar seguridad razonable tanto a su Administración como a terceras personas interesadas sobre la confiabilidad de los estados financieros para otorgar seguridad a los tomadores de decisiones ya sean estas relacionadas con la operación, la estrategia de negocios o de aspectos de tipo legal",
    faqs: [
      {
        question: "¿Cuáles es el perfil o características adecuadas de las empresas a las que se orienta el servicio de auditoría de estados financieros?",
        answer:
          "Este servicio está diseñado para aquellas empresas que tienen distintos interesados en su situación financiera tales como accionistas que comparten la propiedad de la empresa, proveedores relevantes, bancos que le otorgan préstamos, entre otros. La necesidad de estos usuarios es que dicha información financiera tenga un alto grado de certidumbre en cuanto a su contenido cuantitativo y cualitativo que les otorgue la seguridad necesaria para la toma de decisiones empresariales. ",
      },
    ],
  },
  {
    slug: "dictamen-acciones",
    title: "Dictamen de enajenación de acciones",
    icon: Calculator,
    description:
      "Este servicio consiste en determinar la utilidad fiscal y el pago del impuesto sobre la renta por la venta de acciones que lleva a cabo una persona física propietaria de acciones o partes sociales de una sociedad y emitir un dictamen al Servicio de administración tributaria avalando la correcta determinación de la utilidad fiscal y su correspondiente impuesto sobre la renta a pagar. ",
    faqs: [
      {
        question: "¿Cuándo le es conveniente a un enajenante de acciones presentar el dictamen de enajenación de acciones?",
        answer:
          "El enajenante de las acciones debe pagar impuesto sobre la renta por la utilidad que tenga en esta operación y el comprador de estas acciones debe retenerle un 20% del valor de la enajenación al momento de la venta y enterarlo al Servicio de administración tributaria, mismo que tiene efectos de pago provisional para el enajenante. Si el importe de este 20% del total de la venta de las acciones resultara en una retención excesiva en relación al impuesto definitivo que esta operación le cause al enajenante, existe la alternativa de que el comprador le haga una retención menor al 20%, siempre que ello se compruebe con el dictamen que emita un Contador Público Certificado autorizado ante el Servicio de administración tributaria. De acuerdo a lo anterior le es conveniente al enajenante presentar el dictamen de enajenación de acciones para que la retención sea menor al impuesto definitivo que debe pagar y evitar con ello provocar un saldo a favor y su consecuente solicitud de devolución al Servicio de administración tributaria.",
      },
    ],
  },
  {
    slug: "dictamen-imss",
    title: "Dictamen IMSS",
    icon: Calculator,
    description:
      "Este servicio consiste en el examen a los movimientos de afiliación de los trabajadores al IMSS, la correcta integración de salarios para efectos del pago de cuotas al IMSS; las nóminas, listas de rayas y liquidaciones de cuotas obrero patronales emitidas por el sistema de nóminas del Cliente.",
    faqs: [
      {
        question: "¿Cuál es el perfil o características adecuadas de las empresas a las que se orienta el servicio de Dictamen para efectos del IMSS?",
        answer:
          "Este servicio lo requieren de manera obligatoria (Art. 16 Ley del IMSS) los patrones que cuenten con más de 300 trabajadores o que teniendo menos de esa cantidad, opten por hacerlo voluntariamente. ",
      },
      {
        question: "¿Qué pasa si siendo una empresa con más de 300 trabajadores no presento el dictamen al IMSS?",
        answer:
          "Este incumplimiento está sujeto a sanción administrativa de acuerdo con los Arts. 304-A y 304-B de la Ley del IMSS, así como a la emisión de opinión negativa por parte del IMSS en cuanto al cumplimiento de obligaciones ante este Instituto.",
      },
    ],
  },
  {
    slug: "devolucion-iva",
    title: "Devolución de IVA",
    icon: Calculator,
    description:
      "Este servicio consiste obtener de la Autoridad fiscal la devolución de impuestos a favor del cliente ya sea de IVA o de ISR con motivo causar tasa 0% en los ingresos que obtiene, haber hecho pagos de lo indebido o pagos provisionales en exceso del impuesto anual.",
    faqs: [
      {
        question: "¿Cuáles son las ventajas de contratar el servicio de Devolución de impuestos a favor?",
        answer:
          "El Cliente recupera una cuenta por cobrar a su favor y a cargo de la Autoridad fiscal misma que de no promover su recuperación, puede caducar el derecho a hacerlo. ",
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

          {/* Sección FAQ (cliente) */}
          {service.faqs && service.faqs.length > 0 && (
            <FAQSection faqs={service.faqs} />
          )}

          {/* Botones */}
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md min-w-[160px]">
                  ← Inicio
                </button>
              </a>              
              <a href="/services">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md min-w-[160px]">
                  ← Servicios
                </button>
              </a>         
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
