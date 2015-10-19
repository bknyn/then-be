var pkg = require('./package'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;


gulp.task('styles', function() {
  return gulp.src( './source/scss/main.scss' )
    .pipe(sass({ style: 'expanded' }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('markup', function() {
  gulp.src('./source/index.html')
    .pipe(gulp.dest('./dist'));
});


gulp.task('build', function() {
  gulp.start('markup', 'styles');
});

gulp.task('server', ['build'], function() {
  browserSync({
    port: 8000,
    notify: false,
    logPrefix: pkg.name,
    server: ['dist']
  });

  gulp.watch('./source/index.html', ['markup', reload]);
  gulp.watch('./source/scss/**/*', ['styles', reload]);
});


gulp.task('default', function() {
  console.log("package.json: ");
  console.log(pkg);
  console.log("--------------------------------------------------------------");
  console.log("Try running 'gulp server' to start the development environment");
  console.log("--------------------------------------------------------------");
});
