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

console.log($("#world").attr("data-attribute"));

// var worldCategory = $("#world");
var catWorld = document.getElementById("world");
var catBusiness = document.getElementById("business");
var catOpinion = document.getElementById("opinion");
var catSports = document.getElementById("sports");
var catFashion = document.getElementById("fashion");
var catVideo = document.getElementById("video");

catWorld.onclick = function() {
    clearCategories();
    catWorld.style.fontWeight="bold";
};
catBusiness.onclick = function() {
    clearCategories();
    catBusiness.style.fontWeight="bold";
};
catOpinion.onclick = function() {
    clearCategories();
    catOpinion.style.fontWeight="bold";
};
catSports.onclick = function() {
    clearCategories();
    catSports.style.fontWeight="bold";
};
catFashion.onclick = function() {
    clearCategories();
    catFashion.style.fontWeight="bold";
};
catVideo.onclick = function() {
    clearCategories();
    catVideo.style.fontWeight="bold";
};

function activeCategory(category) {
    category.style.fontWeight="bold";
}

function clearCategories() {
    catWorld.style.fontWeight="normal";
    catBusiness.style.fontWeight="normal";
    catOpinion.style.fontWeight="normal";
    catSports.style.fontWeight="normal";
    catFashion.style.fontWeight="normal";
    catVideo.style.fontWeight="normal";
}

var worldArticleList = new World_ArticleList();
var worldArticlesView = new ArticleView({ collection: worldArticleList });