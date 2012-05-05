var express = require('express');
var app = express.createServer(express['static'](__dirname));
app.register('.html', require('sizlate'));

var utf8ify = require('./public/utf8ify.js');

app.use(express.bodyParser()); // required to allow us to read POST data.
app.use(express['static'](__dirname + '/public')); // set static directory.


var render = function(text, res) {
	var selectors = {};
	if(text) {
		selectors = {
			'textarea': text,
			'#result textarea': { value : utf8ify.parse( text , true ) }
		} ;
	} else {
		selectors = { '#result': { className: 'hidden' } };
	}
	res.render(__dirname+'/views/index.html', { selectors: selectors });
};

app.get('/', function(req, res){
	render(req.query['text'], res);
});

app.post('/', function(req, res){
	render(req.body.text, res);
});
	

app.listen(8001);
