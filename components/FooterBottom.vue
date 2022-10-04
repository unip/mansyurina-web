<script>
  export default {
    data () {
      return {
        year: new Date().getFullYear(),
        hostname: process.client ? window.location.hostname : '',
      }
    },
  }
</script>

<template>
  <div class="footer-bottom flex fixed bottom-0 left-0 right-0 h-max transition-all duration-700 z-[95]">
    <div class="footer-logo-wrapper relative w-full md:w-max h-max mt-auto ml-auto">
      <img src="../images/footer-logo-bg.svg" alt="" class="footer-logo-bg w-full md:w-auto">
      <div class="footer-logo absolute flex flex-col items-end justify-end bottom-4 right-7 md:bottom-7 md:right-14">
        <img src="../images/logo-footer.svg" alt="Mansyurina" class="mb-2 w-[135px] md:w-auto">
        <small class="text-gray-400 text-xs md:text-sm">Copyright &copy; <span class="year">{{ year }}</span> - <span
                class="hostname">{{ hostname }}</span></small>
      </div>
    </div>
  </div>
</template>