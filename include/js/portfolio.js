/**
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

