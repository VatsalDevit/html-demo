var express = require('express');
var app = express();
// Our handler function is passed a request and response object
    app.get("/", function(req, res) {
      // We must end the request when we are done handling it
      res.write('Hello World!');
      res.end();
    });

    restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});

    module.exports = app;
