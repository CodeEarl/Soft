const navToggle = document.querySelector(".menu");
const links = document.querySelector(".list");

navToggle.addEventListener("click", function () {
  
  links.classList.toggle("show");
  var nav = document.querySelector(".nav-icon");
  nav.classList.toggle("active");
  var list = document.querySelector(".listb");
list.classList.toggle("space");
});

var i = 0;
var txt = "soft's drawings";
var speed = 50;
function load() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++
    setTimeout(load, speed);
}
}
var splide = new Splide( '.splide', {
    autoplay: 'play',
    type    : 'loop',
    perPage: 1,
    focus  : 0,
    rate : 1,
} );
splide.mount();