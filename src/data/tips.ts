export type Lang = 'en' | 'hi' | 'ur'

export interface TipGroup {
  emoji: string
  title: string
  tips: string[]
}

export interface TipLanguage {
  lang: Lang
  id: string
  label: string
  heading: string
  intro: string
  dir: 'ltr' | 'rtl'
  fontClass: string
  groups: TipGroup[]
}

export const tipLanguages: TipLanguage[] = [
  {
    lang: 'en',
    id: 'english',
    label: 'English',
    heading: 'Tips in English',
    intro: 'Handy tips for every screen in the NAMAZI app.',
    dir: 'ltr',
    fontClass: 'font-body',
    groups: [
      {
        emoji: '🕌',
        title: 'All Masjids & My Masjids',
        tips: [
          'Pull down on the screen to refresh prayer times instantly.',
          'Opening All Masjids shows masjids within 2 km, sorted by the earliest upcoming Namaz.',
          'Tap the sort icon to order the list by distance, next prayer time or name.',
          'Search for a masjid by distance, name, masjid code or district.',
          'Switch to Map view to see nearby masjids and their prayer times at a glance.',
          'Awwal (earliest) prayer times are calculated from your live GPS location — tap the Awwal tile to see Namaz times for the whole year.',
          'Follow a masjid to receive its Elan and Bayan announcements.',
        ],
      },
      {
        emoji: '📍',
        title: 'Masjid Details',
        tips: [
          'Every masjid has a unique code starting with "M" — use it to search for the masjid or to raise a request.',
          'Tap the green arrow icon to get directions to the masjid.',
          'Set a custom alarm for each Namaz (e.g. 5 or 10 minutes before) from the masjid details page.',
          "Your phone can go silent automatically when you're inside a masjid you follow — turn it on in the masjid's notification settings.",
          "NAMAZI checks your location in the background to confirm you've actually arrived at the masjid before silencing your phone.",
          "The masjid's Editor can update its Namaz times.",
          'The Imam or Zimmedar can update masjid details such as location, facilities and photos.',
          "The Imam or Zimmedar can add or remove Editors, Muazzins and other roles from the masjid's People tab.",
        ],
      },
      {
        emoji: '📢',
        title: 'Broadcast',
        tips: [
          'The Imam or Zimmedar can send Broadcasts (Elan/Bayan) to everyone who follows the masjid.',
        ],
      },
      {
        emoji: '📝',
        title: 'Requests',
        tips: [
          'Raise a request to have an Imam or Zimmedar assigned to a masjid — once assigned, they can add or remove Editors.',
        ],
      },
      {
        emoji: '🧭',
        title: 'Qibla Finder',
        tips: ['Lay your phone flat on a surface for the most accurate Qibla direction.'],
      },
      {
        emoji: '👤',
        title: 'User Profile',
        tips: [
          'Turn on "Silence at any masjid" in your profile to silence your phone inside any masjid, not just the ones you follow.',
          'Every user has a unique user code — share it so you can be found when being assigned a role such as Imam, Muazzin, Zimmedar or Editor.',
        ],
      },
    ],
  },
  {
    lang: 'hi',
    id: 'hindi',
    label: 'हिंदी',
    heading: 'हिंदी में सुझाव',
    intro: 'NAMAZI ऐप की हर स्क्रीन के लिए काम के सुझाव।',
    dir: 'ltr',
    fontClass: 'font-hindi',
    groups: [
      {
        emoji: '🕌',
        title: 'सभी मस्जिदें और मेरी मस्जिदें',
        tips: [
          'नमाज़ का समय तुरंत रिफ्रेश करने के लिए स्क्रीन को नीचे खींचें।',
          'सभी मस्जिदें खोलने पर 2 किमी के अंदर की मस्जिदें दिखती हैं, जो सबसे पहले आने वाली नमाज़ के हिसाब से क्रम में होती हैं।',
          'सूची को दूरी, अगली नमाज़ के समय या नाम के हिसाब से लगाने के लिए सॉर्ट आइकन पर टैप करें।',
          'मस्जिद को दूरी, नाम, मस्जिद कोड या ज़िले से खोजें।',
          'आस-पास की मस्जिदें और उनकी नमाज़ का समय एक नज़र में देखने के लिए मैप व्यू पर जाएँ।',
          'अव्वल (सबसे पहला) नमाज़ का समय आपकी लाइव GPS लोकेशन से निकाला जाता है — पूरे साल की नमाज़ का समय देखने के लिए अव्वल टाइल पर टैप करें।',
          'किसी मस्जिद को फ़ॉलो करें ताकि उसके एलान और बयान आप तक पहुँचें।',
        ],
      },
      {
        emoji: '📍',
        title: 'मस्जिद की जानकारी',
        tips: [
          'हर मस्जिद का एक अलग कोड होता है जो "M" से शुरू होता है — इससे मस्जिद खोजें या रिक्वेस्ट भेजें।',
          'मस्जिद तक पहुँचने का रास्ता देखने के लिए हरे तीर वाले आइकन पर टैप करें।',
          'मस्जिद की जानकारी वाले पेज से हर नमाज़ के लिए अपना अलार्म सेट करें (जैसे 5 या 10 मिनट पहले)।',
          'जिस मस्जिद को आप फ़ॉलो करते हैं, उसके अंदर पहुँचने पर आपका फ़ोन अपने-आप साइलेंट हो सकता है — इसे मस्जिद की नोटिफ़िकेशन सेटिंग में चालू करें।',
          'फ़ोन साइलेंट करने से पहले NAMAZI बैकग्राउंड में आपकी लोकेशन जाँचता है ताकि पक्का हो कि आप सच में मस्जिद पहुँच गए हैं।',
          'मस्जिद का एडिटर नमाज़ का समय अपडेट कर सकता है।',
          'इमाम या ज़िम्मेदार मस्जिद की जानकारी जैसे लोकेशन, सुविधाएँ और फ़ोटो अपडेट कर सकते हैं।',
          'इमाम या ज़िम्मेदार मस्जिद के पीपल टैब से एडिटर, मुअज़्ज़िन और दूसरे रोल जोड़ या हटा सकते हैं।',
        ],
      },
      {
        emoji: '📢',
        title: 'ब्रॉडकास्ट',
        tips: [
          'इमाम या ज़िम्मेदार मस्जिद के सभी फ़ॉलोअर्स को ब्रॉडकास्ट (एलान/बयान) भेज सकते हैं।',
        ],
      },
      {
        emoji: '📝',
        title: 'रिक्वेस्ट',
        tips: [
          'किसी मस्जिद के लिए इमाम या ज़िम्मेदार नियुक्त करवाने की रिक्वेस्ट भेजें — नियुक्त होने के बाद वे एडिटर जोड़ या हटा सकते हैं।',
        ],
      },
      {
        emoji: '🧭',
        title: 'क़िबला फ़ाइंडर',
        tips: ['सबसे सही क़िबला दिशा के लिए अपने फ़ोन को किसी समतल सतह पर सीधा रखें।'],
      },
      {
        emoji: '👤',
        title: 'यूज़र प्रोफ़ाइल',
        tips: [
          'अपनी प्रोफ़ाइल में "किसी भी मस्जिद में साइलेंट" चालू करें, ताकि सिर्फ़ फ़ॉलो की गई ही नहीं, बल्कि किसी भी मस्जिद में फ़ोन साइलेंट हो जाए।',
          'हर यूज़र का एक अलग यूज़र कोड होता है — इमाम, मुअज़्ज़िन, ज़िम्मेदार या एडिटर जैसा रोल दिए जाते समय आपको खोजने के लिए इसे शेयर करें।',
        ],
      },
    ],
  },
  {
    lang: 'ur',
    id: 'urdu',
    label: 'اردو',
    heading: 'اردو میں مشورے',
    intro: 'NAMAZI ایپ کی ہر اسکرین کے لیے کارآمد مشورے۔',
    dir: 'rtl',
    fontClass: 'font-urdu',
    groups: [
      {
        emoji: '🕌',
        title: 'تمام مساجد اور میری مساجد',
        tips: [
          'نماز کے اوقات فوراً ریفریش کرنے کے لیے اسکرین کو نیچے کی طرف کھینچیں۔',
          'تمام مساجد کھولنے پر 2 کلومیٹر کے اندر کی مساجد نظر آتی ہیں، جو سب سے پہلے آنے والی نماز کے لحاظ سے ترتیب میں ہوتی ہیں۔',
          'فہرست کو فاصلے، اگلی نماز کے وقت یا نام کے لحاظ سے ترتیب دینے کے لیے ترتیب کے آئیکن پر ٹیپ کریں۔',
          'مسجد کو فاصلے، نام، مسجد کوڈ یا ضلع سے تلاش کریں۔',
          'قریبی مساجد اور ان کے نماز کے اوقات ایک نظر میں دیکھنے کے لیے میپ ویو پر جائیں۔',
          'اوّل (سب سے پہلا) نماز کا وقت آپ کی لائیو GPS لوکیشن سے نکالا جاتا ہے — پورے سال کے نماز کے اوقات دیکھنے کے لیے اوّل ٹائل پر ٹیپ کریں۔',
          'کسی مسجد کو فالو کریں تاکہ اس کے اعلان اور بیان آپ تک پہنچیں۔',
        ],
      },
      {
        emoji: '📍',
        title: 'مسجد کی تفصیلات',
        tips: [
          'ہر مسجد کا ایک منفرد کوڈ ہوتا ہے جو "M" سے شروع ہوتا ہے — اس سے مسجد تلاش کریں یا درخواست بھیجیں۔',
          'مسجد تک پہنچنے کا راستہ دیکھنے کے لیے سبز تیر والے آئیکن پر ٹیپ کریں۔',
          'مسجد کی تفصیلات والے صفحے سے ہر نماز کے لیے اپنا الارم سیٹ کریں (مثلاً 5 یا 10 منٹ پہلے)۔',
          'جس مسجد کو آپ فالو کرتے ہیں، اس کے اندر پہنچنے پر آپ کا فون خود بخود سائلنٹ ہو سکتا ہے — اسے مسجد کی نوٹیفکیشن سیٹنگز میں آن کریں۔',
          'فون سائلنٹ کرنے سے پہلے NAMAZI بیک گراؤنڈ میں آپ کی لوکیشن چیک کرتا ہے تاکہ یقینی ہو کہ آپ واقعی مسجد پہنچ گئے ہیں۔',
          'مسجد کا ایڈیٹر نماز کے اوقات اپڈیٹ کر سکتا ہے۔',
          'امام یا ذمہ دار مسجد کی تفصیلات جیسے لوکیشن، سہولیات اور تصاویر اپڈیٹ کر سکتے ہیں۔',
          'امام یا ذمہ دار مسجد کے پیپل ٹیب سے ایڈیٹر، مؤذن اور دیگر رول شامل یا ختم کر سکتے ہیں۔',
        ],
      },
      {
        emoji: '📢',
        title: 'براڈکاسٹ',
        tips: [
          'امام یا ذمہ دار مسجد کے تمام فالوورز کو براڈکاسٹ (اعلان/بیان) بھیج سکتے ہیں۔',
        ],
      },
      {
        emoji: '📝',
        title: 'درخواستیں',
        tips: [
          'کسی مسجد کے لیے امام یا ذمہ دار مقرر کروانے کی درخواست بھیجیں — مقرر ہونے کے بعد وہ ایڈیٹر شامل یا ختم کر سکتے ہیں۔',
        ],
      },
      {
        emoji: '🧭',
        title: 'قبلہ فائنڈر',
        tips: ['قبلہ کی درست سمت کے لیے اپنا فون کسی ہموار سطح پر سیدھا رکھیں۔'],
      },
      {
        emoji: '👤',
        title: 'یوزر پروفائل',
        tips: [
          'اپنی پروفائل میں "کسی بھی مسجد میں سائلنٹ" آن کریں، تاکہ صرف فالو کی گئی ہی نہیں بلکہ کسی بھی مسجد میں فون سائلنٹ ہو جائے۔',
          'ہر یوزر کا ایک منفرد یوزر کوڈ ہوتا ہے — امام، مؤذن، ذمہ دار یا ایڈیٹر جیسا رول دیے جاتے وقت آپ کو تلاش کرنے کے لیے اسے شیئر کریں۔',
        ],
      },
    ],
  },
]
