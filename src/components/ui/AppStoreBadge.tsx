interface Props {
  store: 'apple' | 'google'
  href?: string
}

export default function AppStoreBadge({ store, href = '#' }: Props) {
  if (store === 'apple') {
    return (
      <a
        href={href}
        className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-200"
        aria-label="Download on the App Store"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div className="text-left">
          <div className="text-xs leading-none">Download on the</div>
          <div className="text-sm font-semibold leading-tight">App Store</div>
        </div>
      </a>
    )
  }

  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-200"
      aria-label="Get it on Google Play"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
        <path d="M3.18 23.76c.3.17.64.24.99.2L15.9 12 12 8.1 3.18 23.76zM20.77 10.49l-2.6-1.49-4.17 3.99 4.17 4 2.62-1.5c.75-.43.75-1.57-.02-2.5v.5zM1.8.3C1.54.56 1.4.97 1.4 1.5v21c0 .53.14.94.4 1.2L2 23.9l11.5-11.5v-.4L2 .5l-.2-.2zM15.9 12l3.17-3.17-2.6-1.5L12 9.9 15.9 12z" />
      </svg>
      <div className="text-left">
        <div className="text-xs leading-none">Get it on</div>
        <div className="text-sm font-semibold leading-tight">Google Play</div>
      </div>
    </a>
  )
}
