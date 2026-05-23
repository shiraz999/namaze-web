import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

type NavLink = { label: string; href: string; internal?: boolean }

const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'For Masjids', href: '#masjid-management' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Future', href: '#future-vision' },
  { label: 'Video Guides', href: '/video-guide', internal: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = `text-sm font-medium transition-colors duration-200 hover:text-gold-400 ${
    scrolled ? 'text-gray-700' : 'text-white/90'
  }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🕌</span>
            <span
              className={`font-display font-bold text-xl tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-primary-900' : 'text-white'
              }`}
            >
              NAMAZI
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.internal ? (
                <Link key={link.href} to={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </a>
              )
            )}
            <a href="#download" className="btn-primary text-sm py-2 px-5">
              Download Free
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) =>
              link.internal ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-700 font-medium py-3 px-2 rounded-lg hover:bg-primary-50 hover:text-primary-800 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 font-medium py-3 px-2 rounded-lg hover:bg-primary-50 hover:text-primary-800 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <a href="#download" className="btn-primary mt-2 justify-center" onClick={() => setMenuOpen(false)}>
              Download Free
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
