let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin');

gulp.task('clean', async function(){
    del.sync('dist')
});

gulp.task('scss', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions']
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('css', function () {
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/animate.css/animate.css',
    ])
        .pipe(concat('_libs.scss'))
        .pipe(gulp.dest('app/scss'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('script', function () {
    return gulp.src('app/js/*.js')
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('js', function () {
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/wowjs/dist/wow.js',
        'node_modules/jquery-mask-plugin/dist/jquery.mask.min.js',
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('img', function () {
    return gulp.src('app/img/**/*.{png,jpg,svg,webp}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
})

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "dist/"
        }
    });
});

gulp.task('fonts', function () {
    return gulp.src('app/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'))
})

gulp.task('watch', function () {
    gulp.watch('app/**/**/*.scss', gulp.parallel('scss'))
    gulp.watch('app/**/**/*.html', gulp.parallel('html'))
    gulp.watch('app/**/**/*.js', gulp.parallel('script'))
    gulp.watch("app/img/**/*.{png,jpg,svg,webp}", gulp.parallel('img'));
});

gulp.task('default', gulp.parallel('clean', 'html', 'css', 'scss', 'img', 'js', 'script', 'fonts', 'browser-sync', 'watch'));