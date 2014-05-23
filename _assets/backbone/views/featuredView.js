var featuredCol1View = Backbone.View.extend({
    el: "#featuredCol1",
    template: _.template($('#featured1Template').html()),
    initialize: function(){
        var self = this;
        this.collection.fetch({
            success: function(response) {
                self.render();
                /*console.log(response);*/
           }
        });
    },
    render: function () {
        _(this.collection.models).each(function(model){
            var featured1Template = this.template(model.toJSON());
            this.$el.append(featured1Template);
        }, this);
        return this;
    },
    renderItem: function(featuredArticle) {
        var featured1Template = this.template(article.toJSON());
        this.$el.append(featured1Template);
    }
});

var featuredCol1List = new featured_Col1List();
var featuredCol1Views = new featuredCol1View({ collection: featuredCol1List});