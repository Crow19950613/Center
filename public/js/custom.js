if($('.js-indexSlider').length > 0){
    var animEndEv = 'animated';
		var indexSlider = new Swiper('.js-indexSlider .swiper-container', {
			observer: true,
			observeParents: true,
		    speed: 800,
		    loop: false,
		    effect: 'fade',
		    fadeEffect: {
				crossFade: true
			},
		    autoplay: {
				delay: 7000,
				disableOnInteraction: false,
			},
		    spaceBetween: 0,
			pagination: {
				el: '.js-indexSlider .swiper-pagination',
				clickable: true
			},
			navigation: {
			    nextEl: '.js-indexSliderNext',
			    prevEl: '.js-indexSliderPrev',
			},
          /*  onSlideChangeStart: function(s) {
        var currentSlide = $(s.slides[s.activeIndex]);
        var elems = currentSlide.find(".animated")
        elems.each(function() {
            var $this = $(this);
            var animationType = $this.data('animation');
            $this.addClass(animationType, 100).on(animEndEv, function() {
                $this.removeClass(animationType);
            });
        });

    },
    onSlideChangeEnd: function(s) {
        var currentSlide = $(s.slides[s.activeIndex]);
 console.log(currentSlide);
    }*/
		});
        
        indexSlider.on('slideChange', function (s) {
              var wow = new WOW(
            {
                boxClass:     'wow-slider',
                animateClass: 'animated',
                offset:       0,
                mobile:       true,
                live:         true,
                scrollContainer: null
            }
        );
        wow.init();
            
           /* var currentSlide = $(indexSlider.slides[indexSlider.activeIndex]);
             var elems = currentSlide.find(".animated");
              elems.each(function() {
            var $this = $(this);
            var animationType = $this.data('animation');
            $this.addClass(animationType, 100).on(animEndEv, function() {
                $this.removeClass(animationType);
            });
        });*/
        
           // console.log(elems);
  //console.log('slide changed');
 /* $('.js-indexSlider .swiper-container .index-slide__title').addClass('animated fadeInUp delay-1s');
  $('.js-indexSlider .swiper-container .index-slide__button').addClass('animated fadeInUp delay-1s');*/
});

 indexSlider.on('slideNextTransitionStart', function () {
           var currentSlide = $(indexSlider.slides[indexSlider.activeIndex]);
             var elems = currentSlide.find(".animated");
              elems.each(function() {
            var $this = $(this);
            var animationType = $this.data('animation');
            $this.addClass(animationType, 100).on(animEndEv, function() {
                $this.removeClass(animationType);
            });
          //  console.log(animationType);
        });
       
          });
        indexSlider.on('slidePrevTransitionStart', function () {
            var currentSlide = $(indexSlider.slides[indexSlider.activeIndex]);
             var elems = currentSlide.find(".animated");
              elems.each(function() {
            var $this = $(this);
            var animationType = $this.data('animation');
            $this.addClass(animationType, 100).on(animEndEv, function() {
                $this.removeClass(animationType);
            });
        }); 
      //  console.log('test1');
  });
	}
	
	function indexSliderChangeWidth(){
		var indexSliderWidth = $(window).width();
	
		if($('.wrapper').hasClass('is-aside-open')){
			$('.js-indexSlider').animate({
				width: indexSliderWidth - $('.page-wrap-aside').width()
			}, 400);
		}
		else {
			$('.js-indexSlider').animate({
				width: indexSliderWidth
			}, 400);
		}
	}
	
	
	$(window).on('resize', function(){
		$('.js-indexSlider').width('');
	});


