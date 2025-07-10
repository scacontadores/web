"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  faqs?: string[]
}

export default function ServiceCard({ title, description, icon, faqs }: ServiceCardProps) {
  const [showFaqs, setShowFaqs] = useState(false)

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="text-center">
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {faqs && faqs.length > 0 && (
          <>
            <Button
              variant="outline"
              size="sm"
              className="w-full flex justify-between items-center"
              onClick={() => setShowFaqs(!showFaqs)}
            >
              Preguntas frecuentes
              {showFaqs ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
            {showFaqs && (
              <ul className="space-y-2 text-left mt-2">
                {faqs.map((q, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}
