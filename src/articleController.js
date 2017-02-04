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

  ArticleController.prototype.createArticle = function(headline,url,image,description) {
    this.articleList.createArticle(headline,url,image,description);
  }

  ArticleController.prototype.updateArticleList = function(result) {

    for(count=0;count<result.length;count++) {
      var description = result[count].fields.bodyText;
      var shortenedDescription = description.split(' ').splice(0,60).join(' ');
      this.createArticle(result[count].webTitle,result[count].webUrl,result[count].fields.thumbnail, shortenedDescription);
    }
  }

  exports.ArticleController = ArticleController;

})(this);
