import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const videos = [
  {
    id: 'Gt25X3JQU4M',
    caption: 'Application Use Guide',
  },
]

export default function VideoGuide() {
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
                  key={video.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
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
                  <div className="px-5 py-4">
                    <p className="text-primary-900 font-semibold text-base">{video.caption}</p>
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
