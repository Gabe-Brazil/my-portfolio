// Classic heraldic fleur-de-lis — the elegant, slender "Bourbon" form with
// curled scroll petals and rounded knops at each tip. Public-domain
// heraldry, not the specific trademarked Scouting America emblem artwork —
// used here purely to signal "Eagle Scout" on a personal badge.

export function ScoutEmblem({ size = 22, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="#ffffff"
      aria-hidden="true"
      {...props}
    >
      {/* central spike */}
      <path d="M50,9 C54,9 57,20 55,30 C54,34 52,37 50,40 C48,37 46,34 45,30 C43,20 46,9 50,9 Z" />
      <path d="M47,40 L53,40 L54,58 L46,58 Z" />
      <circle cx="50" cy="9" r="4" />

      {/* left curled petal */}
      <path d="M44,32 C32,26 18,30 14,42 C12,48 15,53 21,52 C26,51 29,47 27,42 C25,38 29,34 35,33 C38,32.5 41,32 44,32 Z" />
      <circle cx="15" cy="44" r="4" />

      {/* right curled petal (mirror) */}
      <path d="M56,32 C68,26 82,30 86,42 C88,48 85,53 79,52 C74,51 71,47 73,42 C75,38 71,34 65,33 C62,32.5 59,32 56,32 Z" />
      <circle cx="85" cy="44" r="4" />

      {/* binding fillet */}
      <path d="M30,58 H70 V66 H30 Z" />
      <circle cx="30" cy="62" r="4.5" />
      <circle cx="70" cy="62" r="4.5" />

      {/* base foot */}
      <path d="M42,66 C42,66 38,80 42,90 C44,95 50,97 50,97 C50,97 56,95 58,90 C62,80 58,66 58,66 Z" />
    </svg>
  )
}
