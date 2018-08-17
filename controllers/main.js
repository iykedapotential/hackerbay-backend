'use strict'

var service = require('../services/main')
var q = require('q')
// var debug = require('debug')('user')

module.exports = {
  login: function (req, res) {
    let username = req.body.username
    let password = req.body.password
    let data = {
      username: username,
      password: password
    }

    q.fcall(() => {
      return service.auth(data)
    }).then((response) => {
      res.ok(response)
    }).catch((error) => {
      res.serverError(error)
    })
  },

  patchJson: function (req, res) {
    let data = req.body
    q.fcall(() => {
      return service.patchJson(data)
    }).then((patcheddoc) => {
      // return the information including token as JSON
      res.ok(patcheddoc)
    }).catch((error) => {
      res.serverError(error)
    })
  },

  imageThumbnail: function (req, res) {
    let img = req.body.image_url
    q.fcall(() => {
      return service.generateThumb(img)
    }).then((thumbnailObj) => {
      // return the generated image thumbnail
      res.ok(thumbnailObj)
    }).catch((error) => {
      res.serverError(error)
    })
  }
}
