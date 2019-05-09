var express = require('express');
var router = express.Router();
var ctrlEntries = require('../controllers/entries');

// entry routes
router.get('/entries', ctrlEntries.entriesList);
router.post('/entries', ctrlEntries.entriesCreate);
router.get('/entries/:entryid', ctrlEntries.entriesReadOne);
router.put('/entries/:entryid', ctrlEntries.entriesUpdateOne);
router.delete('/entries/:entryid', ctrlEntries.entriesDeleteOne);

module.exports = router;