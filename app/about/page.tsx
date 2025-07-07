import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock, Target } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Acerca de nosotros</h1>
            <p className="text-xl text-slate-200">
              Socios financieros de confianza con más de cuatro décadas de experiencia apoyando a las empresas a tener éxito.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Nuestra historia</h2>
              <p className="text-lg text-slate-600 mb-6">
                Este Despacho fue fundado por el Sr. José Guadalupe Campos Morales con estudios de contador privado y experiencia práctica como administrador
                de negocios e inicia operaciones en el año de 1953 en el domicilio de Escobedo #248 Pte., colonia Centro, Culiacán, Sinaloa, atendiendo pequeños
                negocios en el manejo de contabilidad, declaraciones de impuestos y trámites fiscales ante dependencias gubernamentales. En 1962 el Despacho traslada
                sus operaciones a Juan José Ríos # 368 Pte. Colonia Almada de la misma ciudad e incorpora la participación de sus hijos Ricardo y Héctor
                (hermanos de Samuel) para darle carácter de negocio familiar; es en el año de 1970 cuando Samuel se integra a este Despacho. 
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Con el fallecimiento de su fundador en 1975, el Despacho transmuta a dos liderazgos, el de Ricardo y Héctor por su parte y el de Samuel, quien 
                incorpora a esta nueva etapa a sus hermanos Martha Ruth y David. Los servicios que el Despacho ofrecía preponderantemente hasta ese momento 
                era el de contabilidad a pequeños negocios. 
              </p>
              <p className="text-lg text-slate-600">
                En marzo de 1979 se formaliza la constitución de Samuel Campos y Asociados, S.C. a través de una Sociedad Civil con el objeto de aglutinar 
                socios industriales; en 1980 amplía sus instalaciones iniciando la prestación del servicio de asesoría contable y fiscal para empresas de 
                mayor tamaño y el proceso electrónico de información relativa a elaboración de contabilidades y nóminas generando programas informáticos 
                propios para tal fin. 
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">40+</div>
                  <div className="text-slate-600">Años de experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">999+</div>
                  <div className="text-slate-600">Clientes satisfechos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">20</div>
                  <div className="text-slate-600">Staff experto</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-slate-600">Retención de clientes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestros valores fundamentales</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Los principios que guían todo lo que hacemos</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Excelencia</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                 Se refiere al trato respetuoso, la presentación adecuada y el dominio técnico.
                 Incluye mantener una actitud proactiva, ofrecer soluciones y actuar con objetividad y diligencia.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Integridad</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  La honestidad y la transparencia son fundamentales para generar confianza con los clientes. Un despacho contable debe actuar siempre
                  con ética profesional, respetando la confidencialidad y evitando conflictos de interés.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Responsabilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Cumplir con plazos, normativas fiscales y entregar información precisa son aspectos críticos. La responsabilidad implica asumir
                  consecuencias y garantizar que el trabajo se realice correctamente.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Inovación</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Adoptamos y desarrollamos herramientas tecnológicas de vanguardia para optimizar procesos contables, ofrecer un servicio ágil, preciso
                  y accesible, que nos permitan brindar a nuestros clientes una experiencia moderna, segura y adaptada a sus necesidades.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}
