/**
 * Author:      sunguide
 * Date:        17/7/1
 * Email:       sunguide@qq.com
 */

'use strict';
module.exports = {

    // 获取Readme.md
    * getReadme(url) {
        return yield this.curl('https://registry.npm.taobao.org/egg/latest', {});
    }

};
