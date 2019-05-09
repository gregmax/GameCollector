var mongoose = require('mongoose');

var collectionSchema = new mongoose.Schema({
	addedOn: {
		type: Date,
		"default": Date.now
	}
});

var entrySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	platform: String,
	condition: [String],
	collectionInfo: [collectionSchema]
});

mongoose.model('Entry', entrySchema, 'entries');