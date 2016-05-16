var express = require('express');
var app = express();
var crypto = require('crypto');
var fs = require('fs');

app.get('/books', function(req, res){
	var file = process.argv[3];
	fs.readFile(file, function(err, data){
		if(err) return res.sendStatus(500)
		try {
			books = JSON.parse(data)
		}
		catch(err) {
			res.sendStatus(500)
		}
		res.json(books)
	})
})

app.listen(process.argv[2] || 3000);