'use strict';
 
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    shell = require('gulp-shell'),
		concat = require('gulp-concat'),
		coffee = require('gulp-coffee'),
		babel = require('gulp-babel'),
    plumber = require('gulp-plumber'),
		sourcemaps = require('gulp-sourcemaps');
 
gulp.task('sass', function () {
  gulp.src('./frontend/stylesheets/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'})
      .on('error', sass.logError)
      .on('error', function(){
        gutil.log(gutil.colors.red('（ ﾟДﾟ） Aaargh, something bad happened !'));
      })
    )
    .pipe(concat("main.css"))
    .pipe(gulp.dest('./app/assets/stylesheets'))
    .on('end', function() { 
      gutil.log(gutil.colors.magenta('ʕ•ᴥ•ʔ ') + gutil.colors.green(' CSS generated !'))
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
  return gulp.src("./frontend/javascripts/**/*.es6")
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./app/assets/javascripts/"))
    .on('end', function() { 
      gutil.log(gutil.colors.magenta('༼ つ ◕_◕ ༽つ  Yeah !') + gutil.colors.green(' JS correctly generated !'));
    });
});