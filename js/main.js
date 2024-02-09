$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:4,
        nav: true,
        navText: ["<img src='../img/roadmap/arrow-left.png'>","<img src='../img/roadmap/arrow-right.png'>"],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            767:{
                items:3
            },
            992:{
                items:4
            },
        }
      });
  });