$(function(){
		var body = $('body');
	if(!body.hasClass('is-header-menu-open')){
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			var windowHeight = $(window).height();
			var windowWidth = $(window).width();
			var headerHeight = $('.header-block').height();
	
			if(scrolled < headerHeight){
				$('.header-block').removeClass('is-scroll-header is-show');
				body.removeClass('is-header-fixed');
			}
			else {
				$('.header-block').addClass('is-scroll-header');
                
				body.addClass('is-header-fixed');
                
				setTimeout(function(){
					$('.header-block').addClass('is-show');
				}, 200);
			}
		});
	}
		/*
		 * Меню
		 */
	
		$('.js-headerBurgerMenu').on('click', function(){
			var _this = $(this);
	
			if(_this.hasClass('is-active')){
			     if(body.hasClass('is-header-fixed')){
				body.removeClass('is-header-menu-open ');
                }else{
                    body.removeClass('is-header-menu-open is-header-fixed');
                }
				_this.removeClass('is-active');
				disableBodyScroll(false);
			}
			else {
			 
				body.addClass('is-header-menu-open is-header-fixed');
				_this.addClass('is-active');
				disableBodyScroll(true, '.header-menu__scroll');
				if($('.js-headerPopupControl').hasClass('is-active')) $('.js-headerPopupClose').trigger('click');
			}
		});
	
		/*
		 * Подменю
		 */
	
		$('.js-headerMenuNavToggle').on('click', function(){
			var _this = $(this);
			var parent = _this.parents('.header-menu__nav-elem');
			var navList = parent.find('.header-menu__nav-list');
	
			_this.toggleClass('is-active');
			navList.slideToggle(200);
		});
	
		$('.header-menu__nav a').on('click', function(){
			if($('.js-headerBurgerMenu').hasClass('is-active')) $('.js-headerBurgerMenu').trigger('click');
		});
	
		/*
		 * Выбор языка
		 */
	
		$('.js-headerLangControl').on('click', function(event){
			event.preventDefault();
			event.stopPropagation();
	
			var parent = $(this).parent();
			parent.toggleClass('is-open');
		});
	
		/*
		 * Поиск
		 */
	
		$('.js-headerSearchControl').on('click', function(event){
			event.preventDefault();
			event.stopPropagation();
	
			var parent = $(this).parent();
			parent.toggleClass('is-open');
			if(parent.hasClass('is-open') && $(window).width() >= 768){
				setTimeout(function(){
					$('.js-headerSearchInput').focus();
				}, 300);
			}
		});
        
        	$('.js-headerSearchClose').on('click', function(){
			$('.js-headerSearch').removeClass('is-open');
		});
	
		$(document).on('click', function(event){
			if($('.header-lang__dropdown').has(event.target).length === 0 && $('.js-headerLang').hasClass('is-open')){
				$('.js-headerLang').removeClass('is-open');
			}
		});
	
	
	});

