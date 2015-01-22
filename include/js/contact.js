/**
 * Created by somi on 22/12/14.
 */

$(".email").click(function (){
    $(".emailShow").css({
        opacity: 1,
        transition: 'opacity 1s ease-in-out'
    });
    $(".phoneShow").css({
        opacity: 0,
        transition: 'opacity 1s ease-in-out'
    });
});
$(".phone").click(function (){
    $(".emailShow").css({
        opacity: 0,
        transition: 'opacity 1s ease-in-out'
    });
    $(".phoneShow").css({
        opacity: 1,
        transition: 'opacity 1s ease-in-out'
    });
});


