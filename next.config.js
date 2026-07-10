// Nextra v4 မှာ named export ဖြစ်တဲ့ { nextra } ကို သုံးရပါမယ်
const { nextra } = require('nextra')

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  output: 'export',      // GitHub Pages Static Export အတွက်
  images: {
    unoptimized: true,   // ပုံတွေ ပျက်မသွားစေရန်
  },
})
