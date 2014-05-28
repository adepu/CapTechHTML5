var Category_View = Backbone.View.extend({
    el: "#categories",
    template: _.template($('#categoryTemplate').html()),
    initialize: function(){
        var self = this;
        this.$el.empty();
        this.collection.fetch({
            success: function(response) {
                self.render();
                var cat1 = $(".world");
                var cat2 = $(".business");
                var cat3 = $(".sports");
                var cat4 = $(".fashion");
                var cat5 = $(".video");
                var cat6 = $(".opinion");
                var cat7 = $(".travel");

                cat1.click(function(e){
                    clearCategories();
                    cat1.css('font-weight',"bold");
                });
                
                cat2.click(function(e){
                    clearCategories();
                    cat2.css('font-weight',"bold");
                });

                cat3.click(function(e){
                    clearCategories();
                    cat3.css('font-weight',"bold");
                });

                cat4.click(function(e){
                    clearCategories();
                    cat4.css('font-weight',"bold");
                });

                cat5.click(function(e){
                    clearCategories();
                    cat5.css('font-weight',"bold");
                });

                cat6.click(function(e){
                    clearCategories();
                    cat6.css('font-weight',"bold");
                });

                cat7.click(function(e){
                    clearCategories();
                    cat7.css('font-weight',"bold");
                });

                function clearCategories() {
                    cat1.css('font-weight',"normal");
                    cat2.css('font-weight',"normal");
                    cat3.css('font-weight',"normal");
                    cat4.css('font-weight',"normal");
                    cat5.css('font-weight',"normal");
                    cat6.css('font-weight',"normal");
                    cat7.css('font-weight',"normal");
                }
           }
        });
    },
    render: function () {
        var self = this;
        _(this.collection.models).each(function(model){
            var categoryTemplate = this.template(model.toJSON());
            this.$el.append(categoryTemplate);
        }, this);
        return this;
    }
});

var Categories = new Category_List();
var CategoryView = new Category_View({ collection: Categories });
