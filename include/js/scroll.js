var $root = $('html, body'),
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
