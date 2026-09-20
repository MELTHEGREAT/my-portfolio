/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F5F6F5',
        ink: {
          DEFAULT: '#14181C',
          soft: '#3D444B',
          faint: '#7A828B',
        },
        line: '#DBDFE2',
        signal: {
          DEFAULT: '#2F4BDB',
          dim: '#EAEDFB',
          deep: '#1E2F94',
        },
        amber: {
          DEFAULT: '#E8A33D',
          dim: '#FBEDD7',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
        prose: '38rem',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: 0, transform: 'translateY(14px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        reveal: 'reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
