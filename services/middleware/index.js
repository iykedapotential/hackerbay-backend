'use strict'

var jwt = require('jsonwebtoken')
var config = require('../../config')

module.exports = {
  authJwt: function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.access_token || req.query.access_token || req.headers['x-access-token']

    // decode token
    if (token) {
      // verifies secret and checks exp
      jwt.verify(token, config.jwt_secret, function (err, decoded) {
        if (err) {
          return res.forbidden({ success: false, data: err, message: 'Failed to authenticate token.' })
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded
          next()
        }
      })
    } else {
      // if there is no token
      // return an error
      return res.forbidden({
        success: false,
        message: 'No token provided.'
      })
    }
  },

  except: function (path, middleware) {
    return function (req, res, next) {
      var n = path.indexOf(req.path)
      if (n in path) {
        next()
        return null
      } else {
        middleware(req, res, next)
        return null
      }
    }
  }
}
