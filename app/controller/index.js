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
        let kit = this.ctx.params.kit;
        // let readmeResult = yield this.ctx.curl('https://raw.githubusercontent.com/sindresorhus/awesome-nodejs/master/readme.md');

        // let readme = readmeResult.data.toString();

        let readme = "";
        let nav = null;
        try{
            // nav = yield this.ctx.service.readme.getReadmeNav(kit);
            readme = yield this.ctx.service.readme.getReadme(kit);
        }catch (e){
            this.ctx.status = 404;
            return;
        }
        readme = markdown.toHTML(readme);
        let data = {
            // nav:JSON.parse(nav),
            readme:readme
        };
        this.ctx.set('content-type',"text/html");
        yield this.ctx.render('awesome/detail.tpl', data,{
            autoescape: false,
        });
    }
  }
  return indexController;
};
