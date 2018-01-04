const { ENVIRONMENT, LOGSTORE } = process.env; 

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

app.route("/configs")
    .get(function(req, res){
      var response = {
        "ENVIRONMENT": ENVIRONMENT,
        "LOGSTORE": LOGSTORE
      };
      res.json(response);
    });