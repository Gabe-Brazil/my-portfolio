// ---------------------------------------------------------------------------
// PLACEHOLDER CONTENT — replace everything in this file with your real info.
// Drop your real resume at /public/resume.pdf (keep the filename or
// update resumeUrl below to match).
// ---------------------------------------------------------------------------

import linkedInPic from '../assets/linkedInPic.png'

export const profile = {
  name: 'Gabriel Chayim "Gabe" Brazil',
  tagline: 'Computer Science, Data Science & Economics',
  university: 'UW-Madison',
  location: 'Wisconsin, USA',
  bio:
    "I'm a CS, DS, & Economics student interested in the intersection " +
    'of algorithms, markets, and data. I build software and utilize new technology to visualize data and find patterns.',
  photo: linkedInPic,
  resumeUrl: '/resume.pdf',
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
    period: '2025 — 2029',
    gpa: 'GPA: 3.33 / 4.00',
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
    title: 'Market Simulation Engine',
    tagline: 'Agent-based simulation of a limit order book',
    description:
      'A discrete-event simulator that models market makers and noise ' +
      'traders interacting through a limit order book, used to study how ' +
      'microstructure rules affect price stability and liquidity.',
    tags: ['Python', 'Simulation', 'Market Microstructure'],
    accent: 'turquoise',
    video: { type: null, src: null },
    links: {
      github: 'https://github.com/yourusername/market-sim-engine',
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
  {
    id: 'project-4',
    title: 'Distributed Key-Value Store',
    tagline: 'Fault-tolerant storage with Raft consensus',
    description:
      'A replicated key-value store implementing the Raft consensus ' +
      'protocol for leader election and log replication, built to explore ' +
      'trade-offs in distributed systems design.',
    tags: ['Go', 'Distributed Systems', 'Raft'],
    accent: 'silver',
    video: { type: null, src: null },
    links: {
      github: 'https://github.com/yourusername/raft-kv-store',
      demo: null,
    },
  },
  {
    id: 'project-5',
    title: 'ML Price Prediction Pipeline',
    tagline: 'Feature engineering + gradient boosting on equity data',
    description:
      'An end-to-end pipeline that engineers features from price, volume, ' +
      'and macro data, then trains gradient-boosted models to forecast ' +
      'short-horizon returns, with walk-forward validation.',
    tags: ['Python', 'scikit-learn', 'Machine Learning'],
    accent: 'gold',
    video: { type: null, src: null },
    links: {
      github: 'https://github.com/yourusername/ml-price-prediction',
      demo: null,
    },
  },
  {
    id: 'project-6',
    title: 'Econometrics Research Toolkit',
    tagline: 'Regression diagnostics and causal inference helpers',
    description:
      'A library of reusable econometrics tools — panel regressions, ' +
      'difference-in-differences estimators, and diagnostic plots — built ' +
      'for a research assistantship to speed up applied empirical work.',
    tags: ['R', 'Econometrics', 'Statistics'],
    accent: 'turquoise',
    video: { type: null, src: null },
    links: {
      github: 'https://github.com/yourusername/econometrics-toolkit',
      demo: null,
    },
  },
]
