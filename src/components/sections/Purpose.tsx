import SectionHeading from '../ui/SectionHeading'

const pillars = [
  {
    icon: '🕐',
    title: 'Never Miss a Prayer',
    description:
      'Accurate prayer times based on your location, with customisable notifications so every prayer is accounted for — no matter how busy your day.',
  },
  {
    icon: '🗺️',
    title: 'Find Your Masjid',
    description:
      'Discover masjids near you on a live map, get directions, and see upcoming prayer times — whether you are at home or travelling.',
  },
  {
    icon: '📢',
    title: 'Stay Connected',
    description:
      'Receive announcements, event updates, and broadcasts directly from your masjid — a trusted alternative to scattered WhatsApp messages.',
  },
]

export default function Purpose() {
  return (
    <section id="purpose" className="bg-white">
      <div className="section-container">
        <SectionHeading
          title="Why NAMAZI?"
          subtitle="In today's fast-paced world, many Muslims lose track of prayer times, miss masjid announcements, or struggle to find the nearest masjid. NAMAZI solves all of that."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="text-center p-8 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-200 group"
            >
              <div className="text-5xl mb-5">{p.icon}</div>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3 group-hover:text-primary-700 transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        {/* Bold statement */}
        <div className="mt-16 text-center">
          <p className="text-2xl font-display font-bold text-primary-900 max-w-3xl mx-auto leading-snug">
            "NAMAZI acts as a digital bridge between the masjid and the community."
          </p>
        </div>
      </div>
    </section>
  )
}
