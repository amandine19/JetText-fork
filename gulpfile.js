'use strict';
 
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    shell = require('gulp-shell'),
		concat = require('gulp-concat'),
		coffee = require('gulp-coffee');
 
gulp.task('sass', function () {
  gulp.src('./frontend/stylesheets/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./vendor/assets/stylesheets'))
    .on('end', function() { 
      gutil.log(gutil.colors.green('~> css correctly generated !'));
    });
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./frontend/stylesheets/**/*.scss', ['sass']);
});

gulp.task('coffee', function() {
  gulp.src('./frontend/javascripts/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
		.pipe(concat('all.js'))
    .pipe(gulp.dest('./app/assets/javascripts/'));
});