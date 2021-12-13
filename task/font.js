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
const fonter = require('gulp-fonter');
const ttf2Woff2 = require('gulp-ttf2Woff2');








//Обработка Fonts
const font = () => {
    return src(path.font.src)

    //плагины
    .pipe(plumber({
        errorHandler: notify.onError( error => ({
            title: "Fonts",
            message: error.message
        }))
    }))
    .pipe(newer(path.font.dest))
    .pipe(fonter(app.fonter))
    .pipe(dest(path.font.dest))
    .pipe(ttf2Woff2())
    .pipe(dest(path.font.dest))

}


module.exports = font;