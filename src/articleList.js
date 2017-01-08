(function(exports) {

  function ArticleList() {
    this.articles = [];
  }

  ArticleList.prototype.showArticles = function() {
    return this.articles;
  }

  ArticleList.prototype.createArticle = function(header,url) {
    article = new Article(header,url);
    this.articles.push(article);
  }

  exports.ArticleList = ArticleList;

})(this);
