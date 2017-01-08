(function(exports) {
  function Article(headline, url) {
    this.headline = headline;
    this.url = url;
  }

  Article.prototype.getHeadline = function() {
    return this.headline;
  }
  exports.Article = Article;
})(this);
