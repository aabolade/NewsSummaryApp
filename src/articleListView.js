(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList;
  }

  ArticleListView.prototype.returnHTML = function() {
    var openTag = "<ul>";
    var contentHTML = "";
    for(count=0;count<this.articleList.articles.length;count++) {
      contentHTML+= "<li><div><a href=\""+this.articleList.showArticles()[count].url + "\">" + this.articleList.showArticles()[count].headline + "</a></div></li>";
    }
      return openTag+= contentHTML + "</ul>"
  }

  exports.ArticleListView = ArticleListView;
})(this);
