const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
    isProd: isProd,
    isDev: this.isDev,
    
    htmlmin: {
        collapseWhitespace: isProd
    },

    pug: {
        pretty: isDev,
        data: {
            news: require('../data/news.json')
        }
    },

    webpack: {
        mode: isProd ? "development" : "development"
    },

    imagemin: {
        verbose: true
    },

    fonter: {
        formats: ["ttf", "eot", "woff", "svg"]
    }
}