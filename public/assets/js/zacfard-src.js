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


;/**
 * Created by somi on 11/12/14.
 */

var map;
function initialize() {
    var myLatlng = new google.maps.LatLng(-37.838460,144.922203);
    var mapOptions = {
        center: myLatlng,
        zoom: 10,
        disableDefaultUI:true
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
$( window ).bind("resize", function(){
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
});;/**
 * Created by somi on 19/12/14.
 */

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        $('#header').stop().animate({
            backgroundColor :"#d9d9d9"
        }, 100 );
        $('.navbar-collapse').stop().animate({
            backgroundColor :"#d9d9d9"
        }, 100 );
    } else {
        $('#header').stop().animate({
            backgroundColor :"rgba(3,0,0,0)"
        }, 100 );
        if($(window).width()>768){
            $('.navbar-collapse').stop().animate({
                backgroundColor :"rgba(3,0,0,0)"
            }, 100 );
        }
        else {
            $('.navbar-collapse').stop().animate({
                backgroundColor :"#787f6b"
            }, 100 );
        }
    }
});


;/**
 * Created by somy on 11/12/14.
 */

var calImgSize = function(){

    var parentWidth = $(arguments[0]).width();
    var paddingRight = $(arguments[1]).css("padding-right").replace('px', '');
    var imageWidth = (parentWidth - (paddingRight * (arguments[2]-1)))/arguments[2];

    $(arguments[1]).width(imageWidth);
    $(arguments[1]).height(imageWidth);
};

jQuery(document).ready(function () {
    calImgSize(window,".imageSize",6);
});

$( window ).bind("resize", function(){
    calImgSize(window,".imageSize",6);
});

;var $root = $('html, body'),
    headerHeight = $("#header").css("height").replace('px', '');
$(".navbar-collapse ul li a").click(function() {
    $('.navbar-toggle:visible').click();
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top - headerHeight
    }, 700);
    return false;
});
$(".navbar-brand").click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top - headerHeight
    }, 700);
    return false;
});
;/**
 * Created by somi on 15/12/14.
 */

var changedOpts = $('.cycle-streams').data('cycle.startingSlide');

function currentImage(id){
    $('.cycle-slideshow').before('<ul id="thumbnail">').cycle(
        changedOpts = id,
        changedOpts.speed = 10
    );
}

$('.imgModal').click(function startingImage() {
    currentId = Number($(this).attr('id'));
    currentImage(currentId);

});




