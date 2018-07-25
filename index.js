"use strict";

var http = require('express');
var app = express();

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


app.post('/user', function(req, res){
        response = {"html web Demo"};
      
        console.log(response);
        
        
        res.end(JSON.stringify(response));
    });

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
