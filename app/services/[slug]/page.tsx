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
        question: "¿A quién está dirigido este servicio?",
        answer:
          "A negocios con hasta 10 empleados, cuyos dueños participan directamente en la operación y supervisión, y que prefieren subcontratar la contabilidad y obligaciones fiscales en lugar de mantener un departamento contable propio.",
      },
      {
        question: "¿Necesito invertir en equipo o software contable?",
        answer:
          "No, todo el equipo y software necesarios son proporcionados por nuestro despacho.",
      },
      {
        question: "¿Qué pasa si no llevo contabilidad siendo microempresario?",
        answer:
          "Incumplirías obligaciones fiscales, lo que puede generar sanciones, posibles delitos fiscales y que la autoridad determine los impuestos a pagar según sus criterios.",
      },
      {
        question: "¿Incluye asesoría sobre el régimen fiscal más conveniente y beneficios disponibles?",
        answer:
          "Sí, este servicio incluye orientación para elegir el régimen fiscal más favorable y aprovechar beneficios fiscales.",
      },
      {
        question: "¿Incluye asesoría sobre la emisión y validación de CFDI?",
        answer:
          "Sí, te orientamos en cómo emitir correctamente tus CFDI y verificar que los recibidos cumplan con los requisitos fiscales.",
      },
      {
        question: "¿Asumo alguna responsabilidad laboral por el personal del despacho?",
        answer:
          "No, el servicio es independiente y el personal del despacho atiende también a otros clientes, por lo que no asumes responsabilidades laborales.",
      },      
    ],
  },
  {
    slug: "consultoria",
    title: "Consultoría contable y fiscal",
    icon: TrendingUp,
    description:
      "Supervisamos y acompañamos a tu departamento de contabilidad para garantizar registros confiables, cumplimiento de las NIF y obligaciones fiscales, laborales y societarias. Optimizamos beneficios y tratamientos fiscales, y calculamos mensualmente tus impuestos federales con nuestra plataforma Compliance Fiscal Inteligente (CFI), que usa inteligencia artificial para adaptarse a las necesidades específicas de tu empresa.",
    faqs: [
      {
        question: "¿A quién está dirigido este servicio?",
        answer:
          "A pequeñas y medianas empresas que consideran la contabilidad como una herramienta clave para la toma de decisiones y el control interno, y que cuentan con un departamento contable propio apoyado en sistemas informáticos y personal competente.",
      },
      {
        question: "¿Cómo calcula la plataforma CFI mis obligaciones fiscales considerando beneficios y estímulos?",
        answer:
          "Realiza un diagnóstico de tu situación mediante cuestionarios inteligentes que identifican obligaciones y beneficios aplicables según leyes, reglamentos y reglas fiscales. Con esta información, construye un modelo personalizado para calcular tus obligaciones con alto grado de certeza.",
      },
      {
        question: "¿Cuáles son los entregables de este servicio?",
        answer:
          "Observaciones sobre inconsistencias contables, cédulas comparativas con el detalle del cálculo mensual de impuestos y fundamentos legales que respaldan las respuestas a tus consultas.",
      },
      {
        question: "¿Incluye capacitación para mi personal?",
        answer:
          "Sí, a través del acompañamiento y la atención de consultas, además de dos cursos anuales de actualización en disposiciones fiscales relevantes.",
      },
      {
        question: "¿Este servicio reemplaza a mi departamento de contabilidad?",
        answer:
          "No, complementa su trabajo mediante supervisión, asesoría especializada y herramientas que mejoran la calidad y confiabilidad de la información.",
      },
      {
        question: "¿Qué beneficios obtengo al contratar este servicio?",
        answer:
          "Mayor certeza y confiabilidad en la información contable, cumplimiento oportuno de obligaciones fiscales y aprovechamiento de beneficios legales que optimicen tu carga tributaria.",
      }, 
    ],
  },
  {
    slug: "auditoria-fiscal",
    title: "Auditoría fiscal electrónica",
    icon: Shield,
    description:
      "Revisamos y verificamos al 100% los CFDI emitidos y recibidos por tu empresa —incluyendo ingresos, egresos, complementos de pago, nómina y carta porte— para asegurar su correcta asociación con la contabilidad, cumplimiento de requisitos fiscales y validez ante el SAT. Validamos importes, retenciones, tasas de IVA, deducibilidad de gastos, operaciones vinculadas al objeto social y la existencia de CFDI que puedan corresponder a operaciones inexistentes. También conciliamos la información del SAT con tus registros y detectamos proveedores listados como EFOS en los últimos cinco ejercicios.",
    faqs: [
      {
        question: "¿Cuáles son las ventajas de contratar este servicio?",
        answer: "Permite conocer si los CFDI emitidos y recibidos cumplen con el CFF y la RMF, si todas las operaciones registradas están respaldadas, y si existen CFDI no registrados o vinculados con EFOS. Reduce el riesgo de visitas domiciliarias, restricciones al uso del certificado de sello digital y facilita responder oportunamente auditorías fiscales electrónicas.",
      },
      {
        question: "¿Cuáles son los reportes o entregables que recibo?",
        answer: "Un informe detallado con los resultados de la revisión, cuantificación de inconsistencias y sugerencias para corregirlas, acompañado de anexos con la evidencia y soporte de cada procedimiento aplicado.",
      },
      {
        question: "¿Qué consecuencias tiene emitir o recibir CFDI con deficiencias o no hacerlo estando obligado?",
        answer: "Puede generar sanciones administrativas, la imposibilidad de deducir fiscalmente o acreditar IVA, e incluso sanciones penales según el Código Fiscal de la Federación.",
      },
      {
        question: "¿Qué pasa si tengo CFDI emitidos por EFOS y no compruebo la materialidad de la operación?",
        answer: "La autoridad puede determinar que las erogaciones no sean deducibles, el IVA no acreditable, imponer sanciones, hacer responsables solidarios a socios y administradores, negar subsidios o estímulos, y restringir el certificado de sello digital.",
      },
      {
        question: "¿Incluye la conciliación con la información del SAT?",
        answer: "Sí, comparamos todos los CFDI en el repositorio del SAT con los registros contables, tanto de los emitidos como de los recibidos, para detectar omisiones o inconsistencias.",
      },
      {
        question: "¿Revisan la deducibilidad de gastos y el cumplimiento de requisitos fiscales?",
        answer: "Sí, validamos que los conceptos facturados correspondan a la actividad de la empresa y cumplan con las disposiciones fiscales para su deducibilidad y acreditamiento, incluyendo gastos de nómina, mantenimiento, viáticos y más.",
      },      
    ],
  },
  {
    slug: "nomina",
    title: "Nómina y obligaciones laborales",
    icon: Users,
    description:
      "Elaboramos y timbramos tus nóminas cumpliendo con todas las disposiciones laborales y fiscales. Calculamos y preparamos para tu pago las cuotas IMSS, Infonavit, SAR y el impuesto estatal sobre nóminas, realizando los ajustes necesarios por incidencias del periodo.",
    faqs: [
      {
        question: "¿A quién está dirigido este servicio?",
        answer:
          "A negocios con hasta 10 empleados sin departamento contable, y a empresas más grandes que prefieren externalizar la nómina por ser más rentable que gestionarla internamente.",
      },
      {
        question: "¿Necesito invertir en equipo o software para la nómina?",
        answer:
          "No, todo el equipo y software necesarios son proporcionados por nuestro despacho.",
      },
      {
        question: "¿Por qué contratar este servicio si ya tengo contabilidad o recursos humanos internos?",
        answer:
          "Para delegar a expertos especializados en leyes laborales y fiscales, reducir riesgos por errores o incumplimientos, liberar a tu personal para tareas más rentables y evitar costos en equipo, software y capacitación continua.",
      },
      {
        question: "¿Incluye cálculos y comprobantes de vacaciones, aguinaldo, finiquitos y utilidades?",
        answer:
          "Sí, todos estos conceptos están incluidos en el servicio.",
      },
      {
        question: "¿Incluye el diseño e implementación de un plan de previsión social?",
        answer:
          "No, este trabajo no está incluido en el costo del servicio.",
      },
       {
        question: "¿Incluye el timbrado de los recibos de pago?",
        answer:
          "Sí, la emisión y timbrado de los recibos de pago a trabajadores está incluida en el servicio.",
      },     
    ],
  },
  {
    slug: "asesoria-financiera",
    title: "Asesoría financiera",
    icon: Shield,
    description:
      "Aplicamos técnicas de análisis financiero para transformar tus datos en información clave que te ayude a entender la situación real de tu empresa y tomar decisiones acertadas. Creamos un modelo personalizado con comparativos de estados financieros, análisis de resultados, balance, flujo de efectivo, capital de trabajo y razones financieras. Además, te acompañamos en reuniones de análisis para identificar tendencias, oportunidades, debilidades y amenazas.",
    faqs: [
      {
        question: "¿En qué consiste el servicio de asesoría financiera?",
        answer: "Analizamos a fondo tu información financiera para brindarte un diagnóstico claro de la situación económica de tu empresa y ayudarte a tomar decisiones oportunas.",
      },
      {
        question: "¿Qué tipo de análisis realizan?",
        answer: "Elaboramos un modelo personalizado que compara y analiza estados financieros, estado de resultados, balance general, flujo de efectivo, capital de trabajo y razones financieras.",
      },
      {
        question: "¿Incluye reuniones para revisar los resultados?",
        answer: "Sí, te acompañamos en reuniones periódicas para explicar el análisis, detectar tendencias, oportunidades, debilidades y amenazas.",
      },
      {
        question: "¿Se adapta el análisis a las necesidades de mi empresa?",
        answer: "Sí, el modelo es personalizado según tu estructura, pudiendo incluir estados financieros individuales, combinados o consolidados.",
      },
      {
        question: "¿Este servicio es sólo para empresas grandes?",
        answer: "No, está diseñado para cualquier empresa que busque comprender mejor su situación financiera y optimizar la toma de decisiones.",
      },
    ],
  },
  {
    slug: "auditoria-eeff",
    title: "Auditoría de estados financieros",
    icon: Calculator,
    description:
      "Emitimos una opinión profesional sobre la veracidad de tus estados financieros, brindando seguridad razonable a tu administración y a terceros sobre su confiabilidad para la toma de decisiones operativas, estratégicas o legales. Aplicamos normas internacionales de auditoría y evaluamos el control interno, políticas contables, salvaguarda de activos e integridad empresarial, adaptándonos a las circunstancias de tu empresa.",
    faqs: [
      {
        question: "¿A quién está dirigido este servicio?",
        answer:
          "A empresas con accionistas, proveedores, bancos u otros interesados que requieren información financiera confiable, ya sea por obligación legal, fiscal o estatutaria, o para contar con una opinión imparcial cuando la administración está a cargo de terceros.",
      },
      {
        question: "¿En qué consiste la auditoría de estados financieros?",
        answer:
          "En evaluar y emitir una opinión profesional sobre la veracidad y confiabilidad de los estados financieros, aplicando normas internacionales de auditoría y revisando el control interno de la empresa.",
      },
      {
        question: "¿Qué elementos garantizan la confianza en la opinión del auditor?",
        answer:
          "El cumplimiento de las Normas de Información Financiera (NIF), la aplicación de Normas Internacionales de Auditoría, el apego a un código de ética profesional y la experiencia, probidad y reconocimiento del Contador Público Certificado que realiza el trabajo.",
      },
      {
        question: "¿Cuáles son las principales ventajas de este servicio?",
        answer:
          "Detectar errores o sesgos en la información financiera, identificar riesgos y debilidades en controles internos, sugerir mejoras en procesos, y generar mayor confianza ante inversionistas o acreedores, lo que puede facilitar financiamiento en mejores condiciones.",
      },
      {
        question: "¿Incluye la revisión de controles internos?",
        answer:
          "Sí, el servicio evalúa políticas contables, salvaguarda de activos, integridad empresarial y otros aspectos clave para la confiabilidad de la información financiera.",
      },
      {
        question: "¿Se adapta la auditoría a cada empresa?",
        answer:
          "Sí, el trabajo se ajusta a las circunstancias específicas de cada cliente, considerando sus necesidades, estructura y requerimientos legales o contractuales.",
      },      
    ],
  },
  {
    slug: "dictamen-acciones",
    title: "Dictamen de enajenación de acciones",
    icon: Calculator,
    description:
      "Determinamos la utilidad fiscal y el ISR derivado de la venta de acciones o partes sociales realizada por una persona física, emitiendo un dictamen ante el SAT que avala el correcto cálculo y pago del impuesto.",
    faqs: [
      {
        question: "¿Es obligatorio presentar el dictamen de enajenación de acciones?",
        answer:
          "No, solo se presenta si la persona física considera que le conviene hacerlo.",
      },
      {
        question: "¿Cuándo conviene presentar el dictamen de enajenación de acciones?",
        answer:
          "Cuando el 20% de retención sobre el valor de venta que aplica el comprador sea mayor al impuesto definitivo, ya que el dictamen permite reducir esa retención y evitar saldos a favor. También es recomendable cuando se requiere un cálculo preciso de la utilidad fiscal, debido a la alta complejidad y variables históricas involucradas en la venta de acciones.",
      },
      {
        question: "¿Qué ventajas ofrece este servicio?",
        answer:
          "Brinda seguridad y confianza al contar con un profesional experto en la materia, permite reducir la retención de ISR evitando desembolsos innecesarios y trámites de devolución, y en caso de revisión por parte del SAT, el despacho asume la corresponsabilidad y atiende directamente el proceso.",
      },
      {
        question: "¿El servicio incluye la presentación del dictamen ante el SAT?",
        answer:
          "Sí, nos encargamos de elaborar y presentar el dictamen cumpliendo con todos los requisitos legales y fiscales establecidos.",
      },
    ],
  },
  {
    slug: "dictamen-imss",
    title: "Dictamen IMSS",
    icon: Calculator,
    description:
      "Revisamos la afiliación de trabajadores, la integración de salarios para el cálculo de cuotas, nóminas, contratos, registros contables y clasificación de prima de riesgo. Verificamos el cumplimiento de la Ley del IMSS y el RACERF, asegurando que el pago de cuotas obrero patronales sea correcto. Este dictamen, contemplado en el Art. 170 del RACERF, tiene validez legal salvo prueba en contrario, otorgando certeza a la empresa sobre el cumplimiento de sus obligaciones.",
    faqs: [
      {
        question: "¿A quién está dirigido este servicio?",
        answer:
          "Es obligatorio para patrones con más de 300 trabajadores (Art. 16 de la Ley del IMSS) y opcional para quienes tengan menos, pero deseen presentarlo de forma voluntaria para obtener sus beneficios.",
      },
      {
        question: "¿Qué pasa si no presento el dictamen teniendo más de 300 trabajadores?",
        answer:
          "El incumplimiento puede generar sanciones administrativas (Arts. 304-A y 304-B de la Ley del IMSS) y una opinión negativa del Instituto sobre el cumplimiento de obligaciones.",
      },
      {
        question: "¿Qué beneficios ofrece este servicio?",
        answer:
          "Permite la autocorrección de errores, evita multas, reduce revisiones del ejercicio anterior y exenta de visitas domiciliarias por los periodos dictaminados, ya sea de forma obligatoria o voluntaria.",
      },
      {
        question: "¿Quién puede emitir el dictamen para efectos del IMSS?",
        answer:
          "Solo un Contador Público Autorizado por el IMSS puede elaborarlo y presentarlo oficialmente, garantizando su validez legal.",
      },
      {
        question: "¿Incluye la revisión de la prima de riesgo de trabajo?",
        answer:
          "Sí, verificamos la correcta clasificación de la prima de riesgo para evitar pagos indebidos o diferencias posteriores.",
      },
      {
        question: "¿Qué pasa si el IMSS detecta diferencias después del dictamen?",
        answer:
          "El dictamen se presume válido salvo prueba en contrario; si se detectan diferencias, deberán regularizarse conforme a la ley.",
      }, 
    ],
  },
  {
    slug: "devolucion-iva",
    title: "Devolución de IVA",
    icon: Calculator,
    description:
      "Gestionamos ante la autoridad fiscal la devolución de saldos a favor de IVA, ya sea por aplicar tasa 0% en ingresos, pagos indebidos o provisionales en exceso. Revisamos minuciosamente registros contables, CFDI, estados de cuenta y materialidad de operaciones, y elaboramos la documentación requerida para presentar la solicitud formal y dar seguimiento a su resolución.
",
    faqs: [
      {
        question: "¿En qué consiste este servicio?",
        answer:
          "En gestionar ante la autoridad fiscal la devolución de saldos a favor de IVA, revisando contabilidad, CFDI, estados de cuenta y materialidad de operaciones, y preparando toda la documentación requerida para sustentar la solicitud.",
      },
      {
        question: "¿En qué casos puedo solicitar la devolución de IVA?",
        answer:
          "Cuando se aplicó tasa 0% en ingresos, se hicieron pagos indebidos o pagos provisionales superiores al impuesto anual causado.",
      },
      {
        question: "¿Qué revisa el despacho antes de presentar la solicitud?",
        answer:
          "Realizamos una revisión detallada de registros contables, CFDI, estados de cuenta, razón de negocio y elementos de materialidad de las operaciones que originan el saldo a favor.",
      },
      {
        question: "¿Cuáles son las ventajas de contratar este servicio?",
        answer:
          "Recuperas un saldo a tu favor antes de que prescriba el derecho, cuentas con asesoría especializada que ahorra tiempo y reduce riesgos, tienes certeza de que la devolución es procedente y recibes un diagnóstico previo para evaluar la viabilidad antes de iniciar el trámite.",
      },
      {
        question: "¿El servicio incluye la presentación de la solicitud ante el SAT?",
        answer:
          "Sí, elaboramos los escritos, formatos y anexos, y presentamos la solicitud directamente ante la autoridad fiscal, dando seguimiento hasta la resolución.",
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
              <p className="text-lg text-slate-600 max-w-xl text-justify">
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
