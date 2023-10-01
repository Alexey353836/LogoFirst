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

  // Material Box
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems);
});

// Карусель
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
});

var instance = M.Carousel.init({
  fullWidth: true,
  indicators: true
});




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


//Popup_toknowmo
const modalControler = ({modal, btnOpen, btnClose, btnCloselll, time = 500}) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);
  
  
  modalElem.style.cssText = `
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: opacity ${time}ms ease-in-out;
  `;
  
  const closeModal = () => {
      const target = event.target;
      if (target === modalElem || target.closest(btnClose)) {
         modalElem.style.opacity = 0;
          scrollController. enabledScroll();
         
          setTimeout(() => {
              modalElem.style.visibility = 'hidden';
            //   scrollController. enabledScroll();
          },500)
      }
  }

  const closeModalll = () => {
    const targetlll = event.target;
    if (targetlll === modalElem || targetlll.closest(btnCloselll)) {
      modalElem.style.opacity = 0;
      
        setTimeout(() => {
           modalElem.style.visibility = 'hidden';
        },800)
    }
}
  
  const openModal = () => {
    modalElem.style.visibility = 'visible';
      modalElem.style.opacity = 1; 
      scrollController. disabledScroll();
  };
  
  buttonElems.forEach(btn => {
      btn.addEventListener('click', openModal);
  });
  
  modalElem .addEventListener('click', closeModalll);
  
  

  modalElem .addEventListener('click', closeModal);
  
  }
  
  
  modalControler({
      modal:'.modal1',
      btnOpen: '.section_button1',
      btnClose: '.closes',
      btnCloselll:'closeslll',
      time: 500
  });
  
  modalControler({
      modal:'.modal2',
      btnOpen: '.section_button2',
      btnClose: '.closes',
      btnCloselll:'.closeslll',
       time: 500
  });
  
  
  // Popup_toknowmo end


  //Popup_toknowmo - 3
const modalControler3 = ({modal3, btnOpen3, btnClose3, time = 500}) => {
  const buttonElems3 = document.querySelectorAll(btnOpen3);
  const modalElem3 = document.querySelector(modal3);
  
  
  modalElem3.style.cssText = `
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: opacity ${time}ms ease-in-out;
  `;
  
  const closeModal3 = () => {
      const target3 = event.target;
      if (target3 === modalElem3 || target3.closest(btnClose3)) {
         modalElem3.style.opacity = 0;

         scrollController. enabledScroll();
          setTimeout(() => {
              modalElem3.style.visibility = 'hidden';
            //   scrollController. enabledScroll();
          },500)
      }
     
  }
  
  const openModal3 = () => {
   
  setTimeout(() => {
      modalElem3.style.visibility = 'visible';
      modalElem3.style.opacity = 1;
  },100)
  
  scrollController. disabledScroll();
  };
  
  buttonElems3.forEach(btn => {
      btn.addEventListener('click', openModal3);
  });
  
  modalElem3 .addEventListener('click', closeModal3);
  
  }
   
  modalControler3({
      modal3:'.modal3',
      btnOpen3: '.section_button3',
      btnClose3: '.closes3',
      time: 800
  });
// Popup_toknowmo - 3 end


