var i = 0;
var txt = "Welcome to Soft Art's page.";
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