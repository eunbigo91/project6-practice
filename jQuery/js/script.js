
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
    ]
};

/* ======= Octopus ======= */

var octopus = {
    init: function() {
        model.currentCat = model.cats[0];

        catListView.init();
        catView.init();
        adminView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    incrementCounter: function() {
        model.currentCat.clicks++;
        catView.render();
    },

    editCat: function(name, pic, clicks) {
        cat = model.currentCat;

        cat.name = name;
        cat.pic = pic;
        cat.clicks = clicks;

        catListView.init();
        catView.render();
        adminView.init();
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
        $('#cat-img').attr('src', currentCat.pic);
    }
};

var catListView = {
    init: function(){
        this.render();
    },

    render: function() {
        var cats = octopus.getCats();
        var list = '';
        $.each(cats, function(catIndex, cat) {
            list += "<li class='cat-index list'>"+cat.name+"</li>"
        });
        $('#cat-list').html(list);

        $('.cat-index').click(function(obj) {
            selectedCat = cats.filter(function(a){ return a.name == obj.target.innerHTML; })[0];
            octopus.setCurrentCat(selectedCat);
            catView.render();
        });
    }
};

var adminView = {
    init: function() {
        $('#admin-button').click(function(){
            adminView.render();
        });
    },

    render: function() {
        var cat = octopus.getCurrentCat();
        $('#admin').empty();
        var admin_form = '';
        admin_form += "<form>Name: <input type='text' name='name'><br>Pic: <input type='text' name='pic'><br>Clicks: <input type='text' name='clicks'><div id='save'>Save</div><div id='cancel'>Cancel</div></form>";
        $('#admin').append(admin_form);
        $('input[name=name]').val(cat.name);
        $('input[name=pic]').val(cat.pic);
        $('input[name=clicks]').val(cat.clicks);

        $('#save').click(function() {
            name = $('input[name=name]').val();
            pic = $('input[name=pic]').val();
            clicks = $('input[name=clicks]').val();
            octopus.editCat(name, pic, clicks);
            $('#admin').empty();
        });
        $('#cancel').click(function() {
            $('#admin').empty();
        });
    }
};
octopus.init();
