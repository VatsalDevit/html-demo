"use strict";
var http = require('http')

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

http.post("/htmltest", function(req, res) {
  return '<html><head><title>test html </title></head><body> <h1> this is html test in heroku & DailogFlow </h1> <img src="https://www.syncfusion.com/products/wpf/control/images/sfchart/Chart%20Types/charttype_1.png" /></body></html>'
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
