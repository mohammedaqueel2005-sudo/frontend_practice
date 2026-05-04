let eye = document.getElementById("eye");
let password = document.getElementById("password");

eye.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    eye.setAttribute("class", "ri-eye-off-line");
  } else {
    password.type = "password";
    eye.setAttribute("class", "ri-eye-line");
  }
});


const swiperLogin = new Swiper('.img-swiper', {

  loop: true,
  spaceBetween:'24',
  grabCursor:true,
  speed: 600,
  // effect:'fade',

  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  }

});