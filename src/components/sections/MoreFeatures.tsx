import SectionHeading from '../ui/SectionHeading'
import { moreFeatures } from '../../data/moreFeatures'

export default function MoreFeatures() {
  return (
    <section id="more-features" className="bg-cream">
      <div className="section-container">
        <SectionHeading
          title="And So Much More"
          subtitle="Everyday tools that make NAMAZI your complete prayer companion."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {moreFeatures.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-200 group"
            >
              <span className="text-3xl block mb-4">{item.icon}</span>
              <h3 className="text-lg font-display font-bold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
