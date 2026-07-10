const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra()
const withNextra = require('nextra')({ 
  theme: 'nextra-theme-docs', 
  themeConfig: './theme.config.tsx', 
}) 

module.exports = withNextra({
  output: 'export',      // GitHub Pages အတွက် သတ်မှတ်ပေးရမည့် Static Export လိုင်း
  images: {
    unoptimized: true,   // GitHub Pages မှာ ပုံတွေ ပျက်မသွားအောင် ထိန်းပေးတဲ့လိုင်း
  },
})
