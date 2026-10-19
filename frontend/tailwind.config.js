module.exports = {
  presets: [require('frappe-ui/src/utils/tailwind.config')],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/frappe-ui/src/components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'edu-purple': '#453D89',
        'edu-pink': '#C8499A',
        'edu-ink': '#292132',
        'edu-deep': '#301044',
        'edu-muted': '#75657D',
        'edu-border': '#E7DDF0',
        'edu-bg': '#F7F4F8',
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(105deg, #453D89 4.3%, #C8499A 98.36%)',
        'brand-gradient-soft':
          'linear-gradient(105deg, rgba(69, 61, 137, 0.08) 4.3%, rgba(200, 73, 154, 0.08) 98.36%)',
      },
      fontSize: {
        'display-2xl': [
          '60px',
          { lineHeight: '1.07', letterSpacing: '-0.025em' },
        ],
        'display-xl': [
          '48px',
          { lineHeight: '1.1', letterSpacing: '-0.022em' },
        ],
        'display-lg': [
          '40px',
          { lineHeight: '1.14', letterSpacing: '-0.02em' },
        ],
        'display-md': [
          '32px',
          { lineHeight: '1.2', letterSpacing: '-0.015em' },
        ],
        'display-sm': [
          '24px',
          { lineHeight: '1.28', letterSpacing: '-0.01em' },
        ],
        'body-xl': ['18px', { lineHeight: '1.65' }],
        'body-lg': ['16px', { lineHeight: '1.65' }],
        'body-md': ['15px', { lineHeight: '1.6' }],
        'body-sm': ['13px', { lineHeight: '1.55' }],
      },
      boxShadow: {
        card: '0 1px 2px rgba(41, 33, 50, 0.04), 0 10px 28px rgba(41, 33, 50, 0.06)',
        'card-hover':
          '0 2px 4px rgba(41, 33, 50, 0.05), 0 18px 44px rgba(69, 61, 137, 0.14)',
        cta: '0 14px 34px rgba(69, 61, 137, 0.28)',
        panel: '0 24px 60px rgba(48, 16, 68, 0.18)',
      },
    },
  },
  plugins: [],
}
