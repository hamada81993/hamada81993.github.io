/**
 * Porto theme's main JavaScript file
 */

/* browser select */
(function($) {
    'use strict';
    $.extend({

        browserSelector: function() {

            // jQuery.browser.mobile (http://detectmobilebrowser.com/)
            (function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

            // Touch
            var hasTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

            var u = navigator.userAgent,
                ua = u.toLowerCase(),
                is = function (t) {
                    return ua.indexOf(t) > -1;
                },
                g = 'gecko',
                w = 'webkit',
                s = 'safari',
                o = 'opera',
                h = document.documentElement,
                b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + parseFloat(navigator.appVersion.split("MSIE")[1])) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery2 : '')) : is('konqueror') ? 'konqueror' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.jQuery1 : '') : is('mozilla/') ? g : '', is('j2me') ? 'mobile' : is('iphone') ? 'iphone' : is('ipod') ? 'ipod' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js'];

            var c = b.join(' ');

            if ($.browser.mobile) {
                c += ' mobile';
            }

            if (hasTouch) {
                c += ' touch';
            }

            h.className += ' ' + c;

            // IE11 Detect
            var isIE11 = !(window.ActiveXObject) && "ActiveXObject" in window;

            if (isIE11) {
                $('html').removeClass('gecko').addClass('ie ie11');
                return;
            }
        }

    });

    $.browserSelector();

})(jQuery);

/* Smart Resize  */
(function($,sr){
  'use strict';

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          }

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  };
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');


/* easing */
jQuery.extend( jQuery.easing,
{
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) {
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
	return c*((t=t/d-1)*t*t*t*t + 1) + b;
  }
});

/*
 Name: Porto Theme Javascript
 Writtern By: SW-THEMES
 Javascript Version: 1.2
 */

// Theme
window.theme = {};

// Configuration
(function(theme, $) {
    'use strict';

    theme = theme || {};

    $.extend(theme, {

        rtl: js_porto_vars.rtl == '1' ? true : false,
        rtl_browser: $('html').hasClass('browser-rtl'),

        ajax_url: js_porto_vars.ajax_url,
        request_error: js_porto_vars.request_error,

        change_logo: js_porto_vars.change_logo == '1' ? true : false,

        show_sticky_header: js_porto_vars.show_sticky_header == '1' ? true : false,
        show_sticky_header_tablet: js_porto_vars.show_sticky_header_tablet == '1' ? true : false,
        show_sticky_header_mobile: js_porto_vars.show_sticky_header_mobile == '1' ? true : false,

        category_ajax: js_porto_vars.category_ajax == '1' ? true : false,
        prdctfltr_ajax: js_porto_vars.prdctfltr_ajax == '1' ? true : false,
        show_minicart: js_porto_vars.show_minicart == '1' ? true : false,

        container_width: parseInt(js_porto_vars.container_width),
        grid_gutter_width: parseInt(js_porto_vars.grid_gutter_width),
        screen_lg: parseInt(js_porto_vars.screen_lg),
        slider_loop: js_porto_vars.slider_loop == '1' ? true : false,
        slider_autoplay: js_porto_vars.slider_autoplay == '1' ? true : false,
        slider_autoheight: js_porto_vars.slider_autoheight == '1' ? true : false,
        slider_speed: js_porto_vars.slider_speed ? js_porto_vars.slider_speed : 5000,
        slider_nav: js_porto_vars.slider_nav == '1' ? true : false,
        slider_nav_hover: js_porto_vars.slider_nav_hover == '1' ? true : false,
        slider_margin: js_porto_vars.slider_margin == '1' ? 40 : 0,
        slider_dots: js_porto_vars.slider_dots == '1' ? true : false,
        slider_animatein: js_porto_vars.slider_animatein ? js_porto_vars.slider_animatein : '',
        slider_animateout: js_porto_vars.slider_animateout ? js_porto_vars.slider_animateout : '',
        product_thumbs_count: js_porto_vars.product_thumbs_count ? js_porto_vars.product_thumbs_count : 4,
        product_zoom: js_porto_vars.product_zoom == '1' ? true : false,
        product_zoom_mobile: js_porto_vars.product_zoom_mobile == '1' ? true : false,
        product_image_popup: js_porto_vars.product_image_popup == '1' ? 'fadeOut' : false,

        owlConfig: {
            rtl: js_porto_vars.rtl == '1' ? true : false,
            loop : js_porto_vars.slider_loop == '1' ? true : false,
            autoplay : js_porto_vars.slider_autoplay == '1' ? true : false,
            autoHeight : js_porto_vars.slider_autoheight == '1' ? true : false,
            autoplayTimeout: js_porto_vars.slider_speed ? js_porto_vars.slider_speed : 5000,
            autoplayHoverPause : true,
            lazyLoad: true,
            nav: js_porto_vars.slider_nav == '1' ? true : false,
            navText: ["", ""],
            dots: js_porto_vars.slider_dots == '1' ? true : false,
            stagePadding: (js_porto_vars.slider_nav_hover != '1' && js_porto_vars.slider_margin == '1') ? 40 : 0,
            animateOut: js_porto_vars.slider_animateout ? js_porto_vars.slider_animateout : '',
            animateIn: js_porto_vars.slider_animatein ? js_porto_vars.slider_animatein : ''
        },

        sticky_nav_height: 0,

        getScrollbarWidth: function() {
            // thx David
            if (this.scrollbarSize === undefined) {
                var scrollDiv = document.createElement("div");
                scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
                document.body.appendChild(scrollDiv);
                this.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
            }
            return this.scrollbarSize;
        },

        isTablet: function() {
            if ($(window).width() < 992 - theme.getScrollbarWidth())
                return true;
            return false;
        },

        isMobile: function() {
            if ($(window).width() <= 480 - theme.getScrollbarWidth())
                return true;
            return false;
        },

        refreshVCContent: function($elements) {
            if ($elements) {
                $(window).trigger('resize');
            }
            theme.refreshStickySidebar(true);

            if (typeof window.vc_js == 'function')
                window.vc_js();

//            if ("undefined" != typeof $.fn.waypoint) {
//                if (typeof window.vc_waypoints == 'function')
//                    window.vc_waypoints();
//                if (typeof window.vc_progress_bar == 'function')
//                    window.vc_progress_bar();
//            }
            $(document.body).trigger('porto_refresh_vc_content', [$elements]);
        },

        adminBarHeight: function() {
            var $admin_bar = $('#wpadminbar'),
                adminbar_height = 0;

            if ($admin_bar.get(0) && $admin_bar.is(':visible')) {
                adminbar_height = $('#wpadminbar').css('position') == 'fixed' ? $('#wpadminbar').height() : 0;
            }

            return parseInt(adminbar_height);
        },

        refreshStickySidebar: function(timeout) {
            var $sticky_sidebar = $('.sidebar [data-plugin-sticky]');
            if ($sticky_sidebar.get(0)) {
                if (timeout) {
                    setTimeout(function() {
                        $sticky_sidebar.trigger('recalc.pin');
                    }, 400);
                } else {
                    $sticky_sidebar.trigger('recalc.pin');
                }
            }
        },

        scrolltoContainer: function( $container ) {
            if ($container.get(0)) {
                var winWidth = $(window).width();
                if (winWidth <= 991 - theme.getScrollbarWidth()) {
                    $('.sidebar-overlay').click();
                }
                $('html, body').stop().animate({
                    scrollTop: $container.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height - 18
                }, 600, 'easeOutQuad');
            }
        }
    });

}).apply(this, [window.theme, jQuery]);

// Accordion
(function(theme, $) {
    'use strict';

    theme = theme || {};
    var instanceName = '__accordion';
    var Accordion = function($el, opts) {
        return this.initialize($el, opts);
    };
    Accordion.defaults = {
    };
    Accordion.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);
            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, Accordion.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.collapse))) {
                return this;
            }

            var $el = this.options.wrapper,
                $collapse = $el.find('.collapse'),
                collapsible = $el.data('collapsible'),
                active_num = $el.data('active-tab');

            if ( $collapse.length > 0 ) {
                if ( collapsible == 'yes' ) {
                    $collapse.collapse({toggle: false, parent: '#' + $el.attr('id')});
                } else if ( !isNaN(active_num) && active_num == parseInt(active_num) && $el.find('.collapse').length > active_num ) {
                    $el.find('.collapse').collapse({toggle: false, parent: '#' + $el.attr('id')});
                    $el.find('.collapse').eq(active_num-1).collapse('toggle');
                } else {
                    $el.find('.collapse').collapse({parent: '#' + $el.attr('id')});
                }
            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        Accordion: Accordion
    });

    // jquery plugin
    $.fn.themeAccordion = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.Accordion($this, opts);
            }

        });
    };

}).apply(this, [window.theme, jQuery]);


// Accordion Menu
(function(theme, $) {

    'use strict';

    theme = theme || {};

    var instanceName = '__accordionMenu';

    var AccordionMenu = function($el, opts) {
        return this.initialize($el, opts);
    };

    AccordionMenu.defaults = {

    };

    AccordionMenu.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, AccordionMenu.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $el = this.options.wrapper;

            $el.find('li.menu-item.active').each(function() {
                var $this = $(this);

                if ($this.find('> .arrow').get(0))
                    $this.find('> .arrow').click();
            });

            $el.find('.arrow').on('click', function() {
                var $this = $(this),
                    $parent = $this.closest('li');
                if (typeof self.options.open_one != 'undefined') {
                    $parent.siblings('.open').children('.arrow').next().hide();
                    $parent.siblings('.open').removeClass('open');
                    $this.next().stop().toggle();
                } else {
                    $this.next().stop().slideToggle();
                }
                if ($parent.hasClass('open')) {
                    $parent.removeClass('open');
                } else {
                    $parent.addClass('open');
                }
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        AccordionMenu: AccordionMenu
    });

    // jquery plugin
    $.fn.themeAccordionMenu = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.AccordionMenu($this, opts);
            }

        });
    };

}).apply(this, [window.theme, jQuery]);


// Animate
(function(theme, $) {
    'use strict';

    theme = theme || {};

    var instanceName = '__animate';

    var Animate = function($el, opts) {
        return this.initialize($el, opts);
    };

    Animate.defaults = {
        accX: 0,
        accY: -150,
        delay: 1,
        duration: 1000
    };

    Animate.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, Animate.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $el = this.options.wrapper,
                delay = 0,
                duration = 0;

            $el.addClass('appear-animation');

            if (!$('html').hasClass('no-csstransitions') && $(window).width() > (767 - theme.getScrollbarWidth()) && $.isFunction($.fn.appear)) {

                $el.appear(function() {

                    delay = Math.abs($el.attr('data-appear-animation-delay') ? $el.attr('data-appear-animation-delay') : self.options.delay);
                    if (delay > 1) {
                        $el.css('animation-delay', delay + 'ms');
                    }

                    duration = Math.abs($el.attr('data-appear-animation-duration') ? $el.attr('data-appear-animation-duration') : self.options.duration);
                    if (duration != 1000) {
                        $el.css('animation-duration', duration + 'ms');
                    }

                    $el.addClass($el.attr('data-appear-animation'));

                    setTimeout(function() {
                        $el.addClass('appear-animation-visible');
                    }, delay);

                }, {
                    accX: self.options.accX,
                    accY: self.options.accY
                });

            } else {

                $el.addClass('appear-animation-visible');

            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        Animate: Animate
    });

    // jquery plugin
    $.fn.themeAnimate = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.Animate($this, opts);
            }

        });
    };

}).apply(this, [window.theme, jQuery]);


// Carousel
(function(theme, $) {
    'use strict';

    theme = theme || {};

    var instanceName = '__carousel';

    var Carousel = function($el, opts) {
        return this.initialize($el, opts);
    };

    Carousel.defaults = $.extend({}, {
        loop: true,
        navText: [],
        themeConfig: false,
        lazyLoad: true,
        lg: 0,
        md: 0,
        sm: 0,
        xs: 0,
        responsive: {},
        single: false,
        rtl: theme.rtl
    });

    // Add default responsive options
    var scrollWidth = theme.getScrollbarWidth(),
        w_sm = 576 - scrollWidth,
        w_md = 768 - scrollWidth,
        w_lg = 992 - scrollWidth,
        w_xl = theme.screen_lg - scrollWidth,
        w_sl = 1400 - scrollWidth;

    Carousel.defaults.responsive[0] = {items: 1};
    Carousel.defaults.responsive[w_sm] = {items: 1, mergeFit: false};
    Carousel.defaults.responsive[w_md] = {items: 1, mergeFit: false};
    Carousel.defaults.responsive[w_lg] = {items: 1, mergeFit: false};
    Carousel.defaults.responsive[w_xl] = {items: 1, mergeFit: false};

    Carousel.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            if ((opts && opts.themeConfig) || !opts) {
                this.options = $.extend(true, {}, Carousel.defaults, theme.owlConfig, opts, {
                    wrapper: this.$el,
                    themeConfig: true
                });
            } else {
                this.options = $.extend(true, {}, Carousel.defaults, opts, {
                    wrapper: this.$el
                });
            }

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.owlCarousel))) {
                return this;
            }

            var $el = this.options.wrapper,
                loop = this.options.loop,
                lg = this.options.lg ? this.options.lg : this.options.items,
                md = this.options.md ? this.options.md : this.options.items,
                sm = this.options.sm ? this.options.sm : this.options.items,
                xs = this.options.xs ? this.options.xs : this.options.items,
                single = this.options.single,
                zoom = $el.find('.zoom').get(0),
                responsive = {},
                items,
                count = $el.find('> *').length,
                fullscreen = typeof this.options.fullscreen == 'undefined' ? false : this.options.fullscreen;

            if (fullscreen) {
                $el.children().width($(window).width());
                $el.children().height($el.closest('.fullscreen-carousel').length ? $el.closest('.fullscreen-carousel').height() : $(window).height());
                $el.children().css('max-height', '100%');
                $(window).on('resize', function() {
                    $el.find('.owl-item').children().width($(window).width());
                    $el.find('.owl-item').children().height($el.closest('.fullscreen-carousel').length ? $el.closest('.fullscreen-carousel').height() : $(window).height());
                    $el.find('.owl-item').children().css('max-height', '100%');
                });
            }

            if (single) {
                items = 1;
            } else {
                items = this.options.items ? this.options.items : (lg ? lg : 1);
                if (this.options.xl) {
                    responsive[w_sl] = { items: this.options.xl, loop: (loop && count > this.options.xl) ? true : false, mergeFit: this.options.mergeFit };
                }
                responsive[w_xl] = { items: items, loop: (loop && count > items) ? true : false, mergeFit: this.options.mergeFit };
                if (lg) responsive[w_lg] = { items: lg, loop: (loop && count > lg) ? true : false, mergeFit: this.options.mergeFit_lg };
                if (md) responsive[w_md] = { items: md, loop: (loop && count > md) ? true : false, mergeFit: this.options.mergeFit_md };
                if (sm) responsive[w_sm] = { items: sm, loop: (loop && count > sm) ? true : false, mergeFit: this.options.mergeFit_sm };
                if (xs) responsive[0] = { items: xs, loop: (loop && count > xs) ? true : false, mergeFit: this.options.mergeFit_xs };
            }

            if (!$el.hasClass('show-nav-title') && this.options.themeConfig && theme.slider_nav && theme.slider_nav_hover)
                $el.addClass('show-nav-hover');

            this.options = $.extend(true, {}, this.options, {
                items: items,
                loop: (loop && count > items) ? true : false,
                responsive: responsive,
                onInitialized: function() {
                    $el.find('.owl-stage-outer').css({
                        'margin-left': this.options.stagePadding,
                        'margin-right': this.options.stagePadding
                    });
                    if ($el.hasClass('show-dots-title') && ($el.prev('.porto-u-heading, .vc_custom_heading, .slider-title').length || $el.closest('.slider-wrapper').prev('.porto-u-heading, .vc_custom_heading, .slider-title').length || $el.closest('.porto-recent-posts').prev('.porto-u-heading, .vc_custom_heading, .slider-title').length)) {
                        var $obj = $el.prev('.porto-u-heading, .vc_custom_heading, .slider-title');
                        if (!$obj.length) {
                            $obj = $el.closest('.slider-wrapper').prev('.porto-u-heading, .vc_custom_heading, .slider-title');
                        }
                        if (!$obj.length) {
                            $obj = $el.closest('.porto-recent-posts').prev('.porto-u-heading, .vc_custom_heading, .slider-title');
                        }
                        try {
                            var innerWidth = $obj.css('display', 'inline-block').width();
                            $obj.css('display', '');
                            if (innerWidth + 15 + $el.find('.owl-dots').width() <= $obj.width()) {
                                $el.find('.owl-dots').css('left', innerWidth + 15 + ($el.width() - $obj.width()) / 2);
                                $el.find('.owl-dots').css('top', -1 * $obj.height() / 2 - parseInt($obj.css('margin-bottom')) - $el.find('.owl-dots').height() / 2 + 2);
                            } else {
                                $el.find('.owl-dots').css('position', 'static');
                            }
                        } catch(e) {}
                    }
                },
                touchDrag: (count == 1) ? false : true,
                mouseDrag: (count == 1) ? false : true
            });

            // Auto Height Fixes
            if (this.options.autoHeight) {
                function calcOwlHeight() {
                    var h = 0;
                    $el.find('.owl-item.active').each(function() {
                        if (h < $(this).height())
                            h = $(this).height();
                    });
                    $el.find('.owl-stage-outer').height( h );
                }
                $(window).on('resize', function() {
                    calcOwlHeight();
                });

                $(window).on('load', function() {
                    calcOwlHeight();
                });
            }

            var links = false;
            if (zoom) {
                links = [];
                var i = 0;

                $el.find('.zoom').each(function() {
                    var slide = {},
                        $zoom = $(this);

                    slide.src = $zoom.data('src');
                    slide.title = $zoom.data('title');
                    links[i] = slide;
                    $zoom.data('index', i);
                    i++;
                });
            }

            if ($el.hasClass('show-nav-title')) {
                this.options.stagePadding = 0;
            } else {
                if (this.options.themeConfig && theme.slider_nav && theme.slider_nav_hover)
                    $el.addClass('show-nav-hover');
                if (this.options.themeConfig && !theme.slider_nav_hover && theme.slider_margin)
                    $el.addClass('stage-margin');
            }
            $el.owlCarousel(this.options);

            if (zoom && links) {
                $el.on('click', '.zoom', function(e) {
                    e.preventDefault();
                    if ($.fn.magnificPopup) {
                        $.magnificPopup.close();
                        $.magnificPopup.open($.extend(true, {}, theme.mfpConfig, {
                            items: links,
                            gallery: {
                                enabled: true
                            },
                            type: 'image'
                        }), $(this).data('index'));
                    }
                    return false;
                });
            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        Carousel: Carousel
    });

    // jquery plugin
    $.fn.themeCarousel = function(opts, zoom) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.Carousel($this, opts, zoom);
            }

        });
    };

}).apply(this, [window.theme, jQuery]);