$(function () {
    var url = window.location.pathname,
        urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");
    $('#mainNav a').each(function () {
        if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
            $(this).addClass('active');
        }
    });
    /*$('.bxslider').show().bxSlider({
  mode:'fade',
  auto: true,
  pause: 8000,
  adaptiveHeight: true,
  preloadImages: 'all',
  pager: false,
  captions: false
});
$("#scroller").jCarouselLite({
        vertical: true,
        hoverPause:true,
        visible:3,
        auto: 3000,
        speed:1000,
        scroll: 1
    });*/
     $("a.btn-adaptive").click(function() {
        var a = $(this).attr("href");
        OpenWindow(a, 375, 568, "media");
        return false
    });
      var top_header =$( '.top-header' ).parent().height();
     var containet =$( '.slider' ).height();
    //window.innerHeight - footer + 178;
      var height_parent=  $( '.slider' ).height();
		$( '#slider' ).sliderPro({
            width: "100%",
        	height: 450,
        	arrows: true,
            buttons: true,
        	waitForLayers: true,
        	autoplay: true,
        	autoScaleLayers: false,
            autoplayDelay:4000,
            autoplayOnHover: 'none',
            breakpoints: {
            620:{
                height: 350,
            },
            420:{
                height: 250,
            }
            }
		});


            $('.uk-grid li').click(function(){
        $('.uk-grid li.is-focused').removeClass('is-focused');
        $(this).addClass('is-focused');
    });
            /*(function(){

// we set the 'fx' class on the first image when the page loads
  document.getElementById('img-slider').getElementsByTagName('img')[0].className = "fx";

  window.setInterval(kenBurns, 5800);

  var images          = document.getElementById('img-slider').getElementsByTagName('img'),
      numberOfImages  = images.length,
      i               = 1;

  function kenBurns() {
  if(i==numberOfImages){ i = 0;}
  images[i].className = "fx";
  if(i===0){ images[numberOfImages-2].className = "";}
  if(i===1){ images[numberOfImages-1].className = "";}
  if(i>1){ images[i-2].className = "";}
  i++;

  }
})();*/

/*$("#scroller").jCarouselLite({
        vertical: true,
        hoverPause:true,
        visible:4,
        auto: 3000,
        speed:1000,
        scroll: 1
    });*/


        if ($(window).width() < 568){

        }
        //var owl = jQuery("#owl-tariff");
        $('#owl-links').owlCarousel({
            responsiveClass:true,
            items: 1,
            loop:true,
            /* responsive:{
                0:{items:1},
                360:{items:1,  margin: 0,},
                400:{items:1,  margin: 0},
                600:{items:2, margin: 0},
                768:{items:2,  margin: 60,},
                1200:{items:3,  margin: 60,}
            },*/
            autoHeight:false,
            autoWidth:false,
            dots: true,
            nav: false,
            autoplay:true,
            autoplayTimeout:6000,
            mouseDrag               : false,
    autoplayHoverPause:true
        });

          $('#owl-reviews').owlCarousel({
            responsiveClass:true,
            items: 1,
            loop:true,
            /* responsive:{
                0:{items:1},
                360:{items:1,  margin: 0,},
                400:{items:1,  margin: 0},
                600:{items:2, margin: 0},
                768:{items:2,  margin: 60,},
                1200:{items:3,  margin: 60,}
            },*/
            autoHeight:false,
            autoWidth:false,
            dots: true,
            nav: false,
            autoplay:true,
            autoplayTimeout:6000,
            mouseDrag               : false,
    autoplayHoverPause:true
        });

            $('#owl-fact').owlCarousel({
            responsiveClass:true,
            items: 1,
            loop:true,
            /* responsive:{
                0:{items:1},
                360:{items:1,  margin: 0,},
                400:{items:1,  margin: 0},
                600:{items:2, margin: 0},
                768:{items:2,  margin: 60,},
                1200:{items:3,  margin: 60,}
            },*/
            autoHeight:false,
            autoWidth:false,
            dots: true,
            nav: false,
            autoplay:true,
            autoplayTimeout:5000,
            mouseDrag               : false,
    autoplayHoverPause:true
        });

         $('.owl-interactive').owlCarousel({
            responsiveClass:true,
            items: 1,
            loop:true,
            /* responsive:{
                0:{items:1},
                360:{items:1,  margin: 0,},
                400:{items:1,  margin: 0},
                600:{items:2, margin: 0},
                768:{items:2,  margin: 60,},
                1200:{items:3,  margin: 60,}
            },*/
            autoHeight:false,
            autoWidth:false,
            dots: true,
            nav: false,
            autoplay:false,
            autoplayTimeout:7000,
            mouseDrag               : false,
    autoplayHoverPause:true
        });
         $('#owl-partners').owlCarousel({
            responsiveClass:true,
            items: 4,
            loop:true,
             responsive:{
                0:{items:1},
                360:{items:1,  margin: 0,},
                400:{items:1,  margin: 0},
                600:{items:2, margin: 0},
                768:{items:3,  margin: 10,},
                1200:{items:4,  margin: 10,}
            },
            autoHeight:false,
            autoWidth:false,
            dots: false,
            nav: true,
            navText: ["<i class='inter-icon int-icon-left'></i>","<i class='inter-icon int-icon-right'></i>"],
            autoplay:false,
            autoplayTimeout:7000,
            mouseDrag               : false,
    autoplayHoverPause:true
        });

             $('#owl-anons').owlCarousel({
            responsiveClass:true,
            items: 3,
            loop:true,
             responsive:{
                0:{items:1},
                360:{items:1,  margin: 0,},
                400:{items:1,  margin: 0},
                600:{items:2, margin: 0},
                768:{items:3,  margin: 8,},
                1200:{items:3,  margin: 9,}
            },
            autoHeight:false,
            autoWidth:false,
            dots: false,
            nav: true,
            navText: ["<i class='inter-icon int-icon-left1'></i>","<i class='inter-icon int-icon-right1'></i>"],
            autoplay:false,
            autoplayTimeout:7000,
           // mouseDrag               : false,
    autoplayHoverPause:true
        });

        $('#owl-links-banner').owlCarousel({
            responsiveClass:true,
            items: 1,
            singleItem: true,
            loop:true,
            /* responsive:{
                0:{items:1},
                360:{items:1,  margin: 0,},
                400:{items:1,  margin: 0},
                600:{items:2, margin: 0},
                768:{items:2,  margin: 60,},
                1200:{items:3,  margin: 60,}
            },*/
            autoHeight:false,
            autoWidth:false,
            dots: false,
            nav: false,
            autoplay:true,
            autoplayTimeout:5000,
    autoplayHoverPause:true
        });

        $('#owl-news-block').owlCarousel({
            responsiveClass:true,
            items: 1,
            singleItem: true,
            loop:true,
            /* responsive:{
                0:{items:1},
                360:{items:1,  margin: 0,},
                400:{items:1,  margin: 0},
                600:{items:2, margin: 0},
                768:{items:2,  margin: 60,},
                1200:{items:3,  margin: 60,}
            },*/
            autoHeight:false,
            autoWidth:false,
            dots: true,
            nav: false,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true
        });

});


           function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
   // console.log(key);
    key = String.fromCharCode( key );
    var regex = /[0-9\+\()]|\./;
    if( !regex.test(key)) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }
  $(document).ready(function() {
    $("[id^=edit]").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl/cmd+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+C
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+X
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});
function OpenWindow(b, d, a, c) {
    if (!c) {
        c = window
    }
    if (!d) {
        d = 800
    }
    if (!a) {
        a = 600
    }
    var f = (screen.width - d) / 2;
    var e = window.open(b, c, "left=" + f + ",top=100,width=" + d + ",height=" + a + ",directories=no,menubar=no,status=yes,resizable=yes,scrollbars=yes,toolbar=no");
    if (e.opener == null) {
        e.opener = self
    }
    e.focus()
}
jQuery( document ).ready( function( $ ) {
    'use strict';
	//// ---> Check issue element
	jQuery.fn.exists = function() {
	  return jQuery(this).length;
	}
	/* Animations for blocks */
	/*window.sr = ScrollReveal();*/
	if($('.js-uni-animated').exists()){
		sr.reveal( '.js-uni-animated', {
			origin: 'bottom',
			duration: 800,
			delay: 0,
			distance: '100px',
			easing: 'ease',
			scale: 1
		});
	}
	if($('.js-uni-animated-first').exists()){
		sr.reveal( '.js-uni-animated-first', {
			origin: 'top',
			duration: 800,
			delay: 0,
			distance: '80px',
			easing: 'ease',
			scale: 1
		});
	}
	if($('.js-uni-animated-second').exists()){
		sr.reveal( '.js-uni-animated-second', {
			origin: 'bottom',
			duration: 800,
			delay: 200,
			distance: '80px',
			easing: 'ease',
			scale: 1
		});
	}
    if($('.js-animated-bottom').exists()){
		sr.reveal( '.js-animated-bottom', {
			origin: 'bottom',
			duration: 800,
			delay: 300,
			distance: '80px',
			easing: 'ease',
			scale: 1
		});
	}
	if($('.js-uni-animated-third').exists()){
		sr.reveal( '.js-uni-animated-third', {
			origin: 'left',
			duration: 800,
			delay: 300,
			distance: '80px',
			easing: 'ease',
			scale: 1
		});
	}
});



