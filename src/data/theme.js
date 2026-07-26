// Scroll-driven theme stops. Each section owns a background + accent pairing
// pulled from the same palette: dark cobalt blue, silver, gold, turquoise.

export const PALETTE = {
  cobaltDeep: '#050b1f',
  cobalt: '#0a1638',
  lapis: '#071f63',
  cobaltLight: '#122150',
  silver: '#c7ccd6',
  silverSoft: '#9aa3b5',
  gold: '#d4af37',
  goldSoft: '#e8cc6d',
  turquoise: '#2dd4c4',
  turquoiseSoft: '#7ce8dc',
}

export const SECTIONS = [
  {
    id: 'profile',
    label: 'Profile',
    bg: PALETTE.cobaltDeep,
    bgGradient: `radial-gradient(circle at 50% 0%, ${PALETTE.lapis} 0%, ${PALETTE.cobaltDeep} 65%)`,
    accent: PALETTE.turquoise,
    accentSoft: PALETTE.turquoiseSoft,
  },
  {
    id: 'education',
    label: 'Education',
    bg: PALETTE.cobalt,
    bgGradient: `radial-gradient(circle at 15% 20%, ${PALETTE.cobaltLight} 0%, ${PALETTE.cobalt} 60%)`,
    accent: PALETTE.gold,
    accentSoft: PALETTE.goldSoft,
  },
  {
    id: 'projects',
    label: 'Projects',
    bg: PALETTE.cobaltDeep,
    bgGradient: `radial-gradient(circle at 85% 10%, ${PALETTE.cobaltLight} 0%, ${PALETTE.cobaltDeep} 65%)`,
    accent: PALETTE.turquoise,
    accentSoft: PALETTE.turquoiseSoft,
  },
  {
    id: 'contact',
    label: 'Contact',
    bg: PALETTE.cobalt,
    bgGradient: `radial-gradient(circle at 50% 100%, ${PALETTE.cobaltLight} 0%, ${PALETTE.cobalt} 60%)`,
    accent: PALETTE.silver,
    accentSoft: PALETTE.silverSoft,
  },
]

export const getSectionTheme = (id) =>
  SECTIONS.find((s) => s.id === id) ?? SECTIONS[0]
