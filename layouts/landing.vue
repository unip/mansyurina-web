<script>
  import { resolve } from 'path';
  export default {
    head: {
      script: [
        { src: '/script.js', body: true }
      ]
    }
  }
</script>

<template>
  <div class="landing-page">
    <navbar />
    <nuxt />
    <menu-mobile />
    <footer-bottom />
  </div>
</template>