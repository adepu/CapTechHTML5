var Category_View = Backbone.View.extend({
    el: "#categories",
    template: _.template($('#categoryTemplate').html()),
    initialize: function(){
        var self = this;
        this.$el.empty();
        this.collection.fetch({
            success: function(response) {
                self.render();
                var cat1 = document.getElementById("world");
                var cat2 = document.getElementById("business");
                var cat3 = document.getElementById("sports");
                var cat4 = document.getElementById("fashion");
                var cat5 = document.getElementById("video");
                var cat6 = document.getElementById("opinion");
                var cat7 = document.getElementById("travel");

                cat1.onclick = function() {
                    clearCategories();
                    cat1.style.fontWeight="bold";
                };
                cat2.onclick = function() { 
                    clearCategories();
                    cat2.style.fontWeight="bold";
                };
                cat3.onclick = function() {
                    clearCategories();
                    cat3.style.fontWeight="bold";
                };
                cat4.onclick = function() {
                    clearCategories();
                    cat4.style.fontWeight="bold";
                };
                cat5.onclick = function() {
                    clearCategories();
                    cat5.style.fontWeight="bold";
                };
                cat6.onclick = function() {
                    clearCategories();
                    cat6.style.fontWeight="bold";
                };
                cat7.onclick = function() {
                    clearCategories();
                    cat7.style.fontWeight="bold";
                };

                function clearCategories() {
                    cat1.style.fontWeight="normal";
                    cat2.style.fontWeight="normal";
                    cat3.style.fontWeight="normal";
                    cat4.style.fontWeight="normal";
                    cat5.style.fontWeight="normal";
                    cat6.style.fontWeight="normal";
                    cat7.style.fontWeight="normal";
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
