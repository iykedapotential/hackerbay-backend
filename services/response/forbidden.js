'use strict'
var log = require('../logger')

module.exports = function (data, message) {
  log.warn('Sending forbidden response: ', data, message || 'forbidden')

  if (data !== undefined && data !== null) {
    if (Object.keys(data).length === 0 && JSON.stringify(data) === JSON.stringify({})) {
      data = data.toString()
    }
  }

  if (data) {
    this.status(403).json({status: 'error', data: data, message: message || 'forbidden'})
  } else {
    this.status(403).json({status: 'error', message: message || 'forbidden'})
  }
}
