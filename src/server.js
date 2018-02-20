var express = require('express');
var path = require('path');

var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index.css', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.css'));
});

app.use('/static', express.static('dist'));

app.listen(3000, () => console.log('WebApp listening on port 3000!'));
