(function AnArticleControllerCanBeInstantiated() {
  var articleController = new ArticleController();
  assert.isTrue(articleController instanceof ArticleController)
})();

(function ChangesHTMLToDisplayHeadlines() {
  var articleController = new ArticleController();

  function ArticleListViewDouble() {

  }
  ArticleListViewDouble.prototype = {
    returnHTML: function() {
      return "<ul><li><div>The First Headline</div></li></ul>";
    }
  }

  articleListViewDouble = new ArticleListViewDouble;
  articleController.articleListView = articleListViewDouble;
  articleController.updateHTML();
  element = document.getElementById("headlines");
  assert.isTrue(element.innerHTML === articleListViewDouble.returnHTML())
})();
