var initialCats = [
    {
        'name' : 'Tabby',
        'imgSrc' : 'img/22252709_010df3379e_z.jpg',
        'clickCount' : 0,
        'imgAttribution' : 'https://www.flickr.com/photos/bigtallguy/434164568',
        'nicknames' : ['Tabtab', 'T-Bone', 'Mr. T']
    },
    {
        'name' : 'Tiger',
        'imgSrc' : 'img/434164568_fea0ad4013_z.jpg',
        'clickCount' : 0,
        'nicknames' : ['Tigger']
    },
    {
        'name' : 'Scaredy',
        'imgSrc' : 'img/1413379559_412a540d29_z.jpg',
        'clickCount' : 0,
        'nicknames' : ['Casper']
    },
    {
        'name' : 'Shadow',
        'imgSrc' : 'img/4154543904_6e2428c421_z.jpg',
        'clickCount' : 0,
        'nicknames' : ['Shooby']
    },
    {
        'name' : 'Sleepy',
        'imgSrc' : 'img/9648464288_2516b35537_z.jpg',
        'clickCount' : 0,
        'nicknames' : ['Zzzzzz']
    }
]
var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttibution);
    this.nicknames = ko.observableArray(data.nicknames);

    this.title = ko.computed(function(){
        if (this.clickCount() < 10) {
            return 'Newborn';
        } else if (this.clickCount() < 20) {
            return 'Infant';
        } else if (this.clickCount() < 50) {
            return 'Child';
        } else if (this.clickCount() < 100) {
            return 'Teen';
        } else {
            return 'Adult';
        }
    }, this);
}

var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);
    initialCats.forEach(function(catItem){
        self.catList.push( new Cat(catItem) );
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());