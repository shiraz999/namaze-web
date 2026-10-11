import SectionHeading from '../ui/SectionHeading'
import BenefitItem from '../ui/BenefitItem'

const communityBenefits = [
  'Never miss a prayer with personalised Azan alerts',
  'Find nearby masjids instantly — at home or while travelling',
  'Phone goes silent automatically inside the masjid',
  'Receive masjid announcements without joining WhatsApp groups',
  'Awwal times, Hijri calendar and Qibla finder anywhere in the world',
  'Keeps working with saved data when you are offline',
  'Available in English, Hindi, and Urdu',
  'Completely free — no ads, no subscriptions',
]

const leaderBenefits = [
  'Reach your congregation directly on their phones',
  'Send flash or scheduled announcements with images, audio and video',
  'Set namaz times as Automatic (Awwal Waqt + offset) or Manual',
  'Manage your masjid profile, facilities and photos digitally',
  'Assign Imam, Zimmedar, Muazzin and Editor roles using user codes',
  'Strengthen the bond between Imam and community',
  'Free for all masjids — forever',
]

export default function Benefits() {
  return (
    <section id="benefits" className="bg-primary-900">
      <div className="section-container">
        <SectionHeading
          title="Built for the Whole Community"
          subtitle="NAMAZI serves both the congregation and the masjid leadership equally."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* For the community */}
          <div className="bg-primary-800/50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🙏</span>
              <h3 className="text-xl font-display font-bold text-white">For the Community</h3>
            </div>
            <ul className="space-y-4">
              {communityBenefits.map((b) => (
                <BenefitItem key={b} text={b} variant="green" />
              ))}
            </ul>
          </div>

          {/* For masjid leaders */}
          <div className="bg-primary-800/50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🕌</span>
              <h3 className="text-xl font-display font-bold text-white">For Masjid & Religious Leaders</h3>
            </div>
            <ul className="space-y-4">
              {leaderBenefits.map((b) => (
                <BenefitItem key={b} text={b} variant="gold" />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
