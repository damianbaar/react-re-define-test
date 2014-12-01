# Rendering using React on both sides (node and client) with simple interaction

## To run

  * `npm install` -> `node server` -> `http://localhost:3000`

### What is inside

```
  var includeExternal = require('re-define-include-external')
    , reactify = require('re-define-react')
    , adapter = require('browserify-transform-adapter')
    , envify = require('envify')

  redefine
    .fromFile( './components.js'
             , { 'project-name': 'components'
               , wrapper: 'browserify' 
               , autoInsertFolder: false
               , development: true
               }
             , [ includeExternal({})
               , reactify({}) 
               , adapter(envify)
               ]
             )
    .pipe(res)
```

### Passing ENV vars
`NODE_ENV=development node server`
