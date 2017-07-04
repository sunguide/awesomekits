
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
            yield this.ctx.render('home/about.tpl');
        }
        * link(){
            yield this.ctx.render('home/link.tpl');
        }
    }
    return PublicController;
};