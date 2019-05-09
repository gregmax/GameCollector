var request = require('request');
var apiOptions = {
    server: "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = "https://https://quiet-taiga-73869.herokuapp.com/";
}

var _showError = function (req, res, status) {
    var title, content;
    if (status === 404) {
        title = "404, page not found";
        content = "Uh oh,  looks like we can't find this page. Sorry.";
    } else {
        title = status + ", something's gone wrong";
        content = "Something, somewhere, has gone just a little bit wrong.";
    }
    res.status(status);
    res.render('generic-text', {
        title: title,
        content: content
    });
};

var renderHomepage = function(req, res, responseBody) {
    res.render('locations-list', {
        title: 'Game Collector',
        pageHeader: {
            title: 'Game Collector',
            strapline: 'Track and maintain your game collection'
        }
    });
};

// GET homepage //
module.exports.homelist = function(req, res) {
	renderHomepage(req, res);
};

var getEntryInfo = function(req, res, callback) {
	var requestOptions, path;
	path = "/api/entries/" + req.params.entryid;
    requestOptions = {
		url: apiOptions.server + path,
		method: "GET",
		json: {}
	};
	request(requestOptions, function(err, response, body) {
        if (response.statusCode === 200) {
            renderHomepage(req, res, body)
		} else {
			_showError(req, res, response.statusCode);
            }
        }
    );
};

// GET entry //
module.exports.entryInfo = function(req, res) {
	res.render('entry-info', { title: 'Entry info' });
};

// GET 'add entry' //
module.exports.addEntry = function(req, res) {
	res.render('add-entry', { title: 'Add entry' });
};

// GET 'edit entry' //
module.exports.editEntry = function(req, res) {
	res.render('edit-entry', { title: 'Edit entry' });
};