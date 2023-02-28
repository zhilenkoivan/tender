var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

  var swiper = new Swiper(".myTabs", {
    watchSlidesProgress: true,
    slidesPerView: 3,
  });
  var swiper = new Swiper(".myTabs-2", {
    watchSlidesProgress: true,
    slidesPerView: 3,
  });
  // var swiper = new Swiper(".myTabs-3", {
  //   watchSlidesProgress: true,
  //   slidesPerView: 3,
  // });
  (function() {
    const header = document.querySelector('.header');
    const links = document.querySelector('.links');
    const logo = document.querySelector('.logo');
    const logo2 = document.querySelector('.logo-2');
    window.onscroll = () => {
        if(window.pageYOffset>10){
            header.classList.add('header_active');
            links.classList.add('links_active');
            logo.style.display = "none";
            logo2.style.display = "block";
        } else{
            header.classList.remove('header_active');
            links.classList.remove('links_active');
            logo2.style.display = "none";
            logo.style.display = "block";
        }
    }
}());