(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList;
  }

  ArticleListView.prototype.returnHTML = function() {
    var openTag = "<ul>";
    var contentHTML = "";
    for(count=0;count<this.articleList.articles.length;count++) {
      contentHTML+= "<li><div>" + this.articleList.showArticles()[count].headline + "</div></li>";
    }
      console.log(this.articleList.articles)
      return openTag+= contentHTML + "</ul>"
  }

  exports.ArticleListView = ArticleListView;
})(this);
