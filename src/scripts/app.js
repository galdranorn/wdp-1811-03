<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
'use strict';

// MENU-BAR small screen dropdown
(function(){ 
    var showBtn = document.querySelector('.category-list-show');
    var dropdownList = document.getElementById('menu-dropdown');

    showBtn.addEventListener('click', function() {
        dropdownList.classList.toggle('drop');
        showBtn.classList.toggle('active');
    });
})();  

//TINY-SLIDER - NEW FURNITURE

(function(){
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    var productsSlider = tns({
        container: '.products-slider',
        items: 1,
        slideBy: 'page',
=======

=======
>>>>>>> 75c2155... Review typos
=======
    var indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach(function(item){
        item.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });

>>>>>>> 01089b9... Add tiny slider to section feedback
    var productsSlider = tns({
        container: '.products-slider',
        items: 1,
        slideBy: 1,
>>>>>>> a6c0b3d... Add tiny slider to furniture section
        mouseDrag: true,
        controls: false,
        navContainer: '.products-carousel-indicators',
        responsive: {
            768: {
<<<<<<< HEAD
<<<<<<< HEAD
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
          }
    });
})();  
=======
console.log('hello');

=======
>>>>>>> 6b1968a... Add helper functions for selecting/deselecting stars
=======
>>>>>>> d6246c9... Fix css and prevent default to not refresh page when click
=======
>>>>>>> 05ec64b... WIP
=======
>>>>>>> 54bdfbf... Add slider to brands section
// PRODUCT SECTION RATING STAR MECHANISM -- WDP181103-19

const productsSection = document.querySelector(".section--products");
const starBoxes = document.querySelectorAll(".stars");

productsSection.addEventListener("mouseover", function(e) {
    if (event.target.classList.contains('star')) {
        let arr = Object.values(event.relatedTarget.children);
        let index = arr.indexOf(event.target);
        deactivateStars();
        setStarsClass(index, event.relatedTarget, "active");
    }
    else if (event.target.classList.contains('stars')) {
        deselectStars();
    }   
});

productsSection.addEventListener("click", function(e) {
    if (event.target.classList.contains('star')) {
        let arr = Object.values(event.target.parentElement.children);
        let index = arr.indexOf(event.target);
        event.preventDefault();
        deactivateStars();
        unsetStarsClass(4, event.target.parentElement, "permanent");
        setStarsClass(index, event.target.parentElement,"permanent");
    }
});

// deselecting stars
function deselectStars() {
    if (! event.target.children[0].classList.contains("permanent")){
        setStarsClass(1, event.target, "full");
    }
    unsetStarsClass (4, event.target, "active");
}
// remove stars showing avg value
function deactivateStars() {
    unsetStarsClass (4, event.target.parentElement, "full");
}

// helper functions

function setStarsClass(limit, elem, className) {
        for (i=0; i<=limit; i++) {
            elem.children[i].classList.add(className);
        }
}

function unsetStarsClass(limit, elem, className) {
        for (i=0; i<=limit; i++) {
            elem.children[i].classList.remove(className);
        }
}
>>>>>>> dde045a... Change stars selecting mechanism from class to indexOf, move code to App.js, change section var name
=======
            items: 2,
            slideBy: 2,
=======
                items: 2,
                slideBy: 2,
>>>>>>> 7aa36f2... Fix typos
            },
            992: {
                items: 3,
                slideBy: 3,
            },
            1200: {
                items: 4,
                slideBy: 4,
            }
          }
    });
<<<<<<< HEAD
})();  
>>>>>>> a6c0b3d... Add tiny slider to furniture section
=======

    var feedbackSlider = tns({
        container: '.feedback-wrapper',
        autoWidth: true,
        mouseDrag: true,
        autoplay: true,
        autoplayButtonOutput: false,
        controls: false,
        navContainer: '.feedback-indicators',
    });
<<<<<<< HEAD
<<<<<<< HEAD
})();  
>>>>>>> 01089b9... Add tiny slider to section feedback
=======

    const brandsSlider = tns({
        container: '.brands-slider',
        loop: true,
        items: 1,
        slideBy: 'page',
        nav: false,    
        autoplay: true,
        speed: 400,
        autoplayButtonOutput: false,
        mouseDrag: true,
        lazyload: true,
        controlsContainer: ".brands-carousel-controls",
        responsive: {
            450: {
                items: 2,
            },
            640: {
                items: 3,
            },
            768: {
                items: 4,
            },
            995: {
                items: 6,
            }
        }
      });

})();  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a6f9e02... Add slider to brands section
=======
>>>>>>> fa3d1ff... Add RWD on different widths
=======


// Mobile swipe for features carousel - task WDP181103-23
$(".carousel").swipe({

    swipe: function(event, direction, distance, duration, fingerCount, fingerData) { 
      if (direction == 'left') {$(this).carousel('next')};
      if (direction == 'right') {$(this).carousel('prev')};
    },
    allowPageScroll:"vertical"
  
  });
>>>>>>> 506a01d... Add swipe and remove hover on tablets/mobiles
=======
})();  

//tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
<<<<<<< HEAD
})
>>>>>>> 6284277... WIP
=======
});
=======
=======
>>>>>>> Add slider to brands section
// PRODUCT SECTION RATING STAR MECHANISM -- WDP181103-19

const productsSection = document.querySelector(".section--products");
const starBoxes = document.querySelectorAll(".stars");

productsSection.addEventListener("mouseover", function(e) {
    if (event.target.classList.contains('star')) {
        let arr = Object.values(event.relatedTarget.children);
        let index = arr.indexOf(event.target);
        deactivateStars();
        setStarsClass(index, event.relatedTarget, "active");
    }
    else if (event.target.classList.contains('stars')) {
        deselectStars();
    }   
});

