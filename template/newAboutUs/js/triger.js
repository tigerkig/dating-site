
var s = $.noConflict();
s(document).ready(function() {	
	"use strict";
s('.news-media #ctl00_ContentPlaceHolder1_dlsearch').slick({
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 2,
              autoplay:false,
              slidesToScroll: 1,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                  }
                },
                {
                  breakpoint: 643,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
    });


    s('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay:true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    });

        //*****Matched By Vadhuvar Online Start*****

    s('.matched-by-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      speed: 1000,
      autoplay:true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    //*****Matched By Vadhuvar Online End*****

    //***** Most Trusted Tab Strat*****
    s('#ChildVerticalTab_1').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true,
        tabidentify: 'ver_1',
    });

    //*****Vertical Tab*****
    s('#parentVerticalTab').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true,
        closed: 'accordion',
        tabidentify: 'hor_1',
        activate: function(event) {
        window.location.hash = ui.newPanel.attr('id');
            var $tab = $(this);
            var $info = $('#nested-tabInfo2');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });

    //***** Most Trusted Tab END*****

    //*****SUCCESS STORIES Slider Start*****

    s('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      speed:1000,
      autoplaySpeed:5000,
      pauseOnHover: true,
      asNavFor: '.slider-nav',
       responsive: [
        {
          breakpoint:1080,
          settings: {
            autoplay: false,
            adaptiveHeight: true,
            arrows: true
          }
        }
      ]
    });

    s('.slider-nav').slick({
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow:3,
    slidesToScroll: 1,
    draggable: true,
    infinite: true,
    pauseOnHover: true,
    asNavFor: '.slider-for',
    vertical: true,
    speed:1000,
    autoplaySpeed: 5000,
    focusOnSelect: true,
    useTransform: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      responsive: [
      {
        breakpoint:1080,
        settings: {
        autoplay: false,
        adaptiveHeight: true,
        vertical: false

        }
      }
    ]
    });

    //*****SUCCESS STORIES Slider End*****


    //***** Why Vadhuvar Counter Start*****
    s('.counter').counterUp({
        delay: 5,
        time: 1500
    });
   //***** Why Vadhuvar Counter END*****

 }); 
