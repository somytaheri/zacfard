/**
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
 * Created by somi on 11/12/14.
 */

jQuery(document).ready(function () {
    //$( window ).bind("resize", function(){
        var windowsWidth = $(window).width();
        imageWidth = windowsWidth / 6;
        $(".imageSize").width(imageWidth);
        $(".imageSize").height(imageWidth);
        console.log($(".grayscale").width());
        console.log(windowsWidth);
    //});
});
$( window ).bind("resize", function(){
    var windowsWidth = $(window).width();
    imageWidth = windowsWidth / 6;
    $(".imageSize").width(imageWidth);
    $(".imageSize").height(imageWidth);
    //console.log($(".grayscale").width());
    //console.log(windowsWidth);
});

;/**
 * Created by somi on 15/12/14.
 */
//jQuery(document).ready(function ($) {
var currentId =9;
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




