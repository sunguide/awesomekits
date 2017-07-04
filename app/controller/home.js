'use strict';
module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
        // this.ctx.body = "fuck ";
        const data = { name: 'egg' };
        // render a template, path relate to `app/view`

        let markdown = require( "markdown" ).markdown;
        console.log( markdown.toHTML( "Hello *World*!" ) );

        yield this.ctx.render('home/index.tpl', data);
    }
  }
  return HomeController;
};
