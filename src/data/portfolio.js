// ---------------------------------------------------------------------------
// PLACEHOLDER CONTENT — replace everything in this file with your real info.
// Drop your real resume at /public/resume.pdf (keep the filename or
// update resumeUrl below to match).
// ---------------------------------------------------------------------------

import linkedInPic from '../assets/linkedInPic.png'

export const profile = {
  name: 'Gabriel "Gabe" Brazil',
  tagline: 'Computer Science, Data Science & Economics',
  university: 'UW-Madison',
  location: 'Wisconsin, USA',
  bio:
    "I'm a CS, DS, & Economics student interested in the intersection " +
    'of algorithms, markets, and data. I build software and utilize new technology to visualize data and find patterns.',
  photo: linkedInPic,
  resumeUrl: '/my-portfolio/resume.pdf',
  email: 'gabrielbrazil11@outlook.com',
  socials: {
    github: 'https://github.com/gabe-brazil',
    linkedin: 'https://linkedin.com/in/gabe-brazil',
  },
}

export const education = [
  {
    id: 'edu-1',
    school: 'University of Wisconsin-Madison',
    degree: 'B.S. in Computer Science & Economics, Certificate in Data Science',
    details: [
      'Relevant coursework: Data Structures & Algorithms, Machine Learning, ' +
        'Econometrics, Game Theory, Microeconomic Theory, Distributed Systems',
      //'Honors / awards: ',
      'Activities: AI Club, Hackathon Team, Hillel/Chabad',
    ],
  },
]

// Set `video: null` until you have a real clip, or point it at a local file
// (e.g. '/videos/project-1.mp4') or a YouTube/Vimeo embed URL.
export const projects = [
  {
    id: 'project-1',
    title: 'Arbitrage Trader Script',
    tagline: 'Python, PyTorch, React, Vite, SQLite',
    description:
      'Built a full-stack arbitrage scanner that pulls live odds from betting ' +
      'and prediction market APIs (Kalshi, Polymarket, and others) to detect ' +
      'pricing discrepancies across platforms. I also trained a small sentence ' +
      'embedding model with PyTorch to match event listings with inconsistent ' +
      'naming and stored completed trades in SQLite while building a React/Vite ' +
      'dashboard to analyze performance.',
    tags: ['Python', 'PyTorch', 'React', 'Vite', 'SQLite'],
    accent: 'turquoise',
    video: { type: null, src: null },
    links: {
      github: 'https://github.com/Gabe-Brazil',
      demo: null,
    },
  },
  {
    id: 'project-2',
    title: 'Lingual AI',
    tagline: 'AI powered language learning app',
    description:
      'A full-stack, AI-powered language-learning app built in 24 hours ' +
      'at MadHacks 2025 with a team of four, integrating third-party ' +
      'speech-to-text and text-to-speech models into the backend to give ' +
      'learners spoken conversation practice.',
    tags: ['Python', 'HTML', 'Gemini', 'API Integration'],
    accent: 'gold',
    video: { type: null, src: null },
    links: {
      github: 'https://github.com/Gabe-Brazil/LanguageConversation',
      demo: null,
    },
  },
  {
    id: 'project-3',
    title: 'Youmegle',
    tagline: 'Multiplayer chatroom game',
    description:
      'A real-time video chat platform with peer-to-peer webcam streaming ' +
      'in private and public rooms, where users vote on random YouTube ' +
      'videos to watch together, backed by a signaling server for room ' +
      'management and Discord OAuth with JWT cookies for authentication.',
    tags: ['React', 'Node.js', 'MySQL', 'Socket.IO', 'WebRTC'],
    accent: 'turquoise',
    video: { type: null, src: null },
    links: {
      github: 'https://github.com/Gabe-Brazil/youmegle',
      demo: null,
    },
  },
]
