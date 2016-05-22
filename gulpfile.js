var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();


gulp.task('build', shell.task(['jekyll build --watch']));
gulp.task('jekyll', shell.task(['jekyll serve']));

gulp.task('serve', function () {
    browserSync.init({server: {baseDir: '_site/'}, notify: false});
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});



gulp.task('default', ['build', 'serve']);