const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config()
console.log(controller)

const app = express();

app.use(bodyParser.json());

massive( process.env.CONNECTION_STRING ).then( db =>{
    app.set('db', db)
}).catch(err => console.log(err))

const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`We're listening on ${port} `)
});

