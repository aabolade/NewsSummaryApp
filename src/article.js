(function(exports) {
  function Article(headline, url, image) {
    this.headline = headline;
    this.url = url;
    this.image = image;
  }

  Article.prototype.getHeadline = function() {
    return this.headline;
  }
  exports.Article = Article;
})(this);
