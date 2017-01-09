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

  ArticleController.prototype.createArticle = function(headline,url,image) {
    this.articleList.createArticle(headline,url,image);
  }

  ArticleController.prototype.updateArticleList = function(result) {

    for(count=0;count<result.length;count++) {
      // var images = $(result[count].fields.body).find("img")
      this.createArticle(result[count].webTitle,result[count].webUrl,result[count].fields.thumbnail);
    }
  }

  exports.ArticleController = ArticleController;

})(this);
