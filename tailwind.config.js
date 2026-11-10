/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        deepForest: '#254A3D',
        warmBeige: '#FBECCB',
        cream: '#FFF8E8',
        sage: '#8FAF9A',
        olive: '#667A4E',
        terracotta: '#B96F52',
        terracottaHover: '#A45D42',
        darkBrown: '#49382F',
        mutedGold: '#C49A5A'
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace']
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-6px)' },
          '40%, 80%': { transform: 'translateX(6px)' }
        },
        popIn: {
          '0%': { transform: 'scale(0.85) translateY(8px)', opacity: '0' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' }
        },
        sweep: {
          to: { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        shake: 'shake 0.35s ease-in-out',
        pop: 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        sweep: 'sweep 5s linear infinite'
      }
    }
  },
  plugins: [],
}