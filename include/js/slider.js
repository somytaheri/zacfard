/**
 * Created by somi on 15/12/14.
 */
//jQuery(document).ready(function ($) {
    var currentId;
    $('.imgModal').click(function startingImage() {
            currentId = Number($(this).attr('id'));
            console.log(currentId);

            return currentId;

        }
    );

$('.cycle-slideshow').before('<ul id="thumbnail">').cycle({
        startingSlide: startingImage(), // zero-based

    }

);

