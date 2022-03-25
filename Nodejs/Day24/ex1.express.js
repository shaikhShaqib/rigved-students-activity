// importing express module
let express = require('express');

// This refers to top level function from which you can access get, post, put, delete, listen.
let app = express();

// start the server
port_no = 3001;
app.listen(port_no, () => console.log(`The server is running on Port ${port_no}`));

// creating webservices by configuring URL and Using http methods

app.get('/', (req,res) => {
    res.send('Requesting GET');
});

app.post('/', (req, res) => {
    res.send('Requesting POST');
});

app.put('/', (req, res) => {
    res.send('Requesting PUT');
});

app.delete('/', (req, res) => {
    res.send('Requesting DELETE');
});

