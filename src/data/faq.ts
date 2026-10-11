export interface FaqItem {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: 'Is NAMAZI free?',
    answer: 'Yes. NAMAZI is completely free for everyone and for every masjid — no ads and no subscriptions.',
  },
  {
    question: 'Is NAMAZI available on iPhone?',
    answer:
      'NAMAZI is available on Android through Google Play today. The iPhone version is coming soon to the Apple App Store.',
  },
  {
    question: 'How does auto-silent at the masjid work?',
    answer:
      'Turn on Auto-Silence for a masjid you follow, or "Silence at any masjid" in your profile. When you arrive, NAMAZI confirms your live location and, on Android, switches your phone to vibrate or silent. Your ringer is restored when you leave. On iPhone you get a reminder to silence your phone instead.',
  },
  {
    question: 'Why does NAMAZI ask for "Allow all the time" location and Do Not Disturb access?',
    answer:
      'These are only needed for auto-silent. Background location lets NAMAZI notice when you arrive at a masjid even when the app is closed, and Do Not Disturb access lets it change your ringer on Android. Arrival detection happens on your phone. If you don’t use auto-silent, you can decline these permissions.',
  },
  {
    question: 'Will my ringer always come back on?',
    answer:
      'Yes. The ringer is restored when you leave the masjid, and as a safety net it is always restored within 2 hours. You can also tap "Restore ringer" on the notification at any time.',
  },
  {
    question: 'How do I register my masjid?',
    answer:
      'Open Register Masjid in the app, stand at the centre of the masjid to capture its GPS location, then add its details, prayer times, facilities and photos. Your masjid is reviewed before it goes live. Our Masjid Registration video guide walks you through every step.',
  },
  {
    question: 'How do I become the Imam, Zimmedar or Editor of a masjid?',
    answer:
      'Raise a request from the Requests screen, choosing the masjid and the person by their unique user code. Once an Imam or Zimmedar is assigned, they can add or remove Editors, Muazzins and other roles themselves.',
  },
  {
    question: 'Does NAMAZI work without internet?',
    answer:
      'Yes. Your followed masjids and their prayer times are saved on your phone, and prayer alarms and auto-silent run on your device. NAMAZI refreshes everything automatically when you are back online.',
  },
  {
    question: 'Which languages does NAMAZI support?',
    answer: 'NAMAZI is available in English, Hindi and Urdu.',
  },
  {
    question: 'How do I delete my account or my data?',
    answer: 'Email support@namazi-app.com and we will process your request to access, correct or delete your data.',
  },
]
