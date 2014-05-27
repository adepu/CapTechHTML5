var Article_View = Backbone.View.extend({
    el: "#article",
    template: _.template($('#articleTemplate').html()),
    initialize: function(){
        var self = this;
        $('#featuredArticles').empty();
        self.$el.empty();
        this.collection.fetch({
            success: function(response) {
                self.render();
           }
        });
    },
    render: function () {
        $('.banner').hide();
        _(this.collection.models).each(function(model){
            var articleTemplate = this.template(model.toJSON());
            this.$el.append(articleTemplate);
        }, this);
        return this;
    }
});