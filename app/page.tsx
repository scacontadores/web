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
            <p className="text-xl md:text-2xl mb-8 text-slate-200 text-center">
              Servicios contables profesionales de confianza.<br />
              Brindamos apoyo a las empresas para su crecimiento mediante una gestión financiera integral y una planificación estratégica.
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
              Generamos y compartimos conocimiento de vanguardia en las áreas de contabilidad, fiscal, financiera y de auditoría.
            </p>
          </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/services/contabilidad">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Contabilidad y obligaciones fiscales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Elaboración de contabilidad mensual del Cliente para el cumplimiento de obligaciones fiscales y mercantiles.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            
              <Link href="/services/consultoria">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Consultoría contable y fiscal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Acompañamiento y supervisión al departamento de contabilidad del Cliente en la ejecución de la misma.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            
              <Link href="/services/auditoria-fiscal">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Auditoría fiscal electrónica</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Revisión y verificación analítica con un alcance total del 100%.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            
              <Link href="/services/nomina">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Nómina y obligaciones laborales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Elaboración de nóminas de sueldos del Cliente ​​en estricta conformidad con las disposiciones legales aplicables.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            
              <Link href="/services/asesoria-financiera">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Asesoría financiera</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Aplicación de técnicas de análisis financiero a la información del Cliente para generar conocimiento práctico y valioso.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            
              <Link href="/services/auditoria-eeff">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Auditoría de estados financieros</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Emisión de opiniones profesionales acerca de la fiabilidad de los estados financieros de la empresa auditada.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            
              <Link href="/services/dictamen-acciones">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Dictamen de enajenación de acciones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Determinación de la utilidad fiscal y cálculo del ISR derivado de la venta de acciones.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            
              <Link href="/services/dictamen-imss">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Dictamen IMSS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Análisis de los movimientos de afiliación de los trabajadores al IMSS.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            
              <Link href="/services/devolucion-iva">
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Devolución de impuestos a favor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Gestión ante la Autoridad Fiscal para obtener la devolución de impuestos a favor del Cliente.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Nuestra firma</h2>
              <p className="text-lg text-slate-600 mb-8 text-justify">
                Con más de 40 años de experiencia, brindamos servicios de contabilidad profesionales y confiables que ayudan a las empresas a prosperar en el mercado competitivo actual.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Longevidad</h3>
                    <p className="text-slate-600 text-justify">Desde el año 1953 y a través de tres generaciones, hemos estado apoyando de manera ininterrumpida a las PYMES y a los emprendedores de la región.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Expertise</h3>
                    <p className="text-slate-600 text-justify">Generamos y compartimos conocimiento de vanguardia en las áreas de contabilidad, fiscal, financiera y auditoría.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Empatía</h3>
                    <p className="text-slate-600 text-justify">Entendemos el entorno, las necesidades, posibilidades y las oportunidades de las empresas y sus empresarios más allá del ambiente contable y fiscal</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Capital humano</h3>
                    <p className="text-slate-600 text-justify">
                      Nuestro equipo de trabajo está en constante capacitación y tiene el compromiso con la creación de valor y la perdurabilidad de las empresas a través de la prestación de nuestros servicios.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contáctanos</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <a
                    href="tel:+526677520080"
                    className="text-slate-700 hover:underline"
                  >
                    (667)752-0080
                  </a>
                </div>
              
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <a
                    href="mailto:administracion@contadoressca.com"
                    className="text-slate-700 hover:underline"
                  >
                    administracion@contadoressca.com
                  </a>
                </div>
              
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <a
                    href="https://maps.app.goo.gl/4vxYzKCMVJTVPop17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:underline"
                  >
                    Juan José Ríos 378 Pte.<br />
                    Colonia Jorge Almada<br />
                    Culiacán, Sinaloa
                  </a>
                </div>
              </div>

              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Agendar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
