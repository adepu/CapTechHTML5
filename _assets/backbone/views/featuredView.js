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
        
        $('#hack').find('div:nth-child(3)').find('br:first').after('<img src="http://placehold.it/170x69" style="width: 100%">');
        /*var text = $('#hack').find('div:nth-child(3)').html();
        text = text.replace('Shares', '<br><br>Shares');
        $('#hack').find('div:nth-child(3)').html(text);*/
        var text = 'football';
        $('#hack').find('div:nth-child(3)').find('p:first').after('<img src="http://placehold.it/84x84" style="width: 100%">');
        
        return this;
    },
});