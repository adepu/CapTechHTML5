var Banner_View = Backbone.View.extend({
    el: ".banner",
    template: _.template($('#bannerTemplate').html()),
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
    }
});