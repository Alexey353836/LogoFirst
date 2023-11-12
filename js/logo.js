
//scroll
// Фиксированный обьект
const headerFix = document.querySelector('.header_fix');
// Фиксированный обьект end
const scrollController = {
   scrollPosition: 0,
  disabledScroll() {
      scrollController.scrollPosition = window.scrollY;
      headerFix.style.cssText = `
      padding-right: ${(window.innerWidth - document.body.offsetWidth)}px;
    `;
      document.body.style.cssText = `
      overflow: hidden;
      top:-${scrollController.scrollPosition}px;
      left: 0;
      padding-right: ${(window.innerWidth - document.body.offsetWidth)}px;
      // padding-right: 9px;
       `;
      // document.documentElement.style.scrollBehavior = 'unset';
  },
  enabledScroll() {
      document.body.style.cssText = ``;
      window.scroll({top: scrollController.scrollPosition});
    //  document.documentElement.style.scrollBehavior = '';
    },
}
//scroll end


// Menu burger
const burgerButton = document.querySelector('.burger-button');
const burgerNavClass = document.querySelector('.burger-nav-class');
const burgerUserView = document.querySelector('.burger-user-view');
const burgerCloses = document.querySelectorAll('.burger-close');

for(let index = 0; index < burgerCloses.length; index++) {
    let burgerClose = burgerCloses[index]; 
    burgerClose.addEventListener('click', burgerclose);
}

burgerButton.addEventListener('click', burgeropen);

function  burgeropen () {
    burgerNavClass.classList.add('burger-open');
    burgerUserView.classList.add('burger-open');
    setTimeout(() => {
      scrollController. disabledScroll();
   },0)
}

function burgerclose () {
    burgerNavClass.classList.remove('burger-open');
    burgerUserView.classList.remove('burger-open');
    setTimeout(() => {
      scrollController. enabledScroll();
      headerFix.style.cssText = ``;
    },500)
}
// Menu burger end


function popupOffers () {
// Popup offers
const popupLinks = document.querySelectorAll('.popup-link');
const popup = document.querySelectorAll('.popup');

let curentPopup;
let unlock = true;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks [index];
    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
       curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

function popupOpen (curentPopup) {
   if (curentPopup && unlock) {
       curentPopup.classList.add('open');
       scrollController. disabledScroll();
   }
  }

let closePopup = document.querySelectorAll('.close-popup');
  for (let index = 0; index < closePopup.length; index++) {
      const closePopups = closePopup[index];
      closePopups.addEventListener('click', delit);
  }

   function delit () {
    curentPopup.classList.remove('open');
    setTimeout(() => {
      scrollController. enabledScroll();
    },500)
   }


// Full photo
let full = document.querySelectorAll('.full');
let img = document.querySelectorAll('.popup-img');
let blackPhoto = document.querySelector('.black-photo');
let itemPlus = document.querySelectorAll('.item-plus');
let imgPlus = document.querySelectorAll('.img-plus');


for (let index = 0; index < itemPlus.length; index++) {
  let itemPluss = itemPlus[index];
 // console.log(itemPlus);
 itemPluss.addEventListener('click', function () {
   itemPluss.classList.add('full');
    blackPhoto.style.visibility  = 'visible';
 });
}

for(let index = 0; index < imgPlus.length; index++) {
    let imgPluss = imgPlus[index];
  imgPluss.addEventListener('click', function () {
    imgPluss.classList.add('full-img');
    imgPluss.classList.add('zindex');
  });
}

blackPhoto.addEventListener('click', fullBack);

function fullBack () {
  for (let index = 0; index < itemPlus.length; index++) {
    let itemPluss = itemPlus[index];
   // console.log(itemPlus);
   itemPluss.classList.remove('full');
   setTimeout(() => {
    blackPhoto.style.visibility  = 'hidden';
   },500)
    }
  for(let index = 0; index < imgPlus.length; index++) {
    let imgPluss = imgPlus[index];
  // console.log(imgPlus);
 setTimeout(() => {
    imgPluss.classList.remove('zindex');
  },500)
  setTimeout(() => {
    imgPluss.classList.remove('full-img');
  },0)
  //  imgPluss.classList.add('popup-img');
  }
}
// Full photo end
//Popup offers end
}
popupOffers();


/* Reviews */
const sliderLeft = document.querySelector('#slider-left');
const sliderItems = sliderLeft.children;


// Создаём масив
Array.from(sliderItems).forEach(function (slide, index) {

    //Скрываем слайды кроме первого
    if(index !== 0) {
        slide.classList.add('none');
    }

    //Добавить индексы, чтобы убирать hidden
    slide.dataset.index = index;

    // Добавляем data атрибут для первого / активного слайда.
    sliderItems[0].setAttribute('data-active', '');

    // Клик по слайдам
    slide.addEventListener('click', function () {

        // Скрыть текуший, следующий показать
        slide.classList.remove('hiddenvisible');
        setTimeout(() => {
            slide.classList.add('none');
         },400)
          slide.removeAttribute('data-active');

        //index следующего слайда
        let nextSlideIndex;
        if (index + 1 === sliderItems.length) {
            nextSlideIndex = 0;
        } else {
            nextSlideIndex = index+1
        }
         const nextSlide = sliderLeft.querySelector(`[data-index="${nextSlideIndex}"]`);
           
        nextSlide.classList.remove('none');
         
         setTimeout(() => {
            nextSlide.classList.add('hiddenvisible');
         },0)
         nextSlide.setAttribute('data-active', '');
    });
});

/* Reviews end */