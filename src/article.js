(function(exports) {
  function Article(headline, url, image, description) {
    this.headline = headline;
    this.url = url;
    this.image = image;
    this.description = description;
  }

  Article.prototype.getHeadline = function() {
    return this.headline;
  }
  exports.Article = Article;
})(this);
