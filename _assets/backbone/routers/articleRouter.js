var Article_Router = Backbone.Router.extend({
  routes: {
      '': 'index',
      'category/:id': 'show',
      '*default': 'default'
  },

  index: function(){
     
  },

  show: function(id){
      var Article = new Single_Article([], {id: id});
      var ArticleView = new Article_View({ collection: Article });
  },

  default: function(){
      alert('hey');
  }


});

new Article_Router;

Backbone.history.start();