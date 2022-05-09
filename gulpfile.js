
    //Default Gulp Task
    exports.default = series(scssTask, JsTask, browserSyncServe, watchTask);

    // Build Gulp Task
    exports.build = series(scssTask, jsTask);