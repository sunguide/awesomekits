
/**
 * Created by sunguide on 2017/6/9.
 */
module.exports = app => {
    class PublicController extends app.Controller {
        * 404() {
            yield this.ctx.render('public/404.html');
        }

        * 500() {
            yield this.ctx.render('public/500.html');
        }

        * about(){
            yield this.ctx.render('public/about.tpl');
        }
        * link(){
            yield this.ctx.render('public/link.tpl');
        }
        * update(){
            const filePath = 'data/markdown/update.md';
            const rf = require('fs');
            const readme = rf.readFileSync(filePath,'utf-8');
            let data = {
                update:this.ctx.helper.markdownToHTML(readme)
            };
            yield this.ctx.render('public/update.tpl',data);
        }
    }
    return PublicController;
};