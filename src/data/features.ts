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
    title: 'Prayer Times & Azan Alerts',
    description: 'Never miss a prayer, wherever you are in the world.',
    bullets: [
      'Subha Sadiq, Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha & Jumma times for every masjid you follow',
      'Choose the alert sound for each prayer: Azan (Makkah), Azan (Madinah), Short Azan, Beep or Silent',
      'Get notified at prayer time, or 5, 10, 15, 20 or 30 minutes before',
      'Independent alert settings for each followed masjid',
      'Alarms are set on your phone, so they keep working without internet',
      'Instant updates whenever your masjid changes its namaz times',
    ],
    mockupLabel: 'Prayer Times',
    align: 'right',
    bgColor: 'bg-parchment',
  },
  {
    id: 'masjid-finder',
    title: 'Find Masjids Near You',
    description: 'See which masjid has the next namaz, right around you.',
    bullets: [
      'Masjids within 2 km sorted by the next namaz, widening to 5 km automatically',
      'Search by distance, name, masjid code or district',
      'List or map view, with prayer times and women’s prayer area shown on the map',
      'One-tap directions to any masjid',
      'Follow several masjids at once, at home or while travelling',
    ],
    mockupLabel: 'All Masjids',
    align: 'left',
    bgColor: 'bg-primary-50',
  },
  {
    id: 'auto-silent',
    title: 'Auto-Silent at the Masjid',
    description: 'Your phone goes quiet when you walk into the masjid — and comes back when you leave.',
    bullets: [
      'Turn it on for the masjids you follow, or for every masjid nearby',
      'On Android, your phone switches to vibrate or silent on arrival',
      'Arrival is confirmed with your live location before silencing',
      'Quick “Yes, I’m inside” or “Restore ringer” buttons in the notification',
      'Ringer restored when you leave — and always within 2 hours',
      'On iPhone, a gentle reminder to silence your phone instead',
    ],
    mockupLabel: 'Auto-Silent',
    align: 'right',
    bgColor: 'bg-white',
  },
  {
    id: 'broadcasts',
    title: 'Masjid Broadcasts (Elan / Bayan)',
    description: 'Stay informed with trusted announcements from your masjid.',
    bullets: [
      'Flash (24 hour) or scheduled announcements from the Imam and Zimmedar',
      'Share images, audio, video and documents',
      'Reach followers of a masjid, a whole district, or everyone',
      'Every broadcast is reviewed by approvers before it goes out',
      'Tap a notification to open the announcement straight away',
    ],
    mockupLabel: 'Broadcasts',
    align: 'left',
    bgColor: 'bg-primary-50',
  },
  {
    id: 'masjid-management',
    title: 'Masjid Management',
    description: 'Give your masjid a digital presence and the tools to run it.',
    bullets: [
      'Register your masjid with address, GPS pin on the map, facilities and up to 5 photos',
      'Set each namaz as Automatic (follows Awwal Waqt with an offset) or Manual',
      'Role-based team: Imam, Zimmedar, Muazzin and Editors',
      'Every masjid gets a unique masjid code that’s easy to share',
      'New masjids are reviewed before going live',
    ],
    mockupLabel: 'Masjid Admin',
    align: 'right',
    bgColor: 'bg-parchment',
  },
]
