'use strict';

module.exports = app => {
  class indexController extends app.Controller {
    * index() {


        let categories = yield this.ctx.service.awesome.getCategories();
        // this.ctx.body = readme;

        let data = {
            categories:categories
        };
        console.log(data);
        yield this.ctx.render('index/index.tpl', data);
    }
    * awesome(){
        // this.ctx.body = "fuck ";
        // render a template, path relate to `app/view`
        const markdown = new require("markdown").markdown;
        // let readmeResult = yield this.ctx.curl('https://raw.githubusercontent.com/sindresorhus/awesome-nodejs/master/readme.md');

        // let readme = readmeResult.data.toString();

        let readme = yield this.ctx.service.readme.getReadme('nodejs_en.md');
        // this.ctx.body = readme;

        readme = markdown.toHTML(readme);
        let data = {
            html:"<h3>ddddd</h3>",
            readme:readme
        };

        yield this.ctx.render('awesome/detail.tpl', data,{
            autoescape: false,

        });
    }
  }
  return indexController;
};
