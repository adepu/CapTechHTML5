var Category_List = Backbone.Collection.extend({
	model: Category,
	url: "http://html5news.herokuapp.com/articles/categories"
});