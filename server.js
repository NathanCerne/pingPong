//javascript ping pong server
const server = require('http').createServer();
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

server.listen(3000, '18.226.4.98', () => {
    console.log('Server running at http://18.226.4.98:3000/');
});

//console.log('Server running and listening on port 3000');

io.on('connection', socket => {
    console.log('Client connected', socket.id);

    //listens for ping events
    socket.on('ping', (data) => {
        console.log(`Ping received from ${socket.id} with timestamp: ${data.timestamp}`);
        //respond with pong
        socket.emit('pong', { timestamp: data.timestamp });
    });
});
