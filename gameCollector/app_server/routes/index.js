var express = require('express');
var router = express.Router();
var ctrlEntries = require('../controllers/entries');
var ctrlOthers = require('../controllers/others');

// Entry pages //
router.get('/', ctrlOthers.angularApp);
router.get('/addentry', ctrlEntries.addEntry);
router.get('/entry', ctrlEntries.entryInfo);
router.get('/entry/editDetails/', ctrlEntries.editEntry);

// Other/Misc. pages //
router.get('/about', ctrlOthers.about);

module.exports = router;
