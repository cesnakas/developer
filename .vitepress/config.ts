import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru',
  title: 'Developer Kit',
  titleTemplate: ':title | Developer Kit',
  description: 'Developer Kit',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Sass/SCSS', link: '/' },
      { text: 'Bitrix', link: '/bitrix/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cesnakas' }
    ]
  }
})
