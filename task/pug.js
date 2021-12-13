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
const webpHtml = require('gulp-webp-html');

// const guleFileInclude = require('gulp-file-include');
// const htmlmin = require('gulp-htmlmin');
// const size = require('gulp-size');
const pugs = require('gulp-pug');


//Обработка pug
const pug = () => {
    return src(path.pug.src)

    //плагины
    // .pipe(guleFileInclude())
    .pipe(plumber({
        errorHandler: notify.onError( error => ({
            title: "Pug",
            message: error.message
        }))
    }))
    .pipe(pugs(app.pug))
    .pipe(webpHtml())    
    .pipe(dest(path.pug.dest))
    // .pipe(browserSync.stream());

}


module.exports = pug;