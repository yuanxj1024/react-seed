var gulp = require('gulp');
var rimraf = require('rimraf');

var path = {
  release: [
    './src/plugins/**/*.*',
    './src/**/img/*.*'
  ]
};

gulp.task('clean', function () {
  rimraf.sync('./dist');
});
gulp.task('clean:img', function () {
  rimraf.sync('./dist/img');
});

// 发布
gulp.task('release', ['clean'], function () {
  return gulp.src(path.release, {
    base: './src/'
  }).pipe(gulp.dest('./dist/'));
});
