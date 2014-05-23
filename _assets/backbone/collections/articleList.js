var World_ArticleList = Backbone.Collection.extend({
    model: Article,
    url: 'http://html5news.herokuapp.com/category/1'
});

var featured_Col1List = Backbone.Collection.extend({
	model: Article,
	url: 'http://html5news.herokuapp.com/articles/featured'
});