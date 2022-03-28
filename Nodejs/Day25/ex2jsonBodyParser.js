let express = require('express');
let parser = require('body-parser');
let PORT = 2000;

let app = express();
app.listen(PORT,()=> console.log(`The server is running at PORT ${PORT}`));

app.use(parser.json()); // Parses json comming in the requset

app.post('/user', (req,res) => {
    // extract the json from the request body using request.body
    let content = req.body;
    console.log(content);
    res.send(`Hello ${content.name},your age is ${content.age}`);
});

app.post('/user/:id', (req,res) => {
    // extract the json from the request body using request.body
    let content = req.body;
    let id = req.params.id;
    console.log(id,content);
    let user = {userId : id, userName : content.name, userAge : content.age};
    res.json(user);
    // res.send(user);       
});