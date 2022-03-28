let express = require('express');
let app = express();
let PORT = 3000;

app.listen(PORT, () => {
    console.log(`The server is running at PORT ${PORT}`);
});

app.get('/user/:userId/:userName', (req,res)=>{
    let userId = req.params.userId;
    let userName = req.params.userName;
    let user = {Id: userId, Name: userName};
    res.json(user);
});

app.post('/user/:userId/:userName', (req,res) => {
    let userId = req.params.userId;
    let userName = req.params.userName;
    // let user = {Id : userId, Name : userName};
    console.log(`ID = ${userId}, Name = ${userName}`);
    res.send('Called post Method');
    // res.json(user);
});