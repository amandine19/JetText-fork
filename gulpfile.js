'use strict';
 
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    shell = require('gulp-shell'),
		concat = require('gulp-concat'),
		coffee = require('gulp-coffee'),
		babel = require('gulp-babel'),
		sourcemaps = require('gulp-sourcemaps'),
    browserify = require('gulp-browserify'),
    traceur = require('gulp-traceur');
 
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
		.pipe(concat('app.js'))
    .pipe(gulp.dest('./app/assets/javascripts/'));
});

gulp.task("default", function () {
  return gulp.src([traceur.RUNTIME_PATH, "./frontend/javascripts/**/*.es6"])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./app/assets/javascripts/"));
});