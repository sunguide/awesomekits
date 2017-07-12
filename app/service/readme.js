/**
 * Created by Administrator on 2017/7/3.
 */

module.exports = app => {
    /**
     * fetch local readme files
     */
    class readme extends app.Service {
        constructor(ctx) {
            super(ctx);
            this.ctx = ctx;
        }
        /**
         * get readme file
         * @param {String} file
         * @return {Promise} file info
         */
        getReadme(file) {
            let locale = this.ctx.locale;
            let filePath = '';
            if(locale && locale.indexOf('en') > -1) {
                filePath = 'data/markdown/' + file + '_en.md';
            }else{
                filePath = 'data/markdown/' + file + '_zh.md';
            }
            const  rf = require('fs');
            return rf.readFileSync(filePath,'utf-8');
        }
    }

    return readme;
};