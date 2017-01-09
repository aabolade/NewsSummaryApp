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
  articleList.createArticle("Headline","","");
  var articleListView = new ArticleListView(articleList);
  console.log(articleListView.returnHTML())
  assert.isTrue(articleListView.returnHTML() === "<ul><li><div><a href=\"\">Headline</a><img src=\"\"></div></li></ul>" )
})();

(function returnHTMLForMoreThanOneArticle() {
  var articleList = new ArticleList;
  articleList.createArticle("First Headline","","");
  articleList.createArticle("Second Headline","","");
  articleList.createArticle("Third Headline","","");
  var articleListView = new ArticleListView(articleList);
  assert.isTrue(articleListView.returnHTML() === "<ul><li><div><a href=\"\">First Headline</a><img src=\"\"></div></li><li><div><a href=\"\">Second Headline</a><img src=\"\"></div></li><li><div><a href=\"\">Third Headline</a><img src=\"\"></div></li></ul>" )
})();
