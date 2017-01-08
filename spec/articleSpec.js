(function InstantiateArticleWithHeadlineAndURL() {
  var headline = "Headline";
  var url = "url"
  var article = new Article(headline,url);
  assert.isTrue(article.headline === headline)
  console.log(article.url)
  assert.isTrue(article.url === url)
})();

(function TestMethodToGetHeadline() {
  var headline = "Headline";
  var article = new Article(headline);
  assert.isTrue(article.getHeadline() === headline)
})();
