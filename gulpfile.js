const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const spritesmith = require('gulp.spritesmith');
const rimraf = require('rimraf');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

// ------------Server-----------

gulp.task('server', function () {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "build"
        }
    });


    gulp.watch('build/**/*').on('change', browserSync.reload);
});

// --------------pug compile----------

gulp.task('template:compile', function buildHTML() {
    return gulp.src('source/template/index.pug')
        .pipe(pug({
            pretty: true
        }))

        .pipe(gulp.dest('build'))
});

// --------------sass_compile------------

gulp.task('sass', function () {
    return gulp.src('source/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(concat('main.scss'))
        .pipe(rename('main.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/css'));
});

// ------------sprite_mix-----------

gulp.task('sprite', function () {
    var spriteData = gulp.src('source/images/icons/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        imgPath: '../images/sprite.png',
        cssName: 'sprite.scss'
    }));
    return spriteData.img.pipe(gulp.dest('build/images/'));
    return spriteData.css.pipe(gulp.dest('source/styles/global/'));
    cb();
});

// -----------Delete-----------------

gulp.task('clear', function del(cb) {
    return rimraf('build', cb);
});

// -------------copy fonts-------------

gulp.task('copy:fonts', function () {
    return gulp.src('./source/fonts/**/*.*')
        .pipe(gulp.dest('build/fonts'));
});

// --------------copy images-------------

gulp.task('copy:images', function () {
    return gulp.src('./source/images/**/*.*')
        .pipe(gulp.dest('build/images'));
});

//-----------------copy JS----------------

gulp.task('copy:js', function(){
    return gulp.src('./source/js/*.*')
        .pipe(gulp.dest('build/js'));
});

// ----------------copy--------------------

gulp.task('copy', gulp.parallel('copy:fonts', 'copy:images', 'copy:js'));

// ---------------gulp watch---------------

gulp.task('watch', function () {
    gulp.watch('source/template/**/*.pug', gulp.series('template:compile'));
    gulp.watch('source/styles/**/*.scss', gulp.series('sass'));
    gulp.watch('source/js/*.js', gulp.series('copy:js'));
});

gulp.task('default', gulp.series(
    'clear',
    gulp.parallel('template:compile', 'sass', 'sprite', 'copy'),
    gulp.parallel('watch', 'server')
));