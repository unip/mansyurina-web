export default {
  components: true,
  buildModules: [
    '@nuxt/postcss8',
    // ...
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  head: {
    meta: [
      {
        hid: 'charset',
        charset: 'UTF-8',
      },
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      },
    ],
    script: [
      { src: 'https://kit.fontawesome.com/1191ef92be.js', crossorigin: 'anonymous' },
    ],
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap',
        rel: 'stylesheet',
      },
      {
        rel: 'icon',
        href: '/favicon.png',
        type: 'image/x-icon',
      },
    ]
  },
  css: [
    '@/assets/css/tailwind.css',
  ],
}
