var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');

gulp.task('styles', function() {
  var options = {};
  gulp.src('./src/assets/sass/main.scss')
    .pipe(sass(options).on('error', sass.logError))
    .pipe(minifycss({keepSpecialComments: 0}))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('default', function() {
  gulp.watch('./src/assets/sass/*.scss', ['styles']);
});
