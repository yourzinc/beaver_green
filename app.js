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
    res.sendFile(__dirname + '/public/video.html');
});

app.get('/video/past.mp4', function(req, res){
    res.sendFile(__dirname + '/public/past.MP4');
});

app.get('/video/present.mp4', function(req, res){
    res.sendFile(__dirname + '/public/present.MP4');
});

app.get('/video/future.mp4', function(req, res){
    res.sendFile(__dirname + '/public/future.MP4');
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
      io.emit('result', true);
    }
    else {
      console.log(num, ' is false');
      io.emit('result', false);
      isPlayingNumber = num;
      console.log('change -', num);
      io.emit('video_choice', isPlayingNumber);
    }
  });
});

http.listen(3000, function()
{
  console.log('server on!');
});