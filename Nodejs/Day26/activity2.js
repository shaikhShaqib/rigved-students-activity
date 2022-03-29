let express = require('express');
let parser = require('body-parser');
let cors = require('cors');
let mongoClient = require('mongodb').MongoClient;

let app = express();

let PORT = 3002;

app.listen(PORT, () => console.log(`Surver is runnit at PORT ${PORT}`));

let dbUrl = "mongodb://localhost:27017";

app.use(cors());
app.use(parser.json());

app.get("/emp", (request, response) => {
    mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error,client) => {
        if (error) throw error;
        let db = client.db('mydb');
        let cursor = db.collection('emp').find();
        let employee = [];
        cursor.forEach((doc, err) => {
            if (err) throw err;
            employee.push(doc);
        }, () => {
            response.json(employee);
            client.close();
        });
    });
});

app.get("/emp/:id", (request, response) => {
    let id = parseInt(request.params.id);
    mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client) => {
        if (error) throw error;
        let db = client.db('mydb');
        db.collection('emp').findOne({_id: id})
        .then((doc) => {
            if(doc != null) {
                response.json(doc);
            } else {
                response.status(404).json({"message": `The emp id ${id} doesn't exits`});
            }
            client.close();
        });
    });
});

app.post("/emp", (request, response) => {
    let empDoc = request.body;
    mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client) => {
        if (error) throw error;
        let db = client.db('mydb');
        db.collection('emp').insertOne(empDoc, (err, result) => {
            if (err) {
                response.status(409).json({"message": `Emp with id ${empDoc._id} exits`})
            }
            response.status(201).json(result);
            client.close();
        });
    });
});

app.put("/emp/:id/:city", (request, response) => {
    let id = parseInt(request.params.id);    
    // let sal = parseInt(request.params.salary);    
    let addCity = request.params.city;
    mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error,client) => {
        if(error) throw error;
        let db = client.db('mydb');
        db.collection('emp').updateOne({_id: id}, {$set: {"address.city": addCity}})
        .then((doc) => {
            response.json(doc);
            client.close();
        });
    });
});

app.delete('/emp/:id', (request, response) => {
    let id = parseInt(request.params.id);
    mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client) => {
        if(error) throw error;
        let db = client.db('mydb');
        db.collection('emp').deleteOne({_id: id})
        .then ((doc) => {
            response.json(doc);
            client.close();
        });
    });
});