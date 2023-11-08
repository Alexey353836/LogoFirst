// "use strict";

// To know moo slider
 const sliderImg = document.querySelectorAll('.slider-img');
let sliderStart = document.querySelector('.slider-start');
let sliderReviouses = document.querySelectorAll('.slider-previous');
let sliderRevious;
let sliderLine = document.querySelector('.slider-line');
let sliderNexts = document.querySelectorAll('.slider-next'); 
let sliderNext;
let count = 0;
let widths;

function init(){
     widths = document.querySelector('.slider').offsetWidth;// Посчитать длинну слайдера
     rollSlider();
} 
init();

window.addEventListener('resize', init);

 for(let index = 0; index < sliderNexts.length; index++) {
      sliderNext = sliderNexts[index]; 
     //  console.log(sliderNext);
     sliderNext.addEventListener('click', next);
     // console.log(sliderNext);
}

for(let index = 0; index < sliderReviouses.length; index++ ) {
     sliderRevious = sliderReviouses[index];
     // console.log(sliderRevious);
     sliderRevious.addEventListener('click', function () {
          if (count == 1){
               sliderStart.classList.remove('buttons-color');
          }
          if (count == 1){
                sliderRevious.classList.remove('buttons-color');
          }
          if (count > 0){
               count--;
          }
     sliderNext.classList.add('buttons-color'); 
     rollSlider();
     });
}

 document.querySelector('.slider-start').addEventListener('click', function () {
     count = 0;
     rollSlider();
     sliderNext.classList.add('buttons-color');
     sliderStart.classList.remove('buttons-color');
     sliderRevious.classList.remove('buttons-color');
});

function next () {
     count ++;
     sliderStart.classList.add('buttons-color');
     sliderRevious.classList.add('buttons-color');
     if (count === sliderImg.length){
          count --; 
            sliderNext.classList.remove('buttons-color');
     }
     if (count > 4){
           sliderNext.classList.remove('buttons-color');
     }
     rollSlider();   
 };

function rollSlider() {
     sliderLine.style.transform = 'translate(-'+count*widths+'px)';
 }
// To know moo slider end
 


