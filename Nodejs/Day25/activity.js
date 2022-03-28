let express = require('express');
let fs = require('fs');
let parser = require('body-parser');

PORT = 3000;

let app = express();

app.listen(PORT, () => console.log(`The server is running at PORT ${PORT}`));

app.use(parser.json());

app.get('/user', (request,response) => {
    let data = fs.readFileSync('user.json');
    response.send(data);
});

app.post('/user', (request,response) => {
    let content = request.body;
    let user = {Id : content.userId, name : content.userName, age : content.userAge};
    // console.log(user);
    response.send('Done...');

    let data = fs.readFileSync('user.json');
    let dataStr = data.toString();
    let jsArr = undefined;

    if(dataStr.length < 1 || dataStr == "") {
        jsArr = [];
    } else {
        jsArr = JSON.parse(dataStr);
    }
    jsArr.push(user);
    let jsonArr = JSON.stringify(jsArr);
    fs.writeFileSync('user.json',jsonArr);
});

app.get('/user/:id', (request, response) => {
    let data = fs.readFileSync('user.json');
    // console.log(data);
    let dataStr = data.toString();
    // console.log(dataStr);
    let jsObj = JSON.parse(dataStr);
    // console.log(jsObj);
    
    let ID = request.params.id;
    for (let i = 0; i < jsObj.length; i++) {
        if (jsObj[i].Id == ID) {
            let display = {Id : jsObj[i].Id, Name : jsObj[i].name, Age : jsObj[i].age};
            response.json(display);
        }
    }
});

app.delete('/user/:id', (request, response) => {
    let data = fs.readFileSync('user.json');
    let dataStr = data.toString();
    let jsObj = JSON.parse(dataStr);
    let ID = request.params.id;

    for (let i = 0; i < jsObj.length; i++) {
        if (jsObj[i].Id == ID) {
            jsObj.splice(i,1);
            let jsonObj = JSON.stringify(jsObj);
            fs.writeFileSync('user.json',jsonObj);
            // response.json(jsObj);
            response.send('Done...');
        }
    }
});