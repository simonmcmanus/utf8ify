var express = require('express');
var app = express.createServer(express.static(__dirname));
app.register('.html', require('sizlate'));
var fs = require('fs');


var utf8ify = require('./public/utf8ify.js');


app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render(__dirname+'/views/index.html', { selectors: {}});
});

app.post('/', function(req, res){
    res.render(__dirname+'/views/index.html', { 
		selectors: {
			textarea: {
				value : utf8ify.parse(req.body.text)
			}
		}
	});
});

app.listen(8001);
