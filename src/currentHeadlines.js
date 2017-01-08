(function(exports) {

  function CurrentArticles(articleController) {
    this.articleController = articleController;
  }

  CurrentArticles.prototype.requestCurrentArticles = function() {
    var requestURL = "https://content.guardianapis.com/search?api-key="+GUARDIAN_API_KEY

    function updateArticles(result) {
      this.articleController.updateArticleList(result);
      this.articleController.updateHTML();
    }

    var promise = $.get(requestURL,function(data) {
    })

    promise.then(function(data) {
      updateArticles(data.response.results);
    });

  }
  exports.CurrentArticles = CurrentArticles;

})(this);
