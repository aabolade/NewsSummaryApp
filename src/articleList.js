(function(exports) {

  function ArticleList() {
    this.articles = [];
  }

  ArticleList.prototype.showArticles = function() {
    return this.articles;
  }

  ArticleList.prototype.createArticle = function(header,url,image) {
    article = new Article(header,url,image);
    this.articles.push(article);
  }

  exports.ArticleList = ArticleList;

})(this);
