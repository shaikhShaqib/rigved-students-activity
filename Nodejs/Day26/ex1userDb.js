// impot=rting all the necessary libraries
let express = require('express');
let parser = require('body-parser');
let cors = require('cors');
let mongoClient = require('mongodb').MongoClient;

// referncing top level express module
let app = express();

// database url 
let dbUrl = "mongodb://localhost:27017";

// express server port
let PORT = 3001;

// start the express server
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

// Middlewrare to parse request & enable cors
app.use(cors());
app.use(parser.json());

// on Get: /users you must be able to get all the user object

app.get("/users", (request, response) => {
    mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client) => {
       if (error) throw error;
       let db = client.db("mydb");
       let cursor = db.collection("user").find();
       let users = [];
        
       //cursor.forEach(callback1, callback2)
       cursor.forEach((doc, err) => {
           if (err) throw err;
           users.push(doc);
       }, () => {
           response.json(users);
           client.close();
       });
    });
});

// on GET:/users/:id to get a single document based on id
app.get("/users/:id", (request, response) => {
    // reding the path parameter and converting id to int.
    let Id = parseInt(request.params.id); 
    mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client) => {
        if (error) throw error;
        let db = client.db('mydb');
        db.collection('user').findOne({_id: Id})
        .then((doc) => {
            if(doc != null) {
                response.json(doc);
            } else {
                response.status(404).json({"messsage": `sorry ${Id} doesn't exits`});
            }
            client.close();
        });
    });
});

// on POST:/users you must able to store the user object
app.post("/users", (request,response) => {
    let userDoc = request.body;
    mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client) => {
        if (error) throw error;
        // connect to the database instance
        let db = client.db("mydb");
        // use the collection user to insert the document
        db.collection('user').insertOne(userDoc, (err, result) => {
            if (err) {
                // 409 status code is for conflict
                response.status(409).json({"message": `User with an id ${userDoc._id} exists`});
            }
            response.status(201).json(result);
            client.close();
        });
    });
});

// on DELETE:/users/:id use to delete the document based on the id.
app.delete("/users/:id", (request, response) => {
    let id = parseInt(request.params.id);
    mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client) => {
        if (error) throw error;
        let db = client.db("mydb");
        db.collection("user").deleteOne({_id: id})
        .then ((doc) => {
            response.json(doc);
            client.close();
        });
    });
});

// on PUT:/users/:id/:age use to update the age from id.
app.put("/users/:id/:age", (request, response) => {
    let id = parseInt(request.params.id);
    let newAge = parseInt(request.params.age);
    mongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client) => {
        if (error) throw error;
        let db = client.db("mydb");
        db.collection('user').updateOne({_id: id}, {$set: {age : newAge}})
        .then((doc) => {
            response.json(doc);
            client.close();
        });
    });
});