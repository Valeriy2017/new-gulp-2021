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
const guleFileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
const webpHtml = require('gulp-webp-html');

// const pugs = require('gulp-pug');


//Обработка HTML
const html = () => {
    return src(path.html.src)

    //плагины
    .pipe(guleFileInclude())
    .pipe(plumber({
        errorHandler: notify.onError( error => ({
            title: "HTML",
            message: error.message
        }))
    }))
    .pipe(webpHtml())
    .pipe(size({title: "До сжатия"}))
    .pipe(htmlmin(app.htmlmin))
    .pipe(size({title: "После сжатия"}))
    .pipe(dest(path.html.dest))
    // .pipe(browserSync.stream());

};


module.exports = html;