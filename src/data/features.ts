export interface FeatureBullet {
  text: string
}

export interface Feature {
  id: string
  title: string
  description: string
  bullets: string[]
  mockupLabel: string
  align: 'left' | 'right'
  bgColor: string
}

export const features: Feature[] = [
  {
    id: 'prayer-times',
    title: 'Prayer Times & Notifications',
    description: 'Never miss a prayer, wherever you are in the world.',
    bullets: [
      'Accurate Fajr, Dhuhr, Asr, Maghrib, Isha & Jumma times',
      'Customisable azan notifications per prayer',
      'Reminders 5, 10, 15, 20, or 30 minutes before prayer',
      'Independent notification settings for each followed masjid',
      'Auto-silent phone when inside the masjid',
    ],
    mockupLabel: 'Prayer Times',
    align: 'right',
    bgColor: 'bg-parchment',
  },
  {
    id: 'broadcasts',
    title: 'Masjid Broadcasts',
    description: 'Stay informed with direct announcements from your masjid.',
    bullets: [
      'Instant and scheduled announcements from the Imam',
      'Share images, audio, video, and documents',
      'Events, Eid prayers, fundraisers, and reminders',
      'A reliable alternative to scattered WhatsApp messages',
    ],
    mockupLabel: 'Broadcasts',
    align: 'left',
    bgColor: 'bg-primary-50',
  },
  {
    id: 'qibla',
    title: 'Qibla Finder',
    description: 'Always know the direction of prayer, anywhere in the world.',
    bullets: [
      'Real-time Qibla compass using GPS and device sensors',
      'Displays exact bearing in degrees',
      'Works while travelling or in unfamiliar locations',
      'Clean, distraction-free compass interface',
    ],
    mockupLabel: 'Qibla',
    align: 'right',
    bgColor: 'bg-white',
  },
  {
    id: 'masjid-management',
    title: 'Masjid Management',
    description: 'Empower masjid administrators with digital tools.',
    bullets: [
      'Register your masjid with name, address, and GPS location',
      'Upload prayer schedules and masjid images',
      'Role-based access: Imam, Muazzin, Zimmedar, Editor',
      'Verified digital presence for every masjid',
    ],
    mockupLabel: 'Admin',
    align: 'left',
    bgColor: 'bg-parchment',
  },
]
