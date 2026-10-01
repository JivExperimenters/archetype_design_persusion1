// All page copy lives here. The layout in App.tsx only reads it, so another
// topic can reuse the same layout by swapping this file.

// The team README is the topic index ("separate topic indexes are unnecessary").
export const TOPIC_INDEX_URL = 'https://github.com/JivExperimenters/archetype_design_persusion1#your-teams-guide'

export const meta = {
  kicker: 'Brand archetype · Sample topic page',
  title: 'The Magician',
  tagline: 'It is what it is.',
  author: 'Minh Nguyen',
  course: 'IS117',
  lede:
    'The Magician brand promises transformation. You come in with something ordinary and leave with something better. This page covers what the archetype is, when it fits, how to design with it, and the version I’d build: a magician whose trick is showing up with something useful, every time.',
  image: {
    src: '/images/magician-card.jpg',
    width: 900,
    height: 1560,
    alt: 'The Magician tarot card from the 1909 Rider–Waite deck. A robed figure raises a wand to the sky and points to the ground, with a cup, a sword, a coin and a wand laid out on the table in front of him.',
    caption: 'The Magician, Rider–Waite tarot, 1909. Drawn by Pamela Colman Smith.',
  },
}

// Order here = order on the page = order in the section nav.
export const nav = [
  { id: 'what', label: 'What it is' },
  { id: 'when', label: 'When to use it' },
  { id: 'how', label: 'How to apply it' },
  { id: 'examples', label: 'Examples' },
  { id: 'context', label: 'History' },
  { id: 'take', label: 'My take' },
  { id: 'sources', label: 'Sources' },
]

export const what = {
  number: '01',
  title: 'What it is',
  heading: 'Ordinary goes in. Something better comes out.',
  body: [
    'Brand archetypes come from psychologist Carl Jung’s idea that people everywhere recognize the same recurring characters, like the hero and the rebel. In 2001, Margaret Mark and Carol S. Pearson adapted twelve of them for marketing in The Hero and the Outlaw.',
    'The Magician is the archetype of change. It takes something everyday, like a vacuum cleaner or a phone, and makes it feel like a small miracle. What people pay for is the before-and-after.',
  ],
  traits: [
    { label: 'Goal', value: 'To turn dreams into reality' },
    { label: 'Biggest fear', value: 'Unintended negative consequences' },
    { label: 'Strategy', value: 'Create a unique vision and live by it' },
    { label: 'Sells', value: 'Transformation over features' },
    { label: 'Risk', value: 'Overpromising. “The wonder has to survive contact with the actual thing you sell.”' },
  ],
  characteristics: [
    { name: 'Visionary', text: 'Talks about what could be.' },
    { name: 'Transformative', text: 'The before-and-after is the whole story.' },
    { name: 'Wonder-driven', text: 'Makes people curious about how it works.' },
    { name: 'Proven', text: 'Shows the trick working, in public.' },
  ],
}

export const when = {
  number: '02',
  title: 'When to use it',
  heading: 'Use it only if the change is real',
  audience:
    'People who want a shortcut to a better version of something: a better photo, a cleaner house, a smarter phone, a new skill. They’re curious, and they’ll try something new once they’ve seen it work.',
  purpose:
    'Launching something people didn’t think was possible, or making a complicated thing feel easy.',
  fits: [
    'Tech and tools that save real time or effort',
    'Education and ideas, where people leave knowing more (TED)',
    'Entertainment and experiences built on wonder (Disney)',
    'Beauty, wellness and self-improvement, where the promise is a visible change',
  ],
  avoid:
    'Skip it when the product is a commodity with no real transformation, because the magic will read as hype, or when the audience mostly wants stability and tradition (a Caregiver or Ruler fits better). Above all, skip it when you can’t show proof. A magician who can’t do the trick is a con artist, which is exactly what Bosch painted.',
}

