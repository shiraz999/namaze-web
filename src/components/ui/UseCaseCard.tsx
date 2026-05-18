import type { UseCase } from '../../data/useCases'

interface Props {
  useCase: UseCase
}

export default function UseCaseCard({ useCase }: Props) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="text-4xl mb-4">{useCase.emoji}</div>
      <h3 className="text-xl font-display font-bold text-primary-900 mb-2">{useCase.persona}</h3>
      <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
    </div>
  )
}
