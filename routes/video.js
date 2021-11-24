var express = require('express');
var router = express.Router();

router.get('/video', function(req, res){
  res.sendFile(__dirname + '/video.html');
});

module.exports = router;
