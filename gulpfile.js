var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('build', function () {
  gulp.src('src/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('public/dist'))
});

gulp.task('watch', function () {
  gulp.watch('src/*.jsx', ['build']);
});