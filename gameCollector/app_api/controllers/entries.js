var mongoose = require('mongoose');
var Ent = mongoose.model('Entry');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

// work on this
module.exports.entriesList = function (req, res) {
	Ent
    .find()
    .sort('-name')
    .select('name platform publisher condition _id')
    .exec(function(err, entry) {
      if (err) {
        sendJSONresponse(res, 404, err);
      } else {
        sendJSONresponse(res, 200, entry);
      }
    });
};

module.exports.entriesCreate = function (req, res) {
	Ent.create({
    name: req.body.name,
    platform: req.body.platform,
    publisher: req.body.publisher,
    developer: req.body.developer,
    genre: req.body.genre,
    collectionInfo: [{
      condition: req.body.condition.split(",")
    }],
    img: [{
      img: req.body.img
    }]
  }, function(err, entry) {
    if (err) {
      sendJSONresponse(res, 400, err);
    } else {
      sendJSONresponse(res, 201, entry);
    }
  });
};

module.exports.entriesReadOne = function(req, res) {
  if (req.params && req.params.entryid) {
    Ent
      .findById(req.params.entryid)
      .exec(function(err, entry) {
        if (!entry) {
          sendJSONresponse(res, 404, {
            "message": "Entryid not found"
          });
          return;
        } else if (err) {
          sendJSONresponse(res, 404, err);
          return;
        }
        sendJSONresponse(res, 200, entry);
      });
} else {
  sendJSONresponse(res, 404, {
    "message": "No entryid in request"
    });
  }
};

module.exports.entriesUpdateOne = function (req, res) {
	if (!req.params.entryid) {
    sendJSONresponse(res, 404, {
      "message": "Not found, entryid is required"
    });
    return;
  }
  Ent
  .findById(req.params.entryid)
  .exec(
    function(err, entry) {
      if (!entry) {
        sendJSONresponse(res, 404, {
          "message": "entryid not found"
        });
        return;
      } else if (err) {
        sendJSONresponse(res, 400, err);
        return;
      }
    entry.name = req.body.name;
    platform = req.body.platform;
    publisher = req.body.publisher;
    developer = req.body.developer;
    genre = req.body.genre;
    collectionInfo = [{
      condition: req.body.condition.split(",")
    }],
    img = [{
      img: req.body.img
    }];
    entry.save(function(err, entry) {
      if (err) {
        sendJSONresponse(res, 404, err);
      } else {
        sendJSONresponse(res, 200, location);
      }
    });
    }
  );
};

module.exports.entriesDeleteOne = function (req, res) {
	var entryid = req.params.entryid;
  if (entryid) {
    Ent
      .findByIdAndRemove(entryid)
      .exec(
        function(err, entry) {
          if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          console.log("Entry id " + entryid + " deleted");
          sendJSONresponse(res, 204, null);
        }
      );
  } else {
    sendJSONresponse(res, 404, {
      "message": "No entryid"
    });
  }
};