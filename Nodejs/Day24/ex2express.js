// importing express module
let express = require('express');

// This refers to top level function from which you can access get, post, put, delete, listen.
let app = express();

// start the server
port_no = 3001;
app.listen(port_no, () => console.log(`The server is running on Port ${port_no}`));

// creating webservices by configuring URL and Using http methods

app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.get('/employee', (req, res) => {
    let emp = {id: 100, name: "Vijay", salary: 23000};
    res.json(emp); // Converts js object to json and returns that as a response.
});

app.get('/employees', (req, res) => {
    let jsArr = [
        {id: 101, name: "Madhara", salary: 70000},
        {id: 102, name: "Nagato", salary: 50000},
        {id: 103, name: "Itachi", salary: 60000}
    ]; 
    res.json(jsArr);
});

