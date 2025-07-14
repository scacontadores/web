"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import ClientMap from "@/components/client-map";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contáctanos</h1>
            <p className="text-xl md:text-2xl text-slate-200 text-center">
              ¿Listo para dar el siguiente paso? <br />
              Contacta a nuestro equipo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ponte en contacto
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl text-left">
              Estamos aquí para apoyarte con todas sus necesidades contables y
              financieras. Contáctanos a través del método de su preferencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Teléfono */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <CardTitle>Teléfono</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a
                  href="tel:+526677520080"
                  className="text-slate-700 font-semibold hover:underline"
                >
                  (667)752-0080
                </a>
                <CardDescription>
                  Lunes - Viernes, 9:00 AM - 6:00 PM
                </CardDescription>
              </CardContent>
            </Card>

            {/* Email */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <CardTitle>Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:administracion@contadoressca.com"
                  className="text-slate-700 font-semibold hover:underline"
                >
                  administracion@contadoressca.com
                </a>
                <CardDescription>
                  Responderemos dentro de 24 horas.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Ubicación */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <CardTitle>Ubicación de oficinas</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a
                  href="https://maps.app.goo.gl/4vxYzKCMVJTVPop17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 font-semibold hover:underline block"
                >
                  Juan José Ríos 378 Pte.
                  <br />
                  Colonia Jorge Almada
                  <br />
                  Culiacán, Sinaloa
                </a>
              </CardContent>
            </Card>

            {/* Horario */}
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
                    <span className="font-semibold">Lunes - Viernes:</span> 9:00
                    AM - 6:00 PM
                  </p>
                  <p className="text-slate-700">
                    <span className="font-semibold">Sábado:</span> 9:00 AM -
                    2:00 PM
                  </p>
                  <p className="text-slate-700">
                    <span className="font-semibold">Domingo:</span> Cerrado
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Visita nuestras oficinas
            </h2>
            <p className="text-lg text-slate-600">
              Ubicados en el centro de la ciudad.
            </p>
          </div>

          <ClientMap height="400px" className="shadow-lg" />
        </div>
      </section>
    </div>
  );
}
