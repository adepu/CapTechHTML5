var Featured_Article = Backbone.Collection.extend({
	model: Article,
	url: "http://html5news.herokuapp.com/articles/featured"
});