export const how = {
  number: '03',
  title: 'How to apply it',
  heading: 'Make the magic visible',
  facets: [
    {
      name: 'Imagery',
      text: 'Show the moment of change: the before and after, the reveal, the product doing the thing. Real photos of real results beat abstract sparkles. Light, glow and depth help. Stock wizard hats don’t.',
    },
    {
      name: 'Color',
      text: 'Keep the base calm and neutral so the change stands out, then save one warm, distinct accent for the moment of magic, like a button or a reveal. Many Magician brands reach for deep purples and night blues. A warm accent keeps the wonder approachable instead of mystical.',
    },
    {
      name: 'Typography',
      text: 'Pair a legible serif for headlines, a voice with some history and authority, with a clean sans-serif for body text and interface: clear, modern, easy to scan. This page uses Newsreader and Geist.',
    },
    {
      name: 'Layout',
      text: 'Build it like a reveal: one idea per screen, a clear setup, then the payoff. Give the key moment plenty of space. Keep navigation plain, so wonder never turns into confusion.',
    },
    {
      name: 'Wording',
      text: 'Talk about outcomes and possibility, in plain words. Promise only what the product does every time.',
    },
  ],
  wording: [
    {
      do: 'Turn your notes into a study plan in one minute.',
      dont: 'Unlock limitless potential with AI-powered magic.',
    },
    {
      do: 'Free template. Download it, use it, keep it.',
      dont: 'The revolutionary secret system they don’t want you to know.',
    },
  ],
  palette: [
    { name: 'Paper', hex: '#F4F0E8', role: 'Background' },
    { name: 'Stone', hex: '#E9E2D6', role: 'Surfaces' },
    { name: 'Soft ink', hex: '#5B5349', role: 'Secondary text' },
    { name: 'Ink', hex: '#1D1A16', role: 'Text' },
    { name: 'Ember', hex: '#C2410C', role: 'The one accent' },
  ],
}

export const examples = {
  number: '04',
  title: 'Examples',
  heading: 'Five brands that pull it off',
  items: [
    {
      brand: 'Disney',
      detail: '“Where dreams come true”',
      image: {
        src: '/images/disney.jpg',
        width: 1000,
        height: 1251,
        alt: 'Cinderella Castle at Magic Kingdom, its blue spires against the sky.',
      },
      text: 'The textbook Magician. Its parks make the transformation physical: you walk through a gate and into a story. Cinderella Castle, the centerpiece of Magic Kingdom, is the promise made visible.',
    },
    {
      brand: 'Apple',
      detail: 'iPhone keynote, 2007',
      image: {
        src: '/images/apple.jpg',
        width: 1400,
        height: 932,
        alt: 'Steve Jobs on stage at Macworld 2007, presenting the first iPhone.',
      },
      text: 'On January 9, 2007, Steve Jobs announced three products, an iPod, a phone and an internet communicator, then revealed they were one device. Setup, misdirection, reveal: the structure of a magic trick, used to present a phone as a small act of transformation.',
    },
    {
      brand: 'Dyson',
      detail: 'DC01, 1993',
      image: {
        src: '/images/dyson.jpg',
        width: 900,
        height: 1351,
        alt: 'A grey and yellow Dyson DC01 upright vacuum with its clear dust bin.',
      },
      text: 'Dyson took one of the most boring objects in a house and made it exciting. The DC01’s clear bin plays the trick in the open: you watch the dirt spin out of the air. Nothing is hidden, and that’s what makes it convincing.',
    },
    {
      brand: 'Polaroid',
      detail: 'SX-70, 1972',
      image: {
        src: '/images/polaroid.jpg',
        width: 900,
        height: 1130,
        alt: 'Two folding Polaroid SX-70 Land Cameras in brushed steel and tan leather, on display at the MIT Museum.',
      },
      text: 'Instant photography is literal magic: press a button and a picture develops in your hand. The SX-70 folded flat to fit in a pocket, so the trick could go anywhere.',
    },
    {
      brand: 'TED',
      detail: '“Ideas worth spreading”',
      image: {
        src: '/images/ted.jpg',
        width: 1400,
        height: 1046,
        alt: 'A red TED balloon floating over the TED 2012 conference venue in Long Beach.',
      },
      text: 'TED puts its talks online for free. The transformation it sells is a new idea in eighteen minutes, and it gives that away so consistently that its name became shorthand for a good talk. The closest real example to my take below.',
    },
  ],
  shadow: {
    brand: 'The shadow side',
    detail: 'The Conjurer, c. 1502',
    image: {
      src: '/images/conjurer.jpg',
      width: 1400,
      height: 1164,
      alt: 'The Conjurer, a painting from the workshop of Hieronymus Bosch. A street magician performs a cup trick for a crowd while a man behind them steals a spectator’s purse.',
    },
    text: 'From the workshop of Hieronymus Bosch. While the conjurer performs a cups-and-balls trick, an accomplice lifts a spectator’s purse. It’s the Magician’s fear made literal: wonder used as a distraction. Every Magician brand is one broken promise away from this painting.',
  },
}

