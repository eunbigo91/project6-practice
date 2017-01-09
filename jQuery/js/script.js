
/* ======= Model ======= */

var model = {
    currentCat: null,
    cats: [
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
    ],
};

/* ======= Octopus ======= */

var octopus = {
    init: function() {
        model.currentCat = model.cats[0];

        catListView.init();
        catView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    setCurrentCat: function(index) {
        model.currentCat = model.cats[index];
    },

    incrementCounter: function() {
        model.currentCat.clicks++;
        catView.render();
    }
};


/* ======= View ======= */

var catView = {
    init: function() {
        $('#cat-img').click(function() {
            octopus.incrementCounter();
        });
        this.render();
    },

    render: function() {
        var currentCat = octopus.getCurrentCat();
        $('#cat-count').text(currentCat.clicks);
        $('#cat-name').text(currentCat.name);
        $('#cat-img').attr("src", currentCat.pic);
    }
};

var catListView = {
    init: function() {
        var cats = octopus.getCats();
        var toAdd = "";
        $.each(cats, function(catIndex, cat) {
            toAdd += "<li class='cat-index list'>"+cat.name+"</li>";
        });
        $("#cat-list").append(toAdd);

        $('.cat-index').click(function(obj) {
            index = cats.indexOf(cats.filter(function(a){ return a.name == obj.target.innerText; })[0]);
            octopus.setCurrentCat(index);
            catView.render();
        });
    }
};

octopus.init();
