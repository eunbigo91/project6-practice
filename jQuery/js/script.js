
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

function makeACatList(){
    var toAdd = "";
    $.each(cats, function(catIndex, cat) {
        toAdd += "<li class='cat list'>"+cat.name+"</li>";
    });
    $("#list").append("<ul class='cat_list'>"+toAdd+"</ul>");
}

function displaySelectedCat(id){
    $("#display").empty();
    cat = cats[id];
    var toDisplay = "<div class='name'>" + cat.name + "</div><img src='" + cat.pic + "' class='cat_img'/><div id='" + id.toString() + "' class='count'>" + cat.clicks.toString() + "</div>";
    $("#display").append(toDisplay);
    $(".cat_img").click(function(obj) {
        var elem = obj.target.parentElement.childNodes[2];
        cats[elem.id].clicks += 1;
        $("#" + elem.id).text(cats[elem.id].clicks);
    });
}

$(document).ready(function(){
    makeACatList();
    $(".cat").click(function(obj) {
        id = cats.indexOf(cats.filter(function(a){ return a.name == obj.target.innerHTML; })[0]);
        displaySelectedCat(id);
    });
});