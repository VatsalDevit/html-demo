var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
//the server object listens on port 8080
