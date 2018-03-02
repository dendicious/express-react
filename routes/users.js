var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var users = [
    {
      id: 1,
  	  username: "express"
    },
    {
      id: 2,
  	  username: "react"
    }
  ]
  res.send(users);
});

module.exports = router;
