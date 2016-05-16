var path = require('path'),
	fs = require('fs');

function filter(directory, ext, callback) {
	fs.readdir(directory, function done(err, list) {
	if(err)
		callback(err)
	else { 
	list.forEach(function(item) {
		if(path.extname(item) == ('.' + ext))
			callback(null, item)
		})
	}
  	})
}

//module.exports.filter = filter;

module.exports = {
  filter: filter,
  test: 'Test string'
};