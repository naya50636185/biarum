var gulp = require('gulp');
var jade = require('gulp-jade');
var prettify = require('gulp-html-prettify');
var rimraf = require('rimraf');
var sass = require('gulp-sass');
gulp.task('clean-html', function (cb) {
    rimraf('./app/html', cb);
});
gulp.task('jade-compile', function () {
    gulp.src('./app/templates/**/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('./app/html/'));
});
gulp.task('sass', function () {
    return gulp.src(['./app/sass/**/*.sass', './app/sass/**/*.scss'])
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('watch', function () {
    gulp.src('./app/templates/**/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('./app/html/'));
    gulp.watch('./app/templates/**/*.jade', ['jade-compile']);
    gulp.watch(['./app/sass/**/*.sass', './app/sass/**/*.scss'], ['sass']);
});

gulp.task('build', function () {
    gulp.src('./app/templates/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('./assets/html/'));
    gulp.src(['./app/sass/**/*.sass', './app/sass/**/*.scss'])
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});