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
        }
        /**
         * get readme file
         * @param {String} file
         * @return {Promise} file info
         */
        * getReadme(file) {
            const filePath = 'data/markdown/' + file;
            const rf = require("fs");
            return rf.readFileSync(filePath,"utf-8",);
        }
    }

    return readme;
};