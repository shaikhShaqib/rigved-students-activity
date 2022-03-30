let express = require('express');
let app = express();

// pass the express to the server to http to connect express with http 
let http = require('http').Server(app);

// load the socket.io module and connect http module
let socketIo = require('socket.io');
let io = socketIo(http);

// load index.html file when you send the request from the browser
app.get('/', (res, resp) => {
    // _dirname is the javascript property to find the current directory
    resp.sendFile(__dirname+'/index.html');
});

io.on('connection', (socket) => {
    socket.on('msg', (data) => {
        console.log(`Client sent ${data}`);
    });
    // server send the data to the connected Client
    socket.emit('obj', 'Hello I am server');
});

// start the http server so that client can acces the http server
http.listen(3000, () => console.log('Server is running at port 3000'));


