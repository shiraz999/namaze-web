export interface UseCase {
  emoji: string
  persona: string
  description: string
}

export const useCases: UseCase[] = [
  {
    emoji: '✈️',
    persona: 'The Traveller',
    description:
      'Finds the nearest masjid and accurate prayer times the moment they land in a new city. No searching, no guessing.',
  },
  {
    emoji: '💼',
    persona: 'The Busy Professional',
    description:
      'Stays consistent with prayer through timely notifications even during a packed workday. Prayer never gets forgotten.',
  },
  {
    emoji: '🏡',
    persona: 'New to the Area',
    description:
      'Discovers nearby masjids, follows their broadcasts, and feels connected to the community from day one.',
  },
  {
    emoji: '🕌',
    persona: 'The Masjid Administrator',
    description:
      'Manages prayer times, broadcasts announcements, and reaches the entire congregation directly from their phone.',
  },
]
