
$(document).ready(function() {

    var counter = 0;
    $(".count").append("<p id='clicks'>" + counter.toString() + "</p>");
    $('#cat_image').click(function(){
        counter += 1;
        $('#clicks').text(counter.toString());
    });
});