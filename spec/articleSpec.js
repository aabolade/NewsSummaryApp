(function InstantiateArticleWithHeadlineAndURL() {
  var headline = "Headline";
  var url = "url"
  var image = "image"
  var article = new Article(headline,url,image);
  assert.isTrue(article.headline === headline)
  assert.isTrue(article.url === url)
  assert.isTrue(article.image === image)
})();

(function TestMethodToGetHeadline() {
  var headline = "Headline";
  var article = new Article(headline);
  assert.isTrue(article.getHeadline() === headline)
})();
