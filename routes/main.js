var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.sendFile(__dirname + '/main.html');
})

module.exports = router;
