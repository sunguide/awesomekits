'use strict';

module.exports = app => {
  app.get('/', 'index.index');
  app.get('/languages', 'index.index');
  app.get('/front-end-development', 'index.index');
  app.get('/back-end-development', 'index.index');
  app.get('/big-data', 'index.index');


  app.get('/home', 'home.index');
  app.get('/awesome-:kit', 'index.awesome');
  app.get('/about', 'public.about');
  app.get('/update', 'public.update');
  app.get('/link', 'public.link');

  //api
  app.get('/api', 'api.index');
  app.get('/api/idCard', 'api.idCard');
  app.get('/api/ip', 'api.ip');
  app.get('/api/tinyurl', 'api.tinyURL');
  // app.get('/news', app.controller.news.list);
  // app.get('/news/item/:id', app.controller.news.detail);
  // app.get('/news/user/:id', app.controller.news.user);
  app.get('/api/home/list', 'api.home.index');
  app.get('/api/repos/list', 'api.repos.list');
  app.get('/api/repos/create', 'api.repos.create');
  app.get('/404.html','public.404');
  app.get('/500.html','public.500');
};
