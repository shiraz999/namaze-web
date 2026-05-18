import SectionHeading from '../ui/SectionHeading'
import UseCaseCard from '../ui/UseCaseCard'
import { useCases } from '../../data/useCases'

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-cream">
      <div className="section-container">
        <SectionHeading
          title="NAMAZI Works for Everyone"
          subtitle="Whether you are a traveller, a busy professional, or a masjid administrator — NAMAZI has you covered."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc) => (
            <UseCaseCard key={uc.persona} useCase={uc} />
          ))}
        </div>
      </div>
    </section>
  )
}
