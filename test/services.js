/* global describe it */
/* eslint-disable no-unused-expressions */
'use strict'

var chai = require('chai')
chai.expect
chai.should()

var service = require('../services/main')

describe('#Core Service', function () {
  it('should have the required properties ', function (done) {
    service.should.have.property('auth')
    service.should.have.property('patchJson')
    service.should.have.property('generateThumb')
    done()
  })

  describe('## auth() ', function () {
    it('should authenticate a mock user request', function (done) {
      let data = {
        username: 'Test',
        password: 'Password'
      }
      service.auth(data)
        .then(function (resp) {
          resp.should.be.a('object')
          done()
        })
        .catch(function (err) {
          done(new Error(err))
        })
    })
  })

  describe('## patchJson() ', function () {
    it('should apply a json patch to a request', function (done) {
      let data = {
        patch: [
          { 'op': 'replace', 'path': '/baz', 'value': 'boo' },
          { 'op': 'add', 'path': '/hello', 'value': ['world'] },
          { 'op': 'remove', 'path': '/foo' }
        ],
        json: {
          'baz': 'qux',
          'foo': 'bar'
        }
      }
      service.patchJson(data)
        .then(function (resp) {
          resp.should.be.a('object')
          done()
        })
        .catch(function (err) {
          done(new Error(err))
        })
    })
  })

  describe('## generateThumb() ', function () {
    it('should generate a thumbnail image', function (done) {
      let imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Scarlett_Johansson_Césars_2014.jpg'
      service.generateThumb(imageUrl)
        .then(function (resp) {
          resp.should.be.a('string')
          done()
        })
        .catch(function (err) {
          done(new Error(err))
        })
    })
  })
})
