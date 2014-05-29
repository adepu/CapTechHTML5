/**
* This Backbone Collection contains a single article
*/
var Single_Article = Backbone.Collection.extend({
	model: Article,
	initialize: function(models, options) {
	    this.url = 'http://html5news.herokuapp.com/category/' + options.id;
	}
});