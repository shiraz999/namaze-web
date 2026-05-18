import { Check } from 'lucide-react'

interface Props {
  text: string
  variant?: 'green' | 'gold'
}

export default function BenefitItem({ text, variant = 'green' }: Props) {
  const iconColor = variant === 'gold' ? 'text-gold-400' : 'text-primary-400'
  return (
    <li className="flex items-start gap-3">
      <Check className={`w-5 h-5 mt-0.5 shrink-0 ${iconColor}`} aria-hidden="true" />
      <span className="text-gray-100 leading-relaxed">{text}</span>
    </li>
  )
}
