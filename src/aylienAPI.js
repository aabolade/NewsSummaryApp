var AYLIENTextAPI = require("aylien_textapi");
var textAPI = new AYLIENTextAPI({
  application_id: AYLIEN_APPLICATION_ID,
  application_key: AYLIEN_APPLICATION_KEY
});

console.log("yesy")

textAPI.summarize( {
  url: "https://www.theguardian.com/world/2017/jan/08/truck-rammed-into-pedestrians-jerusalem",
  sentences_number: 3
}, function(error, response) {
  if (error === null) {
    response.sentences.forEach(function(s) {
    });
  }
});
