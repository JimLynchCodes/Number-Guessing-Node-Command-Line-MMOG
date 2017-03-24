const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8889');

console.log('got some args: ' + process.argv[2] + " " + process.argv[3]);

ws.on('open', function open() {
    ws.send(JSON.stringify({ name: process.argv[2], guess: process.argv[3] }));
});

ws.on('message', function incoming(data, flags) {
    var obj = JSON.parse(data);
    console.log('Server says: ' + obj.response);
    process.exit();
});
