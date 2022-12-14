(function ($) {
    "use strict";
    
    // Buy Now Btn
    // $('body').append("<a href='#' class='buy-now-btn' target='_blank'><img src='assets/img/envato.png' alt='envato'/>Buy Now</a>"); 

    //Preloader
    $(window).on('load', function (event) {
        $('.js-preloader').delay(500).fadeOut(500);
    });
    
    // Language Dropdown
    $(".language-option").each(function () {
        var each = $(this)
        each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());
        var allOptions = $(".language-dropdown-menu").children('a');
        each.find(".language-dropdown-menu").on("click", "a", function () {
            allOptions.removeClass('selected');
            $(this).addClass('selected');
            $(this).closest(".language-option").find(".lang-name").html($(this).text());
        });
    })
    
    // Product Quantity
    var minVal = 1,
    maxVal = 20;
    $(".increaseQty").on('click', function () {
        var $parentElm = $(this).parents(".qtySelector");
        $(this).addClass("clicked");
        setTimeout(function () {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qtyValue").val();
        if (value < maxVal) {
            value++;
        }
        $parentElm.find(".qtyValue").val(value);
    });
    
    // Decrease product quantity on cart page
    $(".decreaseQty").on('click', function () {
        var $parentElm = $(this).parents(".qtySelector");
        $(this).addClass("clicked");
        setTimeout(function () {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qtyValue").val();
        if (value > 1) {
            value--;
        }
        $parentElm.find(".qtyValue").val(value);
    });

    //Tweenmax js
    $('.hero-wrap.style1').mousemove(function (e) {
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx / 2;
        var newy = y - wy / 2;
        $('.hero-img-wrap').each(function () {
            var speed = $(this).attr('data-speed');
            if ($(this).attr('data-revert')) speed *= -.4;
            TweenMax.to($(this), 1, { x: (1 - newx * speed), y: (1 - newy * speed) });
        });
    });
    $('.hero-wrap').mousemove(function (e) {
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx / 2;
        var newy = y - wy / 2;
        $('.hero-content').each(function () {
            var speed = $(this).attr('data-speed');
            if ($(this).attr('data-revert')) speed *= -.4;
            TweenMax.to($(this), 1, { x: (1 - newx * speed), y: (1 - newy * speed) });
        });
    });
    
    //Hero  Slider 
    $(".hero-slider-one").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        margin: 20,
        items: 1,
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
    });

    //Project Slider 
    $(".project-slider-one").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        margin: 25,
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    //Testimonial Slider 
    $(".testimonial-slider-one").owlCarousel({
        nav: true,
        dots: false,
        animateOut: 'fadeOut',
        loop: true,
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        margin: 25,
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
    });
    $(".testimonial-slider-two").owlCarousel({
        nav: false,
        dots: true,
        loop: true,
        margin: 25,
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });
    $(".testimonial-slider-three").owlCarousel({
        nav: true,
        dots: true,
        loop: true,
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        margin: 25,
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        dotsData: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });

    //Instagram Slider
    $(".instagram-slider").owlCarousel({
        nav: false,
        dots: false,
        loop: true,
        margin: 8,
        items: 1,
        center:true,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 2.5,
            },
            576: {
                items:3.2,
            },
            768: {
                items: 4.2,
            },
            992: {
                items: 5.4,
            },
            1200: {
                items: 8.5,
            },
            1400: {
                items: 9.9,
            }
        }
    });

    //Single Project Slider
    $(".single-project-slider").owlCarousel({
        nav: false,
        dots: true,
        loop: true,
        margin: 0,
        items: 1,
        center:true,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
    });

    // Single Product Slider  
    var swiper_thumbs = new Swiper(".single-product-thumbs", {
        spaceBetween: 20,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: true,
        autoplay:false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            }
        }
    });
    var swiper2 = new Swiper(".single-product-slider", {
        spaceBetween: 10,
        loop: true,
        autoplay:false,
        thumbs: {
            swiper: swiper_thumbs,
        },
    });

    //sticky Header
    var wind = $(window);
    var sticky = $('.header-wrap');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

    // Responsive mmenu
    $(window).on('resize', function() {
        if($(window).width() <= 1199) {
            $('.collapse.navbar-collapse').removeClass('collapse');
        }else{
            $('.navbar-collapse').addClass('collapse');
        }
    });
    $('.mobile-menu a').on('click', function() {
        $('.main-menu-wrap').addClass('open');
        $('.collapse.navbar-collapse').removeClass('collapse');
    });

    $('.mobile_menu a').on('click', function () {
        $(this).parent().toggleClass('open');
        $('.main-menu-wrap').toggleClass('open');
    });

    $('.menu-close').on('click', function () {
        $('.main-menu-wrap').removeClass('open')
    });
    $('.mobile-top-bar').on('click', function () {
        $('.header-top').addClass('open')
    });
    $('.close-header-top button').on('click', function () {
        $('.header-top').removeClass('open')
    });
    var $offcanvasNav = $('.navbar-nav'),
    $offcanvasNavSubMenu = $offcanvasNav.find('.dropdown-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="ri-arrow-down-s-line"></i></span>');
    $offcanvasNavSubMenu.slideUp();
    $offcanvasNav.on('click', 'li a, li .menu-expand', function (e) {
        var $this = $(this);
        if (($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.siblings('ul').slideUp('slow');
            } else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if ($this.is('a') || $this.is('span') || $this.attr('class').match(/\b(menu-expand)\b/)) {
            $this.parent().toggleClass('menu-open');
        } else if ($this.is('li') && $this.attr('class').match(/\b('dropdown-menu')\b/)) {
            $this.toggleClass('menu-open');
        }
    });

    // Scroll animation
    AOS.init();

    //Back To top
    function BackToTop() {
        $('.back-to-top').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 100);
            return false;
        });

        $(document).scroll(function () {
            var y = $(this).scrollTop();
            if (y > 600) {
                $('.back-to-top').fadeIn();
                $('.back-to-top').addClass('open');
            } else {
                $('.back-to-top').fadeOut();
                $('.back-to-top').removeClass('open');
            }
        });
    }
    BackToTop();

})(jQuery);

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('povi_theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('povi_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('povi_theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();