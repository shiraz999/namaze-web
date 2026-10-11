import SectionHeading from '../ui/SectionHeading'

const pillars = [
  {
    icon: '🕐',
    title: 'Never Miss a Prayer',
    description:
      'Prayer times from the masjids you follow, with your choice of Azan and reminders up to 30 minutes early — no matter how busy your day.',
  },
  {
    icon: '🗺️',
    title: 'Find Your Masjid',
    description:
      'See masjids within 2 km sorted by the next namaz, on a list or a map, and get directions in one tap — at home or travelling.',
  },
  {
    icon: '📢',
    title: 'Stay Connected',
    description:
      'Receive approved announcements and broadcasts directly from your masjid — a trusted alternative to scattered WhatsApp messages.',
  },
  {
    icon: '🔕',
    title: 'Respect the Masjid',
    description:
      'Your phone silences itself when you arrive at the masjid and restores the ringer when you leave — no more ringing during namaz.',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="text-center p-6 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-200 group"
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
