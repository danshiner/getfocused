"use strict";

var express = require('express');
var router = express.Router();
var https = require('https')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/listener', function(req, res, next) {

  // DAN: update this with an if statement based on action, eventually

  console.log(`Request:${JSON.stringify(req.body)}`);

  res.sendStatus(200);

  // The below was for setup only
  // res.status(200).json({ "challenge":req.body.challenge });

});

router.get('/tokenissuer', function(req, res, next) {

  let queryCode = req.query.code
  let url = `https://slack.com/api/oauth.access?client_id=66952888932.66964105143&client_secret=48a0a831119bd4acbebb71ebedb09e09&code=${req.query.code}`

  console.log(`req.query.code: ${req.query.code}`);
  https.get(url, (res) => {
    res.on('data', function(d){
      console.log(d.toString());
    });
    res.resume();
  }).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
  });

});

module.exports = router;
