const mysql = require('mysql');
let express = require('express');
let parser = require('body-parser');
let PORT = 3001;

let app = express();
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

app.use(parser.json());

// connecting database
const dbconn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employee_db'
}); 

// connecting mysql
dbconn.connect((error) => {
    if (error) throw error;
    console.log('Connected...');
});

app.get('/emp', (request, response) => {

    dbconn.query(("select * from person"), (err, result) => {
        if(err) throw err;
        response.json(result);
    });
});

app.get('/emp/:id', (request, response) => {
    let id = request.params.id;
    dbconn.query("select * from person where id = "+ id,(err, result) => {
        if (err) throw err;
        response.json(result);
    });
});

app.post("/emp", (request, response) => {
    let obj = request.body;
    console.log(obj);
    dbconn.query('insert into person values('+mysql.escape(obj.Id)+','+mysql.escape(obj.Name)+','+mysql.escape(obj.Age)+');', (err, result) => {
        if (err) throw err;
        response.json(result);
    });
});

app.put('/emp/:id/:name', (req, resp) => {
    let id = req.params.id;
    let name = req.params.name;
    dbconn.query('update person set Name ='+mysql.escape(name)+'where id = '+mysql.escape(id), (err, result) => {
        if(err) throw err;
        resp.json(result);
    });
});

app.delete('/emp/:id', (res, resp) => {
    let id = res.params.id;
    dbconn.query('delete from person where id = '+mysql.escape(id), (err, result) => {
        if (err) throw err;
        resp.json(result);
    });
});