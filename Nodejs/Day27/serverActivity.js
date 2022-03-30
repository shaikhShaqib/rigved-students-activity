// importing node modules and creating reference
let express = require('express');
let socketIo = require('socket.io');

//creating reference to the top levl function of express
let app = express();

// pass the express to the server of http to connect express with http.
let http = require('http').Server(app);

// connecting http module
let io = socketIo(http);

// load the index file when we send the request from the browser
app.get('/', (res, resp) => {
    resp.sendFile(__dirname+'/indexActivity.html');
});

// establish connection between client & server
io.on('connection', (socket) => {
    socket.on('msg', (data) => {
        io.emit('msg', `${data}`);
    });
});

// start the http server so that client can access the http server
http.listen(2000, () => console.log('Server is runnig at port 2000'));
 