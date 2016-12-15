var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css');

gulp.task('styles', function () {
    gulp.src('./assets/scss/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(minifycss({keepSpecialComments: 0}))
      .pipe(gulp.dest('./assets/css'));
});

gulp.task('default', ['styles'], function () {
    gulp.watch('./assets/scss/*.scss', ['styles']);
});
