var gulp = require('gulp');
var jshint = require('gulp-jshint');

var EXPRESS_PORT = 4000;
var EXPRESS_ROOT = __dirname + "/public";
var LIVERELOAD_PORT = 35729;

function startExpress() {

  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')());
  app.use(express.static(EXPRESS_ROOT));
  app.listen(EXPRESS_PORT);
}

var lr;
function startLivereload() {

  lr = require('tiny-lr')();
  lr.listen(LIVERELOAD_PORT);
}

function notifyLivereload(event) {

  // `gulp.watch()` events provide an absolute path
  // so we need to make it relative to the server root
  var fileName = require('path').relative(EXPRESS_ROOT, event.path);

  lr.changed({
    body: {
      files: [fileName]
    }
  });
}


gulp.task('jshint', function() {
  gulp.src('./private/scripts/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('default', function () {

  startExpress();
  startLivereload();

  gulp.watch('public/*.html', notifyLivereload);
  gulp.watch('public/scripts/**/*.js', notifyLivereload);
  gulp.watch('public/styles/*.css', notifyLivereload);

});
