var express = require('express');
var app = express.createServer(express.static(__dirname));
app.register('.html', require('sizlate'));  
var fs = require('fs');

var utf8ify = require('./public/utf8ify.js');

app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));


var render = function(text, res) {
 	if(text) {
		var selectors = { 
			selectors:  {
			 'textarea': text,
			 '#result textarea': { value : utf8ify.parse( text , true ) }
			}
		} ;
	} else {
		var selectors = { selectors: { '#result': { className: 'hidden' } } };
	}
	res.render(__dirname+'/views/index.html', selectors);
}

app.get('/', function(req, res){
	render(req.query['text'], res);
});

app.post('/', function(req, res){
	render(req.body.text, res);
});
	

app.listen(8001);
