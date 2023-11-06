"use strict";


const images = document.querySelectorAll('.img');
let sliderStart = document.querySelector('.slider-start');
let sliderRevious = document.querySelector('.slider-previous');
let sliderLine = document.querySelector('.slider-line');
let sliderNext = document.querySelector('.slider-next');
let green = document.querySelector('.green');
let count = 0;
let widths;

// console.log(images);


function init(){
     widths = document.querySelector('.slider').offsetWidth;// Посчитать длинну слайдера
     rollSlider();
} 
init();

 window.addEventListener('resize', init);

 document.querySelector('.slider-start').addEventListener('click', function () {
     count = 0;
     rollSlider();
     sliderNext.classList.add('green');
     sliderStart.classList.remove('green');
     sliderRevious.classList.remove('green');
});

function next () {
     count ++;
     sliderStart.classList.add('green');
     sliderRevious.classList.add('green');
     
     if (count === images.length){
          count --; 
           sliderNext.classList.remove('green');
     }
     /*
     if (count > 4){
           sliderNext.classList.remove('green');
     }
     */
     rollSlider();   
 };
sliderNext.addEventListener('click', next);

document.querySelector('.slider-previous').addEventListener('click', function () {
     if (count == 1){
          sliderStart.classList.remove('green');
     }
     if (count == 1){
           sliderRevious.classList.remove('green');
     }
     if (count > 0){
          count--;
     }
     sliderNext.classList.add('green'); 
     rollSlider();
});

function rollSlider() {
     sliderLine.style.transform = 'translate(-'+count*widths+'px)';
 }

 


