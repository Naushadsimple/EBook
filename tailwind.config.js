/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#fafafa',
        'surface-subtle': '#f4f4f6',
        obsidian: '#111215',
        charcoal: '#27272a',
        'muted-body': '#52525b',
        'subtle-border': 'rgba(0, 0, 0, 0.06)',
        'glass-bg': 'rgba(255, 255, 255, 0.72)',
        terracotta: {
          DEFAULT: '#c2613d',
          dark: '#9b4422',
          light: '#ffb59b',
          subtle: 'rgba(194, 97, 61, 0.08)',
        },
      },
      fontFamily: {
        display: ['var(--font-newsreader)', 'Newsreader', 'Georgia', 'serif'],
        editorial: ['var(--font-newsreader)', 'Newsreader', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 10px 40px -10px rgba(0, 0, 0, 0.05)',
        'glass-hover': '0 20px 45px -10px rgba(0, 0, 0, 0.08)',
        'pill-glow': '0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 10px rgba(0, 0, 0, 0.04)',
        'ambient-xl': '0 20px 60px rgba(0,0,0,0.06)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
