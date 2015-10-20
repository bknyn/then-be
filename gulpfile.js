var config = require('./build.config.js'),
    pkg = require('./package'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    deploy = require('gulp-gh-pages');


gulp.task('markup', function() {
  gulp.src(config.html)
    .pipe(gulp.dest(config.buildDir));
});

gulp.task('styles', function() {
  return gulp.src(config.cssManifest)
    .pipe(sass({ style: 'expanded' }))
    .pipe(gulp.dest(config.buildDir + '/css'));
});

gulp.task('js', function() {
  return gulp.src(config.jsAllFiles)
    .pipe(concat(config.jsOutput))
    .pipe(gulp.dest(config.buildDir + '/js'));
});

gulp.task('images', function() {
  gulp.src('./source/img/*')
    .pipe(gulp.dest(config.buildDir + '/img'));
});


gulp.task('build', function() {
  gulp.start('markup', 'styles', 'js', 'images');
});

gulp.task('server', ['build'], function() {
  browserSync({
    port: 8000,
    notify: false,
    logPrefix: pkg.name,
    server: ['dist']
  });

  gulp.watch(config.html, ['markup', reload]);
  gulp.watch(config.scssAllFiles, ['styles', reload]);
  gulp.watch(config.jsAllFiles, ['js', reload]);
  gulp.watch(config.allImages, ['images', reload])
});

gulp.task('deploy', ['build'], function() {
  return gulp.src('./dist/**/*')
    .pipe(deploy());
});


gulp.task('default', function() {
  console.log("package.json: ");
  console.log(pkg);
  console.log("--------------------------------------------------------------");
  console.log("Try running 'gulp server' to start the development environment");
  console.log("--------------------------------------------------------------");
});
