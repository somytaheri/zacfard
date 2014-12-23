/**
 * Created by somi on 22/12/14.
 */

$(".email").click(function (){
    $(".emailShow").show("slow");
    $(".phoneShow").hide("slow");
});
$(".phone").click(function (){
    $(".emailShow").hide("slow");
    $(".phoneShow").show("slow");
});


