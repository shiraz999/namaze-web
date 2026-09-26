import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const videos = [
  {
    slug: 'application-use-guide',
    id: 'Gt25X3JQU4M',
    caption: 'Application Use Guide',
  },
  {
    slug: 'masjid-registration',
    id: 'E9l_H0-VeOk',
    caption: 'Masjid Registration',
  },
]

export default function VideoGuide() {
  const { slug } = useParams()
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return
    const el = document.getElementById(slug)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [slug])

  const handleShare = async (videoSlug: string) => {
    const url = `${window.location.origin}/video-guide/${videoSlug}`
    try {
      await navigator.clipboard.writeText(url)
      setCopiedSlug(videoSlug)
      setTimeout(() => setCopiedSlug((current) => (current === videoSlug ? null : current)), 2000)
    } catch {
      window.prompt('Copy this link:', url)
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-primary-900 mb-4">
                Video Guides
              </h1>
              <p className="text-lg text-gray-600">
                Learn how to get the most out of NAMAZI with these short guides.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {videos.map((video) => (
                <div
                  key={video.slug}
                  id={video.slug}
                  className={`bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition-shadow scroll-mt-28 ${
                    slug === video.slug ? 'ring-4 ring-primary-500 shadow-xl' : ''
                  }`}
                >
                  <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.caption}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="px-5 py-4 flex items-center justify-between gap-3">
                    <p className="text-primary-900 font-semibold text-base">{video.caption}</p>
                    <button
                      type="button"
                      onClick={() => handleShare(video.slug)}
                      className="shrink-0 text-sm font-medium text-primary-700 hover:text-primary-900 border border-primary-200 rounded-full px-3 py-1 transition-colors"
                    >
                      {copiedSlug === video.slug ? 'Copied!' : 'Share'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
