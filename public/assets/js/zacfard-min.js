function initialize(){var a=new google.maps.LatLng(-37.83846,144.922203),b={center:a,zoom:10,disableDefaultUI:!0};map=new google.maps.Map(document.getElementById("map-canvas"),b)}function heshmsat(a){$(".cycle-slideshow").before('<ul id="thumbnail">').cycle(changedOpts=a,changedOpts.speed=10)}var map;google.maps.event.addDomListener(window,"load",initialize),$(window).bind("resize",function(){var a=map.getCenter();google.maps.event.trigger(map,"resize"),map.setCenter(a)}),jQuery(document).ready(function(){var a=$(window).width();imageWidth=a/6,$(".imageSize").width(imageWidth),$(".imageSize").height(imageWidth),console.log($(".grayscale").width()),console.log(a)}),$(window).bind("resize",function(){var a=$(window).width();imageWidth=a/6,$(".imageSize").width(imageWidth),$(".imageSize").height(imageWidth)});var currentId=9,changedOpts=$(".cycle-streams").data("cycle.startingSlide");$(".imgModal").click(function(){currentId=Number($(this).attr("id")),heshmsat(currentId)});