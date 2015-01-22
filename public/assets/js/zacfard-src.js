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
    //var marker = new google.maps.Marker({
    //    position: myLatlng,
    //    map: map,
    //    animation: google.maps.Animation.DROP
    //});
    //google.maps.event.addListener(marker, 'click', toggleBounce);


}
//function toggleBounce() {
//
//    if (marker.getAnimation() !== null) {
//        marker.setAnimation(null);
//    } else {
//        marker.setAnimation(google.maps.Animation.BOUNCE);
//    }
//}
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
 * Created by somi on 11/12/14.
 */

jQuery(document).ready(function () {
    var n   =6 ;//nomber of image in each row
    var windowsWidth = $(window).width();
    var paddingRight = $(".imageSize").css("padding-right").replace('px', '');
    var imageWidth = (windowsWidth - paddingRight * (n-1))/n;

    $(".imageSize").width(imageWidth);
    $(".imageSize").height(imageWidth);

});
$( window ).bind("resize", function(){
    var n=6 ;//nomber of image in each row
    var windowsWidth = $(window).width();
    var paddingRight = $(".imageSize").css("padding-right").replace('px', '');

    imageWidth = (windowsWidth - paddingRight * (n-1))/n;
    $(".imageSize").width(imageWidth);
    $(".imageSize").height(imageWidth);
});

;var $root = $('html, body'),
    headerHeight = $("#header").css("height").replace('px', '');
$(".navbar-collapse ul li a").click(function() {
    $('.navbar-toggle:visible').click();
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top - headerHeight
    }, 700, function () {
        //window.location.hash = href;
    });
    return false;
});
$(".navbar-brand").click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top - headerHeight
    }, 700, function () {
        //window.location.hash = href;
    });
    return false;
});
;/**
 * Created by somi on 15/12/14.
 */
//jQuery(document).ready(function ($) {
//var currentId =9;
var changedOpts = $('.cycle-streams').data('cycle.startingSlide');

function heshmsat(id){
    $('.cycle-slideshow').before('<ul id="thumbnail">').cycle(

        changedOpts = id,
        changedOpts.speed = 10

    );
}

$('.imgModal').click(function startingImage() {

    currentId = Number($(this).attr('id'));

    heshmsat(currentId);

});




