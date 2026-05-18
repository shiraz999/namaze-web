import AppStoreBadge from '../ui/AppStoreBadge'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Future Vision', href: '#future-vision' },
  { label: 'For Masjids', href: '#masjid-management' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🕌</span>
              <span className="font-display font-bold text-xl text-gold-400">NAMAZI</span>
            </div>
            <p className="text-primary-300 text-sm leading-relaxed mb-6">
              The digital bridge between the masjid and the community. Free on Android and iOS.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <AppStoreBadge store="apple" />
              <AppStoreBadge store="google" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-300 hover:text-gold-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="font-semibold text-white mb-4">Available In</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {['English', 'Hindi', 'اردو'].map((lang) => (
                <span
                  key={lang}
                  className="bg-primary-800 text-primary-200 text-xs px-3 py-1 rounded-full"
                >
                  {lang}
                </span>
              ))}
            </div>
            <p className="text-primary-400 text-sm">Free to download. No ads. No subscriptions.</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-800 text-center text-primary-500 text-sm">
          © {new Date().getFullYear()} NAMAZI. Built for the Muslim community.
        </div>
      </div>
    </footer>
  )
}
