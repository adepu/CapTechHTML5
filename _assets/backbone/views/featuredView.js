var featuredColView = Backbone.View.extend({
    el: "#featuredArticles",
    template: _.template($('#featuredArticlesTemplate').html()),
    initialize: function(){
        var self = this;
        self.$el.empty();
        this.collection.fetch({
            success: function(response) {
                self.render();
           }
        });
    },
    render: function (){
        _(this.collection.models).each(function(model){
            
            /*m = new Backbone.Model(model.attributes);*/
            console.log(model.toJSON());
            var featuredArticlesTemplate = this.template(model.toJSON());
            this.$el.append(featuredArticlesTemplate);
        }, this);
        return this;
    },
});

var featuredColList = new Featured_Article();
var featuredColViews = new featuredColView({ collection: featuredColList});