// Chart Circular
(function(theme, $) {
    'use strict';

    theme = theme || {};

    var instanceName = '__chartCircular';

    var ChartCircular = function($el, opts) {
        return this.initialize($el, opts);
    };

    ChartCircular.defaults = {
        accX: 0,
        accY: -150,
        delay: 1,
        barColor: '#0088CC',
        trackColor: '#f2f2f2',
        scaleColor: false,
        scaleLength: 5,
        lineCap: 'round',
        lineWidth: 13,
        size: 175,
        rotate: 0,
        animate: ({
            duration: 2500,
            enabled: true
        })
    };

    ChartCircular.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, ChartCircular.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.appear)) || !($.isFunction($.fn.easyPieChart))) {
                return this;
            }

            var self = this,
                $el = this.options.wrapper,
                value = ($el.attr('data-percent') ? $el.attr('data-percent') : 0),
                percentEl = $el.find('.percent');

            if (!value) value = 1;
            var labelValue = this.options.labelValue ? this.options.labelValue : value;

            $.extend(true, self.options, {
                onStep: function(from, to, currentValue) {
                    percentEl.html(parseInt(labelValue * currentValue / value));
                }
            });

            $el.attr('data-percent', 0);

            $el.appear(function() {

                $el.easyPieChart(self.options);

                setTimeout(function() {

                    $el.data('easyPieChart').update(value);
                    $el.attr('data-percent', value);

                }, self.options.delay);

            }, {
                accX: self.options.accX,
                accY: self.options.accY
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        ChartCircular: ChartCircular
    });

    // jquery plugin
    $.fn.themeChartCircular = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.ChartCircular($this, opts);
            }

        });
    };

}).apply(this, [window.theme, jQuery]);


// Fit Video
(function(theme, $) {
    'use strict';

    theme = theme || {};

    var instanceName = '__fitVideo';

    var FitVideo = function($el, opts) {
        return this.initialize($el, opts);
    };

    FitVideo.defaults = {

    };

    FitVideo.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, FitVideo.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.fitVids))) {
                return this;
            }

            var $el = this.options.wrapper;

            $el.fitVids();
            $(window).on('resize', function() {
                $el.fitVids();
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        FitVideo: FitVideo
    });

    // jquery plugin
    $.fn.themeFitVideo = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.FitVideo($this, opts);
            }

        });
    };

}).apply(this, [window.theme, jQuery]);

/* Porto Video Background */
(function(theme, $) {
    'use strict';

    theme = theme || {};

    var instanceName = '__videobackground';

    var PluginVideoBackground = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginVideoBackground.defaults = {
        overlay: true,
        volume: 1,
        playbackRate: 1,
        muted: true,
        loop: true,
        autoplay: true,
        position: '50% 50%',
        posterType: 'detect'
    };

    PluginVideoBackground.prototype = {
        initialize: function($el, opts) {
            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginVideoBackground.defaults, opts, {
                path: this.$el.data('video-path'),
                wrapper: this.$el
            });

            return this;
        },

        build: function() {

            if (!($.isFunction($.fn.vide)) || (!this.options.path)) {
                return this;
            }

            if (this.options.overlay) {
                this.options.wrapper.prepend(
                    $('<div />').addClass('video-overlay')
                );
            }

            this.options.wrapper.vide(this.options.path, this.options);

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginVideoBackground: PluginVideoBackground
    });

    // jquery plugin
    $.fn.themePluginVideoBackground = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginVideoBackground($this, opts);
            }

        });
    };

}).apply(this, [window.theme, jQuery]);

// Word Rotate
(function(theme, $) {
    'use strict';

    theme = theme || {};

    var instanceName = '__wordRotate';

    var PluginWordRotate = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginWordRotate.defaults = {
        delay: 2000,
        animDelay: 500,
        pauseOnHover: true,
    };

    PluginWordRotate.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this.setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginWordRotate.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $el = this.options.wrapper,
                itemsWrapper = $el.find(".word-rotate-items"),
                items = itemsWrapper.find("> span"),
                firstItem = items.eq(0),
                firstItemClone = firstItem.clone().removeClass('active'),
                currentItem = 1,
                currentTop = 0,
                itemWidth = 0,
                intervalId = null;

            itemsWrapper
                .width(firstItem.width() + "px")
                .append(firstItemClone);

            var setTimer = function() {

                currentTop = (currentItem * $el.height());
                currentItem++;

                items.removeClass('active').addClass('inactive');
                if(currentItem <= items.length) {
                    itemWidth = items.eq(currentItem-1).width();
                    items.eq(currentItem-1).removeClass('inactive').addClass('active');
                } else {
                    itemWidth = items.eq(0).width();
                    items.eq(0).removeClass('inactive').addClass('active');
                }

                itemsWrapper.animate({
                    top: -(currentTop) + "px",
                    width: itemWidth + "px"
                }, self.options.animDelay, "easeOutQuad", function() {

                    if(currentItem > items.length) {

                        itemsWrapper.css("top", 0);
                        currentItem = 1;

                    }

                });

            };

            if (self.options.pauseOnHover) {
                itemsWrapper.on('mouseenter', function() {
                    if (intervalId != null) {
                        clearInterval(intervalId);
                    }
                }).on('mouseleave', function() {
                    intervalId = setInterval(setTimer, self.options.delay);
                });
            }

            $el.addClass("active");

            intervalId = setInterval(setTimer, self.options.delay);

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginWordRotate: PluginWordRotate
    });

    // jquery plugin
    $.fn.themePluginWordRotate = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginWordRotate($this, opts);
            }
            
        });
    }

}).apply(this, [ window.theme, jQuery ]);

// Flickr Zoom
(function(theme, $) {
    'use strict';

    theme = theme || {};

    var instanceName = '__flickrZoom';

    var FlickrZoom = function($el, opts) {
        return this.initialize($el, opts);
    };

    FlickrZoom.defaults = {

    };

    FlickrZoom.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, FlickrZoom.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var $el = this.options.wrapper,
                links = [],
                i = 0,
                $flickr_links = $el.find('.flickr_badge_image > a');

            $flickr_links.each(function() {
                var slide = {},
                    $image = $(this).find('> img');

                slide.src = $image.attr('src').replace('_s.', '_b.');
                slide.title = $image.attr('title');
                links[i] = slide;
                i++;
            });

            $flickr_links.on('click', function(e) {
                e.preventDefault();
                if ($.fn.magnificPopup) {
                    $.magnificPopup.close();
                    $.magnificPopup.open($.extend(true, {}, theme.mfpConfig, {
                        items: links,
                        gallery: {
                            enabled: true
                        },
                        type: 'image'
                    }), $flickr_links.index($(this)));
                }
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        FlickrZoom: FlickrZoom
    });

    // jquery plugin
    $.fn.themeFlickrZoom = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.FlickrZoom($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Lazy Load
(function(theme, $) {
    'use strict';

    theme = theme || {};

    var instanceName = '__lazyload';

    var PluginLazyLoad = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginLazyLoad.defaults = {
        effect: 'show',
        appearEffect: '',
        appear: function(elements_left, settings) {
            
        },
        load: function(elements_left, settings) {
            $(this).addClass($.trim('lazy-load-loaded ' + settings.appearEffect));
        }
    };

    PluginLazyLoad.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginLazyLoad.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.lazyload))) {
                return this;
            }

            var self = this;
            self.options.wrapper.lazyload(this.options);

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginLazyLoad: PluginLazyLoad
    });

    // jquery plugin
    $.fn.themePluginLazyLoad = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginLazyLoad($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);


// Loading Overlay
(function(theme, $) {

    'use strict';

    theme = theme || {};

    var loadingOverlayTemplate = [
        '<div class="loading-overlay">',
        '<div class="loader"></div>',
        '</div>'
    ].join('');

    var LoadingOverlay = function( $wrapper, options ) {
        return this.initialize( $wrapper, options );
    };

    LoadingOverlay.prototype = {

        options: {
            css: {}
        },

        initialize: function( $wrapper, options ) {
            this.$wrapper = $wrapper;

            this
                .setVars()
                .setOptions( options )
                .build()
                .events();

            this.$wrapper.data( 'loadingOverlay', this );
        },

        setVars: function() {
            this.$overlay = this.$wrapper.find('.loading-overlay');

            return this;
        },

        setOptions: function( options ) {
            if ( !this.$overlay.get(0) ) {
                this.matchProperties();
            }
            this.options     = $.extend( true, {}, this.options, options );
            this.loaderClass = this.getLoaderClass( this.options.css.backgroundColor );

            return this;
        },

        build: function() {
            if ( !this.$overlay.closest(document.documentElement).get(0) ) {
                if ( !this.$cachedOverlay ) {
                    this.$overlay = $( loadingOverlayTemplate ).clone();

                    if ( this.options.css ) {
                        this.$overlay.css( this.options.css );
                        this.$overlay.find( '.loader' ).addClass( this.loaderClass );
                    }
                } else {
                    this.$overlay = this.$cachedOverlay.clone();
                }

                this.$wrapper.append( this.$overlay );
            }

            if ( !this.$cachedOverlay ) {
                this.$cachedOverlay = this.$overlay.clone();
            }

            return this;
        },

        events: function() {
            var _self = this;

            if ( this.options.startShowing ) {
                _self.show();
            }

            if ( this.$wrapper.is('body') || this.options.hideOnWindowLoad ) {
                $( window ).on( 'load error', function() {
                    _self.hide();
                });
            }

            if ( this.options.listenOn ) {
                $( this.options.listenOn )
                    .on( 'loading-overlay:show beforeSend.ic', function( e ) {
                        e.stopPropagation();
                        _self.show();
                    })
                    .on( 'loading-overlay:hide complete.ic', function( e ) {
                        e.stopPropagation();
                        _self.hide();
                    });
            }

            this.$wrapper
                .on( 'loading-overlay:show beforeSend.ic', function( e ) {
                    e.stopPropagation();
                    _self.show();
                })
                .on( 'loading-overlay:hide complete.ic', function( e ) {
                    e.stopPropagation();
                    _self.hide();
                });

            return this;
        },

        show: function() {
            this.build();

            this.position = this.$wrapper.css( 'position' ).toLowerCase();
            if ( this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed' ) {
                this.$wrapper.css({
                    position: 'relative'
                });
            }
            this.$wrapper.addClass( 'loading-overlay-showing' );
        },

        hide: function() {
            var _self = this;

            this.$wrapper.removeClass( 'loading-overlay-showing' );
            setTimeout(function() {
                if ( this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed' ) {
                    _self.$wrapper.css({ position: '' });
                }
            }, 500);
        },

        matchProperties: function() {
            var i,
                l,
                properties;

            properties = [
                'backgroundColor',
                'borderRadius'
            ];

            l = properties.length;

            for( i = 0; i < l; i++ ) {
                var obj = {};
                obj[ properties[ i ] ] = this.$wrapper.css( properties[ i ] );

                $.extend( this.options.css, obj );
            }
        },

        getLoaderClass: function( backgroundColor ) {
            if ( !backgroundColor || backgroundColor === 'transparent' || backgroundColor === 'inherit' ) {
                return 'black';
            }

            var hexColor,
                r,
                g,
                b,
                yiq;

            var colorToHex = function( color ){
                var hex,
                    rgb;

                if( color.indexOf('#') >- 1 ){
                    hex = color.replace('#', '');
                } else {
                    rgb = color.match(/\d+/g);
                    hex = ('0' + parseInt(rgb[0], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2);
                }

                if ( hex.length === 3 ) {
                    hex = hex + hex;
                }

                return hex;
            };

            hexColor = colorToHex( backgroundColor );

            r = parseInt( hexColor.substr( 0, 2), 16 );
            g = parseInt( hexColor.substr( 2, 2), 16 );
            b = parseInt( hexColor.substr( 4, 2), 16 );
            yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

            return ( yiq >= 128 ) ? 'black' : 'white';
        }

    };

    // expose to scope
    $.extend(theme, {
        LoadingOverlay: LoadingOverlay
    });

    // expose as a jquery plugin
    $.fn.loadingOverlay = function( opts ) {
        return this.each(function() {
            var $this = $( this );

            var loadingOverlay = $this.data( 'loadingOverlay' );
            if ( loadingOverlay ) {
                return loadingOverlay;
            } else {
                var options = opts || $this.data( 'loading-overlay-options' ) || {};
                return new LoadingOverlay( $this, options );
            }
        });
    }

    // auto init
    $(function() {
        $('[data-loading-overlay]').loadingOverlay();
    });

}).apply(this, [window.theme, jQuery]);


// Masonry
(function(theme, $) {
    'use strict';

    theme = theme || {};

    var instanceName = '__masonry';

    var Masonry = function($el, opts) {
        return this.initialize($el, opts);
    };

    Masonry.defaults = {
        itemSelector: 'li',
        isOriginLeft : !theme.rtl
    };

    Masonry.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, Masonry.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.isotope))) {
                return this;
            }

            var self = this,
                $el = this.options.wrapper;
            $el.isotope(this.options);
            if (this.options.callback) {
                $el.isotope('on', 'layoutComplete', function() {
                    if (typeof this.options.callback == 'function') {
                        this.options.callback.call();
                    }
                    $el.find('.porto-lazyload:not(.lazy-load-loaded)').trigger('appear');
                });
            }
            $el.isotope('layout');
            self.resize();
            $(window).on('resize', function() {
                self.resize()
            });

            return this;
        },

        resize: function() {
            var self = this,
                $el = this.options.wrapper;

            if (self.resizeTimer)
                clearTimeout(self.resizeTimer);

            self.resizeTimer = setTimeout(function() {
                if ($el.data('isotope')) {
                    $el.isotope('layout');
                }
                delete self.resizeTimer;
            }, 600);
        }
    };

    // expose to scope
    $.extend(theme, {
        Masonry: Masonry
    });

    // jquery plugin
    $.fn.themeMasonry = function(opts) {
        return this.map(function() {
            var $this = $(this);
            
            $this.waitForImages(function() {
                if ($this.data(instanceName)) {
                    return $this.data(instanceName);
                } else {
                    return new theme.Masonry($this, opts);
                }
            });

        });
    }

}).apply(this, [window.theme, jQuery]);


