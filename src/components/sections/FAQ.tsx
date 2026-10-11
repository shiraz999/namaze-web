import { ChevronDown } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { faqs } from '../../data/faq'

export default function FAQ() {
  return (
    <section id="faq" className="bg-white">
      <div className="section-container">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about NAMAZI."
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-cream rounded-2xl border border-gray-100 open:border-primary-200 open:shadow-sm transition-all duration-200"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 font-semibold text-primary-900 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown
                  className="w-5 h-5 text-primary-700 shrink-0 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