export const context = {
  number: '05',
  title: 'History',
  heading: 'From street trick to brand strategy',
  timeline: [
    {
      year: 'c. 1502',
      text: 'Bosch’s workshop paints The Conjurer: the street magician as a trickster. The archetype’s shadow arrives first.',
    },
    {
      year: '1909',
      text: 'Pamela Colman Smith draws the Magician for the Rider–Waite tarot: one hand to the sky, one to the earth, every tool laid out on the table.',
    },
    {
      year: '1919 on',
      text: 'Carl Jung describes archetypes: characters people recognize across cultures without being taught them.',
    },
    {
      year: '2001',
      text: 'Mark and Pearson’s The Hero and the Outlaw turns twelve archetypes into a branding system. The Magician becomes the brand of transformation.',
    },
  ],
  modernismIntro:
    'In class we framed modernism as clarity and function (a clear-cut, intuitive, clean message) and postmodernism as ambiguity that makes you stop and look. The Magician has been pulled both ways:',
  modernism: [
    {
      stance: 'Challenges',
      text: 'Classic Magician branding sells mystery and wonder, which pushes against “form follows function.” Disney’s castle is ornament and story, not function.',
    },
    {
      stance: 'Supports',
      text: 'Product Magicians like Apple and Dyson work their magic through modernist clarity: clean forms and the mechanism on display.',
    },
    {
      stance: 'Develops',
      text: 'Postmodernism gives the Magician a new trick. It mixes high and low culture, breaks the grid and lets meaning stay a little open, so the viewer does part of the work. Wonder becomes something you take part in.',
    },
  ],
  approach: {
    title: 'Why this page looks the way it does',
    lead: 'This page takes the postmodern route, inspired by the Memphis Group, while keeping the type and color choices from my brief.',
    points: [
      'I observe angled forms and contrasting blocks in Ettore Sottsass’s Carlton room divider (1981). I adapted them into tilted image panels and blocks of playful geometry. This helps the visitor feel the page is a little bit staged, like a magic act.',
      'I put a 500-year-old painting next to a vacuum cleaner on purpose. Mixing high and low culture is a postmodern move. It makes you stop and look, which is exactly what a magician wants.',
      'The frame plays tricks. The message doesn’t. Headlines get expressive, but paragraphs stay straight, legible and plain. It is what it is.',
    ],
  },
}

export const take = {
  number: '06',
  title: 'My take',
  kicker: 'My take · Minh Nguyen',
  quote: 'It is what it is.',
  heading: 'The reliable magician',
  body: [
    'Most Magician brands win with one big reveal. Mine wins with repetition. I give away free tools and ideas, and I do it consistently, so the value keeps showing up whether anyone is watching or not. Over time that becomes trust: people know what they’ll get from me, and they know it will work.',
    'Look at the tarot card again. The Magician doesn’t hide his tools. The cup, the sword, the coin and the wand are all on the table in plain sight. The trick is knowing what to do with what’s in front of you, and doing it every time.',
  ],
  principles: [
    {
      name: 'Reciprocity',
      text: 'Give something useful first, and people want to give back.',
    },
    {
      name: 'Consistency',
      text: 'Once people start relying on you, they want to stay consistent with that choice. A brand that delivers every time makes it easy.',
    },
  ],
  choices: [
    { name: 'Type', text: 'A legible serif and a sans-serif, working together' },
    { name: 'Color', text: 'Neutral but not muted, with one warm, distinct accent' },
    { name: 'Voice', text: 'Plain and honest. It is what it is.' },
    { name: 'Approach', text: 'Postmodern frame, plain message' },
  ],
}

