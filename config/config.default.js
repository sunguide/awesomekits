'use strict';

module.exports = appInfo => {
    const config = {};

    config.keys = appInfo.name + '_1496902118915_8798';

    //middlewares
    config.middleware = [ 'errorHandler' ];

    /**
     * some description
     * @member Config#test
     * @property {String} key - some description
     */
    config.test = {
        key: appInfo.name + '_123456',
    };

    // add your config here
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks'
        },
    };
    config.nunjucks = {
        autoescape: false,
    };
    config.i18n = {
        defaultLocale: 'zh-CN',
    };

    config.news = {
        pageSize: 30,
        serverUrl: 'https://hacker-news.firebaseio.com/v0',
    };

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

