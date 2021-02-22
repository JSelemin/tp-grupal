const { static } = require('express');
var express = require('express');
var app = express();

app.listen(3000, function () {
 console.log('Aplicación corriendo en puerto 3000');
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile('/public/flag.png', { root: __dirname });
});

app.get('/a', function(req, res){
    res.send('Hola!');
});

app.get('/b', function(req, res){
    res.send('Chau!');
});
