"use strict";

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

restService.post("/htmltest", function(req, res) {
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.echoText
      ? req.body.result.parameters.echoText
      : "Seems like some problem. Speak again.Demo by Vatsal Patel";
  return res.json({
    speech: speech,
    displayText: '<html><head><title>test html </title></head><body> <h1> this is html test in heroku & DailogFlow </h1> <img src="https://www.syncfusion.com/products/wpf/control/images/sfchart/Chart%20Types/charttype_1.png" /></body></html>',
    source: "Dialogflow-demo-sample"
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
