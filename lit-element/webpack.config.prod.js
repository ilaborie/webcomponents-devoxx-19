const devConfig = require('./webpack.config');

module.exports = Object.assign({}, devConfig, {
    watch: false,
    mode: "production"
});