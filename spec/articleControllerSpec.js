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
      return "<ul><li><div>The First Headline</div></li></ul>"
    }
  }

  articleListViewDouble = new ArticleListViewDouble
  console.log(articleController)
  articleController.articleListView = articleListViewDouble;
  console.log(articleController)
  articleController.updateHTML();
  element = document.getElementById("headlines");
  console.log(articleListViewDouble.returnHTML());
  console.log(element.innerHTML)
  assert.isTrue(element.innerHTML === articleListViewDouble.returnHTML())
})();
