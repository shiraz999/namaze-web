import AppStoreBadge from '../ui/AppStoreBadge'
import PhoneMockup from '../ui/PhoneMockup'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-700 flex items-center overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="geo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <polygon points="30,2 58,16 58,44 30,58 2,44 2,16" fill="none" stroke="white" strokeWidth="1" />
              <polygon points="30,12 48,21 48,39 30,48 12,39 12,21" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geo)" />
        </svg>
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-0 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            {/* Accent line */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-gold-400" />
              <span className="text-gold-400 text-sm font-medium tracking-widest uppercase">
                Free Mobile App
              </span>
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-gold-400 mb-4 leading-none">
              NAMAZI
            </h1>
            <p className="text-white text-2xl sm:text-3xl font-display mb-4 leading-snug">
              The digital bridge between the masjid and the community
            </p>
            <p className="text-primary-200 text-lg mb-8 leading-relaxed">
              Prayer times, Qibla finder, masjid broadcasts, and more — all in one free app.
              Available in English, Hindi & Urdu.
            </p>

            {/* App store badges */}
            <div id="download" className="flex flex-wrap gap-3">
              <AppStoreBadge store="apple" />
              <AppStoreBadge store="google" />
            </div>

            {/* Social proof */}
            <p className="text-primary-400 text-sm mt-6">
              Free to download · No ads · No subscriptions
            </p>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center md:justify-end">
            <PhoneMockup label="Prayer Times · Qibla · Broadcasts" bgColor="bg-primary-800" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
