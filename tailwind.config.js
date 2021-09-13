module.exports = {
  theme: {},
  variants: {
    extend: {
      transform: ['group-hover', 'active'],
      translate: ['group-hover'],
      scale: ['active'],
      rotate: ['group-hover'],
      visibility: ['group-hover'],
      textColor: ['active']
    }
  },
  plugins: [],
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  }
}