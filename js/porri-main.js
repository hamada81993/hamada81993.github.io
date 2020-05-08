(function ($) {
"use strict";

$(document).ready(function(){
	
/* Mobile Nav */
	$('#nav-13').slicknav();
	$(".slicknav_menu").appendTo(".small-menu");
	
/* Type Text*/	
    if ($("#typewriting").length) {
        var app = document.getElementById("typewriting");
        var typewriter = new Typewriter(app, {
            loop: true
        });
        typewriter.typeString('Way to achieve success').pauseFor(2000).deleteAll()
            .typeString('Style to achieve success').pauseFor(2000).deleteAll()
            .typeString('Method to achieve success').start();
    }
    if ($("#personal").length) {
        var app = document.getElementById("personal");
        var personal = new Typewriter(app, {
            loop: true
        });
        personal.typeString('UI/UX Designer.').pauseFor(2000).deleteAll()
            .typeString('Web Developer.').pauseFor(2000).deleteAll()
            .typeString('Wordpress Developer.').start();
    }
	
/* Progress Bar */ 
	$(document).ready(function(){
		$('.bar1').barfiller({duration: 3000 });
		$('.bar2').barfiller({duration: 3000 });
		$('.bar3').barfiller({duration: 3000 });
		$('.bar4').barfiller({duration: 3000 });
		$('.bar5').barfiller({duration: 3000 });
		$('.bar6').barfiller({duration: 3000 });
		$('.bar7').barfiller({duration: 3000 });
		$('.bar8').barfiller({duration: 3000 });
	});

/* Preloader */ 
    $(window).on('load', function () {
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
    });

/* POPUP VIDEO */  
    if ($(".video-btn").length) {
        $(".video-btn").on("click", function(){
            $.fancybox({
                href: this.href,
                type: $(this).data("type"),
                'title'         : this.title,
                helpers     : {  
                    title : { type : 'inside' },
                    media : {}
                },

                beforeShow : function(){
                    $(".fancybox-wrap").addClass("gallery-fancybox");
                }
            });
            return false
        });    
    }
	
/* Text Rotating */ 	
	var words = document.getElementsByClassName('word');
	var wordArray = [];
	var currentWord = 0;
	if (words.length > 0){

	words[currentWord].style.opacity = 1;
	for (var i = 0; i < words.length; i++) {
	  splitLetters(words[i]);
	}

	function changeWord() {
	  var cw = wordArray[currentWord];
	  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
	  for (var i = 0; i < cw.length; i++) {
		animateLetterOut(cw, i);
	  }
	  
	  for (var i = 0; i < nw.length; i++) {
		nw[i].className = 'letter behind';
		nw[0].parentElement.style.opacity = 1;
		animateLetterIn(nw, i);
	  }
	  
	  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
	}

	function animateLetterOut(cw, i) {
	  setTimeout(function() {
			cw[i].className = 'letter out';
	  }, i*80);
	}

	function animateLetterIn(nw, i) {
	  setTimeout(function() {
			nw[i].className = 'letter in';
	  }, 340+(i*80));
	}

	function splitLetters(word) {
	  var content = word.innerHTML;
	  word.innerHTML = '';
	  var letters = [];
	  for (var i = 0; i < content.length; i++) {
		var letter = document.createElement('span');
		letter.className = 'letter';
		letter.innerHTML = content.charAt(i);
		word.appendChild(letter);
		letters.push(letter);
	  }
	  
	  wordArray.push(letters);
	}

	changeWord();
	setInterval(changeWord, 4000);

	}
	
/* header_sticky */
	$(window).on('scroll',function() {
		var scroll = $(window).scrollTop();
		if (scroll < 250) {
		$("#header-sticky").removeClass("scroll-header");
		}else{
		$("#header-sticky").addClass("scroll-header");
		}
	});

/* Water Version */
	if (typeof $.fn.ripples == 'function') {
		try {
		$('.ripple').ripples({
			resolution: 500,
			perturbance: 0.01
		});
		} catch (e) {
			$('.error').show().text(e);
		}
	}	
 
/* NavBar Hover */ 
	window.addEventListener('load', function(){
		// btn-13 : Hover Moving Dot
		var movingDot = new MovingDot('#nav-13');
	});

	// btn-13 : Moving Dot
	function MovingDot( nav ){
		var $navMovingDotBar = document.querySelector( nav );
		if ($navMovingDotBar == null) {
			return;
		}
		 var	$btnMenu13 = $navMovingDotBar.querySelectorAll('li'),
			 bar2 = document.createElement('span'),
			 width2, left2;

		bar2.classList.add('dot');
		$navMovingDotBar.appendChild( bar2 );

		for( var i=0, max=$btnMenu13.length; i<max; i++ ){
			$btnMenu13[i].addEventListener('mouseenter', function(){
				width2 = this.offsetWidth,
				left2 = this.offsetLeft;
				barMovingCurrentMenu2( width2, left2 );
			});
		}

		function barMovingCurrentMenu2( width, left ) {
			bar2.style.left = left + ( width / 2 ) + 'px';
			bar2.style.opacity = 1;
		}
	}
 
 /* Scroll Up */
	$.scrollUp({
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade',
		scrollText: '<i class="fa fa-angle-up"></i>',
	});
	
/* wow js */
	new WOW().init();
		
/* particles Defult */ 	
	if ($("#particles-js").length) {
    if ($(window).width() > 992) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 95,
                    "density": {"enable": true, "value_area": 946.9771699587272}
                },
                "color": {"value": "#ffffff"},
                "shape": {
                    "type": "circle",
                    "stroke": {"width": 0, "color": "#000000"},
                    "polygon": {"nb_sides": 5},
                    "image": {"src": "img/github.svg", "width": 100, "height": 100}
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
                },
                "line_linked": {"enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {"enable": false, "mode": "repulse"},
                    "onclick": {"enable": true, "mode": "push"},
                    "resize": true
                },
                "modes": {
                    "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                    "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
                    "repulse": {"distance": 200, "duration": 0.4},
                    "push": {"particles_nb": 4},
                    "remove": {"particles_nb": 2}
                }
            },
            "retina_detect": true
        });
    }
  }

