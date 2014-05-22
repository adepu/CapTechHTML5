var ArticleView = Backbone.View.extend({
    el: "#articles",
    template: _.template($('#articleTemplate').html()),
    initialize: function(){
        var self = this;
        this.collection.fetch({
            success: function(response) {
                self.render();
           }
        });
    },
    render: function () {
        _(this.collection.models).each(function(model){
            var articleTemplate = this.template(model.toJSON());
            this.$el.append(articleTemplate);
        }, this);
        return this;
    },
    renderItem: function(article) {
        var articleTemplate = this.template(article.toJSON());
        this.$el.append(articleTemplate);
    }
});

var worldArticleList = new World_ArticleList();
var worldArticlesView = new ArticleView({ collection: worldArticleList });