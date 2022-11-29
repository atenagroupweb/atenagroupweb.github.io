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


// Animazioni

   // elements
   var elements_to_watch = document.querySelectorAll('.watch');

   // callback 
   var callback = function(items){
     items.forEach((item) => {
       if(item.isIntersecting){
         item.target.classList.add("anim");
       } else{
         item.target.classList.remove("anim");
       }
     });
   }

   // observer
   var observer = new IntersectionObserver(callback, { threshold: 0.7 } );

   // apply
   elements_to_watch.forEach((element) => {
     observer.observe(element); 
   });