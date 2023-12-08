import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/developer/',
  cleanUrls: true,

  // lang: 'ru',
  title: 'Sergei Česnakas',
  description: 'Sergei Česnakas — Web Developer, Front-end Web Developer',

  locales: {
    root: { label: 'English', lang: 'en-US' },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://github.com/cesnakas.png',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Bitrix', link: '/bitrix/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cesnakas' },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><title>Telegram</title><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/></svg>' }, link: 'https://t.me/cesnakas', ariaLabel: 'Telegram' }
    ],

    sidebar: [
      {
        text: 'Bitrix',
        link: '/bitrix/',
        collapsed: false,
        items: [
          { text: 'Filter', link: '/bitrix/snippets/filter' },
        ]
      }
    ],

    outlineTitle: 'Содержание:',

    docFooter: {
      prev: false,
      next: false
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © ' + new Date().getFullYear()
    }
  }
})
