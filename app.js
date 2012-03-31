var express = require('express');
var app = express.createServer(express.static(__dirname));
app.register('.html', require('sizlate'));
var fs = require('fs');

var utf8ify = require('./public/utf8ify.js');

app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	if(req.query['text']){
	    res.render(__dirname+'/views/index.html', { selectors: { textarea : { value : utf8ify.parse( req.query['text'] , true ) } } });
	}else {
	    res.render(__dirname+'/views/index.html', { selectors: {} } );
	}
});

app.listen(8001);
