const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const World = require('./world.js').World;

const world = new World();

app.get('/status', function(req, res) {
  console.log('status: up');
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ status: 'up' }, null, 3));
});

io.on('connection', function(socket){
  console.log('a user connected');
  const player = world.addPlayer('Test ' + world.players.length);

  io.emit('update', world);

  socket.on('guess', (text, callback) => {
    console.log(player.id + ' guessed ' + text);
    const result = world.guessCountry(text, player);
    io.emit('update', world);
  });

  socket.on('type', (text, callback) => {
    console.log(player.id + ' typed ' + text);
    player.type(text);
    io.emit('update', world);
  });

  socket.on('give up', (text, callback) => {
    console.log(player.id + ' gave up');
    player.giveUp();
  });
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});
