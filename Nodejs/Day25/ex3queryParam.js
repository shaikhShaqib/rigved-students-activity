let express = require('express');
let parser = require('body-parser');

let app = express();

app.listen(2000, () => console.log('The surver is running at port 2000'));

app.post('/user/:id', (request,response) => {
    let queryData = request.query;
    let id = request.params.id;
    let age = queryData.age;
    response.send(`${id} is the path parameter and ${age} is a query parameter`);
});

app.post('/', (request,response) => {
    response.send('Hello World!');
});
