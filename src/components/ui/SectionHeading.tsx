interface Props {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({ title, subtitle, align = 'center', light = false }: Props) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  const titleColor = light ? 'text-white' : 'text-primary-900'
  const subtitleColor = light ? 'text-primary-100' : 'text-gray-500'

  return (
    <div className={`mb-14 ${alignClass}`}>
      <h2 className={`text-3xl sm:text-4xl font-display font-bold ${titleColor} mb-4`}>{title}</h2>
      {subtitle && <p className={`text-lg ${subtitleColor} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>}
    </div>
  )
}
