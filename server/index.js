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

app.get('/api/houses', function(req,res,next) {
    req.app.get('db').get_all_houses().then( houses => {
        res.status(200).send(houses)
    })
})

app.post('/api/houses', function(req,res,next){
    req.app.get('db').add_houses([req.body.name, req.body.address, req.body.city, req.body.state, req.body.zipcode])
    .then
        (response => {
            res.status(200).send(response)
        })
    })

    app.delete('/api/houses/:id', function(req, res, next) {
        req.app.get('db').delete_house(req.params.id)
            .then( response => {
                res.status(200).send(response)
            })
    })


const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`We're listening on ${port} `)
});

