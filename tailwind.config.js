/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}" ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0013',
        secondary: '#0369B2',
        accent: '#FFD166',
        dark: '#0F172A',
        textPrimary: '#1E293B',
        textSecondary: '#64748B',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'slow-fade-in': 'slowFadeIn 3s ease-in',
        'scroll-left': 'scrollLeft 30s linear infinite',
        'scroll-right': 'scrollRight 30s linear infinite',
        'scroll': 'scroll 40s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-in',
        'scale-up': 'scaleUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'count-up': 'countUp 2s ease-out',
        'gradient-shift': 'gradientShift 3s ease infinite',
      },
      keyframes: {
        scrollRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slowFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-1750px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 86, 210, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 86, 210, 0.8)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 0, 19, 0.5)',
        'glow-lg': '0 0 40px rgba(255, 0, 19, 0.6)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('flowbite/plugin'),
  ],
}
