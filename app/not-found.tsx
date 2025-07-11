import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Home, Phone, Mail, ArrowLeft, Search } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  const quickLinks = [
    { href: "/", label: "Homepage", icon: Home },
    { href: "/services", label: "Our Services", icon: Calculator },
    { href: "/about", label: "About Us", icon: Search },
    { href: "/contact", label: "Contact Us", icon: Phone },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main 404 Section */}
      <section className="flex-1 bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Large 404 Number */}
            <div className="text-8xl md:text-9xl font-bold text-blue-600 mb-8 opacity-20">404</div>

            {/* Error Message */}
            <div className="relative -mt-20 mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Página no encontrada</h1>
              <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
                Lo sentimos, no pudimos encontrar la página que buscas. Es posible que se haya movido, eliminado o que hayas introducido una URL incorrecta.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Homepage
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              >
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Where would you like to go?</h2>
              <p className="text-lg text-slate-600">
                Here are some popular pages that might help you find what you're looking for
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
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Help?</h2>
              <p className="text-lg text-slate-600">
                If you're still having trouble finding what you need, don't hesitate to reach out to our team
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Call Us</CardTitle>
                  <CardDescription>Speak directly with our team</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-slate-900 mb-2">(555) 123-4567</p>
                  <p className="text-slate-600 mb-4">Monday - Friday, 8:00 AM - 6:00 PM</p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <a href="tel:+15551234567">Call Now</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Email Us</CardTitle>
                  <CardDescription>Send us a message anytime</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-slate-900 mb-2">info@accountingfirm.com</p>
                  <p className="text-slate-600 mb-4">We'll respond within 24 hours</p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <a href="mailto:info@accountingfirm.com">Send Email</a>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Common Searches</h2>
            <p className="text-lg text-slate-600 mb-8">
              Looking for something specific? Here are some popular topics our clients search for
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
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Calculator className="h-16 w-16 text-blue-200 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Still Need Assistance?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our accounting experts are here to help you with any questions or concerns you may have.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
