var menuHamb = $('a > i.fa-bars');
var listMenu = $('.hamburger-menu');
var exitMenu = $('.fa-times');

menuHamb.click(function () { 

    listMenu.show("slow");
    
});

exitMenu.click(function () { 

    listMenu.hide("slow");
    
});
