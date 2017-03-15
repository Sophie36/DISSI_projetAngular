var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

//Connection to database
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'blog'
});

connection.connect(function (err) {
    if (err) {
        return console.error('could not connect to mysql', err);
    }
    console.log('connection ok');


    var app = express();

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    var server = app.listen(8090, function () {
        var host = server.address().address;
        var port = server.address().port;

        console.log('Example app listening at http://%s:%s', host, port);
    });

    app.get('/path', bodyParser.json(), function (req, res) {
        var query = 'query';
        connection.query(query, function (err, result) {
            if (err) {
                console.error('error running query', err);
            }
            res.statusCode = 200;
            res.send(result);
        });
    });
    
    app.post('/path', bodyParser.json(), function (req, res) {
        var query = 'query';
        connection.query(query, function (err, result) {
            if (err) {
                console.error('error running query', err);
            }
            res.statusCode = 200;
            res.send(result);
        });
    });
});