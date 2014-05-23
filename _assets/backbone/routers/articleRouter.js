var Article_Router = Backbone.Router.extend({
  routes: {
      'category/:id': 'show',
      '*default': 'default'
  },

  show: function(id){
      var Article = new Single_Article([], {id: id});
      var ArticleView = new Article_View({ collection: Article });
  },

  default: function(){
      var Advertisement = new Banner_Ad();
      var BannerView = new Banner_View({ collection: Advertisement });

      var featuredColList = new Featured_Article();
      var featuredColViews = new Featured_Col_View({ collection: featuredColList });
  }


});

new Article_Router;

Backbone.history.start();