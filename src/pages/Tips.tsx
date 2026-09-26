import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { tipLanguages } from '../data/tips'

export default function Tips() {
  const { hash } = useLocation()

  // The browser can't jump to #hindi/#urdu on first load because the sections
  // render after it tries, so scroll once mounted and again after web fonts shift the layout.
  useEffect(() => {
    if (!hash) return
    const scrollToHash = () => document.getElementById(hash.slice(1))?.scrollIntoView()
    scrollToHash()
    document.fonts?.ready.then(scrollToHash)
  }, [hash])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-primary-900 mb-4">
                Tips &amp; Tricks
              </h1>
              <p className="text-lg text-gray-600">
                Get more out of NAMAZI with these tips for every screen — in English, Hindi and Urdu.
              </p>
            </div>

            <nav className="sticky top-20 z-10 flex justify-center gap-2 mb-12">
              {tipLanguages.map((language) => (
                <a
                  key={language.id}
                  href={`#${language.id}`}
                  lang={language.lang}
                  className={`${language.fontClass} text-sm font-medium text-primary-700 hover:text-primary-900 bg-white border border-primary-200 rounded-full px-4 py-1.5 shadow-sm transition-colors`}
                >
                  {language.label}
                </a>
              ))}
            </nav>

            <div className="space-y-16">
              {tipLanguages.map((language) => (
                <section
                  key={language.id}
                  id={language.id}
                  lang={language.lang}
                  dir={language.dir}
                  className={`${language.fontClass} scroll-mt-36`}
                >
                  <div className="mb-6 text-center">
                    <h2 className="font-bold text-3xl text-primary-900 mb-2">{language.heading}</h2>
                    <p className="text-gray-600">{language.intro}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {language.groups.map((group) => (
                      <div key={group.title} className="bg-white rounded-2xl shadow-md p-6">
                        <h3 className="flex items-center gap-2 text-primary-900 font-semibold text-lg mb-4">
                          <span aria-hidden="true">{group.emoji}</span>
                          {group.title}
                        </h3>
                        <ul
                          className={`list-disc ps-5 space-y-2 text-gray-700 ${
                            language.dir === 'rtl' ? 'leading-[2.2]' : 'leading-relaxed'
                          }`}
                        >
                          {group.tips.map((tip) => (
                            <li key={tip}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