export const sources = {
  number: '07',
  title: 'Sources',
  references: [
    {
      label: 'Mark, M. & Pearson, C. S. (2001). The Hero and the Outlaw: Building Extraordinary Brands Through the Power of Archetypes. McGraw-Hill.',
      url: 'https://openlibrary.org/isbn/0071364153',
    },
    { label: 'Jungian archetypes. Wikipedia.', url: 'https://en.wikipedia.org/wiki/Jungian_archetypes' },
    {
      label: 'Cialdini, R. The 7 Principles of Persuasion. Influence at Work.',
      url: 'https://www.influenceatwork.com/7-principles-of-persuasion/',
    },
    { label: 'The Magician Archetype. Astute.', url: 'https://astute.co/brand-archetypes-the-magician/' },
    {
      label: 'Magician Archetype: Unlocking the Magic Within the Brand. Ramotion.',
      url: 'https://ramotion.com/blog/magician-archetype',
    },
    { label: 'The 12 Brand Archetypes (With Real Examples). Moonb.', url: 'https://www.moonb.io/blog/brand-archetypes' },
    { label: 'The Magician Archetype. Ebaq Design.', url: 'https://www.ebaqdesign.com/blog/magician-archetype' },
    { label: 'The Magician (tarot card). Wikipedia.', url: 'https://en.wikipedia.org/wiki/The_Magician_(Tarot_card)' },
    { label: 'The Conjurer (painting). Wikipedia.', url: 'https://en.wikipedia.org/wiki/The_Conjurer_(painting)' },
    { label: 'iPhone (1st generation). Wikipedia.', url: 'https://en.wikipedia.org/wiki/IPhone_(1st_generation)' },
    { label: 'Form follows function. Wikipedia.', url: 'https://en.wikipedia.org/wiki/Form_follows_function' },
    { label: 'Our organization. TED.', url: 'https://www.ted.com/about/our-organization' },
    { label: 'What is postmodernism? Victoria and Albert Museum.', url: 'https://www.vam.ac.uk/articles/what-is-postmodernism' },
    {
      label: 'Ettore Sottsass, “Carlton” Room Divider, 1981. The Metropolitan Museum of Art, 1997.460.1a–d.',
      url: 'https://www.metmuseum.org/art/collection/search/486989',
    },
  ],
  // All images via Wikimedia Commons, resized by Commons, otherwise unmodified.
  credits: [
    {
      label: 'The Magician (Rider–Waite tarot), Pamela Colman Smith, 1909. Public domain.',
      url: 'https://commons.wikimedia.org/wiki/File:RWS_Tarot_01_Magician.jpg',
    },
    {
      label: 'The Conjurer, workshop of Hieronymus Bosch, c. 1502. Public domain.',
      url: 'https://commons.wikimedia.org/wiki/File:Hieronymus_Bosch_051.jpg',
    },
    {
      label: 'Cinderella Castle, Katie Rommel-Esham. CC BY-SA 4.0.',
      url: 'https://commons.wikimedia.org/wiki/File:Cinderella_Castle.jpg',
    },
    {
      label: 'Steve Jobs presents iPhone, Blake Patterson. CC BY 2.0.',
      url: 'https://commons.wikimedia.org/wiki/File:Steve_Jobs_presents_iPhone_(cropped_3-2).jpg',
    },
    {
      label: 'Dyson DC01, Lankyrider. CC BY-SA 4.0.',
      url: 'https://commons.wikimedia.org/wiki/File:Dyson_DC01._01.jpg',
    },
    {
      label: 'Polaroid SX-70 Land Camera, MIT Museum, Daderot. CC0.',
      url: 'https://commons.wikimedia.org/wiki/File:Polaroid_SX-70_Land_Camera_-_MIT_Museum_-_DSC03773.JPG',
    },
    {
      label: 'TED 2012 exterior, Long Beach, Sue Gardner. CC BY-SA 3.0.',
      url: 'https://commons.wikimedia.org/wiki/File:TED_2012_exterior,_Long_Beach.jpg',
    },
  ],
}
