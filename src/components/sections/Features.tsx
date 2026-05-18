import SectionHeading from '../ui/SectionHeading'
import PhoneMockup from '../ui/PhoneMockup'
import { features } from '../../data/features'
import { Check } from 'lucide-react'

const mockupColors: Record<string, string> = {
  'prayer-times': 'bg-primary-800',
  broadcasts: 'bg-primary-700',
  qibla: 'bg-primary-900',
  'masjid-management': 'bg-primary-800',
}

export default function Features() {
  return (
    <section id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4">
        <SectionHeading
          title="Everything You Need in One App"
          subtitle="Four powerful features designed around the daily needs of every Muslim and every masjid."
        />
      </div>

      {features.map((feature) => (
        <div
          key={feature.id}
          id={feature.id}
          className={`${feature.bgColor} py-16 sm:py-20`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                feature.align === 'left' ? '' : 'md:[&>*:first-child]:order-2'
              }`}
            >
              {/* Phone mockup */}
              <div className="flex justify-center">
                <PhoneMockup label={feature.mockupLabel} bgColor={mockupColors[feature.id]} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl font-display font-bold text-primary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary-700" aria-hidden="true" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
