'use strict';

module.exports = appInfo => {
    const config = {};

    config.keys = appInfo.name + '_1496902118915_8798';

    //middlewares
    config.middleware = [ 'errorHandler' ];

    config.mongoose = {
        url: 'mongodb://127.0.0.1/awesome_hub',
        options: {}
    };

    //pages
    config.notfound = {
        pageUrl: '/404.html',
    };

    return config;
};

