function initialize(){var a=new google.maps.LatLng(-37.83846,144.922203),b={center:a,zoom:10,disableDefaultUI:!0};map=new google.maps.Map(document.getElementById("map-canvas"),b)}function heshmsat(a){$(".cycle-slideshow").before('<ul id="thumbnail">').cycle(changedOpts=a,changedOpts.speed=10)}$(".email").click(function(){$(".emailShow").show("slow"),$(".phoneShow").hide("slow")}),$(".phone").click(function(){$(".emailShow").hide("slow"),$(".phoneShow").show("slow")});var map;google.maps.event.addDomListener(window,"load",initialize),$(window).bind("resize",function(){var a=map.getCenter();google.maps.event.trigger(map,"resize"),map.setCenter(a)}),$(window).scroll(function(){$(document).scrollTop()>0?($("#header").stop().animate({backgroundColor:"#d9d9d9"},100),$(".navbar-collapse").stop().animate({backgroundColor:"#d9d9d9"},100)):($("#header").stop().animate({backgroundColor:"rgba(3,0,0,0)"},100),$(window).width()>768?$(".navbar-collapse").stop().animate({backgroundColor:"rgba(3,0,0,0)"},100):$(".navbar-collapse").stop().animate({backgroundColor:"#787f6b"},100))}),jQuery(document).ready(function(){var a=6,b=$(window).width(),c=$(".imageSize").css("padding-right").replace("px",""),d=(b-c*(a-1))/a;$(".imageSize").width(d),$(".imageSize").height(d)}),$(window).bind("resize",function(){var a=6,b=$(window).width(),c=$(".imageSize").css("padding-right").replace("px","");imageWidth=(b-c*(a-1))/a,$(".imageSize").width(imageWidth),$(".imageSize").height(imageWidth)});var $root=$("html, body"),headerHeight=$("#header").css("height").replace("px","");$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click();var a=$.attr(this,"href");return $root.animate({scrollTop:$(a).offset().top-headerHeight},700,function(){window.location.hash=a}),!1}),$(".navbar-brand").click(function(){var a=$.attr(this,"href");return $root.animate({scrollTop:$(a).offset().top-headerHeight},700,function(){window.location.hash=a}),!1});var changedOpts=$(".cycle-streams").data("cycle.startingSlide");$(".imgModal").click(function(){currentId=Number($(this).attr("id")),heshmsat(currentId)});