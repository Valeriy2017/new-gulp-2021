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

const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const sass = require('gulp-sass')(require("sass"));
const sassGlob = require('gulp-sass-glob');
const webpCss = require('gulp-webp-css');









// const guleFileInclude = require('gulp-file-include');
// const htmlmin = require('gulp-htmlmin');
// const pugs = require('gulp-pug');


//Обработка scss
const scss = () => {
    return src(path.scss.src, {sourcemaps: app.isDev})

    //плагины
    // .pipe(guleFileInclude())
    .pipe(plumber({
        errorHandler: notify.onError( error => ({
            title: "Scss",
            message: error.message
        }))
    }))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: "main.css"}))
    .pipe(dest(path.scss.dest, {sourcemaps: app.isDev}))
    .pipe(rename({suffix: ".min"}))
    .pipe(csso())
    .pipe(size({ title: "main.min.css"}))
    .pipe(dest(path.scss.dest, {sourcemaps: app.isDev}))
    // .pipe(browserSync.stream());

}


module.exports = scss;