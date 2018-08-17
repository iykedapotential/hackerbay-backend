'use strict'

var config = require('../../config')
var q = require('q')
var jwt = require('jsonwebtoken')
var jsonpatch = require('jsonpatch')
var generateThumb = require('../../services/utils/cloudinary')
var log = require('../../services/logger')

module.exports = {

  /**
    * User Authentication
    * 
    * @param data Information about the user.
    * @param data.username The username of the user.
    * @param data.password The password of the user.
   */
  auth: function (data) {
    var d = q.defer()
    q.fcall(() => {
      return jwt.sign({ username: data.username, password: data.password }, config.jwt_secret, {
        expiresIn: 86400 // expires in 24 hours
      })
    }).then((token) => {
      // return the information including token as JSON
      let response = {
        username: data.username,
        api_token: token
      }
      d.resolve(response)
    }).catch((error) => {
      log.error(error)
      d.reject(error)
    })

    return d.promise
  },

  /**
    * Patch JSON
    * 
    * @param data Request from the user.
    * @param data.json The input json object.
    * @param data.patch The json patch to be used.
   */
  patchJson: function (data) {
    var d = q.defer()
    q.fcall(() => {
      if (typeof data.json !== 'object' || typeof data.patch !== 'object') {
        throw new Error('Invalid JSON request object')
      }
      return jsonpatch.apply_patch(data.json, data.patch)
    }).then((patcheddoc) => {
      // return the information including token as JSON
      d.resolve(patcheddoc)
    }).catch((error) => {
      log.error(error)
      d.reject(error)
    })

    return d.promise
  },

  /**
    * Generate Image Thumbnail
    * 
    * @param {string} imgpath  - A public image URL.
   */
  generateThumb: function (imgpath) {
    var d = q.defer()
    q.fcall(() => {
      return generateThumb(imgpath)
    }).then((resp) => {
      d.resolve(resp)
    }).catch((error) => {
      log.error(error)
      d.reject(error)
    })

    return d.promise
  }

}
