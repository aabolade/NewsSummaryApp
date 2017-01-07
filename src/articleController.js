(function(exports) {

  function ArticleController() {

    this.articleList = new ArticleList
    this.articleListView = new ArticleListView(this.articleList)

  }

  ArticleController.prototype.updateHTML = function() {
    element = document.getElementById('headlines');
    element.innerHTML = this.articleListView.returnHTML();
  }

  ArticleController.prototype.createArticle = function(headline) {
    this.articleList.createArticle(headline);
  }

  exports.ArticleController = ArticleController;

})(this);
