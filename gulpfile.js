var gulp = require('gulp');
var react = require('gulp-react');
var nodemon = require('gulp-nodemon');

gulp.task('build', function () {
  gulp.src('src/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('public/dist'))
});

gulp.task('watch', function () {
  gulp.watch('src/*.jsx', ['build']);
});

gulp.task('serve', function () {
  nodemon({
    script: 'server.js'
  });
});

gulp.task('default', ['serve', 'watch']);