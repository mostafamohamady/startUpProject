var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var uglify = require('gulp-uglify');




/* Html Task*/
/*
gulp.task('html', function () {
        pipe(livereload());
});
 */


/* Css Task */
gulp.task('css', function () {
    return gulp.src('project/css/*.scss')

        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(prefix('last 2 versions'))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(livereload());
});


/* Js Task */
gulp.task('js', function () {
    return gulp.src('project/js/*.js')

        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
        .pipe(livereload());
});

/* Watch Task */
gulp.task('watch', function () {
    require('./server.js');
    livereload.listen({ start: true });
    // gulp.watch('dist/*.html', gulp.series('html'));
    gulp.watch('project/css/**/*.scss', gulp.series('css'));
    // gulp.watch('project/js/*.js', gulp.series('js'));

});