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
      // window.scroll({top: scrollController.scrollPosition})
      document.documentElement.style.scrollBehavior = '';
  },
}
//scroll end


//Popup_toknowmo
const modalControler = ({modal, btnOpen, btnClose, btnCloselll, time = 800}) => {
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
        
          setTimeout(() => {
              modalElem.style.visibility = 'hidden';
              scrollController. enabledScroll();
          },800)
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
      time: 800
  });
  
  modalControler({
      modal:'.modal2',
      btnOpen: '.section_button2',
      btnClose: '.closes',
      btnCloselll:'.closeslll',
       time: 800
  });
  
  
  // Popup_toknowmo end


  //Popup_toknowmo - 3
const modalControler3 = ({modal3, btnOpen3, btnClose3, time = 800}) => {
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
        
          setTimeout(() => {
              modalElem3.style.visibility = 'hidden';
               scrollController. enabledScroll();
          },800)
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
        

        