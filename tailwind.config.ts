import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020617',
          900: '#030712',
          850: '#070b16',
          800: '#0b1220',
          700: '#111827',
          600: '#1a2338',
        },
        electric: {
          DEFAULT: '#3B82F6',
          bright: '#2563EB',
          soft: '#60A5FA',
        },
        violet: {
          DEFAULT: '#8B5CF6',
          soft: '#A78BFA',
        },
        cyan: {
          glow: '#22D3EE',
          soft: '#67E8F9',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(59, 130, 246, 0.25)',
        'glow-lg': '0 0 80px rgba(59, 130, 246, 0.35)',
        'glow-cyan': '0 0 40px rgba(34, 211, 238, 0.2)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.08) 1px, transparent 1px)',
        'hero-radial':
          'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(59,130,246,0.35), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 20%, rgba(139,92,246,0.22), transparent 50%), radial-gradient(ellipse 40% 30% at 10% 40%, rgba(34,211,238,0.12), transparent 45%)',
        'section-glow':
          'radial-gradient(ellipse at center, rgba(59,130,246,0.12), transparent 65%)',
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
