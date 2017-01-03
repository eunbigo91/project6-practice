
var cats =[
    {
        "name" : "cat1",
        "pic" : "img/cat1.jpg",
        "clicks" : 0
    },
    {
        "name" : "cat2",
        "pic" : "img/cat2.jpg",
        "clicks" : 0
    }
];

function makeCatRows() {
    var toAdd = "";
    $.each(cats, function(catIndex, cat) {
        toAdd += "<div class='cat'><div class='name'>" + cat.name + "</div><img src='" + cat.pic + "' class='cat_img'/><div id='" + catIndex.toString() + "' class='count'>" + cat.clicks.toString() + "</div></div>";
    });
    $("#main").append("<div class='row'>" + toAdd + "</div>");
}

$(document).ready(function() {
    makeCatRows();
    $(".cat_img").click(function(obj) {
        var elem = obj.target.parentElement.childNodes[2];
        console.log(elem);
        cats[elem.id].clicks += 1;
        $("#" + elem.id).text(cats[elem.id].clicks);
    });
});