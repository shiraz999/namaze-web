import SectionHeading from '../ui/SectionHeading'
import { roadmapItems } from '../../data/futureVision'

export default function FutureVision() {
  return (
    <section id="future-vision" className="bg-parchment">
      <div className="section-container">
        <SectionHeading
          title="The Road Ahead"
          subtitle="NAMAZI is just getting started. Here is what is coming next for the Muslim community."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-gold-100 hover:border-gold-300 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-xs font-semibold text-gold-700 bg-gold-100 px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-lg font-display font-bold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-display font-bold text-primary-900 italic max-w-2xl mx-auto">
            "The vision of NAMAZI is to become the single trusted Islamic companion for every Muslim on their phone."
          </p>
        </div>
      </div>
    </section>
  )
}
