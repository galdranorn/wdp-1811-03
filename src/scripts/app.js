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
})();  
=======
console.log('hello');

// PRODUCT SECTION RATING STAR MECHANISM -- WDP181103-19

const productsSection = document.querySelector(".section--products");
const starBoxes = document.querySelectorAll(".stars");

productsSection.addEventListener("mouseover", function(e) {
    if (event.target.classList.contains('star')) {
        let arr = Object.values(event.relatedTarget.children);
        let index = arr.indexOf(event.target);
        desactiveStars();
        for (i=0; i<=index; i++) {
            event.relatedTarget.children[i].classList.add("active");
        }
    }
    else if (event.target.classList.contains('stars')) {
        deselectStars();
    }   
});

productsSection.addEventListener("click", function(e) {
    if (event.target.classList.contains('star')) {
        let arr = Object.values(event.target.parentElement.children);
        let index = arr.indexOf(event.target);
        desactiveStars();
        unmarkStars();
        for (i=0; i<=index; i++) {
            event.target.parentElement.children[i].classList.add("permanent");
        }
    }
});

// deselecting stars
function deselectStars() {
    if (event.target.children[0].classList.contains("permanent")){}
    else {
        for (i=0; i<=1; i++) {
            event.target.children[i].classList.add("full");
        }
    }
    for (i=0; i<=4; i++) {
        event.target.children[i].classList.remove("active");
    }
}
// remove stars showing avg value
function desactiveStars() {
    for (i=0; i<=4; i++) {
        event.target.parentElement.children[i].classList.remove("full");
    }
}

// unmarking stars (for changing vote)
function unmarkStars() {
    for (i=0; i<=4; i++) {
        event.target.parentElement.children[i].classList.remove("permanent");
    }
}
>>>>>>> dde045a... Change stars selecting mechanism from class to indexOf, move code to App.js, change section var name
