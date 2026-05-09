"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <div className="mt-12">
      <h2 className="h-section mb-8">
        Preguntas <span className="serif">frecuentes</span>.
      </h2>
      <div className="border-t border-line-soft">
        {faqs.map((faq, idx) => (
          <div key={faq.question} className="border-b border-line-soft">
            <button
              className="flex w-full items-center justify-between gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 rounded-sm"
              onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
              aria-expanded={openFAQ === idx}
              aria-controls={`faq-answer-${idx}`}
            >
              <span className="text-[16px] font-medium text-ink">{faq.question}</span>
              <ChevronDown
                className={`h-4 w-4 flex-shrink-0 text-ink-3 transition-transform duration-200 ${
                  openFAQ === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            {openFAQ === idx && (
              <p
                id={`faq-answer-${idx}`}
                className="mb-5 text-[15px] leading-[1.6] text-ink-2 text-justify"
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
