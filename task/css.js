const { src, dest} = require("gulp"); 
// watch, series, parallel
// const browserSync = require("browser-sync").create();
// const del = require('del');

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');



//подключение плагина
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const cssimport = require('gulp-cssimport');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const webpCss = require('gulp-webp-css');






// const guleFileInclude = require('gulp-file-include');
// const htmlmin = require('gulp-htmlmin');
// const pugs = require('gulp-pug');


//Обработка css
const css = () => {
    return src(path.css.src, {sourcemaps: app.isDev})

    //плагины
    // .pipe(guleFileInclude())
    .pipe(plumber({
        errorHandler: notify.onError( error => ({
            title: "Css",
            message: error.message
        }))
    }))
    .pipe(concat('main.css'))
    .pipe(cssimport())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: "main.css"}))
    .pipe(dest(path.css.dest, {sourcemaps: app.isDev}))
    .pipe(rename({suffix: ".min"}))
    .pipe(csso())
    .pipe(size({ title: "main.min.css"}))
    .pipe(dest(path.css.dest, {sourcemaps: app.isDev}))
    // .pipe(browserSync.stream());

}


module.exports = css;