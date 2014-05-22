var World_Article = Backbone.Collection.extend({
    model: Article,
    url: 'http://html5news.herokuapp.com/category/1'
});

var Business_Article = Backbone.Collection.extend({
    model: Article,
    url: 'http://html5news.herokuapp.com/category/2'
});

var Opinion_Article = Backbone.Collection.extend({
    model: Article,
    url: 'http://html5news.herokuapp.com/category/3'
});

var Sports_Article = Backbone.Collection.extend({
    model: Article,
    url: 'http://html5news.herokuapp.com/category/4'
});

var Fashion_Article = Backbone.Collection.extend({
    model: Article,
    url: 'http://html5news.herokuapp.com/category/5'
});

var Video_Article = Backbone.Collection.extend({
    model: Article,
    url: 'http://html5news.herokuapp.com/category/6'
});