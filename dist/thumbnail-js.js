 jQuery(function($) {
        $('.item.demo .image').mouseover(function() {

            // mouse over
            var window_top = $(window).scrollTop();
            var window_bottom = $(window).scrollTop() + $(window).height();
            var this_class = $(this).attr('id');
            var top = Math.round($(this).offset().top);
            var block_bottom = Math.round($(this).offset().top + $(this).parent().outerHeight());
            var left = Math.round($(this).offset().left);
            var elem = '<div id="demo_js_thumb" class="'+this_class+'">123</div>';

            
            if (!$('.'+this_class).length > 0) {
            $('body').append(elem);
            $('.'+this_class).fadeIn(300);
            } else {
                $('.'+this_class).stop().fadeIn(300);
            }
  
            var element_bottom = window_bottom - $('.'+this_class).outerHeight() - 15;

            // если прокрутка дошла до елемента показать окно сверху браузера
            // по вертикали 
           
           
            // если прокрутка выше элемента то показать снизу окна браузера
            if (window_bottom <= block_bottom) {

                $('.'+this_class).css('top', element_bottom).css('left', left - 80);
            } else {

                 if (window_top >= top) {
                $('.'+this_class).css('top', window_top + 15).css('left', left - 80);
                } else {
                $('.'+this_class).css('top', top - 100).css('left', left - 80);
                }
            }
           
            // если окно всплыло и вышло за рамки экрана по вертикали
             var box_top = $('.'+this_class).offset().top;
                if (box_top <= window_top) {
                    $('.'+this_class).css('top', window_top + 15).css('left', left - 80);  
                }
             var box_bottom = $('.'+this_class).offset().top + $('.'+this_class).outerHeight();
                if (box_bottom >= window_bottom) {
                    $('.'+this_class).css('top', element_bottom ).css('left', left - 80);
                }
            
           
        });
        $(document).on('mouseleave', '#demo_js_thumb', function() {
            // if mouse out
            $(this).stop().fadeOut(300);
        });
    })