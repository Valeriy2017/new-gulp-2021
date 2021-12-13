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
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');
const gulpIf = require('gulp-if');


//Обработка Images
const img = () => {
    return src(path.img.src)

    //плагины
    .pipe(plumber({
        errorHandler: notify.onError( error => ({
            title: "Images",
            message: error.message
        }))
    }))
    .pipe(newer(path.img.dest))
    .pipe(webp())
    .pipe(dest(path.img.dest))
    .pipe(src(path.img.src))
    .pipe(newer(path.img.dest))
    .pipe(gulpIf(app.isDev, imagemin(app.imagemin)))
    .pipe(dest(path.img.dest))

}


module.exports = img;