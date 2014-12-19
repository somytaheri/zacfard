var $root = $('html, body'),
    headerHeight = $("#header").css("height").replace('px', '');
$("a").click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top - headerHeight
    }, 700, function () {
        window.location.hash = href;
    });
    return false;
});
