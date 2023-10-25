document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });





  // Выпадающее меню
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });
 // Выпадающее меню end




  // Material Box
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems);
});
// Material Box end




/*
// Карусель
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
});

var instance = M.Carousel.init({
  fullWidth: true,
  indicators: true
});
// Карусель end
*/



//scroll
const scrollController = {
  scrollPosition: 0,
  disabledScroll() {
      scrollController.scrollPosition = window.scrollY;
      document.body.style.cssText = `
      overflow: hidden;
      top:-${scrollController.scrollPosition}px;
      left: 0;
      padding-right: ${(window.innerWidth - document.body.offsetWidth)}px;
      // padding-right: 9px;
       `;
      document.documentElement.style.scrollBehavior = 'unset';
  },
  enabledScroll() {
      document.body.style.cssText = ``;
        window.scroll({top: scrollController.scrollPosition})
      document.documentElement.style.scrollBehavior = '';
  },
}
//scroll end






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
// console.log(closePopup);
  for (let index = 0; index < closePopup.length; index++) {
      const closePopups = closePopup[index];
      // console.log(closePopups);
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
// console.log(full);
// console.log(img);

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
  // console.log(imgPlus);
  imgPluss.addEventListener('click', function () {
    imgPluss.classList.add('full-img');
    imgPluss.classList.add('zindex');
    // imgPluss.classList.remove('popup-img');
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
   },1100)
    }
  for(let index = 0; index < imgPlus.length; index++) {
    let imgPluss = imgPlus[index];
  // console.log(imgPlus);
 setTimeout(() => {
    imgPluss.classList.remove('zindex');
  },800)
  setTimeout(() => {
    imgPluss.classList.remove('full-img');
  },0)
  //  imgPluss.classList.add('popup-img');
  }
}
// Full photo end
//Popup offers end
}
popupOffers ();





// Popups to know moo
function popupsToKnowMoo() {
  const popupLinksToKnowMoo = document.querySelectorAll('.popup-link-to-know-moo');
  // console.log(popupLinksToKnowMoo);
  const popup = document.querySelectorAll('.popup');

  let curentPopupToKnowMoo;
  let unlock = true;

  if (popupLinksToKnowMoo.length > 0) {
    for (let index = 0; index < popupLinksToKnowMoo.length; index++) {
      const popupLinkToKnowMoo = popupLinksToKnowMoo [index];
      popupLinkToKnowMoo.addEventListener('click', function (e) {
        const popupNameToNowMoo = popupLinkToKnowMoo.getAttribute('href').replace('#', '');
        curentPopupToKnowMoo = document.getElementById(popupNameToNowMoo);
        popupOpenToKnowMoo(curentPopupToKnowMoo);
        e.preventDefault();
      });
    }
  }

  function popupOpenToKnowMoo (curentPopupToKnowMoo) {
    if (curentPopupToKnowMoo && unlock) {
      setTimeout(() => {
        curentPopupToKnowMoo.classList.add('open-to-know-moo');
          scrollController. disabledScroll();
      },800)
      // curentPopupToKnowMoo.classList.add('open-to-know-moo');
        
    }
   }

   let closePopupsToKnowMoo = document.querySelectorAll('.close-popup-to-know-moo');
//  console.log( closePopupsToKnowMoo);
  for (let index = 0; index <  closePopupsToKnowMoo.length; index++) {
      const  closePopupToKnowMoo =  closePopupsToKnowMoo[index];
      //  console.log(closePopupToKnowMoo);
       closePopupToKnowMoo.addEventListener('click', delit);
  }

   function delit () {
    curentPopupToKnowMoo.classList.remove('open-to-know-moo');
    setTimeout(() => {
       scrollController. enabledScroll();
    },1200)
   }
}
popupsToKnowMoo();
// Popups to know moo end

