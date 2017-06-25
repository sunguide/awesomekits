'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/api', 'api.index');
  app.get('/api/idCard', 'api.idCard');
  app.get('/api/ip', 'api.ip');
  app.get('/api/tinyurl', 'api.tinyURL');
  app.get('/news', app.controller.news.list);
  app.get('/news/item/:id', app.controller.news.detail);
  app.get('/news/user/:id', app.controller.news.user);
  app.get('/api/home/list', 'api.home.index');
  app.get('/api/repos/list', 'api.repos.list');
  app.get('/api/repos/create', 'api.repos.create');



};
