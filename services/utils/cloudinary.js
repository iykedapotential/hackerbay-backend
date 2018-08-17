'use strict'

var cloudinary = require('cloudinary')
var config = require('../../config')

module.exports = async function (imagepath) {
  cloudinary.config({
    cloud_name: config.cloudinary_name,
    api_key: config.cloudinary_key,
    api_secret: config.cloudinary_secret
  })
  var defaults = {
    width: 50,
    height: 50,
    crop: 'thumb',
    gravity: 'faces'
  }

  // download image and transform
  var uploadedImage = await cloudinary.uploader.upload(imagepath)
  return cloudinary.url(uploadedImage.public_id, defaults)
}
