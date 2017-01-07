(function(exports) {

  function CurrentArticles() {

  }

  CurrentArticles.prototype.getCurrentArticles = function() {
    var requestURL = "https://content.guardianapis.com/search?api-key="+GUARDIAN_API_KEY
    $.get(requestURL,function(data) {
      console.log(data.response.results)
    })
  }

  exports.CurrentArticles = CurrentArticles;

})(this);
