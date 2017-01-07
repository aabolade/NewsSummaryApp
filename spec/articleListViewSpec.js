(function takesAnArticleListUponInstantiation() {
  var articleList = new ArticleList;
  var articleListView = new ArticleListView(articleList);
  assert.isTrue(articleListView.articleList === articleList)
})();

(function returnHTMLForNoArticle() {
  var articleList = new ArticleList;
  var articleListView = new ArticleListView(articleList);
  assert.isTrue(articleListView.returnHTML() === "<ul></ul>" )
})();

(function returnHTMLForOneArticle() {
  var articleList = new ArticleList;
  articleList.createArticle("Headline");
  var articleListView = new ArticleListView(articleList);
  assert.isTrue(articleListView.returnHTML() === "<ul><li><div>Headline</div></li></ul>" )
})();

(function returnHTMLForMoreThanOneArticle() {
  var articleList = new ArticleList;
  articleList.createArticle("First Headline");
  articleList.createArticle("Second Headline");
  articleList.createArticle("Third Headline");
  var articleListView = new ArticleListView(articleList);
  assert.isTrue(articleListView.returnHTML() === "<ul><li><div>First Headline</div></li><li><div>Second Headline</div></li><li><div>Third Headline</div></li></ul>" )
})();
