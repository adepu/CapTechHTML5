<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- <link rel="shortcut icon" href="../../assets/ico/favicon.ico"> -->

    <title>HTML5 Challenge</title>
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" >
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
    <!---Arvo font-->
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Arvo:400,700">
    <!-- Custom styles for this template -->
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./_assets/css/home.css">
    <link rel="stylesheet" type="text/css" href="_assets/css/header.css">
    <link rel="stylesheet" type="text/css" href="_assets/css/article.css">


    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>
    <div class="base">
      <div class="container-fluid">
        <div class="row custom-row">
          <header class="col-md-10 col-sm-12 col-xs-12 col-md-offset-1 col-sm-offset-0 col-xs-offset-0">
            <nav class="header top-nav hidden-xs">

              <ul class="header">
                <li class="pull-left"><i class="fa fa-bars"></i> Sections</li>
                <li class="pull-left"><i class="fa fa-search"></i> Search</li>
                <li class="pull-right"><span class="header top-nav username">joshstickles...</span> <i class="fa fa-cogs"></i></li>
              </ul>
            </nav>
            <div class="row">
              <section class="col-xs-12 header divider">
                <div class="">
                  <span class="header title text-center"><a href="./index.html" style="text-decoration:none;color:black">CapTech.io News</a></span>
                  <p class="header date">Monday, June 12 2014</p>
                </div>
              </section>
              <nav class="header categories">
                <ul id="categories"></ul>
                
              </nav>
            </div>
            <div class="row">
                <a class="pull-right" id="banner-button">
                  <span id="arrow">
                    Click to expand<i class="fa fa-chevron-down"></i>
                  </span>
                </a>
              </div>
            <section class="banner collapse hidden-xs hidden-sm" id="collapsed"></section>
            
          </header>
        </div>
      <div class="row marketing">
        <article id="article"></article>
        <article id="featuredArticles"></article>
        
    
      </div>
      <footer class="footer">
        <p>CapTech 2014 Interns</p>

      </footer>

    </div> <!-- /container -->
    <!-- TEMPLATES -->
    <section>
    <script id="bannerTemplate" type="text/template">
      <p class="text-center"><%= message %></p>
    </script>

    <script id="articleTemplate" type="text/template">
    <div class="col-md-10 col-md-offset-1">
    <div class="col-md-7" style="border-right:thin #cccccc solid">
    <p id="articleTitle"><%= main.headLine %></p>
    <% if (main.numberOfImages > 0) { %>
      <img class="col-md-12 col-sm-8 col-xs-8" src="http://placehold.it/600x350">
      <% } %>
      <p id="articleCaption"><%= main.fullStory %></p>
      <p id="articleContent">
      <%= main.snippet %>
      </p>
      </div>
      <div class="col-md-5">
      <p id="relatedTitle"><%= aside.headLine %></p>
      <p class="relatedContent">
      <%= aside.fullStory %>
      </p>
      <% if (aside.numberOfImages > 0) { %>
        <img class="col-md-12 col-sm-12 col-xs-12" src="http://placehold.it/400x250">
        <% } %>
        <p class="relatedContent">
        <%= aside.snippet %>
        </p>
        </div>
        </div>
        </script>
        <script id="categoryTemplate" type="text/template">
        <li class="col-sm-12 col-xs-12 hidden-md hidden-lg"><a class=<%= shortName %> href=<%="#/category/" + id %>><%= displayName %></a></li>
        <li class="hidden-sm hidden-xs"><a class=<%= shortName %> href=<%="#/category/" + id %>><%= displayName %></a></li>
        </script>
        <script id="featuredArticlesTemplate" type="text/template">
          <div class="col-md-12 col-xs-12">
            <div class="col-md-12 col-md-offset-1 col-sm-12 col-sm-offset-0">
              <div class="col-md-2 col-sm-12">
                <% _.each(aside, function(article, index) { %> 
                  <p class="head"><%= article.headLine %></p>
                  <p class="snippet">
                    <span class="location"><%= article.location %></span>
                      <%= article.snippet %></p>
                  <%
                  if(index === 0){%>
                    <hr>
                  <%}%>
                  <% }); %>
              </div>
              <div class="col-md-4 col-sm-12" id="anotherHack">
                <img src="http://placehold.it/371x210" style="width: 100%;padding-bottom:20px;">
                <% _.each(main, function(article, index) { %> 
                  <%
                  if(index === 0){%>
                    <p id="heading1"><%= article.headLine %></p>
                    <p class="snippet">
                    <span class="location"><%= article.location %></span>
                      <%= article.snippet %></p>
                  <%}else if(index === 2){%>
                         <p class="heading2">
                            <%= article.headLine %>
                         </p>
                         <p class="snippet">
                            <span class="location"><%= article.location %></span>
                              <%= article.snippet %>
                          </p>
                  <%} else {%>
                    <p class="heading2"><%= article.headLine %></p>
                    <p class="snippet">
                    <span class="location"><%= article.location %></span>
                      <%= article.snippet %></p>  
                  <%}%>
                  <% }); %>
              </div>
            <div class="col-md-4 col-sm-12" id="hack">
              <p id="title">The Opinion Pages</p>
                <% _.each(opinion, function(article, index) { %>
                  <%
                    if(index === 0){%>
                      <article class="col-md-6 col-sm-12">
                        <p class="title1"><%= article.headLine %></p>
                        <p class="snippet">
                          <span class="location"><%= article.location %></span>
                              <%= article.fullStory %></p>
                      </article>
                    <%} else {%>
                      <article class="col-md-6 col-sm-12">
                        <p class="custom title1">
                            <%= article.headLine %>
                        </p>
                        <p class="snippet">
                          <span class="location"><%= article.location %></span>
                              <%= article.fullStory %></p>
                      </article>
                      <%}%>
                  <% }); %>
              <p id="travelhead">TRAVEL<font class="hidden-xs" color="#cccccc">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
              </font></p>
                <% _.each(travel, function(article, index) { %>
                  <%
                    if(index === 0){%>
                      <article class="col-md-6 col-sm-12">
                        <p class="thead"><%= article.headLine %></p>
                        <img src="http://placehold.it/171x87" style="width: 100%"></p>
                        <img src="http://placehold.it/171x87" style="width: 100%"></p>
                      </article>
                    <%} else {%>
                      <article class="col-md-6 col-sm-12">
                        <p class="thead"><%= article.headLine %></p>
                        <img src="http://placehold.it/169x36" style="width: 100%"></p>
                        <p class="snippet">
                          <span class="location"><%= article.location %></span>
                              <%= article.snippet %></p>
                      </article>
                      <%}%>
                  <% }); %>
                </div>
              </div>
        
        </script>
      </section>
    

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    
    <!-- Latest compiled and minified JavaScript -->
    
    <!-- Java Script Libraries -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script src="http://documentcloud.github.com/underscore/underscore-min.js"></script>
    <script src="http://documentcloud.github.com/backbone/backbone-min.js"></script>
    
    <!-- CSS Bootstrap -->
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
    
    <!-- Models -->
    <script type="text/javascript" src="./_assets/backbone/models/article.js"></script>
    <script type="text/javascript" src="./_assets/backbone/models/category.js"></script>
    <script type="text/javascript" src="./_assets/backbone/models/advertisement.js"></script>
    
    <!-- Collections -->
    <script type="text/javascript" src="./_assets/backbone/collections/singleArticle.js"></script>
    <script type="text/javascript" src="./_assets/backbone/collections/featuredArticle.js"></script>
    <script type="text/javascript" src="./_assets/backbone/collections/categories.js"></script>
    <script type="text/javascript" src="./_assets/backbone/collections/bannerAd.js"></script>
    
    <!-- Views -->
    <script type="text/javascript" src="./_assets/backbone/views/articleView.js"></script>
    <script type="text/javascript" src="./_assets/backbone/views/featuredView.js"></script>
    <script type="text/javascript" src="./_assets/backbone/views/categoryView.js"></script>
    <script type="text/javascript" src="./_assets/backbone/views/bannerView.js"></script>
    
    <!-- Routers -->
    <script type="text/javascript" src="./_assets/backbone/routers/articleRouter.js"></script>

    <script>
      $(document).ready(function(){
        $('#banner-button').on('click', function(event){
         
          if($('.banner').attr('id') == "collapsed") {
            $('.banner').height($('.banner').height() * 2);
            $('.banner').attr('id', 'expanded');
            $('#banner-button').html('<span id="arrow">Click to collapse<i class="fa fa-chevron-up"></i></span>');
          }
          else {
            $('.banner').height($('.banner').height() / 2);
            $('.banner').attr('id', 'collapsed');
            $('#banner-button').html('<span id="arrow">Click to expand<i class="fa fa-chevron-down"></i></span>');
          }
          $('.banner').toggleClass('collapse');
          $('.banner').toggleClass('expand');
        });

      });
    </script>
  </body>
</html>
