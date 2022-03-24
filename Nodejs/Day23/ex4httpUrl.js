let http = require('http');
let url = require('url');
let port_no = 3001;

http
.createServer((request,response)=> {
let urlString = request.url;
if(urlString != '/favicon.ico') {
    // extract the query parameter & convert it into javascript object
    let urlObj = url.parse(urlString, true);
    let user = urlObj.query;
    console.log(user);
    console.log(JSON.stringify(user));
    response.writeHead(200,{'content-type':'text/html'});
    response.write(`<h2>Hello ${user.name}, your Age is ${user.age}</h2>`);
}
response.end();
})
.listen(port_no,() => console.log(`the server is runnig at port ${port_no}`));