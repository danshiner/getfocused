"use strict";

var express = require('express');
var router = express.Router();
var https = require('https')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/listener', function(req, res, next) {
  res.status(200).json({ "challenge":req.body.challenge });
});

router.get('/tokenissuer', function(req, res, next) {

  let url = 'https://slack.com/api/oauth.access?client_id=66952888932.66964105143&client_secret=48a0a831119bd4acbebb71ebedb09e09&code=req.param.code'
  https.get(url, (res) => {
    console.log(`Got response: ${res.statusCode}`);
    res.resume();
  }).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
  });

  // function httpGetAsync(url, callback) {
  //   var xmlHttp = new XMLHttpRequest();
  //   xmlHttp.onreadystatechange = function() {
  //     if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
  //       callback(xmlHttp.responseText);
  //     };
  //   };
  //   xmlHttp.open("GET", url, true); // true for asynchronous
  //   xmlHttp.send(null);
  // }

  // httpGetAsync(url, function(httpResponse){
  //   accessToken = httpResponse.accessToken;
  //   scope = httpResponse.scope;
  //   console.log("get request worked");
  // });

  // res.render('listener', { title: 'Listener' });
  res.status(200).json({ "challenge":req.body.challenge });
});

module.exports = router;
