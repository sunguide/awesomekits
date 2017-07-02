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
    * test(){
        let readme = yield this.ctx.curl('https://raw.githubusercontent.com/sindresorhus/awesome/master/readme.md');

        let markdown = require("markdown").markdown;
        var striptags = require('striptags');

        this.ctx.body = striptags(markdown.toHTML(readme.data.toString()));//markdown.toString( readme );
console.log(helper);

    }
  }
  return HomeController;
};
