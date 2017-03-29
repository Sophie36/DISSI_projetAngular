var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var fs = require('fs');

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
    
    app.use(express.static(__dirname + "/public"));

    var server = app.listen(8090, function () {
        var host = server.address().address;
        var port = server.address().port;

        console.log('Example app listening at http://%s:%s', host, port);
    });

    app.get('/', function (req,res) {
        res.sendFile('/public/index.html',{root:__dirname});
    });

    app.get('/getArticles', bodyParser.json(), function (req, res) {
        var query = 'SELECT * FROM ARTICLES';
        connection.query(query, function (err, result) {
            if (err) {
                console.error('error running query', err);
            }
            res.statusCode = 200;
            res.send(result);
        });
    });
    
    app.get('/getCategorie', bodyParser.json(), function (req, res) {
        var query = 'SELECT * FROM CATEGORIE';
        connection.query(query, function (err, result) {
            if (err) {
                console.error('error running query', err);
            }
            res.statusCode = 200;
            res.send(result);
        });
    });
    
    app.post('/getArticlesByCategory', bodyParser.json(), function (req,res) {
        
        /*console.log("req= ");
        console.log(req);
        console.log("res= ");
        console.log(res);*/
        
        var query = 'SELECT * FROM Articles WHERE idCategory = '+ req.body.categorie;
        connection.query(query, function (err, result) {
            if (err) {
                console.error('error running query', err);
            }
            res.statusCode = 200;
            res.send(result);
        });
    });
    
    app.post('/getArticlesByDate', bodyParser.json(), function (req,res) {
        var query = 'SELECT * FROM Articles WHERE date = '+ req.body.articles;
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
    
    app.post('/addArticle', bodyParser.json(), function (req, res) {
        console.log("reg = ");
        console.log(req.body);
        /*console.log("res = ");
        console.log(res);*/
        var query = 'INSERT INTO Articles (titre,header,body,idCategory) VALUES (\'' + req.body.titre + '\',\'' + req.body.header + '\', \'' + req.body.body + '\', \'' + req.body.idCategory + '\'' + ')';
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
