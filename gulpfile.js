"use strict";

var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('compileSass', function () {
	gulp.src("styles.scss")
		.pipe(sass())
		.pipe(gulp.dest('css'));
})