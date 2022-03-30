let mongoose = require('mongoose');

// database url must also have database name.
let dbUrl = "mongodb://localhost:27017/mydb";

// connecting to mongodb.
mongoose.connect(dbUrl);

// get the reference of the database instance
let db = mongoose.connection;

// check for connection status
db.once('open', () => {
    console.log('connected to mongodb');
    let doc = {_id: 11, name: "Zaheer", age: 35};

    // create the schema for the user document.
    let userSchema = mongoose.Schema({_id: Number, name: String, age: Number});

    // defining the model taht specifies schema for the collection user.
    let userModel = mongoose.model('user', userSchema, 'user');
    let user = new userModel(doc);
    user.save((err, result) => {
        if(!err) {
            console.log(`Stored ${result.name}`);
        } else {
            console.log(err);
        }
    });
});

