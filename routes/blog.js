var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('pages/blog');
});

module.exports = router;
