interface Props {
  label: string
  bgColor?: string
}

export default function PhoneMockup({ label, bgColor = 'bg-primary-800' }: Props) {
  return (
    <div className="relative mx-auto w-[220px] sm:w-[260px]">
      {/* Phone frame */}
      <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full z-10" />
        {/* Screen */}
        <div className={`${bgColor} rounded-[2rem] overflow-hidden aspect-[9/19] flex flex-col items-center justify-center`}>
          {/* Status bar */}
          <div className="absolute top-5 left-0 right-0 flex justify-between px-8 text-white text-xs opacity-60">
            <span>9:41</span>
            <span>●●●</span>
          </div>
          {/* App icon */}
          <div className="flex flex-col items-center gap-3 mt-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <span className="text-white text-2xl">🕌</span>
            </div>
            <span className="text-white font-display font-bold text-lg">NAMAZI</span>
            <span className="text-white/70 text-xs text-center px-4">{label}</span>
          </div>
          {/* Decorative dots */}
          <div className="mt-8 flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-white' : 'bg-white/30'}`} />
            ))}
          </div>
        </div>
        {/* Home bar */}
        <div className="mt-2 mx-auto w-24 h-1 bg-gray-600 rounded-full" />
      </div>
    </div>
  )
}
