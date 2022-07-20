const menu=document.querySelector("#bars");
const nav=document.querySelector(".navbar");
const search=document.querySelector("#search");
const searchForm=document.querySelector("#search-form");
const close=document.querySelector("#close");

menu.onclick=() => {
    menu.classList.toggle("fa-times")
    nav.classList.toggle("active")
}
window.onscroll= () => {
    menu.classList.remove("fa-times")
    nav.classList.remove("active")
}
search.onclick=() => {
    searchForm.classList.add("active")
}
close.onclick=()=>{
    searchForm.classList.remove("active")
}

var swiper = new Swiper(".container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
  
var swiper = new Swiper(".review-container", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true, 
  breakpoints:{
    0: {
      slidesPerView:1,
    },
    
    640: {
      slidesPerView:2,
    },
    
    768: {
      slidesPerView:2,
    },
    
    1024: {
      slidesPerView:3,
    },
    
  },
});