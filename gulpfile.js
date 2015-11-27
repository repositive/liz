var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');

gulp.task('styles', function() {
  gulp.src('./src/assets/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifycss({keepSpecialComments: 0}))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('default', ['styles'], function() {
  gulp.watch('./src/assets/sass/*.scss', ['styles']);
});
