let express = require('express');
let fs = require('fs');
PORT = 3002;

let app = express();

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));

let data = fs.readFileSync('emp.json');

app.get('/', (request,response) =>{
    response.send(data);
});
