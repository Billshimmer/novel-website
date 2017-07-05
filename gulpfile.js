const gulp = require('gulp')
const rename = require('gulp-rename')
// const shell = require('gulp-shell')
// const concat = require('gulp-concat')
// const merge = require('merge-stream')
// const streamqueue = require('streamqueue')
// const run_sequence = require('run-sequence')
const ftp = require('gulp-ftp')


gulp.task('ftp', function () {
  gulp.src('./dist/**/*')
    .pipe(ftp({
      host: '162.243.139.165',
      port: 21,
      user: 'shimmer',
      pass: 'shimmer',
      remotePath: "/"
    }))
})