/* particles Bubble */
	if ($("#particles-js-two").length) {
		if ($(window).width() > 992) {
			particlesJS("particles-js-two", {
			   "particles": {
				"number": {
				"value": 60,
				"density": {"enable": true, "value_area": 1042.21783956259}
			},
			"color": {"value": "#e6e6e6"},
			"shape": {
				"type": "circle",
				"stroke": {"width": 0, "color": "#000000"},
				"polygon": {"nb_sides": 5},
				"image": {"src": "img/github.svg", "width": 100, "height": 100}
			},
			"opacity": {
				"value": 0.4734885849793636,
				"random": false,
				"anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
			},
			"size": {
				"value": 12.03412060865523,
				"random": true,
				"anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
			},
			"line_linked": {"enable": false, "distance": 64.13648243462092, "color": "#ffffff", "opacity": 0.4, "width": 1},
			"move": {
				"enable": true,
				"speed":3,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {"enable": false, "mode": "repulse"},
				"onclick": {"enable": false, "mode": "push"},
				"resize": true
			},
			"modes": {
				"grab": {"distance": 400, "line_linked": {"opacity": 1}},
				"bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
				"repulse": {"distance": 200, "duration": 0.4},
				"push": {"particles_nb": 4},
				"remove": {"particles_nb": 2}
			}
		},
		"retina_detect": false
	  });
    }
  }	

/* Scrolling Effect js */
	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
		// On-page links
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		  // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  // Does a scroll target exist?
		  if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 500, function() {
			  // Callback after animation
			  // Must change focus!
			  var $target = $(target);
			  $target.focus();
			  if ($target.is(":focus")) { // Checking if the target was focused
				return false;
			  } else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				$target.focus(); // Set focus again
			  };
			});
		  }
		}
	});	
	
/* portfolio-area */	
    $('.section-protfolio').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

     var $grid = $('.grid.filter').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item'
      }
    });
	//for filter menu active class
	$('.protfolio-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});
	
/*  Parallax   */
    $(".ami-parallax").parallax('50%', .4);

/* Scroll Up */
	$.scrollUp({
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade',
		scrollText: '<i class="fa fa-angle-up"></i>',
	});
	
/* Counter Up */
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
/*  Accordion   */
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
	
/* Client Slider */
    if ($(".testimonials-slider").length) {
        $(".testimonials-slider").owlCarousel({
			autoplay:false,
            smartSpeed: 600,
            margin: 0,
			items: 1,
            loop:true,
			dots:false,
			nav:true,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				767:{
					items:1
				},
				1000:{
					items:1
				}
			}
        });
    }
	
});
 
})(jQuery);