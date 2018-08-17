var express = require('express')
var router = express.Router()
var me = require('../package.json')
var middleware = require('../services/middleware')
var controllers = require('../controllers')
var validator = require('../services/validator')

router.use(middleware.except(['/', '/login', '/swagger'], middleware.authJwt))

/* GET home page. */
router.get('/', function (req, res, next) {
  res.ok({name: me.name, version: me.version})
})

/* GET documentation page. */
router.get('/swagger', function (req, res, next) {
  next()
}, controllers.swagger.find)

/* POST to authenticate a user and return a json web token. */
router.post('/login', function (req, res, next) {
  req._required = ['username', 'password']
  next()
}, validator, controllers.main.login)

/* POST to patch a json object. */
router.post('/patch/json', function (req, res, next) {
  req._required = []
  next()
}, validator, controllers.main.patchJson)

/* POST to return an image thumbnail. */
router.post('/image/thumbnail', function (req, res, next) {
  req._required = ['image_url']
  next()
}, validator, controllers.main.imageThumbnail)

module.exports = router
