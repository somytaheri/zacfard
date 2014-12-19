/**
 * Created by somi on 19/12/14.
 */

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        $('#header').stop().animate({
            backgroundColor :"#d9d9d9"
        }, 100 );
    } else {
        $('#header').stop().animate({
            backgroundColor :"rgba(3,0,0,0.15)"
        }, 100 );
    }
});


