//javascript ping pong client
const io = require('socket.io-client');
const socket = io('http://18.226.4.98:3000');

socket.on('connect', () => {
    console.log('Connected to server');

    setInterval(() => {
        const timestamp = Date.now();
        console.log('Sending ping with timestamp:', timestamp);
        socket.emit('ping', { timestamp });
    }, 1000);
});

socket.on('pong', (data) => {
    const now = Date.now();
    const latency = now - data.timestamp;
    console.log(`Pong received! Round-trip latency: ${latency} ms`);
});