productsSection.addEventListener("click", function(e) {
    if (event.target.classList.contains('star')) {
        let arr = Object.values(event.target.parentElement.children);
        let index = arr.indexOf(event.target);
        event.preventDefault();
        deactivateStars();
        unsetStarsClass(4, event.target.parentElement, "permanent");
        setStarsClass(index, event.target.parentElement,"permanent");
    }
});

// deselecting stars
function deselectStars() {
    if (! event.target.children[0].classList.contains("permanent")){
        setStarsClass(1, event.target, "full");
    }
    unsetStarsClass (4, event.target, "active");
}
// remove stars showing avg value
function deactivateStars() {
    unsetStarsClass (4, event.target.parentElement, "full");
}

// helper functions

function setStarsClass(limit, elem, className) {
        for (i=0; i<=limit; i++) {
            elem.children[i].classList.add(className);
        }
}

function unsetStarsClass(limit, elem, className) {
        for (i=0; i<=limit; i++) {
            elem.children[i].classList.remove(className);
        }
}


// MENU-BAR small screen dropdown
(function(){ 
    var showBtn = document.querySelector('.category-list-show');
    var dropdownList = document.getElementById('menu-dropdown');

    showBtn.addEventListener('click', function() {
        dropdownList.classList.toggle('drop');
        showBtn.classList.toggle('active');
    });
})();  

//TINY-SLIDER - NEW FURNITURE

(function(){
    var indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach(function(item){
        item.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });

    var productsSlider = tns({
        container: '.products-slider',
        items: 1,
        slideBy: 'page',
        mouseDrag: true,
        controls: false,
        navContainer: '.products-carousel-indicators',
        responsive: {
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
          }
    });

    var feedbackSlider = tns({
        container: '.feedback-wrapper',
        autoWidth: true,
        mouseDrag: true,
        autoplay: true,
        autoplayButtonOutput: false,
        controls: false,
        navContainer: '.feedback-indicators',
    });
<<<<<<< HEAD
})();  
>>>>>>> WIP
<<<<<<< HEAD
>>>>>>> 05ec64b... WIP
=======
=======
=======
// PRODUCT SECTION RATING STAR MECHANISM -- WDP181103-19

const productsSection = document.querySelector(".section--products");
const starBoxes = document.querySelectorAll(".stars");

productsSection.addEventListener("mouseover", function(e) {
    if (event.target.classList.contains('star')) {
        let arr = Object.values(event.relatedTarget.children);
        let index = arr.indexOf(event.target);
        deactivateStars();
        setStarsClass(index, event.relatedTarget, "active");
    }
    else if (event.target.classList.contains('stars')) {
        deselectStars();
    }   
});

productsSection.addEventListener("click", function(e) {
    if (event.target.classList.contains('star')) {
        let arr = Object.values(event.target.parentElement.children);
        let index = arr.indexOf(event.target);
        event.preventDefault();
        deactivateStars();
        unsetStarsClass(4, event.target.parentElement, "permanent");
        setStarsClass(index, event.target.parentElement,"permanent");
    }
});

// deselecting stars
function deselectStars() {
    if (! event.target.children[0].classList.contains("permanent")){
        setStarsClass(1, event.target, "full");
    }
    unsetStarsClass (4, event.target, "active");
}
// remove stars showing avg value
function deactivateStars() {
    unsetStarsClass (4, event.target.parentElement, "full");
}

// helper functions

function setStarsClass(limit, elem, className) {
        for (i=0; i<=limit; i++) {
            elem.children[i].classList.add(className);
        }
}

function unsetStarsClass(limit, elem, className) {
        for (i=0; i<=limit; i++) {
            elem.children[i].classList.remove(className);
        }
}


// MENU-BAR small screen dropdown
(function(){ 
    var showBtn = document.querySelector('.category-list-show');
    var dropdownList = document.getElementById('menu-dropdown');

    showBtn.addEventListener('click', function() {
        dropdownList.classList.toggle('drop');
        showBtn.classList.toggle('active');
    });
})();  

//TINY-SLIDER - NEW FURNITURE

(function(){
    var indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach(function(item){
        item.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });

    var productsSlider = tns({
        container: '.products-slider',
        items: 1,
        slideBy: 1,
        mouseDrag: true,
        controls: false,
        navContainer: '.products-carousel-indicators',
        responsive: {
            768: {
                items: 2,
                slideBy: 2,
            },
            992: {
                items: 3,
                slideBy: 3,
            },
            1200: {
                items: 4,
                slideBy: 4,
            }
          }
    });

    var feedbackSlider = tns({
        container: '.feedback-wrapper',
        autoWidth: true,
        mouseDrag: true,
        autoplay: true,
        autoplayButtonOutput: false,
        controls: false,
        navContainer: '.feedback-indicators',
    });

    const brandsSlider = tns({
        container: '.brands-slider',
        loop: true,
        items: 1,
        slideBy: 'page',
        nav: false,    
        autoplay: true,
        speed: 400,
        autoplayButtonOutput: false,
        mouseDrag: true,
        lazyload: true,
        controlsContainer: ".brands-carousel-controls",
        responsive: {
            450: {
                items: 2,
            },
            640: {
                items: 3,
            },
            768: {
                items: 4,
            },
            995: {
                items: 6,
            }
        }
      });

<<<<<<< HEAD
>>>>>>> a6f9e02... Add slider to brands section
<<<<<<< HEAD
})();  
>>>>>>> Add slider to brands section
<<<<<<< HEAD
>>>>>>> 54bdfbf... Add slider to brands section
=======
=======
})();  
=======
})();  
>>>>>>> fa3d1ff... Add RWD on different widths
>>>>>>> Add RWD on different widths
>>>>>>> be7eabd... Add RWD on different widths
