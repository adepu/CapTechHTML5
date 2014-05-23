var Featured_Col_View = Backbone.View.extend({
    el: "#featuredArticles",
    template: _.template($('#featuredArticlesTemplate').html()),
    initialize: function(){
        var self = this;
        this.collection.fetch({
            success: function(response) {
                self.render();
           }
        });
    },
    render: function (){
        _(this.collection.models).each(function(model){
            var featuredArticlesTemplate = this.template(model.toJSON());
            this.$el.append(featuredArticlesTemplate);
        }, this);
        return this;
    },
});