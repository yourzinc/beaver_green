const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const fs = require('fs');

app.use(express.static(__dirname + '/public'));

var isPlayingNumber = 1;

app.get('/', function(req,res){
    res.sendFile(__dirname + '/main.html');
  });

app.get('/video', function(req, res){
    res.sendFile(__dirname + '/video.html');
});


io.on('connection', function(socket){
  console.log('user connected: ', socket.id);

  socket.on('disconnect', function(){
    console.log('user disconnected: ', socket.id);
  });

  socket.on('choose', function(num){
    console.log('user chose one');
    if(num == isPlayingNumber)
    {
      console.log(num, ' is right');
      io.emit('result', true);
    }
    else {
      console.log(num, ' is false');
      io.emit('result', false);

    }
  });
});

// app.post("/post", function(req, res){
//   if(req.body.number == isPlayingNumber)
//   {
//     res.json({isPlaying : true});
//     console.log(true);
//   }
//   else {
//     res.json({isPlaying : false});
//   }
// })

http.listen(3000, function()
{
  console.log('server on!');
});

// var port = 3000;
// app.listen(port, function(){
//   console.log('server on!');
// });

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
