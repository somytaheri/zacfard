var $root = $('html, body'),
    headerHeight = $("#header").css("height").replace('px', '');
$(".navbar-collapse ul li a, .navbar-brand").click(function() {
    $('.navbar-toggle:visible').click();
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top - headerHeight
    }, 700, function () {
        window.location.hash = href;
    });
    return false;
});
