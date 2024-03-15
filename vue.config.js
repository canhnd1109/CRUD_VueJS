const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
    transpileDependencies: true,
});

module.exports = {
    lintOnSave: true,
    configureWebpack: {
        output: {
            path: __dirname + '/cool-build',
        },
    },
};

module.exports = {
    lintOnSave: true,
    outputDir: path.resolve(__dirname, '../priv/static'),
};
