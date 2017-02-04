(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList;
  }

  ArticleListView.prototype.returnHTML = function() {
    var openTag = "<ul>";
    var contentHTML = "";
    this.articleList.articles.forEach(function(element) {
      contentHTML+= "<li><div><a href=\""+ element.url + "\"><img src=\""+element.image+"\"><h3> " + element.headline + "</h3></a><p>"+element.description+ "</p></div></li>";
    })
      return openTag+= contentHTML + "</ul>"
  }

  exports.ArticleListView = ArticleListView;
})(this);
