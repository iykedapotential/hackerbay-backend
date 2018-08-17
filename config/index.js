'use strict'
var dotenv = require('dotenv')
dotenv.load({path: '.env'})
module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  bugsnagKey: process.env.BUGSNAG_KEY,
  cloudinary_name: process.env.CLOUDINARY_NAME,
  cloudinary_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_secret: process.env.CLOUDINARY_API_SECRET,
  jwt_secret: process.env.JWT_SECRET

}
