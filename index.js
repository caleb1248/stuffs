const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
	console.log("connection")
	socket.on("guess", function(guess){
		console.log(guess)
		if(guess=='hello world') socket.emit('correct')
	})
});
http.listen(80);
