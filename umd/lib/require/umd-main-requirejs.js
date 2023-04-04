require.config({
    baseUrl: "./",
    paths: {
        umd: "./umd-module"
    }
});

require(["umd"], function(umdModule) {
    console.log('require.js方式引用了umd模块', umdModule)
});