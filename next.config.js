const withNextra = require('nextra')

module.exports = withNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  output: 'export',      // GitHub Pages အတွက် သတ်မှတ်ပေးရမည့် Static Export လိုင်း
  images: {
    unoptimized: true,   // GitHub Pages မှာ ပုံတွေ ပျက်မသွားအောင် ထိန်းပေးတဲ့လိုင်း
  },
})
