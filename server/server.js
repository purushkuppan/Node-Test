const express = require('express');

var app = express();

app.get('/', (req, res) => {
    var user ={
        name : 'Purush',
        age : 25
    }
    res.status(200).send(user);

})

app.get('/user', (req, res) => {
    var user =[{
        name : 'Purush',
        age : 30
    }, {
        name : 'giri',
        age : 29
    }, {
        name : 'suba',
        age : 35
    }]
    res.status(200).send(user);

})

app.listen(3000)

module.exports.app =app;