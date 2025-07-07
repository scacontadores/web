"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You would typically send this data to your backend
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contácatanos</h1>
            <p className="text-xl text-slate-200">
              ¿Listo para dar el siguiente paso? Contacta a nuestro equipo.
            </p>
          </div>
        </div>
      </section>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Ponte en contacto</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Estamos aquí para apoyarte con todas sus necesidades contables y financieras. Contáctanos a través de cualquiera de los siguientes métodos.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Phone className="h-6 w-6 text-blue-600" />
                      <CardTitle>Teléfono</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 font-semibold">(667)752-0080</p>
                    <CardDescription>Lunes - Viernes, 9:00 AM - 6:00 PM</CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Mail className="h-6 w-6 text-blue-600" />
                      <CardTitle>Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 font-semibold">administracion@contadoressca.com</p>
                    <CardDescription>Responderemos dentro de 24 horas.</CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-blue-600" />
                      <CardTitle>Ubicación de oficinas</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 font-semibold">Juan José Ríos 378 Pte.</p>
                    <p className="text-slate-700 font-semibold">Colonia Jorge Almada</p>
                    <p className="text-slate-700 font-semibold">Culiacán, Sinaloa</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-blue-600" />
                      <CardTitle>Horario laboral</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      <p className="text-slate-700">
                        <span className="font-semibold">Lunes - Viernes:</span> 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-slate-700">
                        <span className="font-semibold">Sábado:</span> 9:00 AM - 2:00 PM
                      </p>
                      <p className="text-slate-700">
                        <span className="font-semibold">Sunday:</span> Cerrado
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Visita nuestras oficinas</h2>
            <p className="text-lg text-slate-600">Estamos convenientemente ubicados céntricamente.</p>
          </div>

          {/* Placeholder for map - you would integrate with Google Maps or similar */}
          <div className="bg-slate-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600">Google Maps</p>
              <p className="text-sm text-slate-500">Juan José Ríos 378 Pte. Culiacán, Sinaloa.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
