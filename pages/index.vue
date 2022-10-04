<script>
  export default {
    layout: 'landing',
    head: {
      title: 'Mansyurina - Mom and Baby Care 👩🏻‍🍼',
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/@glidejs/glide' },
      ],
      link: [
        {
          href: 'https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.core.min.css',
          rel: 'stylesheet',
        },
        {
          href: 'https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.theme.min.css',
          rel: 'stylesheet',
        },
      ],
    },
    mounted () {
      new Glide('.testimonial-slider', {
        autoplay: 5000,
        gap: 20,
        perView: 1,
        bound: true,
      }).mount();

      new Glide('.article', {
        autoplay: 5000,
        hoverpause: false,
        gap: 20,
        perView: 2,
        bound: true,
        breakpoints: {
          600: {
            perView: 1,
          }
        }
      }).mount();
    }
  }
</script>

<template>
  <!-- THE APP CONTENT -->
  <div class="app-wrapper h-screen overflow-auto transition-all duration-700">
    <header class="lg:min-h-[758px] -mt-[68px] lg:-mt-[148px] mb-48 md:mb-40 relative pt-[200px] lg:pt-[450px]">
      <div class="container flex flex-col px-6 md:flex-row mx-auto relative z-10">
        <h2 class="text-white text-[1.75rem] lg:text-5xl max-w-full lg:max-w-[477px] lg:leading-normal">
          Berikan pijatan lembut pada si kecil untuk kenyamanan & kebugarannya
          <button class="hidden lg:block btn-white btn-hover mt-7">
            Reservasi sekarang
            <i class="fa-solid fa-angle-right ml-2"></i>
          </button>
        </h2>
        <baby-animation />
        <button
                class="absolute left-1/2 -translate-x-1/2 -bottom-28 w-max lg:hidden btn-green-blue hover:-translate-y-2 hover:shadow-lg transition-all duration-300 mt-7">
          Reservasi sekarang
          <i class="fa-solid fa-angle-right ml-2"></i>
        </button>
      </div>
    </header>
    <section class="undang-kami pb-[7.375rem] md:pb-0">
      <div class="container mx-auto px-6 flex flex-col md:flex-row items-center md:gap-36">
        <img class="w-[300px] md:w-max block" src="../images/feature-undang-kami.svg" alt="Undang Kami" />
        <div class="flex flex-col items-center md:items-start gap-8 mt-14">
          <h2 class="text-4xl md:text-5xl text-dark-red text-center md:text-left">
            Undang kami ke rumah Anda
          </h2>
          <p class="text-xl text-dark-grey text-center md:text-left">
            Homecare adalah layanan utama kami. Panggil kami jika Anda tak
            mempunyai waktu luang yang banyak mengantar buah hati ke tempat baby
            spa. Kami akan mengirimkan terapist yang berpengalaman &
            bersertifikat untuk membuat buah hati Anda bugar kembali.
          </p>
          <button class="btn-peach btn-hover hover:bg-yellow-300 w-max">
            Reservasi sekarang
            <i class="fa-solid fa-angle-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
    <section class="kelas-massage bg-gray-100 md:pt-[73px] pb-[50px] md:pb-[100px] relative">
      <div class="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center md:gap-36 relative z-10">
        <div class="flex flex-col items-center md:items-end gap-8 mt-14">
          <h2 class="text-4xl md:text-5xl text-dark-red text-center md:text-right">
            Jadi terapist pribadi untuk buah hati Anda? <em>Why not?</em>
          </h2>
          <p class="text-xl text-dark-grey text-center md:text-right">
            Ingin bisa memijat buah hati Anda sendiri? Bangun hubungan antara
            Anda dan si kecil sejak dini dengan mengikuti pelatihan baby massage
            dari kami oleh mentor yang telah berpengalaman & bersertifikat.
          </p>
          <button class="btn-peach btn-hover hover:bg-yellow-300 w-max">
            Daftar kelas
            <i class="fa-solid fa-angle-right ml-2"></i>
          </button>
        </div>
        <img class="w-[300px] md:w-max block" src="../images/feature-kelas-massage.svg" alt="Kelas Massage" />
      </div>
    </section>
    <section class="produk pt-[83px] pb-[85px] z-10 relative">
      <div class="container mx-auto px-6 flex flex-col md:flex-row items-center md:gap-36">
        <img class="w-[300px] md:w-max block" src="../images/feature-produk.svg" alt="Produk Kami" />
        <div class="flex flex-col items-center md:items-start gap-8 mt-14">
          <h2 class="text-4xl md:text-5xl text-dark-red text-center md:text-left">
            Produk dari kami
          </h2>
          <p class="text-xl text-dark-grey text-center md:text-left">
            Temukan berbagai macam produk berkualitas dari kami untuk buah hati
            Anda. Dengan harga bersaing dan diskon khusus untuk pelanggan kami.
          </p>
          <button class="btn-peach btn-hover hover:bg-yellow-300 w-max">
            Dapatkan sekarang
            <i class="fa-solid fa-angle-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
    <section class="testimonial pt-[200px] pb-[128px] md:pb-[224px] relative">
      <img src="../images/bg-testimonial.jpg" alt="" class="absolute top-0 left-0 w-full h-full object-cover opacity-10" />
      <img src="../images/testimony-border-top.png" alt=""
          class="block absolute w-full top-0 md:-top-[225px] left-0 right-0 h-auto" />
      <div class="container text-white mx-auto flex flex-col items-center px-6 z-10 gap-6 relative">
        <h2 class="text-4xl md:text-5xl text-center">Testimoni</h2>
        <div class="testimonial-slider w-full">
          <div class="glide__track w-full" data-glide-el="track">
            <div class="glide__slides">
              <div class="glide__slide w-full flex flex-col items-center gap-6">
                <div class="avatar w-[82px] h-[82px] rounded-full bg-grey flex justify-center items-center">
                  <i class="fa-solid fa-user fa-2x text-dark-grey"></i>
                </div>
                <div class="username flex text-lg items-center">
                  <i class="fa-brands fa-twitter mr-1"></i>
                  <span class="name"></span>
                </div>
                <p class="text-2xl text-center max-w-[676px]">
                  Temukan berbagai macam produk berkualitas dari kami untuk buah
                  hati Anda. Dengan harga bersaing dan diskon khusus untuk pelanggan
                  kami.
                </p>
                <em class="text-lg">Nina William - Ibu rumah tangga</em>
              </div>
              <div class="glide__slide w-full flex flex-col items-center gap-6">
                <div class="avatar w-[82px] h-[82px] rounded-full bg-grey flex justify-center items-center">
                  <i class="fa-solid fa-user fa-2x text-dark-grey"></i>
                </div>
                <div class="username flex text-lg items-center">
                  <i class="fa-brands fa-twitter mr-1"></i>
                  <span class="name"></span>
                </div>
                <p class="text-2xl text-center max-w-[676px]">
                  Temukan berbagai macam produk berkualitas dari kami untuk buah
                  hati Anda. Dengan harga bersaing dan diskon khusus untuk pelanggan
                  kami.
                </p>
                <em class="text-lg">Nina William - Ibu rumah tangga</em>
              </div>
              <div class="glide__slide w-full flex flex-col items-center gap-6">
                <div class="avatar w-[82px] h-[82px] rounded-full bg-grey flex justify-center items-center">
                  <i class="fa-solid fa-user fa-2x text-dark-grey"></i>
                </div>
                <div class="username flex text-lg items-center">
                  <i class="fa-brands fa-twitter mr-1"></i>
                  <span class="name"></span>
                </div>
                <p class="text-2xl text-center max-w-[676px]">
                  Temukan berbagai macam produk berkualitas dari kami untuk buah
                  hati Anda. Dengan harga bersaing dan diskon khusus untuk pelanggan
                  kami.
                </p>
                <em class="text-lg">Nina William - Ibu rumah tangga</em>
              </div>
            </div>
          </div>
          <div class="top-[100px] md:top-[200px] left-0 right-0 absolute" data-glide-el="controls">
            <button type="button" class="carousel-prev absolute left-6" data-glide-dir="<">
              <i class="fa-solid fa-angle-left text-2xl"></i>
            </button>
            <button type="button" class="carousel-next absolute right-6" data-glide-dir=">">
              <i class="fa-solid fa-angle-right text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
      <img src="../images/testimony-border-bottom.png" alt=""
          class="block absolute w-full bottom-0 left-0 right-0 h-auto" />
    </section>
    <section class="article relative min-h-[738px] cursor-[unset]">
      <img src="../images/img-article-ornament.svg" alt=""
          class="absolute h-40 top-[10px] md:top-[434px] -left-20 md:-left-[100px]" />
      <div class="pt-[172px] pb-[156px] flex flex-col lg:flex-row gap-y-[67px]">
        <div class="text mx-10 md:mx-20 lg:w-2/5">
          <h2 class="text-4xl text-dark-red md:text-5xl mb-8">
            Artikel Terkini
          </h2>
          <p class="text-2xl text-dark-grey text-left">
            Dapatkan inspirasi dan tips trik dari kami untuk tumbuh kembang
            jasmani dan karakter buah hati
          </p>
          <!-- <div class="controller" data-glide-el="controls">
              <button class="glide__arrow-left" data-glide-dir="<">Prev</button>
              <button class="glide__arrow-right" data-glide-dir=">">Next</button>
            </div> -->
        </div>
        <div class="slider glide lg:w-3/5">
          <div class="track glide__track" data-glide-el="track">
            <ul class="slides glide__slides md:pl-5 pb-10 cursor-grab">
              <li class="glide__slide px-5 md:px-0">
                <a href=""
                  class="slide relative block w- h-[400px] lg:h-[318px] hover:h-[400px] rounded-[30px] shadow-xl bg-grey transition-all duration-300">
                  <img src="../images/thumbs/thumb-2022624-family-time.png" alt="Family Time"
                      class="w-full h-full object-cover transition-all rounded-[30px]" />
                  <div
                      class="title absolute flex flex-col items-center justify-end h-[168px] w-full left-0 -bottom-[1px] rounded-br-[30px] rounded-bl-[30px] transition-all duration-300">
                    <h5 class="text-center text-white text-2xl font-bold mb-5">
                      Family Time
                    </h5>
                    <div
                        class="button bg-white hover:bg-peach text-dark-red hover:text-white text-lg text-center -mb-5 px-9 py-4 w-max mx-auto rounded-full shadow-lg transition-all duration-300">
                      Baca selengkapnya
                    </div>
                  </div>
                </a>
              </li>
              <li class="glide__slide px-5 md:px-0">
                <a href=""
                  class="slide relative block w- h-[400px] lg:h-[318px] hover:h-[400px] rounded-[30px] shadow-xl bg-grey transition-all duration-300">
                  <img src="../images/thumbs/thumb-2022624-family-time.png" alt="Family Time"
                      class="w-full h-full object-cover transition-all rounded-[30px]" />
                  <div
                      class="title absolute flex flex-col items-center justify-end h-[168px] w-full left-0 -bottom-[1px] rounded-br-[30px] rounded-bl-[30px] transition-all duration-300">
                    <h5 class="text-center text-white text-2xl font-bold mb-5">
                      Family Time
                    </h5>
                    <div
                        class="button bg-white hover:bg-peach text-dark-red hover:text-white text-lg text-center -mb-5 px-9 py-4 w-max mx-auto rounded-full shadow-lg transition-all duration-300">
                      Baca selengkapnya
                    </div>
                  </div>
                </a>
              </li>
              <li class="glide__slide px-5 md:px-0">
                <a href=""
                  class="slide relative block w- h-[400px] lg:h-[318px] hover:h-[400px] rounded-[30px] shadow-xl bg-grey transition-all duration-300">
                  <img src="../images/thumbs/thumb-2022624-family-time.png" alt="Family Time"
                      class="w-full h-full object-cover transition-all rounded-[30px]" />
                  <div
                      class="title absolute flex flex-col items-center justify-end h-[168px] w-full left-0 -bottom-[1px] rounded-br-[30px] rounded-bl-[30px] transition-all duration-300">
                    <h5 class="text-center text-white text-2xl font-bold mb-5">
                      Family Time
                    </h5>
                    <div
                        class="button bg-white hover:bg-peach text-dark-red hover:text-white text-lg text-center -mb-5 px-9 py-4 w-max mx-auto rounded-full shadow-lg transition-all duration-300">
                      Baca selengkapnya
                    </div>
                  </div>
                </a>
              </li>
              <li class="glide__slide px-5 md:px-0">
                <a href=""
                  class="slide relative block w- h-[400px] lg:h-[318px] hover:h-[400px] rounded-[30px] shadow-xl bg-grey transition-all duration-300">
                  <img src="../images/thumbs/thumb-2022624-family-time.png" alt="Family Time"
                      class="w-full h-full object-cover transition-all rounded-[30px]" />
                  <div
                      class="title absolute flex flex-col items-center justify-end h-[168px] w-full left-0 -bottom-[1px] rounded-br-[30px] rounded-bl-[30px] transition-all duration-300">
                    <h5 class="text-center text-white text-2xl font-bold mb-5">
                      Family Time
                    </h5>
                    <div
                        class="button bg-white hover:bg-peach text-dark-red hover:text-white text-lg text-center -mb-5 px-9 py-4 w-max mx-auto rounded-full shadow-lg transition-all duration-300">
                      Baca selengkapnya
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <footer class="min-h-screen flex flex-col items-center justify-center relative">
      <img src="../images/footer-border-top.png" alt="" class="block absolute w-full h-[182px] top-0 left-0 right-0" />
      <div class="footer-content flex flex-col text-white text-center max-w-2xl px-6 md:px-0 z-10 gap-y-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptates nemo adipisci assumenda magni amet
          totam dolorum nisi nam vero, id consequuntur, aspernatur neque cupiditate deleniti cum alias quas recusandae?
        </p>
        <div class="buttons flex flex-wrap justify-center gap-2">
          <a href="" class="block px-3 py-1 rounded-full hover:bg-black/10">Layanan</a>
          <a href="" class="block px-3 py-1 rounded-full hover:bg-black/10">Tentang kami</a>
          <span class="w-full md:hidden"></span>
          <a href="" class="block px-3 py-1 rounded-full hover:bg-black/10">Blog</a>
          <a href="" class="block px-3 py-1 rounded-full hover:bg-black/10">Kontak</a>
        </div>
        <div class="buttons flex flex-col md:flex-row items-center justify-center gap-5">
          <a href="https://www.instagram.com/mansyurina.homecare/" target="_blank" class="btn-white btn-hover">
            <i class="fa-brands fa-instagram"></i>
            Follow kami
          </a>
          <button class="btn-animate btn-hover" type="button">
            <i class="fa-brands fa-whatsapp"></i>
            Reservasi sekarang
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>