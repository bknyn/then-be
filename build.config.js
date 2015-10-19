'use strict';

module.exports = {
  buildDir: './dist',
  html: './source/index.html',
  cssManifest: './source/scss/main.scss',
  scssAllFiles: './source/scss/**/*.scss',
  jsAllFiles: [
    './source/js/vendor/jquery-2.1.4.min.js',
    './source/js/then-be.js'
  ],
  jsOutput: 'main.js'
};
