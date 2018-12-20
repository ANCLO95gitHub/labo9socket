let express = require('express')
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

let chat = require('./chatserver');

app.use(express.static('public'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', chat.onConnection);

http.listen(3000);
console.log('App started at port 3000');
