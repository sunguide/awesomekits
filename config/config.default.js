'use strict';

module.exports = appInfo => {
  const config = {};

  config.keys = appInfo.name + '_1496902118915_8798';

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
          '.tpl': 'nunjucks',
      },
  };
  config.news = {
      pageSize: 30,
      serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  config.mongoose = {
      url: 'mongodb://127.0.0.1/demo_stash',
      options: {}
  };
//
  return config;
};
