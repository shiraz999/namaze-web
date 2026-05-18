import { QRCodeSVG } from 'qrcode.react'

const DOWNLOAD_URL = 'https://namazi-app.com/download'

export default function DownloadQR() {
  return (
    <section id="qr-download" className="bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-3xl mx-auto">
          {/* QR Code */}
          <div className="shrink-0 flex flex-col items-center gap-4">
            <div className="p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
              <QRCodeSVG
                value={DOWNLOAD_URL}
                size={180}
                fgColor="#14532d"
                bgColor="#ffffff"
                level="M"
              />
            </div>
            <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">
              Scan to download
            </span>
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-8 bg-gold-400" />
              <span className="text-gold-600 text-sm font-medium tracking-widest uppercase">
                Quick Download
              </span>
            </div>
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-4 leading-snug">
              Point your camera.<br />Download instantly.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Scan the QR code with your phone's camera — no app needed. It automatically
              opens the right store for your device.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="flex items-center gap-1.5 text-gray-500">
                <span className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center text-xs">✓</span>
                Android → Google Play
              </span>
              <span className="flex items-center gap-1.5 text-gray-500">
                <span className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center text-xs">✓</span>
                iPhone → App Store
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
