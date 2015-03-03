'use strict';

var gulp = require('gulp');
var header = require('gulp-header');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var del = require('del');
var runSequence = require('run-sequence');
var webpack = require('webpack');
var objectAssign = require('object-assign');

var webpackConfig = require('./webpack.production.config.js');
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

gulp.task('clean', function (cb) {
  del([PATH.DIST], cb);
});

gulp.task('webpack:unmin', function (cb) {
  var unminConfig = objectAssign({}, webpackConfig);
  unminConfig.output.filename = pkg.name + '.js';
  unminConfig.output.path = PATH.DIST;
  return webpack(unminConfig, function (err) {
    console.log(err);
    cb();
  });
});

gulp.task('webpack:min', function (cb) {
  var min = objectAssign({}, webpackConfig);
  min.output.filename = pkg.name + '.min.js';
  min.output.path = PATH.DIST;
  min.plugins = min.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]);
  return webpack(min, function (err) {
    console.log(err);
    cb();
  });
});

gulp.task('sass:unmin', function () {
  return gulp.src(PATH.SOURCE + 'styles/*.scss')
    .pipe(sass())
    .pipe(concatCss(pkg.name + '.css'))
    .pipe(gulp.dest(PATH.DIST));
});

gulp.task('sass:min', function () {
  return gulp.src(PATH.DIST + '*.css')
    .pipe(concatCss(pkg.name + '.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(PATH.DIST));
});

gulp.task('banner', function () {
  return gulp.src(PATH.DIST + '*')
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
    'webpack:unmin',
    'webpack:min',
    'sass:unmin',
    'sass:min',
    'banner',
    cb);
});

gulp.task('default', ['build']);
