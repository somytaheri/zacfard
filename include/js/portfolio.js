/**
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

