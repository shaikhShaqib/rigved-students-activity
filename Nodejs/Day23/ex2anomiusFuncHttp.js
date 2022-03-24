let http = require('http');
let port_no = 3001;
http.createServer((request,response) => {
    console.log('request arrive');
    response.write('This is our 2 page');
    response.end();
}).listen(port_no,() => console.log(`the server is runnint at port ${port_no}`));