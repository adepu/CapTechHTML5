var Article_View = Backbone.View.extend({
    el: "#article",
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
        console.log(this.collection);
        _(this.collection.models).each(function(model){
            var articleTemplate = this.template(model.toJSON());
            this.$el.append(articleTemplate);
        }, this);
        return this;
    }
});