let http = require('http');
let url = require('url');
let fs = require('fs');
let port_no = 3001;



http
    .createServer((request, response) => {
        let urlString = request.url;
        // console.log(urlString);
        if (urlString != '/favicon.ico') {
            let urlObj = url.parse(urlString, true);
            let user = urlObj.query;
            // console.log(user);

            let data = fs.readFileSync('user.json');
            let dataStr = data.toString();
            let jsArr = undefined;
            if (dataStr.length < 1 || dataStr == "") {
                jsArr = [];
            } else {
                jsArr = JSON.parse(dataStr);
            }
            jsArr.push(user);
            let jsonArr = JSON.stringify(jsArr);
                fs.writeFileSync('user.json', jsonArr);
        }
    })
    .listen(port_no, () => console.log(`The server is running at port ${port_no}`));