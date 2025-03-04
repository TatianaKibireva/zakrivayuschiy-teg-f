const gulp = require('gulp');
const concat = require('gulp-concat-css');
const plumber = require('gulp-plumber');
const del = require('del');
const browserSync = require('browser-sync').create();

function html() {
  return gulp.src('src/**/*.html')
         .pipe(plumber())
                 .pipe(gulp.dest('dist/'))
}

function css() {
  return gulp.src('src/styles/**/*.css')
        .pipe(plumber())
        .pipe(concat('bundle.css'))
                .pipe(gulp.dest('dist/'))
}

function images() {
  return gulp.src('src/images/**/*.{jpg,png,svg,gif,ico,webp,avif}')
            .pipe(gulp.dest('dist/images'))
}

function fonts() {
  return gulp.src('src/fonts/**/*.{css,woff2,woff}')
            .pipe(gulp.dest('dist/fonts'))
}

function scripts() {
  return gulp.src('src/scripts/**/*.js')
            .pipe(gulp.dest('dist/scripts'))
}

function clean() {
  return del('dist');
}

function svg() {
  return gulp.src('src/svg/**/*.svg')
            .pipe(gulp.dest('dist/svg'))
}

const build = gulp.series(clean, gulp.parallel(html, css, images, fonts, scripts, svg));

exports.svg = svg;
exports.scripts = scripts;
exports.fonts = fonts;
exports.images = images;
exports.css = css;
exports.html = html;
exports.clean = clean;
exports.build = build; 
