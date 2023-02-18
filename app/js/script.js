import Glide from "@glidejs/glide";
/* Sliders */
// console.log(document.querySelector("#main-carousel"));

let glide = new Glide("#main-carousel", { perView: 1});
glide.mount();

let productsSlider = new Glide("#products-slider", { perView: 3,gap: 40 });
productsSlider.mount();


// console.log("---------------");

// breakpoints: {
//   1024: {
//     perView: 2,
//   },
//   420: {
//     perView: 1,
//   },
// },
