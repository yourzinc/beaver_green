const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();

let isPlayingNumber = 1;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.render('main', {choice:0});
  });

app.post("/post", function(req, res){
  if(req.body.number == isPlayingNumber)
  {
    res.json({isPlaying : true});
    console.log(true);
  }
  else {
    res.json({isPlaying : false});
  }


})

var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});

/*

var http = require('http');
var fs = require('fs');

var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
        url = '/main.html';
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
});

app.listen(3000);

*/
