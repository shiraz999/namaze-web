import AppStoreBadge from '../ui/AppStoreBadge'

export default function CommunityLeaderCTA() {
  return (
    <section id="register" className="relative bg-primary-950 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="geo2" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="30" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="40" cy="40" r="15" fill="none" stroke="white" strokeWidth="0.5" />
              <line x1="10" y1="40" x2="70" y2="40" stroke="white" strokeWidth="0.5" />
              <line x1="40" y1="10" x2="40" y2="70" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geo2)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <span className="inline-block bg-gold-400/20 text-gold-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-gold-400/30">
          For Community Leaders & Masjid Administrators
        </span>

        <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6 leading-tight">
          Connect your masjid with the community today
        </h2>

        <p className="text-primary-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Register your masjid on NAMAZI and reach your congregation directly. Share prayer times,
          broadcasts, and announcements — all in one place, completely free.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a href="#download" className="btn-gold text-base py-4 px-8">
            Get Started — Download Free
          </a>
          <a href="#features" className="btn-outline text-base py-4 px-8">
            Learn More
          </a>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <AppStoreBadge store="apple" />
          <AppStoreBadge store="google" />
        </div>

        <p className="text-primary-500 text-sm mt-8">
          Your encouragement and endorsement can greatly benefit the Ummah.
        </p>
      </div>
    </section>
  )
}
