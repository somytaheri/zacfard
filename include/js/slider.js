/**
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




