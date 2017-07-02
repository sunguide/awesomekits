'use strict';

module.exports = app => {
  class indexController extends app.Controller {
    * index() {
        // this.ctx.body = "fuck ";
        // render a template, path relate to `app/view`
        const markdown = new require("markdown").markdown;
        let readmeResult = yield this.ctx.curl('https://raw.githubusercontent.com/sindresorhus/awesome-nodejs/master/readme.md');

        let readme = readmeResult.data.toString();

        // this.ctx.body = readme;

        readme = markdown.toHTML(readme);
        let data = {
            html:"<h3>ddddd</h3>",
            readme:readme
        };

        yield this.ctx.render('index/index.tpl', data,{
            autoescape: false,

        });
    }
  }
  return indexController;
};
