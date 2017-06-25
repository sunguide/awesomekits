'use strict';

module.exports = app => {
  class indexController extends app.Controller {
    * index() {
        // this.ctx.body = "fuck ";
        const data = { name: 'egg' };
        // render a template, path relate to `app/view`
        yield this.ctx.render('index/index.tpl', data);
    }
  }
  return indexController;
};
