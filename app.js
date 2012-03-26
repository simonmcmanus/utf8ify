var express = require('express');
var app = express.createServer(express.static(__dirname));
app.register('.html', require('sizlate'));
var fs = require('fs');


var utf8ify = require('./utf8ify.js');


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


app.get('/utf8ify.js', function(req, res){
	fs.readFile(__dirname+'/utf8ify.js', 'utf8', function(error, file) {
		res.send(file);
	});
//    res.download(__dirname+'/utf8ify.js');
});

app.get('/public/:file', function(req, res){
    res.download(__dirname+'/public/'+req.params.file);
});


app.listen(3000);
