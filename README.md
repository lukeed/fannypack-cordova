# fannypack-cordova
Official Fannypack task for tunneling a project through Cordova.

## Installation
`npm install fannypack-cordova --save-dev`

## Usage
```javascript
// gulpfile.js

var Fannypack = require('fannypack')

require('fannypack-cordova')

Fannypack.Config.cordova = {
  // full path, from root. read all built files
  src: 'build',
  // cordova options
  options: {
    dir: 'cordova', // dest
    id: 'com.roostapp.www', // The reverse domain-style identifier of the project.
    name: 'Roost'
  },
  //
  plugins: [],
  //
  xml: []
}

Fannypack.init()
```
