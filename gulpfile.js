'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var header = require('gulp-header');
var shell = require('gulp-shell');
var del = require('del');
var runSequence = require('run-sequence');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var pkg = require('./package.json');

var BANNER = [
  '/**',
  ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)',
  ' * Copyright <%= new Date().getFullYear() %> <%= pkg.author %>',
  ' * Licensed under <%= pkg.license %>',
  ' */',
  ''
].join('\n');

var PATH = {
  SOURCE: './src/',
  TEST: './__tests__/',
  DIST: './dist/'
};

var handleErr = function (err) {
  console.error('ERROR' + (err.fileName ? ' in ' + err.fileName : ':'));
  console.error(err.message);
  this.end();
};

gulp.task('clean', function (cb) {
  del([PATH.DIST], cb);
});

gulp.task('browserify', function () {
  var b = browserify();
  b.transform('reactify', {
    es6: true
  });
  b.add(PATH.SOURCE + 'index.js');
  b.ignore('react');
  b.external(['react', 'react/addons']);

  return b.bundle()
    .pipe(source(pkg.name + '.js'))
    .pipe(gulp.dest(PATH.DIST));
});

gulp.task('uglify', function () {
  return gulp.src(PATH.DIST + '*.js')
    .pipe(uglify()).on('error', handleErr)
    .pipe(rename({
      basename: pkg.name,
      suffix: '.min'
    }))
    .pipe(gulp.dest(PATH.DIST));
});

gulp.task('banner', function () {
  return gulp.src(PATH.DIST + '*.js')
    .pipe(header(BANNER, {
      pkg: pkg
    }))
    .pipe(gulp.dest(PATH.DIST));
});

gulp.task('watch', function () {
  gulp.watch(PATH.TEST + '*', ['test']);
});

gulp.task('test', shell.task('node --harmony ./node_modules/.bin/jest'));
gulp.task('serve', shell.task('node server.js'));

gulp.task('build', ['clean'], function (cb) {
  runSequence(
    'test',
    'browserify',
    'uglify',
    'banner',
    cb);
});

gulp.task('default', ['build']);
