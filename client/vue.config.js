module.exports = {
    parallel: false,
    transpileDependencies: ['vuetify'],
    publicPath: './',
    chainWebpack: config => {
        // ios で reload 時に更新内容が反映されないため
        config.plugins.delete('preload');
        config.plugins.delete('fork-ts-checker');
    },
};
