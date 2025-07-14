import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Home, Phone, Mail, ArrowLeft, Search } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  const quickLinks = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/about", label: "Nosotros", icon: Search },    
    { href: "/services", label: "Servicios", icon: Calculator },
    { href: "/contact", label: "Contáctanos", icon: Phone },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main 404 Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-8xl md:text-9xl font-bold text-blue-600 opacity-10 leading-none">
            404
          </span>
        </div>

            {/* Error Message */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Página no encontrada
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto">
              Lo sentimos, no pudimos encontrar la página que buscas. Es posible que se haya introducido una URL incorrecta.
            </p>
          </div>  
        </div>            
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">¿A dónde te gustaría ir?</h2>
              <p className="text-lg text-slate-600">
                Te mostramos otras opciones que podrían ayudarte a encontrar lo que estás buscando.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <link.icon className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-lg">{link.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href={link.href}>Visit Page</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Necesita ayuda?</h2>
              <p className="text-lg text-slate-600">
                Si aún tiene problemas para encontrar lo que necesita, no dude en comunicarse con nuestro equipo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Teléfono</CardTitle>
                  <CardDescription>Comunícate directamente con nuestro equipo.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-slate-900 mb-2">(667)752-0080</p>
                  <p className="text-slate-600 mb-4">Lunes - Viernes 9:00 AM - 6:00 PM</p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <a href="tel:+526677520080">Llamar</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Email</CardTitle>
                  <CardDescription>Contáctenos cuando guste.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-slate-900 mb-2">administracion@contadoressca.com</p>
                  <p className="text-slate-600 mb-4">Responderemos dentro de 24 horas.</p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <a href="mailto:administracion@contadoressca.com">Redactar</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Search Suggestions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Páginas</h2>
            <p className="text-lg text-slate-600 mb-8">
              ¿Buscas algo específico? Aquí tienes algunos temas populares que buscan nuestros clientes.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Tax Preparation",
                "Business Consulting",
                "Financial Planning",
                "Bookkeeping Services",
                "Audit Services",
                "Payroll Processing",
                "QuickBooks Setup",
                "Tax Planning",
                "Financial Statements",
                "Business Valuation",
              ].map((term, index) => (
                <Link
                  key={index}
                  href="/services"
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors text-sm"
                >
                  {term}
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/services">Ver todos los Servicios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
