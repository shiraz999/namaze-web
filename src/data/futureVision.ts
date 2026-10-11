export interface RoadmapItem {
  icon: string
  title: string
  description: string
}

export const roadmapItems: RoadmapItem[] = [
  {
    icon: '🍎',
    title: 'iPhone App',
    description: 'NAMAZI on the Apple App Store, so every iPhone user can stay connected to their masjid.',
  },
  {
    icon: '🌙',
    title: 'Ramadan Tools',
    description: 'Sehri and Iftar times, Taraweeh schedules, and Khatamul-Quran tracking.',
  },
  {
    icon: '💝',
    title: 'Donation Platform',
    description: 'Allow masjids and madrasas to accept donations directly through the app.',
  },
  {
    icon: '📖',
    title: 'Quran & Dhikr',
    description: 'Daily Hadees channels, Quran reading tools, and Dhikr counters.',
  },
  {
    icon: '📊',
    title: 'Masjid Map Stats',
    description: 'Total masjids nationwide and by city, plus a history of every masjid you have visited.',
  },
  {
    icon: '📡',
    title: 'Live Azaan & Khutba',
    description: 'Stream live Azaan and Friday Khutba directly through the app.',
  },
]
