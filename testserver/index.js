var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

	res.send("working....");
});
router.get('/api/test', function(req, res) {

	res.send("hello testing....");
});
router.get('/api/test2', function(req, res) {

	res.send("hello testing22....");
});
module.exports = router;