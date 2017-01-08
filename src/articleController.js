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

  ArticleController.prototype.createArticle = function(headline,url) {
    this.articleList.createArticle(headline,url);
  }

  ArticleController.prototype.updateArticleList = function(result) {

    for(count=0;count<result.length;count++) {
      console.log(result[count].webUrl)
      this.createArticle(result[count].webTitle,result[count].webUrl);
    }

  }

  exports.ArticleController = ArticleController;

})(this);