// Preview Image
(function(theme, $) {
    'use strict';

    theme = theme || {};

    var instanceName = '__previewImage';

    var PreviewImage = function($el, opts) {
        return this.initialize($el, opts);
    };

    PreviewImage.defaults = {

    };

    PreviewImage.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PreviewImage.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var $el = this.options.wrapper,
                image = $el.data('image');

            if (image) {
                $el.css('background-image', 'url(' + image + ')');
            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PreviewImage: PreviewImage
    });

    // jquery plugin
    $.fn.themePreviewImage = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.PreviewImage($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);


// Refresh Video Sizes
(function(theme, $) {
    'use strict';

    theme = theme || {};

    var instanceName = '__refreshVideoSize';

    var RefreshVideoSize = function($el, opts) {
        return this.initialize($el, opts);
    };

    RefreshVideoSize.defaults = {

    };

    RefreshVideoSize.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, RefreshVideoSize.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                resizeTimer = false;

            setTimeout(function() {
                self.refresh();
            }, 100);

            $(window).on('resize', function() {
                if (resizeTimer) {
                    clearTimeout(resizeTimer);
                }
                resizeTimer = setTimeout(function() {
                    self.refresh();
                }, 100);
            });

            return this;
        },

        refresh: function() {
            var $el = this.options.wrapper,
                $video = $el.find('video'),
                h = $el.height();

            if (!$video.get(0)) {
                return;
            }

            $video.css('width', '100%').css('height', 'auto');

            var vh = $video.height();

            if (vh < h) {
                $video.css('height', h);
                $video.css('width', h / vh * 100 + '%');
            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        RefreshVideoSize: RefreshVideoSize
    });

    // jquery plugin
    $.fn.themeRefreshVideoSize = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.RefreshVideoSize($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);


// Toggle
(function(theme, $) {
    'use strict';

    theme = theme || {};

    var instanceName = '__toggle';

    var Toggle = function($el, opts) {
        return this.initialize($el, opts);
    };

    Toggle.defaults = {

    };

    Toggle.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, Toggle.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var $el = this.options.wrapper;

            if ($el.hasClass('active'))
                $el.find("> div.toggle-content").stop().slideDown(350, function() {
                    $(this).attr('style', '').show();
                });

            $el.on('click', "> label", function(e) {
                var parentSection = $(this).parent(),
                    parentWrapper = $(this).closest("div.toogle"),
                    parentToggles = $(this).closest(".porto-toggles"),
                    isAccordion = parentWrapper.hasClass("toogle-accordion"),
                    toggleContent = parentSection.find("> div.toggle-content");

                if (isAccordion && typeof(e.originalEvent) != "undefined") {
                    parentWrapper.find("section.toggle.active > label").trigger("click");
                }

                // Preview Paragraph
                if(!parentSection.hasClass("active")) {
                    if (parentToggles.length) {
                        if (parentToggles.data('view') == 'one-toggle') {
                            parentToggles.find('.toggle').each(function() {
                                $(this).removeClass('active');
                                $(this).find("> div.toggle-content").stop().slideUp(350, function() {
                                    $(this).attr('style', '').hide();
                                });
                            });
                        }
                    }
                    toggleContent.stop().slideDown(350, function() {
                        $(this).attr('style', '').show();
                        theme.refreshVCContent(toggleContent);
                    });
                    parentSection.addClass("active");
                } else {
                    if (!parentToggles.length || parentToggles.data('view') != 'one-toggle') {
                        toggleContent.stop().slideUp(350, function() {
                            $(this).attr('style', '').hide();
                        });
                        parentSection.removeClass("active");
                    }
                }
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        Toggle: Toggle
    });

    // jquery plugin
    $.fn.themeToggle = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.Toggle($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);


// Parallax
(function(theme, $) {
    'use strict';

    theme = theme || {};

    var instanceName = '__parallax';

    var Parallax = function($el, opts) {
        return this.initialize($el, opts);
    };

    Parallax.defaults = {
        speed: 1.5,
        horizontalPosition: '50%',
        offset: 0
    };

    Parallax.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, Parallax.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $window = $(window),
                offset,
                yPos,
                bgpos;

            self.options.wrapper.removeAttr('style');
            if (typeof self.options.wrapper.data('image-src') != 'undefined')
                self.options.wrapper.css('background-image', 'url(' + self.options.wrapper.data('image-src') + ')');

            if (!$.browser.mobile) {

                $window.on('scroll resize', function() {
                    offset = self.options.wrapper.offset();
                    yPos = -($window.scrollTop() - offset.top) / self.options.speed + (self.options.offset);
                    bgpos = self.options.horizontalPosition + ' ' + yPos + 'px';
                    self.options.wrapper.css('background-position', bgpos);
                });

                $window.trigger('scroll');

            } else {
                self.options.wrapper.addClass('parallax-disabled');
            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        Parallax: Parallax
    });

    // jquery plugin
    $.fn.themeParallax = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.Parallax($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);


// Sticky
(function(theme, $) {
    'use strict';

    // jQuery Pin plugin
    $.fn.themePin = function (options) {
        var scrollY = 0, lastScrollY = 0, elements = [], disabled = false, $window = $(window), fixedSideTop = [], fixedSideBottom = [], prevDataTo = [];

        options = options || {};

        var recalculateLimits = function () {
            for (var i=0, len=elements.length; i<len; i++) {
                var $this = elements[i];

                if (options.minWidth && $window.width() <= options.minWidth) {
                    if ($this.parent().is(".pin-wrapper")) { $this.unwrap(); }
                    $this.css({width: "", left: "", top: "", position: ""});
                    if (options.activeClass) { $this.removeClass(options.activeClass); }
                    $this.removeClass('sticky-transition');
                    $this.removeClass('sticky-absolute');
                    disabled = true;
                    continue;
                } else {
                    disabled = false;
                }

                var $container = options.containerSelector ? ( $this.closest(options.containerSelector).length ? $this.closest(options.containerSelector) : $(options.containerSelector) ) : $(document.body);
                var offset = $this.offset();
                var containerOffset = $container.offset();

                if (typeof containerOffset == 'undefined') {
                    continue;
                }

                var parentOffset = $this.parent().offset();

                if (!$this.parent().is(".pin-wrapper")) {
                    $this.wrap("<div class='pin-wrapper'>");
                }

                var pad = $.extend({
                    top: 0,
                    bottom: 0
                }, options.padding || {});

                var pt = parseInt($this.parent().parent().css('padding-top')), pb = parseInt($this.parent().parent().css('padding-bottom'));

                if (options.autoInit) {
                    if ($('#header').hasClass('header-side')) {
                        pad.top = theme.adminBarHeight();
                        if ($('.page-top.fixed-pos').length) {
                            pad.top += $('.page-top.fixed-pos').height();
                        }
                    } else {
                        pad.top = theme.adminBarHeight();
                        if ($('#header > .main-menu-wrap').length || !$('#header').hasClass('sticky-menu-header')) {
                            pad.top += theme.StickyHeader.sticky_height;
                        }
                    }
                    if (typeof options.paddingOffsetTop != 'undefined') {
                        pad.top += parseInt(options.paddingOffsetTop, 10);
                    } else {
                        pad.top += 18;
                    }
                    if (typeof options.paddingOffsetBottom != 'undefined') {
                        pad.bottom = parseInt(options.paddingOffsetBottom, 10);
                    } else {
                        pad.bottom = 0;
                    }
                }

                var bb = $this.css('border-bottom'), h = $this.outerHeight();
                $this.css('border-bottom', '1px solid transparent');
                var o_h = $this.outerHeight() - h - 1;
                $this.css('border-bottom', bb);
                $this.css({width: $this.outerWidth() <= $this.parent().width() ? $this.outerWidth() : $this.parent().width()});
                $this.parent().css("height", $this.outerHeight() + o_h);

                if ( (!options.autoFit && !options.fitToBottom) || $this.outerHeight() <= $window.height()) {
                    $this.data("themePin", {
                        pad: pad,
                        from: (options.containerSelector ? containerOffset.top : offset.top) - pad.top + pt,
                        pb: pb,
                        parentTop: parentOffset.top - pt,
                        offset: o_h
                    });
                } else {
                    $this.data("themePin", {
                        pad: pad,
                        fromFitTop: (options.containerSelector ? containerOffset.top : offset.top) - pad.top + pt,
                        from: (options.containerSelector ? containerOffset.top : offset.top) + $this.outerHeight() - $(window).height() + pt,
                        pb: pb,
                        parentTop: parentOffset.top - pt,
                        offset: o_h
                    });
                }
            }
        };

        var onScroll = function () {
            if (disabled) { return; }

            scrollY = $window.scrollTop();

            var window_height = window.innerHeight || $window.height();

            for (var i=0, len=elements.length; i<len; i++) {
                var $this = $(elements[i]),
                    data  = $this.data("themePin"),
                    sidebarTop;

                if (!data) { // Removed element
                    continue;
                }

                var $container = options.containerSelector ? ( $this.closest(options.containerSelector).length ? $this.closest(options.containerSelector) : $(options.containerSelector) ) : $(document.body),
                    isFitToTop = (!options.autoFit && !options.fitToBottom) || ($this.outerHeight() + data.pad.top) <= window_height;
                data.end = $container.offset().top + $container.height();
                if (isFitToTop) {
                    data.to = $container.offset().top + $container.height() - $this.outerHeight() - data.pad.bottom - data.pb;
                } else {
                    data.to = $container.offset().top + $container.height() - window_height - data.pb;
                    data.to2 = $container.height() - $this.outerHeight() - data.pad.bottom - data.pb;
                }

                if ( prevDataTo[i] === 0 ) {
                    prevDataTo[i] = data.to;
                }

                if (isFitToTop) {
                    var from = data.from - data.pad.bottom,
                        to = data.to - data.pad.top - data.offset;
                    if (typeof data.fromFitTop != 'undefined' && data.fromFitTop) {
                        from = data.fromFitTop - data.pad.bottom;
                    }

                    if (from + $this.outerHeight() > data.end || from >= to) {
                        $this.css({position: "", top: "", left: ""});
                        if (options.activeClass) { $this.removeClass(options.activeClass); }
                        $this.removeClass('sticky-transition');
                        $this.removeClass('sticky-absolute');
                        continue;
                    }
                    if (scrollY > from && scrollY < to) {
                        !($this.css("position") == "fixed") && $this.css({
                            left: $this.offset().left,
                            top: data.pad.top
                        }).css("position", "fixed");
                        if (options.activeClass) { $this.addClass(options.activeClass); }
                        $this.removeClass('sticky-transition');
                        $this.removeClass('sticky-absolute');
                    } else if (scrollY >= to) {
                        $this.css({
                            left: "",
                            top: to - data.parentTop + data.pad.top
                        }).css("position", "absolute");
                        if (options.activeClass) { $this.addClass(options.activeClass); }
                        if ($this.hasClass('sticky-absolute')) $this.addClass('sticky-transition');
                        $this.addClass('sticky-absolute');
                    } else {
                        $this.css({position: "", top: "", left: ""});
                        if (options.activeClass) { $this.removeClass(options.activeClass); }
                        $this.removeClass('sticky-transition');
                        $this.removeClass('sticky-absolute');
                    }
                } else if (options.fitToBottom) {
                    var from = data.from,
                        to = data.to;
                    if (data.from + window_height > data.end || data.from >= to) {
                        $this.css({position: "", top: "", bottom: "", left: ""});
                        if (options.activeClass) { $this.removeClass(options.activeClass); }
                        $this.removeClass('sticky-transition');
                        $this.removeClass('sticky-absolute');
                        continue;
                    }
                    if (scrollY > from && scrollY < to) {
                        !($this.css("position") == "fixed") && $this.css({
                            left: $this.offset().left,
                            bottom: data.pad.bottom,
                            top: ""
                        }).css("position", "fixed");
                        if (options.activeClass) { $this.addClass(options.activeClass); }
                        $this.removeClass('sticky-transition');
                        $this.removeClass('sticky-absolute');
                    } else if (scrollY >= to) {
                        $this.css({
                            left: "",
                            top: data.to2,
                            bottom: ""
                        }).css("position", "absolute");
                        if (options.activeClass) { $this.addClass(options.activeClass); }
                        if ($this.hasClass('sticky-absolute')) $this.addClass('sticky-transition');
                        $this.addClass('sticky-absolute');
                    } else {
                        $this.css({position: "", top: "", bottom: "", left: ""});
                        if (options.activeClass) { $this.removeClass(options.activeClass); }
                        $this.removeClass('sticky-transition');
                        $this.removeClass('sticky-absolute');
                    }
                } else { // auto fit
                    if ( prevDataTo[i] != data.to ) {
                        if (fixedSideBottom[i] && $this.height() + $this.offset().top + data.pad.bottom < scrollY + window_height) {
                            fixedSideBottom[i] = false;
                        }
                    }
                    if ( ( $this.height() + data.pad.top + data.pad.bottom ) > window_height || fixedSideTop[i] || fixedSideBottom[i] ) {
                        var padTop = parseInt($this.parent().parent().css('padding-top'));
                        // Reset the sideSortables style when scrolling to the top.
                        if ( scrollY + data.pad.top - padTop <= data.parentTop ) {
                            $this.css({position: "", top: "", bottom: "", left: ""});
                            fixedSideTop[i] = fixedSideBottom[i] = false;
                        } else if ( scrollY >= data.to ) {
                            $this.css({
                                left: "",
                                top: data.to2,
                                bottom: ""
                            }).css("position", "absolute");
                            if (options.activeClass) { $this.addClass(options.activeClass); }
                            if ($this.hasClass('sticky-absolute')) $this.addClass('sticky-transition');
                            $this.addClass('sticky-absolute');
                        } else {

                            // When scrolling down.
                            if ( scrollY >= lastScrollY ) {
                                if ( fixedSideTop[i] ) {

                                    // Let it scroll.
                                    fixedSideTop[i] = false;
                                    sidebarTop = $this.offset().top - data.parentTop;

                                    $this.css({
                                        left: "",
                                        top: sidebarTop,
                                        bottom: ""
                                    }).css("position", "absolute");
                                    if (options.activeClass) { $this.addClass(options.activeClass); }
                                    if ($this.hasClass('sticky-absolute')) $this.addClass('sticky-transition');
                                    $this.addClass('sticky-absolute');
                                } else if ( ! fixedSideBottom[i] && $this.height() + $this.offset().top + data.pad.bottom < scrollY + window_height ) {
                                    // Pin the bottom.
                                    fixedSideBottom[i] = true;

                                    !($this.css("position") == "fixed") && $this.css({
                                        left: $this.offset().left,
                                        bottom: data.pad.bottom,
                                        top: ""
                                    }).css("position", "fixed");
                                    if (options.activeClass) { $this.addClass(options.activeClass); }
                                    $this.removeClass('sticky-transition');
                                    $this.removeClass('sticky-absolute');
                                }

                            // When scrolling up.
                            } else if ( scrollY < lastScrollY ) {
                                if ( fixedSideBottom[i] ) {
                                    // Let it scroll.
                                    fixedSideBottom[i] = false;
                                    sidebarTop = $this.offset().top - data.parentTop;

                                    /*if ($this.css('position') == 'absolute' && sidebarTop > data.to2) {
                                        sidebarTop = data.to2;
                                    }*/
                                    $this.css({
                                        left: "",
                                        top: sidebarTop,
                                        bottom: ""
                                    }).css("position", "absolute");
                                    if (options.activeClass) { $this.addClass(options.activeClass); }
                                    if ($this.hasClass('sticky-absolute')) $this.addClass('sticky-transition');
                                    $this.addClass('sticky-absolute');
                                } else if ( ! fixedSideTop[i] && $this.offset().top >= scrollY + data.pad.top ) {
                                    // Pin the top.
                                    fixedSideTop[i] = true;

                                    !($this.css("position") == "fixed") && $this.css({
                                        left: $this.offset().left,
                                        top: data.pad.top,
                                        bottom: ''
                                    }).css("position", "fixed");
                                    if (options.activeClass) { $this.addClass(options.activeClass); }
                                    $this.removeClass('sticky-transition');
                                    $this.removeClass('sticky-absolute');
                                }
                            }
                        }
                    } else {
                        // If the sidebar container is smaller than the viewport, then pin/unpin the top when scrolling.
                        if ( scrollY >= ( data.parentTop - data.pad.top ) ) {
                            $this.css( {
                                position: 'fixed',
                                top: data.pad.top
                            } );
                        } else {
                            $this.css({position: "", top: "", bottom: "", left: ""});
                        }

                        fixedSideTop[i] = fixedSideBottom[i] = false;
                    }
                }

                prevDataTo[i] = data.to;
            }

            lastScrollY = scrollY;
        };

        var update = function () { recalculateLimits(); onScroll(); };

        this.each(function () {
            var $this = $(this),
                data  = $(this).data('themePin') || {};

            if (data && data.update) { return; }
            elements.push($this);
            $("img", this).one("load", recalculateLimits);
            data.update = update;
            $(this).data('themePin', data);
            fixedSideTop.push(false);
            fixedSideBottom.push(false);
            prevDataTo.push(0);
        });

        $(window).on('touchmove scroll', onScroll);
        recalculateLimits();

        $window.on('load', update);

        $(this).on('recalc.pin', function() {
            recalculateLimits();
            onScroll();
        });

        return this;
    };

    theme = theme || {};

    var instanceName = '__sticky';

    var Sticky = function($el, opts) {
        return this.initialize($el, opts);
    };

    Sticky.defaults = {
        autoInit: false,
        minWidth: 767,
        activeClass: 'sticky-active',
        padding: {
            top: 0,
            bottom: 0
        },
        offsetTop: 0,
        offsetBottom: 0,
        autoFit: false,
        fitToBottom: false
    };

    Sticky.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, Sticky.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.themePin))) {
                return this;
            }

            var self = this,
                $el = this.options.wrapper;

            this.options.minWidth -= theme.getScrollbarWidth();

            if ($el.hasClass('porto-sticky-nav')) {
                this.options.padding.top = theme.StickyHeader.sticky_height + theme.adminBarHeight();
                this.options.activeClass = 'sticky-active';
                this.options.containerSelector = '.main-content-wrap';
                theme.sticky_nav_height = $el.outerHeight();
                if (this.options.minWidth > $(window).width())
                    theme.sticky_nav_height = 0;
            }

            $el.themePin(this.options);

            $(window).smartresize(function() {
                setTimeout(function() {
                    $el.trigger('recalc.pin');
                }, 800);

                var $parent = $el.parent();

                $el.outerWidth($parent.width());
                if ($el.css('position') == 'fixed') {
                    $el.css('left', $parent.offset().left);
                }

                if ($el.hasClass('porto-sticky-nav')) {
                    theme.sticky_nav_height = $el.outerHeight();
                    if (self.options.minWidth > $(window).width())
                        theme.sticky_nav_height = 0;
                }
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        Sticky: Sticky
    });

    // jquery plugin
    $.fn.themeSticky = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                $this.trigger('recalc.pin');
                setTimeout(function() {
                    $this.trigger('recalc.pin');
                }, 800);
                return $this.data(instanceName);
            } else {
                return new theme.Sticky($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);


// Mobile Panel
(function(theme, $) {
    'use strict';

    $(function() {
        $(document.body).on('click', '.mobile-toggle', function(e) {
            if ($('#nav-panel').length > 0) {
                $('#nav-panel').stop().slideToggle();
            } else if ($('#side-nav-panel').length > 0) {
                if ($('html').hasClass('panel-opened')) {
                    $('html').removeClass('panel-opened');
                    $('.panel-overlay').removeClass('active');
                } else {
                    $('html').addClass('panel-opened');
                    $('.panel-overlay').addClass('active');
                }
            }
        });

        $('.panel-overlay').on('click', function() {
            $('html').removeClass('panel-opened');
            $(this).removeClass('active');
        });

        $('#side-nav-panel .side-nav-panel-close').on('click', function(e) {
            e.preventDefault();
            $('.panel-overlay').click();
        });

        $(window).on('resize', function() {
            if ($(window).width() > 991 - theme.getScrollbarWidth()) {
                $('#nav-panel').hide();
                $('.panel-overlay').click();
            }
        });
    });

}).apply(this, [window.theme, jQuery]);


// Portfolio Like
(function(theme, $) {
    'use strict';

    $(function() {
        $(document).on('click', '.portfolio-like', function(e) {
            e.preventDefault();
            var $this = $(this),
                $parent = $this.parent(),
                portfolio_id = $this.attr('data-id');

            $.post(
                theme.ajax_url, {
                    portfolio_id: portfolio_id,
                    action: 'porto_portfolio-like',
                    nonce: js_porto_vars.porto_nonce
                },
                function(data) {
                    if (data) {
                        $this.remove();
                        $parent.html(data);
                        $parent.find("data-tooltip").tooltip();
                    }
                }
            );
            return false;
        });
    });

}).apply(this, [window.theme, jQuery]);

// Blog Like
(function(theme, $) {
    'use strict';

    $(function() {
        $(document).on('click', '.blog-like', function(e) {
            e.preventDefault();
            var $this = $(this),
                $parent = $this.parent(),
                blog_id = $this.attr('data-id');
            if ($this.hasClass('updating')) {
                return false;
            }
            $this.addClass('updating').text('...');
            $.post(
                theme.ajax_url, {
                    blog_id: blog_id,
                    action: 'porto_blog-like',
                    nonce: js_porto_vars.porto_nonce
                },
                function(data) {
                    if (data) {
                        $this.remove();
                        $parent.html(data);
                        $parent.find("data-tooltip").tooltip();
                    }
                }
            );
            return false;
        });
    });

}).apply(this, [window.theme, jQuery]);


// Scroll to Top

//** jQuery Scroll to Top Control script- (c) Dynamic Drive DHTML code library: http://www.dynamicdrive.com.
//** Available/ usage terms at http://www.dynamicdrive.com (March 30th, 09')
//** v1.1 (April 7th, 09'):
//** 1) Adds ability to scroll to an absolute position (from top of page) or specific element on the page instead.
//** 2) Fixes scroll animation not working in Opera. 


var scrolltotop={
    //startline: Integer. Number of pixels from top of doc scrollbar is scrolled before showing control
    //scrollto: Keyword (Integer, or "Scroll_to_Element_ID"). How far to scroll document up when control is clicked on (0=top).
    setting: {startline:100, scrollto: 0, scrollduration:1000, fadeduration:[500, 100]},
    controlHTML: '<img src="assets/img/up.png" style="width:40px; height:40px" />', //HTML for control, which is auto wrapped in DIV w/ ID="topcontrol"
    controlattrs: {offsetx:10, offsety:10}, //offset of control relative to right/ bottom of window corner
    anchorkeyword: '#top', //Enter href value of HTML anchors on the page that should also act as "Scroll Up" links

    state: {isvisible:false, shouldvisible:false},

    scrollup:function(){
        if (!this.cssfixedsupport) //if control is positioned using JavaScript
            this.$control.css({opacity:0}); //hide control immediately after clicking it
        var dest=isNaN(this.setting.scrollto)? this.setting.scrollto : parseInt(this.setting.scrollto);
        if (typeof dest=="string" && jQuery('#'+dest).length==1) //check element set by string exists
            dest=jQuery('#'+dest).offset().top;
        else
            dest=0;
        this.$body.animate({scrollTop: dest}, this.setting.scrollduration);
    },

    keepfixed:function(){
        var $window=jQuery(window);
        var controlx=$window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx;
        var controly=$window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety;
        this.$control.css({left:controlx+'px', top:controly+'px'});
    },

    togglecontrol:function(){
        var scrolltop=jQuery(window).scrollTop();
        if (!this.cssfixedsupport)
            this.keepfixed();
        this.state.shouldvisible=(scrolltop>=this.setting.startline)? true : false;
        if (this.state.shouldvisible && !this.state.isvisible){
            this.$control.stop().animate({opacity:1}, this.setting.fadeduration[0]);
            this.state.isvisible=true;
        }
        else if (this.state.shouldvisible==false && this.state.isvisible){
            this.$control.stop().animate({opacity:0}, this.setting.fadeduration[1]);
            this.state.isvisible=false;
        }
    },
    
    init:function(){
        jQuery(document).ready(function($){
            var mainobj=scrolltotop;
            var iebrws=document.all;
            mainobj.cssfixedsupport=!iebrws || iebrws && document.compatMode=="CSS1Compat" && window.XMLHttpRequest //not IE or IE7+ browsers in standards mode
            mainobj.$body=(window.opera)? (document.compatMode=="CSS1Compat"? $('html') : $('body')) : $('html,body');
            mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+'</div>')
                .css({position:mainobj.cssfixedsupport? 'fixed' : 'absolute', bottom:mainobj.controlattrs.offsety, opacity:0, cursor:'pointer'})
                .attr({title:''})
                .click(function(){mainobj.scrollup(); return false;})
                .appendTo('body');
            if (document.all && !window.XMLHttpRequest && mainobj.$control.text()!='') //loose check for IE6 and below, plus whether control contains any text
                mainobj.$control.css({width:mainobj.$control.width()}); //IE6- seems to require an explicit width on a DIV containing text
            mainobj.togglecontrol();
            $('a[href="' + mainobj.anchorkeyword +'"]').click(function(){
                mainobj.scrollup();
                return false;
            });
            $(window).bind('scroll resize', function(e){
                mainobj.togglecontrol();
            });
        });
    }
};

//scrolltotop.init()

(function(theme, $) {
    'use strict';
    theme = theme || {};

    $.extend(theme, {

        ScrollToTop: {

            defaults: {
                html: '<i class="fas fa-chevron-up"></i>',
                offsetx: 10,
                offsety: 0
            },

            initialize: function(html, offsetx, offsety) {
                this.html = (html || this.defaults.html);
                this.offsetx = (offsetx || this.defaults.offsetx);
                this.offsety = (offsety || this.defaults.offsety);

                this.build();

                return this;
            },

            build: function() {
                var self = this;

                if (typeof scrolltotop !== 'undefined') {
                    // scroll top control
                    scrolltotop.controlHTML = self.html;
                    scrolltotop.controlattrs = {offsetx: self.offsetx, offsety: self.offsety};
                    scrolltotop.init();
                }

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);


// Mega Menu
(function(theme, $) {
    'use strict';

    theme = theme || {};

    $.extend(theme, {

        MegaMenu: {

            defaults: {
                menu: $('.mega-menu')
            },

            initialize: function($menu) {
                this.$menu = ($menu || this.defaults.menu);

                this.build()
                    .events();

                return this;
            },

            popupWidth: function() {
                var winWidth = $(window).width() + theme.getScrollbarWidth();
                var popupWidth = $(window).width() - theme.grid_gutter_width * 2;
                if (!$('body').hasClass('wide')) {
                    if (winWidth >= theme.container_width + theme.grid_gutter_width - 1)
                        popupWidth = theme.container_width - theme.grid_gutter_width;
                    else if (winWidth >= 992)
                        popupWidth = 960 - theme.grid_gutter_width;
                    else if (winWidth >= 768)
                        popupWidth = 720 - theme.grid_gutter_width;
                }
                return popupWidth;
            },

            calcMenuPosition: function(menu_obj) {
                var menu = menu_obj,
                    menuContainerWidth = $("#header .header-main .container").outerWidth() - parseInt($("#header .header-main .container").css('padding-left')) - parseInt($("#header .header-main .container").css('padding-right'));
                if (menuContainerWidth < 900) return;
                var browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - theme.getScrollbarWidth(),
                    menuLeftPos = menu.offset().left - (browserWidth - menuContainerWidth) / 2;
                if (window.theme.rtl) {
                    menuLeftPos = $(window).width() - (menu.offset().left + menu.outerWidth() ) - (browserWidth - menuContainerWidth) / 2;
                }
                var menuWidth = menu.width(),
                    remainWidth = menuContainerWidth - (menuLeftPos+menuWidth),
                    l = false;
                if (menuLeftPos > remainWidth && menuLeftPos < menuWidth ) {
                    l = (menuLeftPos + remainWidth) / 3;
                }
                if (remainWidth < 0) {
                    l = -remainWidth;
                }
                return l;
            },

            build: function() {
                var self = this;

                self.$menu.each( function() {
                    var $menu = $(this);
                    var $menu_container = $menu.closest('.container');
                    var container_width = self.popupWidth();
                    var offset = 0;

                    if ($menu_container.length) {
                        if (theme.rtl) {
                            offset = ($menu_container.offset().left + $menu_container.width()) - ($menu.offset().left + $menu.width()) + parseInt($menu_container.css('padding-right'));
                        } else {
                            offset = $menu.offset().left - $menu_container.offset().left - parseInt($menu_container.css('padding-left'));
                        }
                        offset = (offset == 1) ? 0 : offset;
                    }

                    var $menu_items = $menu.find('> li');

                    $menu_items.each( function() {
                        var $menu_item = $(this);
                        var $popup = $menu_item.find('> .popup');
                        if ($popup.length > 0) {
                            $popup.css('display', 'block');
                            if ($menu_item.hasClass('wide')) {
                                $popup.css('left', 0);
                                var padding = parseInt($popup.css('padding-left')) + parseInt($popup.css('padding-right')) +
                                    parseInt($popup.find('> .inner').css('padding-left')) + parseInt($popup.find('> .inner').css('padding-right'));

                                var row_number = 4;

                                if ($menu_item.hasClass('col-2')) row_number = 2;
                                if ($menu_item.hasClass('col-3')) row_number = 3;
                                if ($menu_item.hasClass('col-4')) row_number = 4;
                                if ($menu_item.hasClass('col-5')) row_number = 5;
                                if ($menu_item.hasClass('col-6')) row_number = 6;

                                if ($(window).width() < 992 - theme.scrollbarWidth)
                                    row_number = 1;

                                var col_length = 0;
                                $popup.find('> .inner > ul > li').each(function() {
                                    var cols = parseFloat($(this).attr('data-cols'));
                                    if (cols <= 0)
                                        cols = 1;

                                    if (cols > row_number)
                                        cols = row_number;

                                    col_length += cols;
                                });

                                if (col_length > row_number) col_length = row_number;

                                var popup_max_width = $popup.find('.inner').css('max-width');
                                var col_width = container_width / row_number;
                                if ('none' !== popup_max_width && popup_max_width < container_width) {
                                    col_width = parseInt(popup_max_width) / row_number;
                                }

                                $popup.find('> .inner > ul > li').each(function() {
                                    var cols = parseFloat($(this).attr('data-cols'));
                                    if (cols <= 0)
                                        cols = 1;

                                    if (cols > row_number)
                                        cols = row_number;

                                    if ($menu_item.hasClass('pos-center') || $menu_item.hasClass('pos-left') || $menu_item.hasClass('pos-right'))
                                        $(this).css('width', (100 / col_length * cols) + '%');
                                    else
                                        $(this).css('width', (100 / row_number * cols) + '%');
                                });

                                if ($menu_item.hasClass('pos-center')) { // position center
                                    $popup.find('> .inner > ul').width(col_width * col_length - padding);
                                    var left_position = $popup.offset().left - ($(window).width() - col_width * col_length) / 2;
                                    $popup.css({
                                        'left': -left_position
                                    });
                                } else if ($menu_item.hasClass('pos-left')) { // position left
                                    $popup.find('> .inner > ul').width(col_width * col_length - padding);
                                    $popup.css({
                                        'left': -15
                                    });
                                } else if ($menu_item.hasClass('pos-right')) { // position right
                                    $popup.find('> .inner > ul').width(col_width * col_length - padding);
                                    $popup.css({
                                        'left': 'auto',
                                        'right': -15
                                    });
                                } else { // position justify
                                    $popup.find('> .inner > ul').width(container_width - padding);
                                    if (theme.rtl) {
                                        $popup.css({
                                            'right': 0,
                                            'left': 'auto'
                                        });
                                    }
                                    var left_position = self.calcMenuPosition($popup);
                                    if (theme.rtl) {
                                        $popup.css({
                                            'right': -15,
                                            'left': 'auto'
                                        });
                                        if (left_position) {
                                            $popup.css({
                                                'right': -left_position,
                                                'left': 'auto'
                                            });
                                        }
                                    } else {
                                        $popup.css({
                                            'left': -15,
                                            'right': 'auto'
                                        });
                                        if (left_position) {
                                            $popup.css({
                                                'left': -left_position,
                                                'right': 'auto'
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    });
                });

                return self;
            },

            events: function() {
                var self = this;

                $(window).on('resize', function() {
                    self.build();
                });

                setTimeout(function() {
                    self.build();
                }, 400);

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);


// Sidebar Menu
(function(theme, $) {
    'use strict';

    theme = theme || {};

    $.extend(theme, {

        SidebarMenu: {

            defaults: {
                menu: $('.sidebar-menu:not(.side-menu-accordion)'),
                toggle: $('.widget_sidebar_menu .widget-title .toggle'),
                menu_toggle: $('#main-toggle-menu .menu-title')
            },

            rtl: theme.rtl,

            initialize: function($menu, $toggle, $menu_toggle) {
                this.$menu = ($menu || this.defaults.menu);
                this.$toggle = ($toggle || this.defaults.toggle);
                this.$menu_toggle = ($menu_toggle || this.defaults.menu_toggle);

                this.build()
                    .events();

                return this;
            },

            isRightSidebar: function($menu) {
                var flag = false;
                if (this.rtl) {
                    flag = !($('#main').hasClass('column2-right-sidebar') || $('#main').hasClass('column2-wide-right-sidebar'));
                } else {
                    flag = $('#main').hasClass('column2-right-sidebar') || $('#main').hasClass('column2-wide-right-sidebar');
                }

                if ($menu.closest('#main-toggle-menu').length) {
                    if (this.rtl) {
                        flag = true;
                    } else {
                        flag = false;
                    }
                }

                var $header_wrapper = $menu.closest('.header-wrapper');
                if ($header_wrapper.length && $header_wrapper.hasClass('header-side-nav')) {
                    if (this.rtl) {
                        flag = true;
                    } else {
                        flag = false;
                    }
                    if( $('.page-wrapper').hasClass('side-nav-right') ){
                        if( this.rtl ){
                            flag = false;
                        }else{
                            flag = true;
                        }
                    }
                }
                
                return flag;
            },

            popupWidth: function() {
                var winWidth = $(window).width() + theme.getScrollbarWidth();
                var popupWidth = $(window).width() - theme.grid_gutter_width * 2;
                if (!$('body').hasClass('wide')) {
                    if (winWidth >= theme.container_width + theme.grid_gutter_width - 1)
                        popupWidth = theme.container_width - theme.grid_gutter_width;
                    else if (winWidth >= 992)
                        popupWidth = 960 - theme.grid_gutter_width;
                    else if (winWidth >= 768)
                        popupWidth = 720 - theme.grid_gutter_width;
                }
                return popupWidth;
            },

            build: function() {
                var self = this;

                if (!self.$menu.hasClass('side-menu-slide')) {
                    self.$menu.each( function() {
                        var $menu = $(this), container_width;
                        if ($(window).width() < 992 - theme.getScrollbarWidth())
                            container_width = self.popupWidth();
                        else
                            container_width = self.popupWidth() - $menu.width() - 45;

                        var is_right_sidebar = self.isRightSidebar($menu);

                        var $menu_items = $menu.find('> li');

                        $menu_items.each( function() {
                            var $menu_item = $(this);
                            var $popup = $menu_item.find('> .popup');
                            if ($popup.length > 0) {
                                $popup.css('display', 'block');
                                if ($menu_item.hasClass('wide')) {
                                    $popup.css('left', 0);
                                    var row_number = 4;

                                    if ($menu_item.hasClass('col-2')) row_number = 2;
                                    if ($menu_item.hasClass('col-3')) row_number = 3;
                                    if ($menu_item.hasClass('col-4')) row_number = 4;
                                    if ($menu_item.hasClass('col-5')) row_number = 5;
                                    if ($menu_item.hasClass('col-6')) row_number = 6;

                                    if ($(window).width() < 992 - theme.getScrollbarWidth())
                                        row_number = 1;

                                    var col_length = 0;
                                    $popup.find('> .inner > ul > li').each(function() {
                                        var cols = parseFloat($(this).attr('data-cols'));
                                        if (cols <= 0)
                                            cols = 1;

                                        if (cols > row_number)
                                            cols = row_number;

                                        col_length += cols;
                                    });

                                    if (col_length > row_number) col_length = row_number;

                                    var popup_max_width = $popup.find('.inner').css('max-width');
                                    var col_width = container_width / row_number;
                                    if ('none' !== popup_max_width && popup_max_width < container_width) {
                                        col_width = parseInt(popup_max_width) / row_number;
                                    }

                                    $popup.find('> .inner > ul > li').each(function() {
                                        var cols = parseFloat($(this).attr('data-cols'));
                                        if (cols <= 0)
                                            cols = 1;

                                        if (cols > row_number)
                                            cols = row_number;

                                        if ($menu_item.hasClass('pos-center') || $menu_item.hasClass('pos-left') || $menu_item.hasClass('pos-right'))
                                            $(this).css('width', (100 / col_length * cols) + '%');
                                        else
                                            $(this).css('width', (100 / row_number * cols) + '%');
                                    });

                                    $popup.find('> .inner > ul').width(col_width * col_length + 1);
                                    if (is_right_sidebar) {
                                        $popup.css({
                                            'left': 'auto',
                                            'right': $(this).width()
                                        });
                                    } else {
                                        $popup.css({
                                            'left': $(this).width(),
                                            'right': 'auto'
                                        });
                                    }
                                }

                                $popup.css('display', 'none');
                                if ($menu.hasClass('side-menu-accordion')) {

                                } else if ($menu.hasClass('side-menu-slide')) {

                                } else {
                                    $menu_item.hover(function() {
                                        $menu_items.find('.popup').hide();
                                        $popup.show();
                                        $popup.parent().addClass('open');
                                    }, function() {
                                        $popup.hide();
                                        $popup.parent().removeClass('open');
                                    });
                                }
                            }
                        });
                    });
                }

                return self;
            },

            events: function() {
                var self = this;

                self.$toggle.on('click', function() {
                    var $widget = $(this).parent().parent();
                    var $this = $(this);
                    if ($this.hasClass('closed')) {
                        $this.removeClass('closed');
                        $widget.removeClass('closed');
                        $widget.find('.sidebar-menu-wrap').stop().slideDown(400, function() {
                            $(this).attr('style', '').show();
                            self.build();
                        });
                    } else {
                        $this.addClass('closed');
                        $widget.addClass('closed');
                        $widget.find('.sidebar-menu-wrap').stop().slideUp(400, function() {
                            $(this).attr('style', '').hide();
                        });
                    }
                });

                this.$menu_toggle.on('click', function() {
                    var $toggle_menu = $(this).parent();
                    var $this = $(this);
                    if ($this.hasClass('closed')) {
                        $this.removeClass('closed');
                        $toggle_menu.removeClass('closed');
                        $toggle_menu.find('.toggle-menu-wrap').stop().slideDown(400, function() {
                            $(this).attr('style', '').show();
                        });

                        self.build();

                    } else {
                        $this.addClass('closed');
                        $toggle_menu.addClass('closed');
                        $toggle_menu.find('.toggle-menu-wrap').stop().slideUp(400, function() {
                            $(this).attr('style', '').hide();
                        });
                    }
                });

                // slide menu
                if (self.$menu.hasClass('side-menu-slide')) {
                    var slideNavigation = {
                        $mainNav: self.$menu,
                        $mainNavItem: self.$menu.find('li'),

                        build: function(){
                            var self = this;

                            self.menuNav();
                        },
                        menuNav: function(){
                            var self = this;

                            self.$mainNav.find('.menu-item-has-children > a.nolink').removeClass('nolink').attr('href', '');

                            self.$mainNav.find('.menu-item-has-children > a:not(.go-back)').on('click', function(e) {
                                e.stopImmediatePropagation();
                                e.preventDefault();
                                var currentMenu         = $(this).closest('ul'),
                                    nextMenu            = $(this).parent().find('ul').first();

                                if (nextMenu.children('.menu-item').children('.go-back').length < 1) {
                                    nextMenu.prepend('<li class="menu-item"><a class="go-back" href="#">' + js_porto_vars.submenu_back + '</a></li>'); 
                                }

                                var nextMenuHeightDiff  = nextMenu.find('> li').length * nextMenu.find('> li').outerHeight() - nextMenu.outerHeight();

                                currentMenu.addClass('next-menu');

                                nextMenu.addClass('visible');
                                currentMenu.css({
                                    overflow: 'visible',
                                    'overflow-y': 'visible'
                                });
                                
                                if (nextMenuHeightDiff > 0) {
                                    nextMenu.css({
                                        overflow: 'hidden',
                                        'overflow-y': 'scroll'
                                    });
                                }

                                //for (i = 0; i < nextMenu.find('> li').length; i++) {
                                    if( nextMenu.outerHeight() < (nextMenu.closest('.header-main').outerHeight() - 100) ) {
                                        nextMenu.css({
                                            height: nextMenu.outerHeight() + nextMenu.find('> li').outerHeight()
                                        });
                                    }
                               // }

                                nextMenu.css({
                                    'padding-top': nextMenuHeightDiff + 'px'
                                });
                            });
                            self.$mainNav.on('click', '.go-back', function(e) {
                                e.preventDefault();
                                var prevMenu            = $(this).closest('.next-menu'),
                                    prevMenuHeightDiff  = prevMenu.find('> li').length * prevMenu.find('> li').outerHeight() - prevMenu.outerHeight();

                                prevMenu.removeClass('next-menu');
                                $(this).closest('ul').removeClass('visible');

                                if( prevMenuHeightDiff > 0 ) {
                                    prevMenu.css({
                                        overflow: 'hidden',
                                        'overflow-y': 'scroll'
                                    });
                                }
                            });
                        }
                    };

                    slideNavigation.build();
                }

                $(window).on('resize', function() {
                    self.build();
                });

                setTimeout(function() {
                    self.build();
                }, 400);

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);

// Sticky Header
(function(theme, $) {
    'use strict';

    theme = theme || {};

    $.extend(theme, {

        StickyHeader: {

            defaults: {
                header: $('#header')
            },

            initialize: function($header) {
                this.$header = ($header || this.defaults.header);
                this.sticky_height = 0;
                this.sticky_offset = 0;
                this.sticky_pos = 0;
                this.change_logo = theme.change_logo;

                if (!theme.show_sticky_header || !this.$header.length || $('.side-header-narrow-bar').length)
                    return this;

                var self = this;

                var $header_top = self.$header.find('> .header-top');
                if ($header_top.length) {
                    self.$header_top = $header_top;
                    self.top_height = $header_top.height();
                } else {
                    self.$header_top = false;
                }

                var $menu_wrap = self.$header.find('> .main-menu-wrap');
                if ($menu_wrap.length) {
                    self.$menu_wrap = $menu_wrap;
                    self.menu_height = $menu_wrap.height();
                } else {
                    self.$menu_wrap = false;
                }

                self.$header_main = self.$header.find('.header-main');

                self.reveal = self.$header.parents('.header-wrapper').hasClass('header-reveal');

                self.is_sticky = false;

                self.reset()
                    .build()
                    .events();

                return self;
            },

            build: function() {
                var self = this;

                if (!self.is_sticky && ($(window).height() + self.header_height + theme.adminBarHeight() + parseInt(self.$header.css('border-top-width')) >= $(document).height())) {
                    return self;
                }

                if ($(window).height() > $('body').height())
                    window.scrollTo(0, 0);

                var scroll_top = $(window).scrollTop();

                if (self.$menu_wrap && !theme.isTablet()) {

                    self.$header_main.stop().css('top', 0);

                    if (self.$header.parent().hasClass('fixed-header'))
                        self.$header.parent().attr('style', '');

                    if (scroll_top > self.sticky_pos) {
                        if (!self.$header.hasClass('sticky-header')) {
                            var header_height = self.$header.outerHeight();
                            self.$header.addClass('sticky-header').css('height', header_height);
                            self.$menu_wrap.stop().css('top', theme.adminBarHeight());

                            var selectric = self.$header.find('.header-main .searchform select').data('selectric');
                            if (selectric && typeof selectric.close != 'undefined')
                                selectric.close();

                            if (self.$header.parent().hasClass('fixed-header')) {
                                self.$header_main.hide();
                                self.$header.css('height', '');
                            }

                            if (!self.init_toggle_menu) {
                                self.init_toggle_menu = true;
                                theme.MegaMenu.build();
                                if ($('#main-toggle-menu').length) {
                                    if ($('#main-toggle-menu').hasClass('show-always')) {
                                        $('#main-toggle-menu').data('show-always', true);
                                        $('#main-toggle-menu').removeClass('show-always');
                                    }
                                    $('#main-toggle-menu').addClass('closed');
                                    $('#main-toggle-menu .menu-title').addClass('closed');
                                    $('#main-toggle-menu .toggle-menu-wrap').attr('style', '');
                                }
                            }
                            self.is_sticky = true;
                        }
                    } else {
                        if (self.$header.hasClass('sticky-header')) {
                            self.$header.removeClass('sticky-header');
                            self.$header.css('height', '');
                            self.$menu_wrap.stop().css('top', 0);
                            self.$header_main.show();

                            var selectric = self.$header.find('.main-menu-wrap .searchform select').data('selectric');
                            if (selectric && typeof selectric.close != 'undefined')
                                selectric.close();

                            if (self.init_toggle_menu) {
                                self.init_toggle_menu = false;
                                theme.MegaMenu.build();
                                if ($('#main-toggle-menu').length) {
                                    if ($('#main-toggle-menu').data('show-always')) {
                                        $('#main-toggle-menu').addClass('show-always');
                                        $('#main-toggle-menu').removeClass('closed');
                                        $('#main-toggle-menu .menu-title').removeClass('closed');
                                        $('#main-toggle-menu .toggle-menu-wrap').attr('style', '');
                                    }
                                }
                            }
                            self.is_sticky = false;
                        }
                    }
                } else {
                    self.$header_main.show();
                    if (self.$header.parent().hasClass('fixed-header') && $('#wpadminbar').length && $('#wpadminbar').css('position') == 'absolute') {
                        self.$header.parent().css('top', ($('#wpadminbar').height() - scroll_top) < 0 ? -$('#wpadminbar').height() : -scroll_top);
                    } else if (self.$header.parent().hasClass('fixed-header')) {
                        self.$header.parent().attr('style', '');
                    } else {
                        if (self.$header.parent().hasClass('fixed-header'))
                            self.$header.parent().attr('style', '');
                    }
                    if (self.$header.hasClass('sticky-menu-header') && !theme.isTablet()) {
                        self.$header_main.stop().css('top', 0);
                        if (self.change_logo) self.$header_main.removeClass('change-logo');
                        self.$header_main.removeClass('sticky');
                        self.$header.removeClass('sticky-header');
                        self.is_sticky = false;
                        self.sticky_height = 0;
                        self.sticky_offset = 0;
                    } else {
                        if (self.$menu_wrap)
                            self.$menu_wrap.stop().css('top', 0);
                        if (scroll_top > self.sticky_pos && (!theme.isTablet() || (theme.isTablet() && (!theme.isMobile() && theme.show_sticky_header_tablet) || (theme.isMobile() && theme.show_sticky_header_tablet && theme.show_sticky_header_mobile)))) {
                            if (!self.$header.hasClass('sticky-header')) {
                                var header_height = self.$header.outerHeight();
                                self.$header.addClass('sticky-header').css('height', header_height);
                                self.$header_main.addClass('sticky');
                                if (self.change_logo) self.$header_main.addClass('change-logo');
                                self.$header_main.stop().css('top', theme.adminBarHeight());

                                if (!self.init_toggle_menu) {
                                    self.init_toggle_menu = true;
                                    theme.MegaMenu.build();
                                    if ($('#main-toggle-menu').length) {
                                        if ($('#main-toggle-menu').hasClass('show-always')) {
                                            $('#main-toggle-menu').data('show-always', true);
                                            $('#main-toggle-menu').removeClass('show-always');
                                        }
                                        $('#main-toggle-menu').addClass('closed');
                                        $('#main-toggle-menu .menu-title').addClass('closed');
                                        $('#main-toggle-menu .toggle-menu-wrap').attr('style', '');
                                    }
                                }
                                self.is_sticky = true;
                            }
                        } else {
                            if (self.$header.hasClass('sticky-header')) {
                                if (self.change_logo) self.$header_main.removeClass('change-logo');
                                self.$header_main.removeClass('sticky');
                                self.$header.removeClass('sticky-header');
                                self.$header.css('height', '');
                                self.$header_main.stop().css('top', 0);

                                if (self.init_toggle_menu) {
                                    self.init_toggle_menu = false;
                                    theme.MegaMenu.build();
                                    if ($('#main-toggle-menu').length) {
                                        if ($('#main-toggle-menu').data('show-always')) {
                                            $('#main-toggle-menu').addClass('show-always');
                                            $('#main-toggle-menu').removeClass('closed');
                                            $('#main-toggle-menu .menu-title').removeClass('closed');
                                            $('#main-toggle-menu .toggle-menu-wrap').attr('style', '');
                                        }
                                    }
                                }
                                self.is_sticky = false;
                            }
                        }
                    }
                }

                if (!self.$header.hasClass('header-loaded'))
                    self.$header.addClass('header-loaded');

                if (!self.$header.find('.logo').hasClass('logo-transition'))
                    self.$header.find('.logo').addClass('logo-transition');

                if (self.$header.find('.overlay-logo').get(0) && !self.$header.find('.overlay-logo').hasClass('overlay-logo-transition'))
                    self.$header.find('.overlay-logo').addClass('overlay-logo-transition');

                return self;
            },

            reset: function() {
                var self = this;

                if (self.$header.find('.logo').hasClass('logo-transition'))
                    self.$header.find('.logo').removeClass('logo-transition');

                if (self.$header.find('.overlay-logo').get(0) && self.$header.find('.overlay-logo').hasClass('overlay-logo-transition'))
                    self.$header.find('.overlay-logo').removeClass('overlay-logo-transition');

                if (self.$menu_wrap && !theme.isTablet()) {
                    // show main menu
                    self.$header.addClass('sticky-header sticky-header-calc');
                    self.$header_main.addClass('sticky');
                    if (self.change_logo) self.$header_main.addClass('change-logo');

                    self.sticky_height = self.$menu_wrap.height() + parseInt(self.$menu_wrap.css('padding-top')) + parseInt(self.$menu_wrap.css('padding-bottom'));
                    self.sticky_offset = parseInt(self.$menu_wrap.css('padding-top')) + parseInt(self.$menu_wrap.css('padding-bottom'));

                    if (self.change_logo) self.$header_main.removeClass('change-logo');
                    self.$header_main.removeClass('sticky');
                    self.$header.removeClass('sticky-header sticky-header-calc');
                    self.header_height = self.$header.height() + parseInt(self.$header.css('margin-top'));
                    self.menu_height = self.$menu_wrap.height() + parseInt(self.$menu_wrap.css('padding-top')) + parseInt(self.$menu_wrap.css('padding-bottom'));
                    self.sticky_pos = (self.header_height - self.sticky_height) + $('.banner-before-header').height() + parseInt($('body').css('padding-top')) + parseInt(self.$header.css('border-top-width'));

                    if (self.reveal) {
                        self.sticky_pos += self.menu_height + 30;
                    }
                } else {
                    // show header main
                    self.$header.addClass('sticky-header sticky-header-calc');
                    self.$header_main.addClass('sticky');
                    if (self.change_logo) self.$header_main.addClass('change-logo');
                    self.sticky_main_height = self.$header_main.height();

                    if (self.change_logo) self.$header_main.removeClass('change-logo');
                    self.$header_main.removeClass('sticky');
                    self.$header.removeClass('sticky-header sticky-header-calc');
                    self.header_height = self.$header.height() + parseInt(self.$header.css('margin-top'));
                    self.main_height = self.$header_main.height();

                    self.sticky_height = self.sticky_main_height;
                    self.sticky_offset = self.main_height - self.sticky_main_height;

                    if (!(!theme.isTablet() || (theme.isTablet() && (!theme.isMobile() && theme.show_sticky_header_tablet) || (theme.isMobile() && theme.show_sticky_header_tablet && theme.show_sticky_header_mobile)))) {
                        self.sticky_height = 0;
                        self.sticky_offset = 0;
                    }

                    self.sticky_pos = (self.header_height - self.sticky_main_height) + $('.banner-before-header').height() + parseInt($('body').css('padding-top')) + parseInt(self.$header.css('border-top-width'));

                    if (self.reveal) {
                        self.sticky_pos += self.main_height + 30;
                    }
                }

                if (self.sticky_pos < 0) {
                    self.sticky_pos = 0;
                }

                self.init_toggle_menu = false;

                self.$header_main.removeAttr('style');
                self.$header.removeAttr('style');

                return self;
            },

            events: function() {
                var self = this;//, win_width = 0;

                /*$(window).on('resize', function() {
                    if (win_width != $(window).width()) {
                        self.reset()
                            .build();
                        win_width = $(window).width();
                    }
                });*/

                $(window).on('scroll', function() {
                    self.build();
                });

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);

// Side Nav
(function(theme, $) {
    'use strict';

    theme = theme || {};

    $.extend(theme, {

        SideNav: {

            defaults: {
                side_nav: $('.header-side-nav #header')
            },

            bc_pos_top: 0,

            initialize: function($side_nav) {
                this.$side_nav = ($side_nav || this.defaults.side_nav);

                if (!this.$side_nav.length)
                    return this;

                var self = this;

                self.$side_nav.addClass('initialize');

                self.reset()
                    .build()
                    .events();

                return self;
            },

            build: function() {
                var self = this;

                var $page_top = $('.page-top'),
                    $main = $('#main');

                if (theme.isTablet()) {
                    self.$side_nav.removeClass("fixed-bottom");
                    $page_top.removeClass("fixed-pos");
                    $page_top.attr('style', '');
                    $main.attr('style', '');
                } else {
                    var side_height = self.$side_nav.innerHeight();
                    var window_height = $(window).height();
                    var scroll_top = $(window).scrollTop();

                    if (side_height - window_height + theme.adminBarHeight() < scroll_top) {
                        if (!self.$side_nav.hasClass("fixed-bottom"))
                            self.$side_nav.addClass("fixed-bottom");
                    } else {
                        if (self.$side_nav.hasClass("fixed-bottom"))
                            self.$side_nav.removeClass("fixed-bottom");
                    }

                    if ($page_top.length && $page_top.outerHeight() < 100 && !$('.side-header-narrow-bar-top').length) {
                        if (self.page_top_offset == theme.adminBarHeight() || self.page_top_offset <= scroll_top) {
                            if (!$page_top.hasClass("fixed-pos")) {
                                $page_top.addClass("fixed-pos");
                                $page_top.css('top', theme.adminBarHeight());
                                $main.css('padding-top', $page_top.outerHeight());
                            }
                        } else {
                            if ($page_top.hasClass("fixed-pos")) {
                                $page_top.removeClass("fixed-pos");
                                $page_top.attr('style', '');
                                $main.attr('style', '');
                            }
                        }
                    }
                    $main.css('min-height', $(window).height() - theme.adminBarHeight() - $('.page-top:not(.fixed-pos)').height() - $('.footer-wrapper').height());
                }

                return self;
            },

            reset: function() {
                var self = this;

                if (theme.isTablet()) {

                    self.$side_nav.attr('style', '');

                } else {

                    var w_h = $(window).height(),
                        $side_bottom = self.$side_nav.find('.side-bottom');

                    self.$side_nav.css({
                        'min-height': w_h - theme.adminBarHeight(),
                        'padding-bottom': $side_bottom.height() + parseInt($side_bottom.css('margin-top')) + parseInt($side_bottom.css('margin-bottom'))
                    });

                    var appVersion          = navigator.appVersion;
                    var webkitVersion_positionStart = appVersion.indexOf("AppleWebKit/") + 12;
                    var webkitVersion_positionEnd   = webkitVersion_positionStart + 3;
                    var webkitVersion       = appVersion.slice(webkitVersion_positionStart,webkitVersion_positionEnd);
                    if (webkitVersion  < 537) {
                        self.$side_nav.css('-webkit-backface-visibility', 'hidden');
                        self.$side_nav.css('-webkit-perspective', '1000');
                    }
                }

                var $page_top = $('.page-top'),
                    $main = $('#main');

                if ($page_top.length) {
                    $page_top.removeClass("fixed-pos");
                    $page_top.attr('style', '');
                    $main.attr('style', '');
                    self.page_top_offset = $page_top.offset().top;
                }

                return self;
            },

            events: function() {
                var self = this;

                $(window).on('resize', function() {
                    self.reset()
                        .build();
                });

                $(window).on('scroll', function() {
                    self.build();
                });

                if ($('.side-header-narrow-bar-top').length) {
                    if ($(window).scrollTop() > theme.adminBarHeight() + $('.side-header-narrow-bar-top').height()) {
                        $('.side-header-narrow-bar-top').addClass('side-header-narrow-bar-sticky');
                    }
                    $(window).on('scroll', function() {
                        var scroll_top = $(this).scrollTop();
                        if (scroll_top > theme.adminBarHeight() + $('.side-header-narrow-bar-top').height()) {
                            $('.side-header-narrow-bar-top').addClass('side-header-narrow-bar-sticky');
                        } else {
                            $('.side-header-narrow-bar-top').removeClass('side-header-narrow-bar-sticky');
                        }
                    });
                }

                // Side Narrow Bar
                $('.side-header-narrow-bar .hamburguer-btn').on('click', function() {
                    $(this).toggleClass('active');
                    $('#header').toggleClass('side-header-visible');
                    if ($(this).closest('.side-header-narrow-bar-top').length) {
                        $(this).closest('.side-header-narrow-bar-top').toggle();
                    }
                });
                $('.hamburguer-close').on('click', function(){
                    $('.side-header-narrow-bar .hamburguer-btn').trigger('click');
                });

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);


// Search
(function(theme, $) {
    'use strict';

    theme = theme || {};

    $.extend(theme, {

        Search: {

            defaults: {
                popup: $('.searchform-popup'),
                form: $('.searchform')
            },

            initialize: function($popup, $form) {
                this.$popup = ($popup || this.defaults.popup);
                this.$form = ($form || this.defaults.form);

                this.build()
                    .events();

                return this;
            },

            build: function() {
                var self = this;

                /* Change search form values */
                var $search_form_texts = self.$form.find('.text input'),
                    $search_form_cats = self.$form.find('.cat');

                if ($('.header-wrapper .searchform .cat').get(0) && $.fn.selectric) {
                    $('.header-wrapper .searchform .cat').selectric({
                        arrowButtonMarkup: '',
                        expandToItemText: true,
                        maxHeight: 240
                    });
                }

                $search_form_texts.on('change', function() {
                    var $this = $(this),
                        val = $this.val();

                    $search_form_texts.each(function() {
                        if ($this != $(this)) $(this).val(val);
                    });
                });

                $search_form_cats.on('change', function() {
                    var $this = $(this),
                        val = $this.val();

                    $search_form_cats.each(function() {
                        if ($this != $(this)) $(this).val(val);
                    });
                });

                return this;
            },

            events: function() {
                var self = this;

                self.$popup.on('click', function(e) {
                    e.stopPropagation();
                });
                self.$popup.find('.search-toggle').on('click', function(e) {
                    $(this).toggleClass('opened');
                    $(this).next().toggle();
                    if ($(this).hasClass('opened')) {
                        $(this).next().find('input[type="text"]').focus();
                        if (self.$popup.find('.btn-close-search-form').length) {
                            self.$popup.parent().addClass('position-static');
                        }
                    }
                    e.stopPropagation();
                });

                if (!('ontouchstart' in document)) {
                    $('html,body').on('click', function() {
                        self.removeFormStyle();
                    });

                    $(window).on('resize', function() {
                        self.removeFormStyle();
                    });

                    $('.btn-close-search-form').on('click', function(e) {
                        e.preventDefault();
                        self.removeFormStyle();
                    });
                }

                return self;
            },

            removeFormStyle: function() {
                this.$form.removeAttr('style');
                this.$popup.find('.search-toggle').removeClass('opened');
                if (this.$popup.find('.btn-close-search-form').length) {
                    this.$popup.parent().removeClass('position-static');
                }
            }
        }

    });

}).apply(this, [window.theme, jQuery]);


// Hash Scroll
(function(theme, $) {
    'use strict';

    theme = theme || {};

    $.extend(theme, {

        HashScroll: {

            initialize: function() {

                this.build()
                    .events();

                return this;
            },

            build: function() {
                var self = this;

                try {
                    var hash = window.location.hash;
                    var target = $(hash);
                    if (target.length && !(hash == '#review_form' || hash == '#reviews' || hash.indexOf('#comment-') != -1)) {
                        setTimeout(function() {
                            $('html, body').stop().animate({
                                scrollTop: target.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height + 1
                            }, 600, 'easeOutQuad', function() {
                                self.activeMenuItem();
                            });
                        }, 600);
                    }

                    return self;
                } catch (err) {
                    return self;
                }
            },

            getTarget: function(href) {
                var target;

                if (href.indexOf('#') == 0) {
                    target = $(href);
                } else {
                    var url = window.location.href;
                    url = url.substring(url.indexOf('://') + 3);
                    if (url.indexOf('#') != -1)
                        url = url.substring(0, url.indexOf('#'));
                    href = href.substring(href.indexOf('://') + 3);
                    href = href.substring(href.indexOf(url) + url.length);
                    if (href.indexOf('#') == 0) {
                        target = $(href);
                    }
                }
                return target;
            },

            activeMenuItem: function() {
                var self = this;

                var scroll_pos = $(window).scrollTop();

                var $menu_items = $('.menu-item > a[href*="#"], .porto-sticky-nav .nav > li > a[href*="#"]');
                if ($menu_items.length) {
                    $menu_items.each(function() {
                        var $this = $(this);
                        var href = $this.attr('href');
                        var target = self.getTarget(href);
                        if (target && target.get(0)) {
                            if ($this.is(':last-child') && scroll_pos + $(window).height() >= target.offset().top + target.outerHeight()) {
                                $this.parent().siblings().removeClass('active');
                                $this.parent().addClass('active');
                            } else {
                                var scroll_to = target.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height + 1,
                                    $parent = $this.parent();
                                //if (scroll_to <= theme.StickyHeader.sticky_pos + theme.sticky_nav_height) {
                                    //scroll_to = theme.StickyHeader.sticky_pos + theme.sticky_nav_height + 1;
                                //}
                                if (scroll_to <= scroll_pos + 5) {
                                    $parent.siblings().removeClass('active');
                                    $parent.addClass('active');
                                } else {
                                    $parent.removeClass('active');
                                }
                            }
                        }
                    });
                }

                return self;
            },

            events: function() {
                var self = this;

                $('.menu-item > a[href*="#"], .porto-sticky-nav .nav > li > a[href*="#"], a[href*="#"].hash-scroll, .hash-scroll-wrap a[href*="#"]').on('click', function(e) {
                    e.preventDefault();

                    var $this = $(this);
                    var href = $this.attr('href');
                    var target = self.getTarget(href);

                    if (target && target.get(0)) {
                        var $parent = $this.parent();

                        var scroll_to = target.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height + 1;
//                        if (scroll_to <= theme.StickyHeader.sticky_pos + theme.sticky_nav_height) {
//                            scroll_to = theme.StickyHeader.sticky_pos + theme.sticky_nav_height + 1;
//                        }
                        $('html, body').stop().animate({
                            scrollTop: scroll_to
                        }, 600, 'easeOutQuad', function() {
                            self.activeMenuItem();
                            $parent.siblings().removeClass('active');
                            $parent.addClass('active');
                        });
                    } else {
                        window.location.href = $this.attr('href');
                    }
                });

                $(window).on('scroll', function() {
                    self.activeMenuItem();
                });

                self.activeMenuItem();

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);


// Sort Filter
(function(theme, $) {
    'use strict';

    theme = theme || {};

    $.extend(theme, {

        SortFilter: {

            defaults: {
                filters: '.porto-sort-filters ul',
                elements: '.porto-sort-container .row'
            },

            initialize: function($elements, $filters) {
                this.$elements = ($elements || $(this.defaults.elements));
                this.$filters = ($filters || $(this.defaults.filters));

                this.build();

                return this;
            },

            build: function() {
                var self = this;

                self.$elements.each(function() {
                    var $this = $(this);
                    $this.isotope({
                        itemSelector: '.porto-sort-item',
                        layoutMode: 'masonry',
                        getSortData: {
                            popular: '[data-popular] parseInt'
                        },
                        sortBy: 'popular',
                        isOriginLeft : !theme.rtl
                    });
                    $this.isotope('on', 'layoutComplete', function() {
                        $this.find('.porto-lazyload:not(.lazy-load-loaded)').trigger('appear');
                    });
                    $this.waitForImages(function() {
                        if ($this.data('isotope')) {
                            $this.isotope('layout');
                        }
                    });
                });

                self.$filters.each(function() {
                    var $this = $(this);
                    var id = $this.attr('data-sort-id');
                    var $container = $('#' + id);
                    if ($container.length) {
                        $this.on('click', 'li', function(e) {
                            e.preventDefault();

                            var $that = $(this);
                            $this.find('li').removeClass('active');
                            $that.addClass("active");

                            var sortByValue = $that.attr('data-sort-by');
                            $container.isotope({sortBy: sortByValue});

                            var filterByValue = $that.attr('data-filter-by');
                            if (filterByValue) {
                                $container.isotope({filter: filterByValue});
                            } else {
                                $container.isotope({filter: '.porto-sort-item'});
                            }
                            theme.refreshVCContent();
                        });

                        $this.find('li[data-active]').click();
                    }
                });

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);


// Init Theme
function porto_init() {
    'use strict';
    jQuery(window).on('touchstart',function(){});

    (function ($) {
        // Accordion
        if ($.isFunction($.fn.themeAccordion)) {

            $(function() {
                $('.accordion:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeAccordion(opts);
                });
            });

        }

        // Accordion Menu
        if ($.isFunction($.fn.themeAccordionMenu)) {

            $(function() {
                $('.accordion-menu:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeAccordionMenu(opts);
                });
            });

        }

        // Animate
        if ($.isFunction($.fn.themeAnimate)) {

            $(function() {
                $('[data-plugin-animate], [data-appear-animation]').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeAnimate(opts);
                });
            });

        }

        // Carousel
        if ($.isFunction($.fn.themeCarousel)) {

            $(function() {
                $('[data-plugin-carousel]:not(.manual), .porto-carousel:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeCarousel(opts);
                });
            });

        }

        // Chart.Circular
        if ($.isFunction($.fn.themeChartCircular)) {

            $(function() {
                $('[data-plugin-chart-circular]:not(.manual), .circular-bar-chart:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeChartCircular(opts);
                });
            });

        }

        // Fit Video
        if ($.isFunction($.fn.themeFitVideo)) {

            $(function() {
                $('.fit-video:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeFitVideo(opts);
                });
            });

        }

        // Video Background
        if ($.isFunction($.fn.themePluginVideoBackground)) {

            $(function() {
                $('[data-plugin-video-background]:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = JSON.parse($this.data('plugin-options').replace(/'/g,'"').replace(';',''));
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themePluginVideoBackground(opts);
                });
            });

        }

        // Word Rotate
        if ($.isFunction($.fn.themePluginWordRotate)) {

            $(function() {
                $('[data-plugin-word-rotate]:not(.manual), .word-rotate:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = JSON.parse($this.data('plugin-options').replace(/'/g,'"').replace(';',''));
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themePluginWordRotate(opts);
                });
            });

        }

        // Flickr Zoom

        if ($.isFunction($.fn.themeFlickrZoom)) {

            $(function() {
                $('.wpb_flickr_widget:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeFlickrZoom(opts);
                });
            });

        }

        // Lazy Load
        if ($.isFunction($.fn.themePluginLazyLoad)) {

            $(function() {
                $('[data-plugin-lazyload]:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;
                    $this.themePluginLazyLoad(opts);
                });
                $('.porto-lazyload').themePluginLazyLoad({effect: 'fadeIn', effect_speed: 400});
                if ($('.porto-lazyload').closest('.nivoSlider').length) {
                    setTimeout(function() {
                        $('.nivoSlider').each(function() {
                            if ($(this).find('.porto-lazyload').length) {
                                $(this).closest('.nivoSlider').find('.nivo-main-image').attr('src', $(this).closest('.nivoSlider').find('.porto-lazyload').eq(0).attr('src'));
                            }
                        });
                    }, 100);
                }
                if ($('.porto-lazyload').closest('.porto-carousel-wrapper').length) {
                    setTimeout(function() {
                        $('.porto-carousel-wrapper').each(function() {
                            if ($(this).find('.porto-lazyload:not(.lazy-load-loaded)').length) {
                                $(this).find('.slick-list').css('height', 'auto');
                                $(this).find('.porto-lazyload:not(.lazy-load-loaded)').trigger('appear');
                            }
                        });
                    }, 100);
                }
            });

        }

        // Masonry
        if ($.isFunction($.fn.themeMasonry)) {

            $(function() {
                
                $('[data-plugin-masonry]:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;
                    $this.themeMasonry(opts);
                });
                $('.posts-masonry .posts-container:not(.manual)').each(function() {
                    var pluginOptions = $(this).data('plugin-options');
                    if (!pluginOptions) {
                        pluginOptions = {};
                    }
                    pluginOptions.itemSelector = '.post';
                    $(this).themeMasonry(pluginOptions);
                });
                $('.page-portfolios .portfolio-row:not(.manual)').each(function() {
                    if ( $(this).closest('.porto-grid-container').length > 0 ) {
                        return;
                    }
                    var $parent = $(this).parent(), layoutMode = 'masonry', options, columnWidth = '.portfolio:not(.w2)', timer = null;

                    if ($parent.hasClass('portfolios-grid')) {
                        layoutMode = 'fitRows';
                    } else if ($parent.hasClass('portfolios-masonry')) {
                        $parent.append('<div class="bounce-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
                    }

                    options = {
                        itemSelector: '.portfolio',
                        layoutMode: layoutMode,
                        callback: function() {
                            timer && clearTimeout(timer);
                            timer = setTimeout(function() {
                                theme.FilterZoom.initialize($('.page-portfolios'));
                                 $parent.addClass('portfolio-iso-active');
                            }, 400);
                        }
                    };
                    if (layoutMode == 'masonry') {
                        if (!$parent.find('.portfolio:not(.w2)').length)
                            columnWidth = '.portfolio';
                        options = $.extend(true, {}, options, {
                            masonry: { columnWidth: columnWidth }
                        });
                    }

                    $(this).themeMasonry(options);

                });
                $('.page-members .member-row:not(.manual)').each(function() {
                    $(this).themeMasonry({
                        itemSelector: '.member',
                        layoutMode: 'fitRows',
                        callback: function() {
                            setTimeout(function() {
                                theme.FilterZoom.initialize($('.page-members'));
                            }, 400);
                        }
                    });
                });
            });

        }

        // Preview Image
        if ($.isFunction($.fn.themePreviewImage)) {

            $(function() {
                $('.thumb-info-preview .thumb-info-image:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themePreviewImage(opts);
                });
            });

        }

        // Refresh Video Size
        if ($.isFunction($.fn.themeRefreshVideoSize)) {

            $(function() {
                $('.video-cover:not(.manual) .upb_video-bg').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeRefreshVideoSize(opts);
                });
            });

        }

        // Toggle
        if ($.isFunction($.fn.themeToggle)) {

            $(function() {
                $('section.toggle:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeToggle(opts);
                });
            });

        }

        // Parallax
        if ($.isFunction($.fn.themeParallax)) {

            $(function() {
                $('[data-plugin-parallax]:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeParallax(opts);
                });
            });

        }

        // Sticky
        if ($.isFunction($.fn.themeSticky)) {

            $(function() {
                $('[data-plugin-sticky]:not(.manual), .porto-sticky:not(.manual), .porto-sticky-nav:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeSticky(opts);
                });
            });

        }

        /* Common */

        // Tooltip
        if ($.isFunction($.fn.tooltip)) {
            $("[data-tooltip]:not(.manual), [data-toggle='tooltip']:not(.manual), .star-rating:not(.manual)").tooltip();
        }

        // bootstrap popover
        //$("[data-toggle='popover']").popover();

        // Tabs
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            $(this).parents('.nav-tabs').find('.active').removeClass('active');
            $(this).addClass('active').parent().addClass('active');
        });

        if($().waypoint) {
            // Progress bar tooltip
            $('.vc_progress_bar').each(function() {
                var $tooltips = $(this).find('.progress-bar-tooltip');
                $($tooltips.get(0)).waypoint(function() {
                    var delay = 200;
                    $tooltips.each(function(index) {
                        var $tooltip = $(this);
                        setTimeout(function() {
                            $tooltip.animate({
                                opacity: 1
                            });
                        }, 200 + delay * index);
                    });
                }, {
                    offset: '85%'
                });
            });
        }

        // Fixed video
        $('.video-fixed').each(function() {
            var $this = $(this),
                $video = $this.find('video, iframe');

            if ($video.length) {
                $(window).on('scroll', function() {
                    var offset = $(window).scrollTop() - $this.position().top + theme.adminBarHeight();
                    $video.css("cssText", "top: " + offset + "px !important;");
                });
            }
        });

        // Thumb Gallery
        $('.thumb-gallery-thumbs').each(function() {
            var $thumbs = $(this),
                $detail = $thumbs.parent().find('.thumb-gallery-detail'),
                flag = false,
                duration = 300;

            if ($thumbs.data('initThumbs'))
                return;

            $detail.on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = true;
                    var len = $detail.find('.owl-item').length,
                        cloned = $detail.find('.cloned').length;
                    if (len) {
                        $thumbs.trigger('to.owl.carousel', [(e.item.index - cloned / 2 - 1) % len, duration, true]);
                    }
                    flag = false;
                }
            });

            $thumbs.on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = true;
                    var len = $thumbs.find('.owl-item').length,
                        cloned = $thumbs.find('.cloned').length;
                    if (len) {
                        $detail.trigger('to.owl.carousel', [(e.item.index - cloned / 2) % len, duration, true]);
                    }
                    flag = false;
                }
            }).on('click', '.owl-item', function() {
                if (!flag) {
                    flag = true;
                    var len = $thumbs.find('.owl-item').length,
                        cloned = $thumbs.find('.cloned').length;
                    if (len) {
                        $detail.trigger('to.owl.carousel', [($(this).index() - cloned / 2) % len, duration, true]);
                    }
                    flag = false;
                }
            }).data('initThumbs', true);
        });

    })(jQuery);

	jQuery(document.body).trigger('porto_init');
}

(function(theme, $) {

    'use strict';

    $(document).ready(function() {
        // Init Porto Theme
        porto_init();

        // Scroll to Top
        if (typeof theme.ScrollToTop !== 'undefined') {
            theme.ScrollToTop.initialize();
        }

        // Mega Menu
        if (typeof theme.MegaMenu !== 'undefined') {
            theme.MegaMenu.initialize();
        }

        $(window).on('load', function() {
            setTimeout(function() {
                theme.MegaMenu.build();
            }, 400);
        });

        // Sidebar Menu
        if (typeof theme.SidebarMenu !== 'undefined') {
            theme.SidebarMenu.initialize();

            $('.sidebar-menu.side-menu-accordion').themeAccordionMenu({'open_one':true});
        }

        // Side Navigation
        if (typeof theme.SideNav !== 'undefined') {
            theme.SideNav.initialize();
        }

        // Sticky Header
        if (typeof theme.StickyHeader !== 'undefined') {
            theme.StickyHeader.initialize();
        }

        // Search
        if (typeof theme.Search !== 'undefined') {
            theme.Search.initialize();
        }

        // Hash Scroll
        if (typeof theme.HashScroll !== 'undefined') {
            theme.HashScroll.initialize();
        }

        // Sort Filter
        if (typeof theme.SortFilter !== 'undefined') {
            theme.SortFilter.initialize();
        }

        // Mobile Sidebar
        // filter popup events
        $(document).on('click', '.sidebar-toggle', function(e) {
            var $html = $('html');
            if ($(this).closest('.porto-product-filters').length) {
                if ($html.hasClass('filter-sidebar-opened')) {
                    $html.removeClass('filter-sidebar-opened');
                    $('.sidebar-overlay').removeClass('active');
                } else {
                    $html.addClass('filter-sidebar-opened');
                    $('.sidebar-overlay').addClass('active');
                }
            } else {
                if ($html.hasClass('sidebar-opened')) {
                    $html.removeClass('sidebar-opened');
                    $('.sidebar-overlay').removeClass('active');
                } else {
                    $html.addClass('sidebar-opened');
                    $('.sidebar-overlay').addClass('active');
                }
            }
        });

        $(document.body).on('click', '.sidebar-overlay', function() {
            $('html').removeClass('sidebar-opened');
            $('html').removeClass('filter-sidebar-opened');
            $(this).removeClass('active');
        });

        $(window).on('resize', function() {
            if ($(window).width() > 991 - theme.getScrollbarWidth()) {
                $('.sidebar-overlay').click();
            }
        });

        // Common

        // Match Height
        if ($.isFunction($.fn.matchHeight)) {
            $('.tabs-simple .featured-box .box-content').matchHeight();
            $('.porto-content-box .featured-box .box-content').matchHeight();
            $('.vc_general.vc_cta3').matchHeight();
            $('.match-height').matchHeight();
        }

        // WhatsApp Sharing
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $('.share-whatsapp').css('display', 'inline-block');
        }
        $(document).ajaxComplete(function(event, xhr, options) {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $('.share-whatsapp').css('display', 'inline-block');
            }
        });

        // Add Ege Browser Class
        var ua = window.navigator.userAgent,
            ie12 = ua.indexOf('Edge/') > 0;
        if (ie12) $('html').addClass('ie12');

        // Add wishlist popup
        if ( !$( '#yith-wcwl-popup-message' ).get(0) ) {
            var message_div = $( '<div>' )
                    .attr( 'id', 'yith-wcwl-message' ),
                popup_div = $( '<div>' )
                    .attr( 'id', 'yith-wcwl-popup-message' )
                    .html( message_div )
                    .hide();

            $( 'body' ).prepend( popup_div );
        }

        // Portfolio Link Lightbox
        $(document).on('click', '.portfolios-lightbox a.portfolio-link', function(e) {
            $(this).find('.thumb-info-zoom').click();
            return false;
        });

        // Portfolios Shortcode Pagination
        $(document).on('click', '.porto-portfolios .pagination:not(.load-more) a', function(e) {
            var $this = $(this),
                url = $this.attr('href'),
                shortcode_id = $this.closest('.porto-portfolios').find('.shortcode-id').val(),
                $container = $this.closest('.porto-portfolios' + shortcode_id);

            if (url) {
                e.preventDefault();
                $container.addClass('porto-ajax-loading');
                if (!$container.children('.porto-loading-icon').length) {
                    $container.append('<i class="porto-loading-icon"></i>');
                }

                setTimeout(function() {
                    $('html, body').stop().animate({
                        scrollTop: $container.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height - 14
                    }, 600, 'easeOutQuad');
                }, 200);

                $.ajax({
                    type : 'post',
                    url : url,
                    success: function(response) {
                        var $response_container = $('<div>' + response + '</div>').find('.porto-portfolios'+shortcode_id);
                        $container.html($response_container.html());
                        theme.PortfolioAjaxPage.initialize($container.find('.page-portfolios'));
                        theme.PortfolioAjaxModal.initialize($container.find('.page-portfolios'));
                        porto_init();
                        theme.PortfolioFilter.initialize($container.find('.portfolio-filter'));
                    }
                }).always(function() {
                    $container.removeClass('porto-ajax-loading');
                });

                return false;
            }
        });

        // Members Shortcode Pagination
        $(document).on('click', '.porto-members .pagination a', function(e) {
            var $this = $(this),
                url = $this.attr('href'),
                shortcode_id = $this.closest('.porto-members').find('.shortcode-id').val(),
                $container = $this.closest('.porto-members' + shortcode_id);

            if (url) {
                e.preventDefault();
                $container.addClass('porto-ajax-loading');
                if (!$container.children('.porto-loading-icon').length) {
                    $container.append('<i class="porto-loading-icon"></i>');
                }

                setTimeout(function() {
                    $('html, body').stop().animate({
                        scrollTop: $container.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height - 14
                    }, 600, 'easeOutQuad');
                }, 200);

                $.ajax({
                    type : 'post',
                    url : url,
                    success: function(response) {
                        var $response_container = $('<div>' + response + '</div>').find('.porto-members'+shortcode_id);
                        $container.html($response_container.html());
                        theme.MemberAjaxPage.initialize($container.find('.page-members'));
                        theme.MemberAjaxModal.initialize($container.find('.page-members'));
                        porto_init();
                        theme.MemberFilter.initialize($container.find('.member-filter'));
                    }
                }).always(function() {
                        $container.removeClass('porto-ajax-loading');
                    });

                return false;
            }
        });

        // FAQs Shortcode Pagination
        $(document).on('click', '.porto-faqs .pagination a', function(e) {
            var $this = $(this),
                url = $this.attr('href'),
                shortcode_id = $this.closest('.porto-faqs').find('.shortcode-id').val(),
                $container = $this.closest('.porto-faqs' + shortcode_id);

            if (url) {
                e.preventDefault();
                $container.addClass('porto-ajax-loading');
                if (!$container.children('.porto-loading-icon').length) {
                    $container.append('<i class="porto-loading-icon"></i>');
                }

                setTimeout(function() {
                    $('html, body').stop().animate({
                        scrollTop: $container.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height - 14
                    }, 600, 'easeOutQuad');
                }, 200);

                $.ajax({
                    type : 'post',
                    url : url,
                    success: function(response) {
                        var $response_container = $('<div>' + response + '</div>').find('.porto-faqs'+shortcode_id);
                        $container.html($response_container.html());
                        porto_init();
                        theme.FaqFilter.initialize($container.find('.faq-filter'));
                    }
                }).always(function() {
                        $container.removeClass('porto-ajax-loading');
                    });

                return false;
            }
        });

        $('.porto-faqs').each(function() {
            if ($(this).find('.faq .toggle.active').length < 1) {
                $(this).find('.faq').eq(0).find('.toggle').addClass('active');
                $(this).find('.faq').eq(0).find('.toggle-content').show();
            }
        });

        // refresh wpb content
        $(document).on('shown.bs.collapse', '.collapse', function() {
            var panel = $(this);
            theme.refreshVCContent(panel);
        });
        $(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function(e) {
            var panel = $($(e.target).attr('href'));
            theme.refreshVCContent(panel);
        });

        // porto tooltip for header, footer
        $(".porto-tooltip .tooltip-icon").on('click', function() {
            if($(this).parent().children(".tooltip-popup").css("display")=="none") {
                $(this).parent().children(".tooltip-popup").fadeIn(200);
            }else{
                $(this).parent().children(".tooltip-popup").fadeOut(200);
            }
        });
        $(".porto-tooltip .tooltip-close").on('click', function() {
            $(this).parent().fadeOut(200);
        });

    });

}).apply(this, [window.theme, jQuery]);

(function (theme, $, undefined) {
    "use strict";

    $(document).ready(function(){
        $(window).on('vc_reload', function() {
            porto_init();
            $('.type-post').addClass('post');
            $('.type-portfolio').addClass('portfolio');
            $('.type-member').addClass('member');
            $('.type-block').addClass('block');
        });
    });

    // Portfolios Load More
    $(document).on('click', '.porto-portfolios .pagination.load-more a', function(e) {
        var $this = $(this),
            url = $this.attr('href'),
            shortcode_id = $this.closest('.porto-portfolios').find('.shortcode-id').val(),
            $container = $this.closest('.porto-portfolios' + shortcode_id),
            $loader = $container.find('.pagination-wrap.load-more .bounce-loader'),
            $btn = $container.find('.pagination.load-more a.next');

        if (url) {
            e.preventDefault();
            $btn.hide();
            $loader.show();
            
            $.ajax({
                type : 'post',
                url : url,
                success: function(response) {
                    var $response_container = $('<div>' + response + '</div>').find('.porto-portfolios'+shortcode_id),
                        $portfolio_thumbs = $response_container.find('.porto-portfolios-lighbox-thumbnails .owl-carousel').html(),
                        $next_posts = $response_container.find('.portfolio-row').children('article.portfolio');

                    $container.find('.pagination-wrap').replaceWith( $response_container.find('.pagination-wrap') );
                    $container.find('.porto-portfolios-lighbox-thumbnails .owl-carousel').append( $portfolio_thumbs );

                    if ($next_posts.length) {
                        var $iso = $container.find('.page-portfolios').find('.portfolio-row');
                        $iso.isotope('insert', $next_posts);
                        $iso.waitForImages(function() {
                            $iso.isotope('layout');
                        });
                    } else if ($response_container.find('.portfolios-timeline').length) { // timeline
                        $next_posts = $response_container.find('.portfolios-timeline .timeline-body');
                        var $first_timeline_date = $next_posts.children('.timeline-date:first-child'),
                            $last_date = $container.find('.timeline-body').children('.timeline-date').last();
                        if ($last_date.length && $first_timeline_date.length && $last_date.html() == $first_timeline_date.html()) {
                            $next_posts.children('.timeline-date:first-child').remove();
                        }
                        $container.find('.timeline-body').append($next_posts.children());
                    }

                    theme.PortfolioAjaxPage.initialize($('.page-portfolios'));
                    theme.PortfolioAjaxModal.initialize($('.page-portfolios'));
                    porto_init();
                    theme.PortfolioFilter.initialize($('.portfolio-filter'));
                    $container.find('.porto-lazyload:not(.lazy-load-loaded)').trigger('appear');
                }
            }).always(function() {
                $loader.hide();
            });
            
            return false;
        }

    });

    $(window).on('resize', function() {
        if(this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
            $(this).trigger('resizeEnd');
        }, 700);
    });

    /*
    * Experience Timeline
    */
    var timelineHeightAdjust = {
        $timeline: $('#exp-timeline'),
        $timelineBar: $('#exp-timeline .timeline-bar'),
        $firstTimelineItem: $('#exp-timeline .timeline-box').first(),
        $lastTimelineItem: $('#exp-timeline .timeline-box').last(),

        build: function() {
            var self = this;

            self.adjustHeight();
        },
        adjustHeight: function() {
            var self                = this,
                calcFirstItemHeight = ( self.$firstTimelineItem.outerHeight(true) / 2 ) + 5,
                calcLastItemHeight  = ( self.$lastTimelineItem.outerHeight(true) / 2 ) + 5;

            // Set Timeline Bar Top and Bottom
            self.$timelineBar.css({
                top: calcFirstItemHeight,
                bottom: calcLastItemHeight
            });
        }
    }

    if( $('#exp-timeline').get(0) ) {
        setTimeout(function(){
            // Adjust Timeline Height On Resize
            $(window).on('resizeEnd',function() {
                timelineHeightAdjust.build();
            });
        }, 1000);

        timelineHeightAdjust.build();
    }

    $('.custom-view-our-location').on('click',function(e){
        e.preventDefault();
        var this_ = $(this);
        $('.custom-googlemap').slideDown('1000', function(){
            setTimeout(function () {
                this_.hide();
            }, 700);
        });
    });

})( window.theme, jQuery );

// Porto 4.0 extra shortcodes
(function (theme, $, undefined) {
    'use strict';

    // porto ultimate heading
    $(document).ready(function(e) {
        porto_headings_init();
    });
    function porto_headings_init() {
        $('.porto-u-heading').each(function(){ 
            var align = $(this).attr('data-halign'),
                spacer = $(this).attr('data-hspacer');

            if(spacer == 'line_only') {
                if(align == 'right' || align == 'left') {
                    if ($(this).find('.porto-u-heading-spacer').find('.porto-u-headings-line')[0].style.width != 'auto') {
                        $(this).find('.porto-u-heading-spacer').find('.porto-u-headings-line').css({'float':align});
                    }
                } else {
                    $(this).find('.porto-u-heading-spacer').find('.porto-u-headings-line').css({'margin':'0 auto'});
                }
            }
        });
    }

    /* Content Box */
    $(window).on('load', function(a){
        contentBoxInit();
    });
    $(window).on('resize', function(a){
        contentBoxInit();
    });
    $(document).ready(function(a) {
        contentBoxInit();
    });

    //  Content Box - Initialize
    function contentBoxInit() {
        $('.porto-ultimate-content-box').each(function(index, el) {
            var normal_bg_color = $(el).css('background-color') || '',
                normal_box_shadow = $(el).css('box-shadow') || '';

            var hover_bg_color = $(el).data('hover_bg_color') || $(el).css('background-color'),
                hover_box_shadow = $(el).data('hover_box_shadow') || $(el).css('box-shadow');

            $(el).on('mouseenter', function() {
                $(el).css('background-color', hover_bg_color);
                $(el).css('box-shadow', hover_box_shadow);
            }).on('mouseleave', function() {
                $(el).css('background-color', normal_bg_color);
                $(el).css('box-shadow', normal_box_shadow);
            });

            //  Margins -   Responsive
            var rm_o = {};
            var rm = $(el).data('responsive_margins');
            if(typeof rm != 'undefined' && rm != null) {
                rm_o = getMargins(rm);
            }

            //  Margins -   Normal
            var nm_o = {};
            var nm = $(el).data('normal_margins');
            if(typeof nm != 'undefined' && nm != null ) {
                nm_o = getMargins(nm);
            } else {
                nm_o = getCssMargins(el);
            }

            var WW = $(window).width() || '';
            if(WW!='') {
                if(WW>=768) {
                    applyMargins(nm_o, el);
                } else {
                    applyMargins(rm_o, el);
                }
            }

        });
    }
    //  create an object
    function getCssMargins(el) {
        var tmOb = {};
        tmOb['margin-left'] = trimPx($(el).css('margin-left'));
        tmOb['margin-right'] = trimPx($(el).css('margin-right'));
        tmOb['margin-top'] = trimPx($(el).css('margin-top'));
        tmOb['margin-bottom'] = trimPx($(el).css('margin-bottom'));

        //  Create normal margins
        var bs = '';
        $.each(tmOb, function(index, val) {
            if(typeof val!= 'undefined' && val != null) {
                bs += index+':'+val+'px;';
            }
        });
        $(el).attr('data-normal_margins', bs);
        return tmOb;
    }
    //  Trim 'px' from margin val
    function trimPx(l) {
        var sp;
        if(typeof l != 'undefined' && l != null) {
            sp = l.split('px');
            sp = parseInt(sp[0])
        }
        return sp;
    }

    //  Get margins from - DATA ATTRIBUTE
    //  @return object
    function getMargins(mo) {
        var tmOj = {};
        var b = mo.split(';');
        if(typeof b != 'undefined' && b != null ) {
            $.each(b, function(index, val) {
                if(typeof val != undefined && val != null) {
                    var nm = val.split(':');
                    if(typeof nm[0] != undefined && nm[0] != null && typeof nm[1] != undefined && nm[1] != null ) {
                        switch(nm[0]) {
                            case 'margin' :     tmOj['margin'] = (nm[1]);
                                break;
                            case 'margin-left' :    tmOj['margin-left'] = (nm[1]);
                                break;
                            case 'margin-right' :   tmOj['margin-right'] = (nm[1]);
                                break;
                            case 'margin-top' :     tmOj['margin-top'] = (nm[1]);
                                break;
                            case 'margin-bottom' :  tmOj['margin-bottom'] = (nm[1]);
                                break;
                        }
                    }
                }
            });
        }
        return tmOj;
    }

    //  Apply css margins from object
    //  @return null
    function applyMargins(ob, el) {
        if( !$.isEmptyObject(ob) ) {
            $.each(ob, function(index, val) {
                if(typeof val!= 'undefined' && val != null) {
                    $(el).css(index, val);
                }
            });
        }
    }

    /* Porto Interactive Banner */
    $(document).ready(function() {
        porto_ibanner();
        $(window).on('load', function() {
            porto_ibanner();
        });
        $(window).on('resize', function() {
            porto_ibanner();
        });

        function porto_ibanner() {
            $(".porto-ibanner").each(function(index, element) {
                $(this).on('mouseenter', function() {
                    if ($(this).data('hover-opacity')) {
                        $(this).find(".porto-ibanner-img").css("opacity", $(this).data('hover-opacity') );
                    }
                }).on('mouseleave', function() {
                    if ($(this).data('opacity')) {
                        $(this).find(".porto-ibanner-img").css("opacity", $(this).data('opacity') );
                    }
                });
            });
        }
    });

    /* Advanced Buttons */
    $('.porto-btn[data-hover]').on('mouseenter', function() {
        var hoverColor = $(this).data('hover');
        if (hoverColor) {
            $(this).data('originalColor', $(this).css('color'));
            $(this).css('color', hoverColor);
        }
    }).on('mouseleave', function() {
        var originalColor = $(this).data('originalColor');
        if (originalColor) {
            $(this).css('color', originalColor);
        }
    });

    // widget wysija
    $('#footer .widget_wysija .wysija-submit:not(.btn)').addClass('btn btn-default');

    // fixed visual compoer issue which has owl carousel
    if ($("[data-vc-parallax] .owl-carousel").length) {
        setTimeout(function() { if (typeof window.vcParallaxSkroll == 'object') { window.vcParallaxSkroll.refresh(); } }, 200);
    }

    $(".wpcf7-form .wpcf7-submit").on("click",function(e) {
        if ($(this).closest('form').hasClass('processing')) {
            e.preventDefault();
            return false;
        }
        $(this).closest('form').addClass("processing");
    });
    $(document).ajaxComplete(function(t,e,i) {
        $(".wpcf7-form.processing").removeClass("processing");
    });

    if ($('.page-content > .alignfull').length) {
        var initAlignFull = function() {
            $('.page-content > .alignfull').each(function() {
                $(this).css('left', -1 * $(this).parent().offset().left).css('right', -1 * $(this).parent().offset().left).css('width', $('body').width());
            });
        };
        initAlignFull();
        $(window).smartresize(function() {
            initAlignFull();
        });
    }
})( window.theme, jQuery );