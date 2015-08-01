'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    server = require('gulp-express');

gulp.task('sass', function () {
  gulp.src('./app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(['./app/scss/**/*.scss'], ['sass', 'html']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    port: 2000,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});

gulp.task('html:watch', function () {
  gulp.watch(['./app/**/*.html'], ['html']);
});

gulp.task('server', function () {
  server.run(['app/proxy.js']);
  gulp.watch(['app/proxy.js'], server.run);
});

gulp.task('default', ['sass', 'sass:watch', 'connect', 'html:watch', 'server']);
