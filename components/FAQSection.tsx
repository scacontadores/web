"use client"

import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold text-slate-900 mb-6">Preguntas frecuentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border rounded-lg p-4">
            <button
              className="w-full text-left text-slate-900 font-medium focus:outline-none"
              onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
            >
              {faq.question}
            </button>
            {openFAQ === idx && (
              <p className="mt-2 text-slate-600 text-justify">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
