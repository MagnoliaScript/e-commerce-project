// HEADER SCROLL



// FIM HEADER SCROLL



// CARROSSÉIS INDEX

// CARROSSEL CATEGORIAS
$(document).ready(function () {
  $('.categories-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
        nav: true
      },
      600: {
        items: 5,
        nav: true
      },
      1000: {
        items: 8,
        nav: true,
        loop: false
      }
    }
  });
});
// FIM CARROSSEL CATEGORIAS



// CARROSSEL PRODUTOS
$(document).ready(function () {
  $('.products-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 2,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 5,
        nav: true,
        loop: false
      }
    }

  })
});
// FIM CARROSSEL PRODUTOS



// CARROSSEL BANNER
$(document).ready(function () {
  $(".carousel-banner").owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    items: 1,
    stagePadding: 280,
    autoplay: true,
    autoplayTimeout: 4000,
    nav: true,
    dots: true,

    responsive: {
      1200: {
        items: 1,
        stagePadding: 280,
      },
      992: {
        items: 1,
        stagePadding: 150,
      },
      768: {
        items: 1,
        stagePadding: 100,
      },
      0: {
        items: 1,
        stagePadding: 20,
      }
    }
  });
});
// FIM CARROSSEL BANNER

// FIM CARROSSÉIS INDEX