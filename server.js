var React = require('react')
  , express = require('express')
  , path = require('path')
  , fs = require('fs')
  , app = express()
  , through = require('through2')
  , handlebars = require('handlebars')
  , redefine = require('re-define')
  , includeExternal = require('re-define-include-external')

require('node-jsx').install()

var components = require('./components')

app.get('/', function(req, res) {
  fs.createReadStream('./index.html')
    .pipe(through(function(chunk, enc, next) {
      var tmpl = handlebars.compile(chunk.toString())

      this.push(tmpl({ dom: renderHelloWorld("server") }))
      next()
    }))
    .pipe(res)
})

app.get('/bundle.js', function(req, res){
  redefine
    .fromFile( './components.js'
             , { 'project-name': 'components'
               , wrapper: 'browserify' }
             , [ includeExternal({}) ]
             )
    .pipe(res)
})

function renderHelloWorld(name) {
  var component = React.createFactory(components.hello)
    , props = { name: name }

  return React.renderToString(component(props))
}

app.listen(3000)

console.log('listen on 3000')
