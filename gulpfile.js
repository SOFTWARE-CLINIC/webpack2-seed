var gulp = require('gulp');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var del = require('del');

gulp.task('clean', function () {
  return del([
    'dist'  
  ]);
});

gulp.task('default', function () {
  return gulp.src('app/index.js')
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('dist/'));
});

