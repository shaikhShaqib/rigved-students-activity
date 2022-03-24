let http = require('http');
let port_no = 3001;

http
.createServer((request,response)=> {
    let username = 'Alex';
    response.writeHead(200,{'content-type': 'text/html'});
    response.write(`<h2>Hello App<h2>`);
    response.write(`<h3>UserName: ${username}`);
    response.end();
})
.listen(port_no,() => console.log(`The server is running at port ${port_no}`));