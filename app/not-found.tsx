import { Phone,
        Mail,
        Calculator,
        Home,
        Briefcase,
        BookOpenText,
       } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function NotFound() {
  const quickLinks = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/about", label: "Nosotros", icon: BookOpenText },
    { href: "/services", label: "Servicios", icon: Briefcase },
    { href: "/contact", label: "Contáctanos", icon: Phone },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-8xl md:text-9xl font-bold text-blue-600 opacity-10 leading-none">
            404
          </span>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Página no encontrada</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto">
            Lo sentimos, no pudimos encontrar la página que buscas. Es posible que se haya introducido una URL incorrecta.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">¿A dónde te gustaría ir?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
              Te mostramos otras opciones que podrían ayudarte a encontrar lo que estás buscando.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Link key={index} href={link.href} className="group block">
                  <Card className="text-center hover:shadow-lg transition-shadow h-full dark:bg-slate-800 dark:border-slate-700">
                    <CardHeader>
                      <link.icon className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <CardTitle className="text-lg dark:text-white">{link.label}</CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">¿Necesita ayuda?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
              Si aún tiene problemas para encontrar lo que necesita, no dude en comunicarse con nuestro equipo.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="text-center dark:bg-slate-900 dark:border-slate-700">
                <CardHeader>
                  <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="dark:text-white">Teléfono</CardTitle>
                  <CardDescription className="dark:text-slate-400">
                    Comunícate directamente con nuestro equipo.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white mb-2">(667)752-0080</p>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">Lunes - Viernes 9:00 AM - 6:00 PM</p>
                  <a
                    href="tel:+526677520080"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
                  >
                    Llamar
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center dark:bg-slate-900 dark:border-slate-700">
                <CardHeader>
                  <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="dark:text-white">Email</CardTitle>
                  <CardDescription className="dark:text-slate-400">
                    Contáctenos cuando guste.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    administracion@contadoressca.com
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">Responderemos dentro de 24 horas.</p>
                  <a
                    href="mailto:administracion@contadoressca.com"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
                  >
                    Redactar
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
