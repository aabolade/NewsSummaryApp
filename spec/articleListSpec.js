(function holdsAnArrayOfArticles() {
  var articleList = new ArticleList;
  assert.isTrue(Array.isArray(articleList.articles))
})();

(function returnsAllArticles() {
  var articleList = new ArticleList;
  assert.isTrue(articleList.showArticles() === articleList.articles)
})();

(function createsAnArticle() {
  var articleList = new ArticleList;
  var headline = "Headline";
  articleList.createArticle(headline);
  assert.isTrue(articleList.showArticles()[0].headline === headline)
})();
