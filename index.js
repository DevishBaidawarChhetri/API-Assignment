var express = require('express');

var app = express();

// Request, Response
function callBack(req, res){
    console.log('In registration');
    res.status(200);
    var x = {name: "Softwarica", location: "Dillibazaar"};
    res.json(x);
    // res.send('test');
}
app.get('/registration',  callBack);
app.get('/booking',
    function(req, res, next){
        console.log('In first middleware do something');
        next();
    },
    function(req, res, next){
        console.log('In second middleware // send something');
        res.status(200);
        next();
    },

);
app.listen(3090);