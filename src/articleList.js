(function(exports) {

  function ArticleList() {
    this.articles = [];
  }

  ArticleList.prototype.showArticles = function() {
    return this.articles;
  }

  ArticleList.prototype.createArticle = function(header,url,image, description) {
    article = new Article(header,url,image, description);
    this.articles.push(article);
  }

  exports.ArticleList = ArticleList;

})(this);
