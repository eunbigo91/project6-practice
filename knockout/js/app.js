var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttibution = ko.observable('https://www.flickr.com/photos/');
    this.nicknames = ko.observableArray(['Tabtab', 'T-Bone', 'Mr. T']);
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

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());