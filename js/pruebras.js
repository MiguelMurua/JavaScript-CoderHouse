/*
let usuario = prompt("Ingrese su nombre:")


function saludar ( nombre ) {

    usuario = `${nombre}`
}

saludar()*/

var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
    },
  });