jQuery(document).ready(function() {
      /* $('.hovers').hover(
    // hover_news = $(this).attr('hovers');
  function() {
    if($('.tab-pane').hasClass('active')){
        $('.tab-pane').removeClass('active');
    $('.tab-news-' + $(this).attr('hovers')).addClass('active-news');
    } else {
        $('.tab-news-' + $(this).attr('hovers')).addClass('active-news');
    }
  }, function() {
    $( '.tab-news-' + $(this).attr('hovers')).removeClass('active-news');
  }
);*/

    jQuery('select[name="papregion"]').on('change', function() {
        var selected = jQuery(this).find(':selected').attr('data-depend');
        jQuery('select[name="papcity"] option').each(function() {
            if(jQuery(this).attr('data-depend') != selected) {
                jQuery(this).hide();
                //jQuery('select[name="papcity"] option[value="default"]').hide();
            } else {
                jQuery(this).show();
            }
        });

    });
    jQuery("#send_appeal_virtual").submit(function (event) {
        var has_errors = false;

         if (jQuery('.form-virtual .input input#ap_name').val() == '') {
            jQuery('.form-virtual .input input#ap_name').css('border-color', '#fd8080');
            has_errors = true;
        } else {
            jQuery('.form-virtual .row .input input#ap_name').css('border-color', '#8dc9e5');
        }

        if (jQuery('.form-virtual input#captcha').val() == '') {
            jQuery('.form-virtual input#captcha').css('border-color', '#fd8080');
            has_errors = true;
        } else {
            jQuery('.form-virtual input#captcha').css('border-color', '#8dc9e5');
        }

        if (jQuery('.form-virtual .input input#ap_surname').val() == '') {
            jQuery('.form-virtual .input input#ap_surname').css('border-color', '#fd8080');
            has_errors = true;
        } else {
            jQuery('.form-virtual .row .input input#ap_surname').css('border-color', '#8dc9e5');
        }

        if (jQuery('.form-virtual .input input#ap_phone').val() == '') {
            jQuery('.form-virtual .input input#ap_phone').css('border-color', '#fd8080');
            has_errors = true;
        } else {
            jQuery('.form-virtual .row .input input#ap_phone').css('border-color', '#8dc9e5');
        }

        /*if (jQuery('.form-virtual .textarea textarea#ap_address').val() == '') {
            jQuery('.form-virtual .textarea textarea#ap_address').css('border-color', '#fd8080');
            has_errors = true;
        } else {
            jQuery('.form-virtual .row .textarea textarea#ap_address').css('border-color', '#8dc9e5');
        }*/

        /*if (jQuery('.form-virtual .input input#ap_year').val() == '') {
            jQuery('.form-virtual .input input#ap_year').css('border-color', '#fd8080');
            has_errors = true;
        } else {
            jQuery('.form-virtual .row .input input#ap_year').css('border-color', '#8dc9e5');
        }*/

        if (jQuery('.form-virtual .textarea textarea#ap_text').val() == '') {
            jQuery('.form-virtual .textarea textarea#ap_text').css('border-color', '#fd8080');
            has_errors = true;
        } else {
            jQuery('.form-virtual .row .textarea textarea#ap_text').css('border-color', '#8dc9e5');
        }

        /*if (jQuery('.form-virtual .row .select select#ap_region').val() == 0) {
            jQuery('.form-virtual .row .select select#ap_region').css('border-color', '#fd8080');
        } else {
            jQuery('.form-virtual .row .select select#ap_region').css('border', '#8dc9e5');
        }

        if (jQuery('.form-virtual .row .select select#ap_city').val() == 0) {
            jQuery('.form-virtual .row .select select#ap_city').css('border-color', '#fd8080');
        } else {
            jQuery('.form-virtual .row .select select#ap_city').css('border', '#8dc9e5');
        }

        if (jQuery('.form-virtual .row .select select#ap_ustatus').val() == 0) {
            jQuery('.form-virtual .row .select select#ap_ustatus').css('border-color', '#fd8080');
        } else {
            jQuery('.form-virtual .row .select select#ap_ustatus').css('border', '#8dc9e5');
        }

        if (jQuery('.form-virtual .row .select select#ap_sex').val() == 0) {
            jQuery('.form-virtual .row .select select#ap_sex').css('border-color', '#fd8080');
        } else {
            jQuery('.form-virtual .row .select select#ap_sex').css('border', '#8dc9e5');
        }

        if (jQuery('.form-virtual .row .select select#ap_aptype').val() == 0) {
            jQuery('.form-virtual .row .select select#ap_aptype').css('border-color', '#fd8080');
        } else {
            jQuery('.form-virtual .row .select select#ap_aptype').css('border', '#8dc9e5');
        }

        var email = $(".form-virtual .row .input input#ap_email").val();
        if (!isValidEmailAddress(email)) {
            jQuery('.form-virtual .row .input input#ap_email').css('border-color', '#fd8080');
            has_errors = true;
        } else {
            jQuery('.form-virtual .row .input input#ap_email').css('border-color', '#8dc9e5');
        }*/

        if (jQuery('.form-virtual input[name="ap_rules"]#meet_rules:checked').length <= 0) {
            jQuery('.form-virtual .label_meet_rules').css('color', '#fd8080');
            has_errors = true;
        } else {
            jQuery('.form-virtual .label_meet_rules').css('color', '#666');
        }

        function isValidEmailAddress(email) {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return email && emailReg.test(email);
        }

        if (has_errors == false) {
            return;
        }

        event.preventDefault();
    });
});
function validateNumSize(num) {
    var number = /^[0-9]+$/;
    return num && number.test(num);
};
jQuery(document).on('click', '.label_meet_rules', function() {
    if(jQuery(this).next().is(':visible')) {
        jQuery(this).removeClass('activeWindow');
        jQuery(this).next().slideUp('slow');

    } else {
        jQuery(this).addClass('activeWindow');
        jQuery(this).next().slideDown('slow');
    }
});
 function initBottomBanners(){
     var itemsL = $(".bottom-banners .img-wrapper").length,
     $items = $(".bottom-banners .img-wrapper"),
     NL = $(".bottom-banners .news-list");
     NL.css({height : $(".bottom-banners .img-wrapper:first-child").outerHeight()});
     if( itemsL > 1 ){
         var innerNav = "<div class='nav-wrap'><span class='leftArrow'></span><ul class='nav'>";
         for(var i=0; i< itemsL; i++){
             innerNav = innerNav +="<li class='pt'></li>";
            if(i+1 === itemsL){
                 innerNav = innerNav+="</ul><span class='rightArrow'></span></div>";
                 $(".bottom-banners").append(innerNav);
             }
         }
         //$(".bottom-banners .nav").css({"margin-left": -($(".bottom-banners .nav").outerWidth()/2)});
         $(".bottom-banners .pt").eq(0).addClass("current");
         $items.eq(0).addClass("current");
     }else{
       return false;
     }
     var nav = $(".bottom-banners .nav"),
     pt = $(".bottom-banners .pt");
     mainBottomBannersSlideFnc = function(dir, index){
        var cur = ($(".bottom-banners .img-wrapper.current").length>0 ? $(".bottom-banners .img-wrapper.current").index() : 0);;
        var nextCur;
        if((dir === "right") && (cur !== itemsL-1)){
            nextCur = cur+1;
        }else if((dir === "right") && (cur === itemsL-1)){
            nextCur = 0;
        }else if((dir === "left") && (cur !== 0)){
            nextCur = cur-1;
        }else if((dir === "left") && (cur === 0)){
            nextCur = itemsL-1;
        }else{
            nextCur = index;
            if(nextCur > cur){
                var dir = "right";
            }else if(nextCur < cur){
                var dir = "left";
            }else{
                return false;
            }
        }
        var currentSlide = $(".img-wrapper").eq(cur),
        nextCurrnetSlide = $(".img-wrapper").eq(nextCur),
        tlb = new TimelineLite();
        
        
        tlb.fromTo( currentSlide, 0.5,{display: "block"}, {autoAlpha:0, onComplete: function(){currentSlide.css({"z-index": 1, display: "none"})} })
        .fromTo( nextCurrnetSlide, 0.5,{display: "block"}, {autoAlpha:1, onComplete: function(){nextCurrnetSlide.css({"z-index": 2})} }, 0)
        .to(NL, 0.3, {height: nextCurrnetSlide.outerHeight()}, 0);
        
        $items.removeClass("current");
        nextCurrnetSlide.addClass("current");
        pt.removeClass("current");
        pt.eq(nextCur).addClass("current");
     }
    pt.on("click", function(){
        clearInterval(myIntervalForBottomBanners);
        mainBottomBannersSlideFnc(null, $(this).index());
        myBottomInterval();
    });
    $(".bottom-banners .leftArrow").on("click", function(){
        clearInterval(myIntervalForBottomBanners);
        mainBottomBannersSlideFnc("left");
        myBottomInterval();
    });
    $(".bottom-banners .rightArrow").on("click", function(){
        clearInterval(myIntervalForBottomBanners);
        mainBottomBannersSlideFnc("right");
        myBottomInterval();
    });   
    function myBottomInterval(){
	myIntervalForBottomBanners = setInterval(function(){
	    mainBottomBannersSlideFnc("right");
	}, 4000);
    }
    myBottomInterval();
 }
 initBottomBanners();
 
 $(document).ready(function () {
    var obj = $('.question-bar');
    if (obj) {
        var windowHeight = window.innerHeight;
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop >= windowHeight) {
                obj.addClass('compact');
            }
        });
        $(document).on('click', '[js-activate-right-bar]', function (e) {
            e.preventDefault();
            var bar = $(this).closest('.question-bar').addClass('active');
            setTimeout(function () {
                bar.removeClass('active');
            }, 60000);
            $(window).scroll(function () {
                bar.removeClass('active');
            });
        });
    }
});

  var page = 0;
        $('.load-more').on("click", function() {
                id = $(this).attr('data-id');
                page++;
                loadMoreData(page, id);                    
        });
        
        function loadMoreData(page,id){
          $.ajax(
                {
                    url: site_url+'/ajax/info?page=' + page+'&post_id=' + id,
                    type: "get",
                    beforeSend: function()
                    {
                        $('.cssload-thecube').show();
                    }
                })
                .done(function(data)
                {
                    if(data == " "){
                        //$('.ajax-load').html("No more records found");
                        $('.cssload-thecube').hide();
                        return;
                    }
                    setTimeout(function(){
                        $('.cssload-thecube').hide();
                       // $(".ajax-content").append(data);
                        //$('.ajax-content').append( data );
                        var $content = $( data );
                        $('.grid').append($content).masonry( 'appended', $content);
                        reinitializeMasonry();
                       // $('.grid').masonry('reloadItems');
                      /*  $('.grid').masonry('reloadItems');
                        $('.grid').masonry({
  // options
  itemSelector: '.grid-item',
 // columnWidth: 200
});*/
                    }, 2000);
                    
                    //000000000000000000
                    $.ajax({
                            url: site_url+'/ajax/info?page=' + (page+1)+'&post_id=' + id,
                            type: "get"
                    }).done(function(data){
                        if(data.success == false){
                            $('.load-more').hide();
                            return;}
                    });
                    //000000000000000
                    return;
                })
                .fail(function(jqXHR, ajaxOptions, thrownError)
                { 
                    return;
                      //console.log('server not responding...');
                });
        }
        function reinitializeMasonry(){
var $container = $('.grid');
    $container.imagesLoaded( function(){
      $container.masonry({
        itemSelector : '.grid-item',
       // gutter : '.gutter-sizer',
        percentPosition: true,
        isFitWidth: false,
        columnWidth: '.grid-item'
 });
    });
}
 jQuery(document).ready(function(){
           $('.phoneInput').bind('blur', function(){
               if($('.phone-input input').val().trim()=='')
                   $('.phone-input').removeClass('is_focused');
           });
           $('.phoneInput').bind('focus', function(){$('.phone-input').removeClass('is_focused').addClass('is_focused');});
       });
       

		var hash = window.location.hash.split('#');
	
		$(window).on('load', function(){
			if(hash != undefined){
				var containerScroll = $('#' + hash[1] + '');
	
				if(containerScroll.length > 0){
					var containerScrollOffset = containerScroll.offset().top - $('.header-block').height() - 120;
	
					$('body, html').animate({
						scrollTop: containerScrollOffset
					}, 300);
				}
			}
		});
	
		$(document).on('click', '.header-menu__nav-list a, .section-list a, .mm-listview a', function(event){
			var _this = $(this);
			var href = _this.attr('href');
	
			if(href.indexOf('#') >= 0){
				var hash = href.split('#')[1];
				var container = $('#' + hash + '');
	
				if(container.length > 0){
					var containerOffset = container.offset().top - $('.header-block').height() - 120;
	
					$('body, html').animate({
						scrollTop: containerOffset
					}, 400);
	
					return false;
				}
			}
		});
