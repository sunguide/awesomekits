'use strict';

module.exports = app => {
    class indexController extends app.Controller {
        * index() {


            let categories = this.ctx.service.awesome.getCategories();
            // this.ctx.body = readme;

            let data = {
                categories:categories
            };
            yield this.ctx.render('index/index.tpl', data);
        }
        * editors(){
            let categories = this.ctx.service.awesome.getCategories();

            let data = {
                categories:categories
            };
            yield this.ctx.render('index/editor.tpl', data);
        }
        * awesome(){
        // this.ctx.body = "fuck ";
        // render a template, path relate to `app/view`
            let kit = this.ctx.params.kit;
            // let readmeResult = yield this.ctx.curl('https://raw.githubusercontent.com/sindresorhus/awesome-nodejs/master/readme.md');

            // let readme = readmeResult.data.toString();

            let readme = '';
            try{
                readme = this.ctx.service.readme.getReadme(kit);
            }catch (e){
                throw e;
                // this.ctx.status = 404;
                // return;
            }
            const markdown = require('markdown').markdown;

            readme = markdown.toHTML(readme);
            let data = {
            // nav:JSON.parse(nav),
                readme:readme
            };
            this.ctx.set('content-type','text/html');
            yield this.ctx.render('awesome/detail.tpl', data,{
                autoescape: false,
            });
        }
    }
    return indexController;
};
