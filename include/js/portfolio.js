/**
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

