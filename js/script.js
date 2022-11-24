//
// Scripts
// 


// Collapse responsive navbar when hamburger is visible
    let hamburger_menu = document.querySelector('.icon-hamburger');
    hamburger_menu.addEventListener("click", function() {
    document.body.classList.toggle('menu-open');
    });

// Collapse responsive navbar on click of navbar item menu 
    let item_hamburger = document.querySelector('.navbar-menu');
    item_hamburger.addEventListener("click", function() {
    document.body.classList.toggle('menu-open');
    });