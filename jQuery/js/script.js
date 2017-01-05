
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
    },
    {
        "name" : "cat3",
        "pic" : "http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg",
        "clicks" : 0
    },
    {
        "name" : "cat4",
        "pic" : "https://s-media-cache-ak0.pinimg.com/564x/b4/c7/54/b4c754c9b93669f25e922a06644bd88e.jpg",
        "clicks" : 0
    },
    {
        "name" : "cat5",
        "pic" : "https://s-media-cache-ak0.pinimg.com/236x/ec/a3/2e/eca32ee5c3c2c768704a7198d60b867d.jpg",
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