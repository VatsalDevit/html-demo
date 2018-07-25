"use strict";

var http = require('http');
var fs = require('fs');

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.echoText
      ? req.body.result.parameters.echoText
      : "Seems like some problem. Speak again.Demo by Vatsal Patel";
  return res.json({
    speech: speech,
    displayText: speech,
    source: "Dialogflow-demo-sample"
  });
});

var server = http.createServer("/create",function (req, resp) 
        resp.write('<h1>Product Manaager</h1><br /><br />To create product please enter: ' + req.url);
        resp.end();
   
);
restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
