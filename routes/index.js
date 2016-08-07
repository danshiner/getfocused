"use strict";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/listener', function(req, res, next) {
  res.status(200).json({ "challenge":req.body.challenge });
});

router.get('/tokenissuer', function(req, res, next) {

  function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
        callback(xmlHttp.responseText);
      };
    };
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
  }

  let url = 'https://slack.com/api/oauth.access?client_id=66952888932.66964105143&client_secret=48a0a831119bd4acbebb71ebedb09e09&code=req.param.code'

  httpGetAsync(url, function(httpResponse){
    accessToken = httpResponse.accessToken;
    scope = httpResponse.scope;
    console.log("get request worked");
  });

});

module.exports = router;
