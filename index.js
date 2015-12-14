var Fannypack = require('fannypack')
var gulp      = require('gulp')
var $         = Fannypack.$

var del       = require('del')
var create    = require('gulp-cordova-create')
var plugin    = require('gulp-cordova-plugin')
var access    = require('gulp-cordova-access')
var xml       = require('gulp-cordova-xml')

var android   = require('gulp-cordova-build-android');
var ios       = require('gulp-cordova-build-ios');
// var bb       = require('gulp-cordova-build-bb10');

Fannypack.Tasks['cordova'] = function(config){
  if(!config.cordova) return

  var paths = {
    src: config.cordova.src,
    dest: config.cordova.options.dir
  }

  gulp.task('cordova:android', function () {
    return gulp.src(paths.src)
    .pipe( create(config.options) )
    .pipe( xml(config.xml) )
    .pipe( plugin(config.plugins) )
    .pipe( android() );
  })

  gulp.task('cordova', ['cordova:android']);
};
