var menuHamb = $('a > i.fa-bars');
var listMenu = $('.hamburger-menu');
var exitMenu = $('.fa-times');

menuHamb.click(function () { 

    listMenu.toggle("slow");
    
});

exitMenu.click(function () { 

    listMenu.toggle("slow");
    
});
