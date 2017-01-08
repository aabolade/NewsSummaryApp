(function(exports) {

  function ArticleController() {

    this.articleList = new ArticleList;
    this.articleListView = new ArticleListView(this.articleList);
    this.currentArticles = new CurrentArticles(this)
  }

  ArticleController.prototype.updateHTML = function() {
    element = document.getElementById('headlines');
    element.innerHTML = this.articleListView.returnHTML();
  }

  ArticleController.prototype.createArticle = function(headline) {
    this.articleList.createArticle(headline);
  }

  ArticleController.prototype.updateArticleList = function(result) {

    for(count=0;count<result.length;count++) {
      this.createArticle(result[count].webTitle);
    }

    console.log(this.articleList.articles)
  }

  exports.ArticleController = ArticleController;

})(this);
