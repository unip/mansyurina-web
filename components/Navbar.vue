<template>
  <!-- NAVBAR -->
  <nav class="fixed top-0 left-0 right-0 z-[99] transition-all duration-700">
    <div class="wrapper px-6 md:px-8 flex items-center h-[68px] lg:h-[148px] transition-all duration-700">
      <h1 class="logo">
        <a class="block w-max" href="/">
          <img class="w-[150px] lg:w-auto" src="../images/logo-top.svg" alt="Mansyurina" />
        </a>
      </h1>

      <div class="menu-items hidden lg:flex ml-auto">
        <a href="" class="text-white text-[24px] font-bold px-4 py-1 rounded-full hover:bg-black/10 block">Layanan</a>
        <a href="" class="text-white text-[24px] font-bold px-4 py-1 rounded-full hover:bg-black/10 block">Tentang
          kami</a>
        <a href="" class="text-white text-[24px] font-bold px-4 py-1 rounded-full hover:bg-black/10 block">Blog</a>
        <a href="" class="text-white text-[24px] font-bold px-4 py-1 rounded-full hover:bg-black/10 block">Kontak</a>
      </div>

      <button type="button" class="burger" onclick="toggleMenu()">
        <i class="fa-solid fa-bars text-2xl"></i>
      </button>
    </div>
  </nav>
</template>