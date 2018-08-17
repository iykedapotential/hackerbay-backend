var YAML = require('yamljs')
var path = require('path')

// Load yaml file using YAML.load
var yamlPath = path.join(process.cwd(), 'swagger', 'swagger.yaml')
var swaggerObj = YAML.load(yamlPath)

module.exports = {
  find: function (req, res) {
    res.json(swaggerObj)
  }
}
