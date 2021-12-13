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
const babel = require('gulp-babel');
const webpack = require('webpack-stream');










// const guleFileInclude = require('gulp-file-include');
// const htmlmin = require('gulp-htmlmin');
// const pugs = require('gulp-pug');


//Обработка JavaScript
const js = () => {
    return src(path.js.src, {sourcemaps: app.isDev})

    //плагины
    // .pipe(guleFileInclude())
    .pipe(plumber({
        errorHandler: notify.onError( error => ({
            title: "JavaScript",
            message: error.message
        }))
    }))
    
    .pipe(babel())
    .pipe(webpack(app.webpack))
    .pipe(dest(path.js.dest, {sourcemaps: app.isDev}))

}


module.exports = js;