// Photo JS
function photo () {
  // const
      const photoController = ({openPhoto, closePhoto, fullScreen, imgScale, popupToknowmoContentScroll}) => {
          
          const itemButtons = document.querySelectorAll(openPhoto);//.item-button
          const fullScreens = document.querySelector(fullScreen);//.full-screen
          const black = document.querySelector(closePhoto); //.black
          const scale = document.querySelector(imgScale);//.scale

        //scrollPhoto
        const popupToknowmoContent = document.querySelector(popupToknowmoContentScroll);//.popup_toknowmo-content'
        const scrollControllerPhoto = {
              scrollPositions: 0,
            disabledScrollPhoto() {
                scrollControllerPhoto.scrollPositions = window.scrollY;
                popupToknowmoContent.style.cssText = `
               overflow: hidden;
                 top: -${scrollControllerPhoto.scrollPositions}px;
                left: 0:
                 widht: 100vw;
                 height: 100vw;
                //  padding-right: 14px;
                 padding-right: 15px;
               `;
               document.documentElement.style.scrollBehavior = 'unset';// Выключить плавный скрол
                },
                enabledScrollPhoto() {
                    popupToknowmoContent.style.cssText = ``;
                    window.scroll({top:scrollControllerPhoto.scrollPositions})
                    document.documentElement.style.scrollBehavior = '';// Включить плавный скрол
                },
            }
            //scrollPhoto end

          const minPhoto = event => {
              const target = event.target;
  
              if(target === black) {
    
                  scale.style.cssText = `transition: 0.5s;`;
                  black.style.cssText = ``;

                  setTimeout(() => {
                      fullScreens.style.cssText = ``; 
                      scrollControllerPhoto.enabledScrollPhoto();
                  }, 500);
              }
          };
  
          const bigPhoto = () => {
              fullScreens.style.cssText = `
              position: fixed;
              width: 100%;
              height: 100%;
              z-index: 3;
              display: flex;
              align-items: center;
              justify-content: center;
              left: 0;
              top: 0;
              `;
          
              scale.style.cssText = `
              width: 80%;
              transition: 0.5s;
              `;

              black.style.cssText = `
                  position: fixed;
                  width: 100%;
                  height: 100%;
                  left: 0;
                  top: 0;
                  z-index: 4;
              `;
              scrollControllerPhoto.disabledScrollPhoto();
          };
          
          
          // Click
          itemButtons.forEach(btn => {
              btn.addEventListener('click', bigPhoto);
          })
  
          black.addEventListener('click', minPhoto);
      };
  
  
  // photoController-1
      photoController ({
          openPhoto:'.item-button-1',
          closePhoto:'.black-1',
          fullScreen:'.full-screen-1',
          imgScale: '.scale-1',
          popupToknowmoContentScroll: '.popup_toknowmo-content-1'
      });
      photoController ({
          openPhoto:'.item-button-2',
          closePhoto:'.black-1',
          fullScreen:'.full-screen-2',
          imgScale: '.scale-2',
          popupToknowmoContentScroll: '.popup_toknowmo-content-1'
      });
      photoController ({
          openPhoto:'.item-button-3',
          closePhoto:'.black-1',
          fullScreen:'.full-screen-3',
          imgScale: '.scale-3',
          popupToknowmoContentScroll: '.popup_toknowmo-content-1'
      });
      photoController ({
          openPhoto:'.item-button-4',
          closePhoto:'.black-1',
          fullScreen:'.full-screen-4',
          imgScale: '.scale-4',
          popupToknowmoContentScroll: '.popup_toknowmo-content-1'
      });
      photoController ({
          openPhoto:'.item-button-5',
          closePhoto:'.black-1',
          fullScreen:'.full-screen-5',
          imgScale: '.scale-5',
          popupToknowmoContentScroll: '.popup_toknowmo-content-1'
      });
      photoController ({
          openPhoto:'.item-button-6',
          closePhoto:'.black-1',
          fullScreen:'.full-screen-6',
          imgScale: '.scale-6',
          popupToknowmoContentScroll: '.popup_toknowmo-content-1'
      });
      // photoController-1 end

      // photoController-2
      photoController ({
        openPhoto:'.item-button-1-2',
        closePhoto:'.black-2',
        fullScreen:'.full-screen-1-2',
        imgScale: '.scale-1-2',
        popupToknowmoContentScroll: '.popup_toknowmo-content-2'
    });
    photoController ({
        openPhoto:'.item-button-2-2',
        closePhoto:'.black-2',
        fullScreen:'.full-screen-2-2',
        imgScale: '.scale-2-2',
        popupToknowmoContentScroll: '.popup_toknowmo-content-2'
    });
    photoController ({
        openPhoto:'.item-button-3-2',
        closePhoto:'.black-2',
        fullScreen:'.full-screen-3-2',
        imgScale: '.scale-3-2',
        popupToknowmoContentScroll: '.popup_toknowmo-content-2'
    });
    photoController ({
        openPhoto:'.item-button-4-2',
        closePhoto:'.black-2',
        fullScreen:'.full-screen-4-2',
        imgScale: '.scale-4-2',
        popupToknowmoContentScroll: '.popup_toknowmo-content-2'
    });
    photoController ({
        openPhoto:'.item-button-5-2',
        closePhoto:'.black-2',
        fullScreen:'.full-screen-5-2',
        imgScale: '.scale-5-2',
        popupToknowmoContentScroll: '.popup_toknowmo-content-2'
    });
    photoController ({
        openPhoto:'.item-button-6-2',
        closePhoto:'.black-2',
        fullScreen:'.full-screen-6-2',
        imgScale: '.scale-6-2',
        popupToknowmoContentScroll: '.popup_toknowmo-content-2'
    });
     // photoController-2 end
  }
  photo ();
  // Photo JS end
    
        

        