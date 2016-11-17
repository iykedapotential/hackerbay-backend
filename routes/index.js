var express = require('express');
var router = express.Router();
var me = require('../package.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.ok({name: me.name, version: me.version});
});

module.exports = router;
