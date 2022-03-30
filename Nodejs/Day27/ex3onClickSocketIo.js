let express = require('express');
let socketIo = require('socket.io');

let app = express();
let http = require('http').Server(app);

http.listen(3000, () => console.log('Server is running at port 3000'));

let io = socketIo(http);

app.get('/', (res, resp) => {
    resp.sendFile(__dirname+'/onClickIndex.html');
});

// establishing connection between client and server
io.on('connection', (socket) => {
    socket.on('msg', (data) => {
        console.log(`Client send: ${data}`);
    });
    // server send data to the connected Client
    socket.emit('obj', 'Hello i am server');
});



