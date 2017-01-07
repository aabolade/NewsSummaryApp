(function(exports) {

  function ArticleList() {
    this.articles = [];
  }

  ArticleList.prototype.showArticles = function() {
    return this.articles;
  }

  ArticleList.prototype.createArticle = function(header) {
    article = new Article(header)
    this.articles.push(article)
  }

  exports.ArticleList = ArticleList;

})(this);
