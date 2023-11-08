// "use strict";

// To know moo slider
let sliderImgs = document.querySelectorAll('.slider-img');
let sliderStart = document.querySelector('.slider-start');
let sliderReviouses = document.querySelectorAll('.slider-previous');
let sliderLine = document.querySelector('.slider-line');
let sliderNexts = document.querySelectorAll('.slider-next'); 
let count = 0;
let widths;

function init(){
     widths = document.querySelector('.slider').offsetWidth;// Посчитать длинну слайдера
     rollSlider();
} 
init();

window.addEventListener('resize', init);
 
 for(let index = 0; index < sliderNexts.length; index++) {
      let sliderNext = sliderNexts[index];
     sliderNext.addEventListener('click', next);
}

for(let index = 0; index < sliderReviouses.length; index++ ) {
     let sliderRevious = sliderReviouses[index];
     // console.log(sliderRevious);
     sliderRevious.addEventListener('click',revious);
}

function revious () {
     if (count == 1){
          sliderStart.classList.remove('buttons-color');
     }
     if (count == 1){
          for(let index = 0; index < sliderReviouses.length; index++ ) {
               let sliderRevious = sliderReviouses[index];
               sliderRevious.classList.remove('buttons-color');
          }
     }
     if (count > 0){
          count--;
     }
     for(let index = 0; index < sliderNexts.length; index++) {
          let sliderNext = sliderNexts[index];
          sliderNext.classList.add('buttons-color'); 
     console.log(sliderNext);
     rollSlider();
     }
}

 document.querySelector('.slider-start').addEventListener('click', function () {
     count = 0;
     rollSlider();
     for(let index = 0; index < sliderNexts.length; index++) {
          let sliderNext = sliderNexts[index];
          sliderNext.classList.add('buttons-color');
     }
     sliderStart.classList.remove('buttons-color');
     for(let index = 0; index < sliderReviouses.length; index++ ) {
          let sliderRevious = sliderReviouses[index];
          sliderRevious.classList.remove('buttons-color');
     }
});

function next () {
     count ++;
     sliderStart.classList.add('buttons-color');
     for(let index = 0; index < sliderReviouses.length; index++ ) {
          let sliderRevious = sliderReviouses[index];
          sliderRevious.classList.add('buttons-color');
     }
     if (count === sliderImgs.length){
          count --; 
          for(let index = 0; index < sliderNexts.length; index++) {
               let sliderNext = sliderNexts[index];
               sliderNext.classList.remove('buttons-color');   
          }
     }
     rollSlider();   
 }

function rollSlider() {
     sliderLine.style.transform = 'translate(-'+count*widths+'px)';
 }
// To know moo slider end
 


