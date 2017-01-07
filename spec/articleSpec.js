(function InstantiateArticleWithHeadline() {
  var headline = "Headline";
  var article = new Article(headline);
  assert.isTrue(article.headline === headline)
})();

(function TestMethodToGetHeadline() {
  var headline = "Headline";
  var article = new Article(headline);
  assert.isTrue(article.getHeadline() === headline)
})();
