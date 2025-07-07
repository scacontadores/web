import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Shield, TrendingUp, Users, CheckCircle, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Soluciones para su negocio</h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Servicios de contabilidad profesionales de confianza. Ayudamos a las empresas a crecer con una gestión financiera integral y planificación estratégica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/contact">Obtenga una consulta</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              >
                <Link href="/about">Más información</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestros servicios</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Generamos y compartimos conocimiento de vanguardia en las áreas de contabilidad, fiscal, financiera y auditoría.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Contabilidad y obligaciones fiscales</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Consiste en elaborar cada mes la contabilidad del Cliente, cumpliendo con ello obligaciones de tipo fiscal y mercantil.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Consultoría contable y fiscal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Acompañar y supervisar al departamento de contabilidad del Cliente en la elaboración de la contabilidad.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Auditoría fiscal electrónica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Revisión y verificación de manera analítica y con un alcance del 100%.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Nómina y obligaciones laborales</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Consiste en la elaboración de la nóminas de sueldos del Cliente cumpliendo con las disposiciones de la Ley.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Asesoría financiera</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Aplicación de técnicas de análisis financiero a su información con el fin de convertir este análisis en conocimiento útil.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Auditoría de estados financieros</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Consiste en emitir una opinión profesional acerca del grado de veracidad que guardan los estados financieros de la empresa que se auditan. 
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Dictamen de enajenación de acciones</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Consiste en determinar la utilidad fiscal y el pago del impuesto sobre la renta por la venta de acciones.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Dictamen IMSS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Consiste en el examen a los movimientos de afiliación de los trabajadores al IMSS. 
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Devolución de impuestos a favor</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Consiste obtener de la Autoridad fiscal la devolución de impuestos a favor del cliente 
                </CardDescription>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Nuestra firma</h2>
              <p className="text-lg text-slate-600 mb-8">
                Con más de 40 años de experiencia, brindamos servicios de contabilidad profesionales y confiables que ayudan a las empresas a prosperar en el mercado competitivo actual.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Longevidad</h3>
                    <p className="text-slate-600">Desde el año 1953 y a través de tres generaciones, hemos estado apoyando de manera ininterrumpida a las PYMES y a los emprendedores de la región.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Expertise</h3>
                    <p className="text-slate-600">Generamos y compartimos conocimiento de vanguardia en las áreas de contabilidad, fiscal, financiera y auditoría.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Empatía</h3>
                    <p className="text-slate-600">Entendemos el entorno, las necesidades, posibilidades y las oportunidades de las empresas y sus empresarios más allá del ambiente contable y fiscal</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Capital humano</h3>
                    <p className="text-slate-600">
                      Nuestro equipo de trabajo está en constante capacitación y tiene el compromiso con la creación de valor y la perdurabilidad de las empresas a través de la prestación de nuestros servicios.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contáctanos</h3>
              <p className="text-slate-600 mb-6">
                Listo? Contáctanos sin compromiso..
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">(667)752-0080</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">asistente@contadoressca.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Juan José Ríos 378 Pte. Culiacán, Sinaloa</span>
                </div>
              </div>

              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Agendar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Listo?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Nuestro equipo se encargará de cubrir tus necesidades.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
            <Link href="/contact">Contáctanos</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
