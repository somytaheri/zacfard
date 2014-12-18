/**
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




