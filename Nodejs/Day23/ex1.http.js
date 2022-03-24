let http = require('http');
let port_no = 3001;
http.createServer(callBack1).listen(port_no,callBack2);

// this is executed by passing to the createServer, when the request arrives
function callBack1(request,response) {
    console.log('callBack1 is executed, request arrives');
    response.write('Welcome to our first web app');
    response.end();
}

//  this is executed when the server occupies the port
function callBack2() {
    console.log(`callBack2 is executed, server started at ${port_no}`);
}